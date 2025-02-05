import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router/routes.js";
import VueJsonp from "vue-jsonp";
import { reject } from "lodash";

Vue.use(VueJsonp);
Vue.use(Vuex);

const vuex = new Vuex.Store({
    state: {
        token: localStorage.getItem("access_token") || null,
        user: {},
        bookStatus: ["new", "old"],
        langs: ["frensh", "arabic", "english"],
        base: "http://localhost:8000/api"
    },
    mutations: {
        // login stuff
        retreiveToken(state, token) {
            state.token = token;
        },
        destroyToken(state) {
            state.token = null;
        },
        // --------------------------------------
        getUser(state, user) {
            state.user = user;
        }
    },
    getters: {
        //login
        logedIn(state) {
            return state.token != null;
        },
        bookStatus(state) {
            return state.bookStatus;
        },
        langs(state) {
            return state.langs;
        },
        getBaseUrl(state) {
            return state.base;
        },
        user(state) {
            return state.user;
        }
    },
    actions: {
        //login
        retreiveToken(context, user) {
            return new Promise((resolve, reject) => {
                axios
                    .post("/api/login", {
                        email: user.email,
                        password: user.password
                    })
                    .then(response => {
                        const token = response.data.access_token;
                        localStorage.setItem("access_token", token);
                        context.commit("retreiveToken", token);
                        context.commit("getUser", response.data.user);
                        console.log(response.data.user);

                        resolve(response);
                    })
                    .catch(error => {
                        // if (response.status == 401) {
                        // 	localStorage.removeItem('access_token')
                        // }
                        console.log(error);
                        reject(error);
                    });
            });
        },
        register(context, user) {
            return new Promise((resolve, reject) => {
                axios
                    .post("api/register", user)
                    .then(resp => {
                        resolve(resp);
                    })
                    .catch(err => {
                        reject(err);
                    });
            });
        },
        destroyToken(context) {
            if (context.getters.logedIn) {
                const config = {
                    headers: {
                        Authorization: "Bearer " + context.state.token
                    }
                };
                return new Promise((resolve, reject) => {
                    axios
                        .get("/api/logout", config)
                        .then(response => {
                            localStorage.removeItem("access_token");
                            context.commit("destroyToken");
                            resolve(response);
                        })
                        .catch(error => {
                            localStorage.removeItem("access_token");
                            context.commit("destroyToken");
                            console.error(error);
                            reject(error);
                        });
                });
            }
        },
        getProfileInfo(context) {
            // axios.defaults.headers.common['Authrization'] = 'Bearer '+context.state.token;
            if (context.getters.logedIn) {
                const config = {
                    headers: {
                        Authorization: "Bearer " + context.state.token
                    }
                };
                return new Promise((resolve, reject) => {
                    axios
                        .get(context.state.base + "/profile", config)
                        .then(resp => {
                            resolve(resp);
                        })
                        .catch(err => {
                            if (err.response.status == 401) {
                                localStorage.removeItem("access_token");
                                router.push("/login");
                            }
                            // console.error(err);
                            reject(err);
                        });
                });
            }
        },
        updateProfile(context, user) {
            // axios.defaults.headers.common['Authrization'] = 'Bearer '+context.state.token;
            if (context.getters.logedIn) {
                const config = {
                    headers: {
                        Authorization: "Bearer " + context.state.token,
                        "content-type": "multipart/form-data"
                    }
                };
                return new Promise((resolve, reject) => {
                    axios
                        .post(context.state.base + "/update", user, config)
                        .then(resp => {
                            context.commit("getUser", resp.data.user);
                            console.log(resp.data);

                            resolve(resp);
                        })
                        .catch(err => {
                            console.error(err);
                            if (err.response.status == 401) {
                                localStorage.removeItem("access_token");
                                router.push("/login");
                            }
                            reject(err);
                        });
                });
            }
        },
        fetchCities(context) {
            return new Promise((resolve, reject) => {
                axios
                    .get(context.state.base + "/city")
                    .then(res => {
                        resolve(res);
                    })
                    .catch(err => {
                        if (err.response.status == 401) {
                            localStorage.removeItem("access_token");
                            router.push("/login");
                        }
                        reject(err);
                    });
            });
        },
        getCurrentUser(context) {
            if (context.getters.logedIn) {
                const config = {
                    headers: {
                        Authorization: "Bearer " + context.state.token
                    }
                };
                return new Promise((resolve, reject) => {
                    axios
                        .get(context.state.base + "/user", config)
                        .then(res => {
                            context.commit("getUser", res.data.user);
                            resolve(res);
                        })
                        .catch(err => {
                            if (err.response.status == 401) {
                                localStorage.removeItem("access_token");
                                router.push("/login");
                            }
                            reject(err);
                        });
                });
            }
        },
        getCategories(context) {
            // if (context.getters.logedIn) {
            //     const config = {
            //         headers: {
            //             Authorization: "Bearer " + context.state.token
            //         }
            //     };
            return new Promise((resolve, reject) => {
                axios
                    .get(context.state.base + "/cats")
                    .then(resp => {
                        // console.log(resp);
                        resolve(resp);
                    })
                    .catch(err => {
                        if (err.response.status == 401) {
                            localStorage.removeItem("access_token");
                            router.push("/login");
                        }
                        reject(err);
                    });
            });
            // }
        },
        getInfoFromGoogleApi(context, title) {
            return new Promise((resolve, reject) => {
                Vue.jsonp(
                    "https://www.googleapis.com/books/v1/volumes?maxResults=5&q=" +
                        title
                )
                    .then(json => {
                        resolve(json);
                    })
                    .catch(err => {
                        reject(err);
                    });
            });
        },
        addNewBook(context, book) {
            if (context.getters.logedIn) {
                const config = {
                    headers: {
                        Authorization: "Bearer " + context.state.token,
                        "content-type": "multipart/form-data"
                    }
                };
                return new Promise((resolve, reject) => {
                    axios
                        .post(context.state.base + "/exemp", book, config)
                        .then(res => {
                            resolve(res);
                        })
                        .catch(err => {
                            if (err.response.status == 401) {
                                localStorage.removeItem("access_token");
                                router.push("/login");
                            }
                            reject(err);
                        });
                });
            }
        },
        getUserBooks(context, url) {
            if (context.getters.logedIn) {
                const config = {
                    headers: {
                        Authorization: "Bearer " + context.state.token
                    }
                };
                return new Promise((resolve, reject) => {
                    axios
                        .get(url || context.state.base + "/exemp", config)
                        .then(res => {
                            resolve(res);
                        })
                        .catch(err => {
                            if (err.response.status == 401) {
                                localStorage.removeItem("access_token");
                                router.push("/login");
                            }
                            reject(err);
                        });
                });
            }
        },
        getHomeBooks(context, url) {
            if (context.getters.logedIn) {
                const config = {
                    headers: {
                        Authorization: "Bearer " + context.state.token
                    }
                };
                return new Promise((resolve, reject) => {
                    axios
                        .get(url || context.state.base + "/home", config)
                        .then(res => {
                            resolve(res.data);
                        })
                        .catch(err => {
                            reject(err);
                        });
                });
            } else {
                return new Promise((resolve, reject) => {
                    axios
                        .get(url || context.state.base + "/home")
                        .then(res => {
                            resolve(res.data);
                        })
                        .catch(err => {
                            reject(err);
                        });
                });
            }
        },
        searchBook(context, data, url) {
            return new Promise((resolve, reject) => {
                axios
                    .get(
                        url ||
                            context.state.base +
                                "/search?" +
                                "key=" +
                                data.key +
                                "&city=" +
                                data.city +
                                "&category=" +
                                data.category
                    )
                    .then(res => {
                        resolve(res);
                        // console.log(res.data);
                    })
                    .catch(err => reject(err));
            });
        },
        getBookInfos(context, id) {
            console.log(id);
            if (context.getters.logedIn) {
                const config = {
                    headers: {
                        Authorization: "Bearer " + context.state.token
                    }
                };
                return new Promise((resolve, reject) => {
                    axios
                        .get("/api/exemp/" + id, config)
                        .then(res => {
                            console.log(res.data);
                            resolve(res);
                        })
                        .catch(err => {
                            if (err.response.status == 401) {
                                localStorage.removeItem("access_token");
                                router.push("/login");
                            }
                            reject(err);
                        });
                });
            }
        },
        getUserActualBooks(context, url) {
            console.log("test");
            if (context.getters.logedIn) {
                const config = {
                    headers: {
                        Authorization: "Bearer " + context.state.token
                    }
                };
                return new Promise((resolve, reject) => {
                    axios
                        .get(url || context.state.base + "/user_books", config)
                        .then(res => {
                            resolve(res);
                        })
                        .catch(err => {
                            if (err.response.status == 401) {
                                localStorage.removeItem("access_token");
                                router.push("/login");
                            }
                            reject(err);
                        });
                });
            }
        },
        addExchangeRequest(context, data) {
            console.log("test");
            if (context.getters.logedIn) {
                const config = {
                    headers: {
                        Authorization: "Bearer " + context.state.token,
                        "content-type": "multipart/form-data"
                    }
                };
                return new Promise((resolve, reject) => {
                    axios
                        .post(context.state.base + "/exchange", data, config)
                        .then(res => {
                            resolve(res);
                        })
                        .catch(err => {
                            if (err.response.status == 401) {
                                localStorage.removeItem("access_token");
                                router.push("/login");
                            }
                            reject(err);
                        });
                });
            }
        },
        getUserRequests(context, data) {
            if (context.getters.logedIn) {
                const config = {
                    headers: {
                        Authorization: "Bearer " + context.state.token
                    },
                    params: {
                        type: data
                    }
                };
                return new Promise((resolve, reject) => {
                    axios
                        .get(context.getters.getBaseUrl + "/myrequests", config)
                        .then(res => {
                            resolve(res);
                            // console.log(res);
                        })
                        .catch(err => reject(err));
                });
            }
        },
        acceptUserRequest(context, id) {
            if (context.getters.logedIn) {
                const config = {
                    headers: {
                        Authorization: "Bearer " + context.state.token
                    }
                };
                return new Promise((reslove, reject) => {
                    axios
                        .post(
                            context.getters.getBaseUrl + "/accept",
                            id,
                            config
                        )
                        .then(res => {
                            reslove(res);
                        })
                        .catch(err => reject(err));
                });
            }
        },
        refuseUserRequest(context, id) {
            if (context.getters.logedIn) {
                const config = {
                    headers: {
                        Authorization: "Bearer " + context.state.token
                    }
                };
                return new Promise((reslove, reject) => {
                    axios
                        .post(
                            context.getters.getBaseUrl + "/refuse",
                            id,
                            config
                        )
                        .then(res => {
                            reslove(res);
                        })
                        .catch(err => reject(err));
                });
            }
        },
        getArchivedBooks(context) {
            if (context.getters.logedIn) {
                const config = {
                    headers: {
                        Authorization: "Bearer " + context.state.token
                    }
                };
                return new Promise((resolve, reject) => {
                    axios
                        .get(
                            context.getters.getBaseUrl + "/archived_books",
                            config
                        )
                        .then(res => {
                            resolve(res.data);
                        })
                        .catch(err => {
                            reject(err);
                        });
                });
            }
        },
        getuserNotifications(context) {
            if (context.getters.logedIn) {
                const config = {
                    headers: {
                        Authorization: "Bearer " + context.state.token
                    }
                };
                return new Promise((resolve, reject) => {
                    axios
                        .get(
                            context.getters.getBaseUrl + "/notification/index",
                            config
                        )
                        .then(res => {
                            resolve(res.data);
                        })
                        .catch(err => {
                            reject(err);
                        });
                });
            }
        },
        readNotification(context, notif) {
            if (context.getters.logedIn) {
                const config = {
                    headers: {
                        Authorization: "Bearer " + context.state.token
                    }
                };
                return new Promise((resolve, reject) => {
                    axios
                        .patch(
                            context.getters.getBaseUrl + "/notification/update",
                            notif,
                            config
                        )
                        .then(res => {
                            resolve(res);
                        })
                        .catch(err => {
                            reject(err);
                        });
                });
            }
        },
        getRecommandedBooks(context) {
            if (context.getters.logedIn) {
                const config = {
                    headers: {
                        Authorization: "Bearer " + context.state.token
                    }
                };
                return new Promise((resolve, reject) => {
                    axios
                        .get(context.getters.getBaseUrl + "/recom", config)
                        .then(res => resolve(res.data))
                        .catch(err => reject(err));
                });
            }
        }
    }
});

export default vuex;
