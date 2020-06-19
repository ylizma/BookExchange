import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        home: {
            search: {
                search_btn: 'Search',
                title: 'Title',
                select_category: 'Select category',
                select_city: 'Select city',
            },
            book_items: {
                exchange_btn: 'Exchange',
                category: 'Category',
                by: 'By'
            }
        },
        notifications: {
            mark_all_as_read: 'Mark all as read'
        },
        navsidebar: {
            home: 'Home',
            categories: 'Categories',
            aboutus: 'About us',
            contactus: 'Contact us',
            languages: 'Change language',
            user: {
                register: 'Register',
                login: 'Login',
                profile: 'Profile',
                logout: 'Logout'
            }
        },
        usercp: {
            shortcuts: {
                header: 'Links',
                myprofile: 'My profile',
                mybooks: 'My books',
                sentrequests: 'Sent requests',
                receivedrequests: 'Received requests',
                archivedbooks: 'Archived books'
            },
            profile: {
                header: 'Profile',
                username: 'Username',
                email: 'Email',
                city: 'City',
                tel: 'Tel',
                password: 'Password',
                save_btn: 'Save'
            },
            books: {
                header: 'My books',
                add_new_btn: 'Add a new book',
                table: {
                    title: 'Title',
                    date: 'Date',
                    status: 'Status'
                }
            },
            requests: {
                sent: {
                    header: 'Sent requests',
                    owner: 'Owner',
                    request_state: 'Request state'
                },
                received: {
                    header: 'Received requests',
                    sender: 'Sender',
                    accept_reject: 'Accept/Reject'
                },
                shared: {
                    city: 'City',
                    date: 'Date',
                    proposal_book: 'Proposal book',
                    book_state: 'Book state',
                    desired_book: 'Desired book'
                }
            },
            archived_books: {
                header: 'Archived books',
                table:{
                    book_title: 'Book title',
                    image: 'Image',
                    date: 'Date'
                }
            }
        },
        newBook: {
            header: 'Add a new book',
            title: 'Title',
            search_btn: 'Search',
            isbn: 'ISBN',
            authors: 'Authors',
            category: 'Category',
            status: 'Status',
            language: 'Language',
            summary: 'Summary',
            add_btn: 'Add book',
            success: 'Your book has been saved successfully',
            preview: 'Click here to preview it!'
        },
        exchange: {
            header: 'Exchange',
            goback: 'Go Back!',
            desired_book: 'Desired Book',
            summary: 'Summary',
            owner: 'Owner',
            select_one_book: 'Select one of your books',
            send_request: 'Send exchange request',
            alerts: {
                request_sent: 'Exchange request sent !!',
                same_book_error: "You can't exchange with the same book"
            }
        }
    },
    'fr': {
        home: {
            search:{
                search_btn: 'Rechercher',
                title: 'Titre',
                select_category: 'Choisir une catégorie',
                select_city: 'Choisir une ville',
            },
            book_items: {
                exchange_btn: 'Echanger',
                category: 'Categorie',
                by: 'Par'
            }
        },
        notifications: {
            mark_all_as_read: 'Tout marquer comme lu'
        },
        navsidebar: {
            home: 'Acceuil',
            categories: 'Categories',
            aboutus: 'A propos',
            contactus: 'Contacter nous',
            languages: 'Changer la langue',
            user: {
                register: "S'inscrire",
                login: "S'identifier",
                profile: 'Profile',
                logout: 'Se déconnecter'
            }
        },
        usercp: {
            shortcuts: {
                header: 'Liens',
                myprofile: 'Mon profil',
                mybooks: 'Mes livres',
                sentrequests: 'Demandes envoyées',
                receivedrequests: 'Demandes reçues',
                archivedbooks: 'Livres archivés'
            },
            profile: {
                header: 'Profil',
                username: "Nom d'utilisateur",
                email: 'Email',
                city: 'Ville',
                tel: 'Tél',
                password: 'Mot de passe',
                save_btn: 'Enregistrer'
            },
            books: {
                header: 'Mes livres',
                add_new_btn: 'Ajouter un nouveau livre',
                table: {
                    title: 'Titre',
                    date: 'Date',
                    status: 'Statut'
                }
            },
            requests: {
                sent: {
                    header: 'Demandes envoyées',
                    owner: 'Propriétaire',
                    request_state: 'État de la demande'
                },
                received: {
                    header: 'Demandes reçues',
                    sender: 'Expéditeur',
                    accept_reject: 'Accepter / rejeter'
                },
                shared: {
                    city: 'Ville',
                    date: 'Date',
                    proposal_book: 'Livre de proposition',
                    book_state: 'État du livre',
                    desired_book: 'Livre souhaité'
                }
            },
            archived_books: {
                header: 'Livres archivés',
                table:{
                    book_title: 'Titre de livre',
                    image: 'Image',
                    date: 'Date'
                }
            }
        },
        newBook: {
            header: 'Ajouter un nouveau livre',
            title: 'Titre',
            search_btn: 'Rechercher',
            isbn: 'ISBN',
            authors: 'Auteurs',
            category: 'Categorie',
            status: 'Statut',
            language: 'Langage',
            summary: 'Résumé',
            add_btn: 'Ajouter le livre',
            success: 'Votre livre a bien été enregistré',
            preview: "Cliquez ici pour l'aperçu!"
        },
        exchange: {
            header: 'Echange',
            goback: 'Retourner!',
            desired_book: 'Livre souhaité',
            summary: 'Résumé',
            owner: 'Propriétaire',
            select_one_book: "Sélectionnez l'un de vos livres",
            send_request: "Envoyer une demande d'échange",
            alerts: {
                request_sent: "Demande d'échange envoyée !!",
                same_book_error: "Vous ne pouvez pas échanger avec le même livre !!"
            }
        }
    },
    'ar': {
        home: {
            search:{
                search_btn: 'ابحث',
                title: 'عنوان الكتاب',
                select_category: 'اختر الفئة',
                select_city: 'اختر المدينة',
            },
            book_items: {
                exchange_btn: 'تبادل',
                category: 'الفئة',
                by: 'منشور من طرف'
            }
        },
        notifications: {
            mark_all_as_read: 'اشر عليها بانها قرات'
        },
        navsidebar: {
            home: 'الرئيسية',
            categories: 'الفئات',
            aboutus: 'معلومات عنا',
            contactus: 'اتصل بنا',
            languages: 'تغيير اللغة',
            user: {
                register: "تسجيل",
                login: "تسجيل الدخول",
                profile: 'الملف الشخصي',
                logout: 'تسجيل الخروج'
            }
        },
        usercp: {
            shortcuts: {
                header: 'روابط',
                myprofile: 'ملفي الشخصي',
                mybooks: 'كتبي',
                sentrequests: 'الطلبات المرسلة',
                receivedrequests: 'الطلبات الواردة',
                archivedbooks: 'الكتب المؤرشفة'
            },
            profile: {
                header: 'ملفي الشخصي',
                username: "إسم المستخدم",
                email: 'البريد الإلكتروني',
                city: 'المدينة',
                tel: 'رقم الهاتف',
                password: 'كلمة السر',
                save_btn: 'حفظ التغييرات'
            },
            books: {
                header: 'كتبي',
                add_new_btn: 'أضف كتابًا جديدًا',
                table: {
                    title: 'عنوان الكتاب',
                    date: 'تاريخ النشر',
                    status: 'الحالة'
                }
            },
            requests: {
                sent: {
                    header: 'الطلبات المرسلة',
                    owner: 'مالك الكتاب',
                    request_state: 'حالة الطلب'
                },
                received: {
                    header: 'الطلبات الواردة',
                    sender: 'المرسل',
                    accept_reject: 'اقبل / ارفض'
                },
                shared: {
                    city: 'المدينة',
                    date: 'تاريخ الطلب',
                    proposal_book: 'الكتاب المقترح',
                    book_state: 'حالة الكتاب',
                    desired_book: 'الكتاب المرغوب'
                }
            },
            archived_books: {
                header: 'الكتب المؤرشفة',
                table:{
                    book_title: 'عنوان الكتاب',
                    image: 'صورة الكتاب',
                    date: 'تاريخ الأرشفة'
                }
            }
        },
        newBook: {
            header: 'أضف كتابًا جديدًا',
            title: 'عنوان الكتاب',
            search_btn: 'ابحث',
            isbn: 'ISBN رقم',
            authors: 'المؤلفون',
            category: 'الفئة',
            status: 'الحالة',
            language: 'لغة الكتاب',
            summary: 'ملخص كتاب',
            add_btn: 'أضف الكتاب',
            success: 'تم حفظ كتابك بنجاح',
            preview: "انقر هنا لمعاينته"
        },
        exchange: {
            header: 'تبادل',
            goback: '!العودة إلى الصفحة الرئيسية',
            desired_book: 'الكتاب المرغوب',
            summary: 'ملخص الكتاب',
            owner: 'مالك الكتاب',
            select_one_book: 'اختر كتاب من كتبك',
            send_request: 'إرسال طلب التبادل',
            alerts: {
                request_sent: "!!تم إرسال طلب التبادل",
                same_book_error: "!! لا يمكنك التبادل بنفس الكتاب"
            }
        }
    }
};

const i18n = new VueI18n({    locale: 'en',fallbackLocale: 'en',   messages});

i18n.locale = localStorage.Lang == null ? 'en' : localStorage.Lang;

export default i18n;
