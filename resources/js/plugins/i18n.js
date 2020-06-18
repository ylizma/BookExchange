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
                exchange_btn: 'استبدال',
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
        }
    }
};

const i18n = new VueI18n({    locale: 'en',fallbackLocale: 'en',   messages});

i18n.locale = localStorage.Lang == null ? 'en' : localStorage.Lang;

export default i18n;
