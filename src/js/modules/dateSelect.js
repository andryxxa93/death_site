const dateSelect = (yearSelector, monthSelector, daySelector, state) => {
    let date = new Date(),
        md = (new Date(date.getFullYear(), date.getMonth() + 1, 0, 0, 0, 0, 0)).getDate(),
        $month_name = "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12".split(", ");

    const set_select = (selector, interval, increment, selectedOption, useDefaultValue = false) => {
        let element = document.querySelectorAll(selector)[0];
        for (let optionIdx = element.options.length = 0; optionIdx < interval; optionIdx++) {
            element.options[optionIdx] = new Option(selector === '#month'? $month_name[optionIdx] : optionIdx + increment, optionIdx + increment)
        }

        element.options[selectedOption] && (element.options[selectedOption].selected = true)

        if (selector === '#day' && useDefaultValue) {
            element.options[interval] = new Option('День', 'День', true, true);
            element.options[interval].disabled = true;
        }
        if (selector === '#month') {
            element.options[interval] = new Option('Месяц', 'Месяц', true, true);
            element.options[interval].disabled = true;
        }
        if (selector === '#year') {
            element.options[interval] = new Option('Год', 'Год', true, true);
            element.options[interval].disabled = true;
        }
    }


    let year = document.getElementById(yearSelector);
    let month = document.getElementById(monthSelector);
    let day = document.getElementById(daySelector);

    set_select("#day", md, 1, date.getDate() - 1, true);
    set_select("#month", 12, 1, date.getMonth());
    set_select("#year", 101, date.getFullYear()-100, 100);

    function check_date() {
        let yearValue = year.value | 0,
            monthValue = month.value | 0;
        md = (new Date(yearValue, monthValue, 0, 0, 0, 0, 0)).getDate();
        yearValue = document.getElementById(daySelector).selectedIndex;monthValue
        if (day.value === 'День') {
            set_select("#day", md, 1, yearValue, true)
        } else {
            set_select("#day", md, 1, yearValue)
        }
    };

    year.addEventListener('change', (e) => {
        check_date()
        state.year = +e.target.value;
    }, false);
    month.addEventListener('change', (e) => {
        check_date()
        state.month = e.target.value - 1;
    }, false);
    day.addEventListener('change', (e) => {
        state.day = +e.target.value;
    })
}

export default dateSelect;