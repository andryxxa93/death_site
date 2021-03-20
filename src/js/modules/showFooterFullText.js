const showFooterFullText = () => {
    const dots = document.querySelector('#dots');
    const hiddent_text = document.querySelector('#hidden_text');

    dots.addEventListener('click', (e) => {
        dots.style = 'display: none;';
        hiddent_text.classList.toggle('hidden');
    })
}

export default showFooterFullText;