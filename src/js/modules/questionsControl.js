import audioPlay from "./audioPlay";

const questionsControl = (questionsSelector, state) => {
    const questions = document.querySelectorAll(questionsSelector);
    const loadingScreen = document.querySelector('.questions__loading');
    const audioScreen = document.querySelector('.questions__audio');
    const answerScreen = document.querySelector('.answer');
    const footerText = document.querySelector('footer .footer__text');

    const checkDate = () => {
        let result = true;
        Object.keys(state).forEach(key => {
            if (typeof state[key] === 'string') {
                result = false;
            }
        })
        return result;
    };

    const getAge = ({year, month, day}) => {
        const date = new Date(year, month, day).getTime();
        const age =  (Date.now() - date) / (1000 * 60 * 60 * 24 * 365.2425);
        return Math.floor(age)
    }
    
    const changeQuestion = (prevQuestion, nextQuestion, loading = false) => {
        if (loading) {
            questions[prevQuestion - 1].style = 'display: none';
            loadingScreen.style = 'display: flex';
            setTimeout(() => {
                loadingScreen.style = 'display: none';
                questions[nextQuestion - 1].style = 'display: block';
            }, 2000);
        } else {
            questions[prevQuestion - 1].style = 'display: none';
            questions[nextQuestion - 1].style = 'display: block';
        }
    }

    questions[0].addEventListener('click', (e) => {
        if (e.target.classList.contains('button')) {
            changeQuestion(1, 2);
        }
    })

    questions[1].addEventListener('click', (e) => {
        if (e.target.classList.contains('button')) {
            changeQuestion(2, 3);
        }
    }) 

    questions[2].addEventListener('click', (e) => {
        const age = getAge(state);
        if (e.target.classList.contains('button') && checkDate() && age >=18) {
            document.querySelectorAll('.questions__eye').forEach(el => el.style = 'display: none')
            changeQuestion(3, 4, true);
        } else if (e.target.classList.contains('button') && checkDate() && age < 18) {
            document.querySelector('.text__error').style = 'display: block';
        } else if (e.target.classList.contains('button') && !checkDate()) {
            document.querySelector('.text__error').style = 'display: none';
            questions[2].querySelectorAll('select')[0].style = 'border-color: #EE5353';
        }
    })

    questions[3].addEventListener('click', (e) => {
        const block = questions[4].querySelector('.questions__dialog');
        const message = questions[4].querySelector('.text');
        if (e.target.classList.contains('button')) {
            let age = getAge(state);
            if (age >= 18 && age <= 35) {
                message.innerHTML = 'По вам скучает очень близкий человек, которого больше нет в мире живых.'
            } else if (age >= 36 && age <= 45) {
                message.innerHTML = 'По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это дедушка или бабушка.'
            } else if (age >= 46) {
                message.innerHTML = 'По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это кто-то из Ваших родителей.'
            }
            changeQuestion(4, 5);
            setTimeout(() => {
                block.classList.add('opacity_100');
            }, 100);
        }
    })

    questions[4].addEventListener('click', (e) => {
        if (e.target.classList.contains('button')) {
            questions[4].style = 'display: none';
            audioScreen.style = 'display: flex';
            document.querySelectorAll('.questions__eye').forEach(el => el.style = 'display: none')
            let time = 100;
            audioPlay('.percent span', '.progress span', time);
            setTimeout(() => {
                questions[4].parentNode.style = 'display: none';
                const date = new Date();
                const year = date.getFullYear();
                const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
                const day = date.getDate() + 1;
                answerScreen.querySelector('#date').innerHTML = `${day}.${month}.${year}`;
                answerScreen.style = 'display: flex';
                footerText.classList.remove('display-none');
            }, time * 100);
        }
    })


}

export default questionsControl;