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
                exchange_btn: 'Exchange'
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
                exchange_btn: 'Echanger'
            }
        },
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
                exchange_btn: 'استبدال'
            }
        },
    }
};

const i18n = new VueI18n({    locale: 'en',fallbackLocale: 'en',   messages});

i18n.locale = localStorage.Lang == null ? 'en' : localStorage.Lang;

export default i18n;
