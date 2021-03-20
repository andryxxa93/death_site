const audioPlay = (percentSelector, progressbarSelector, time = 100) => {
    const percent = document.querySelector(percentSelector);
    const progress = document.querySelector(progressbarSelector);
    const audio = document.querySelector('audio');
    
    audio.play();

    let i = 0;
    const interval = setInterval(() => {
        i++
        percent.innerHTML = i;
        progress.style.width = `${i}%`;

        if (i === 100) {
            clearInterval(interval);
        }
    }, time);
}

export default audioPlay;