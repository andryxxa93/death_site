import dateSelect from './modules/dateSelect';
import questionsControl from './modules/questionsControl';
import getData from './modules/getData';
import showFooterFullText from './modules/showFooterFullText';

window.addEventListener('DOMContentLoaded', function() {
    "use strict";

    const dateObj = {
        year: '',
        month: '',
        day: ''
    }

    dateSelect('year', 'month', 'day', dateObj);
    questionsControl('[data-questions]', dateObj);
    getData()
    showFooterFullText();
});