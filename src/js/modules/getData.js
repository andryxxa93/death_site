import getCharacter from "../swapiService"

const showData = () => {
    const button = document.querySelector('.button__green');
    const modal = document.querySelector('.answer__modal');
    const close = modal.querySelector('.close');
    const infoBlock = modal.querySelector('.info');

    button.addEventListener('click', async () => {
        const characterData = await getCharacter(1);
        modal.style = 'display: block';
        infoBlock.innerHTML = `
            <div class="text text__black">Name: <span class='text__fw300'>${characterData.name}</span></div>
            <div class="text text__black">Birth year: <span class='text__fw300'>${characterData.birth_year}</span></div>
            <div class="text text__black">Height: <span class='text__fw300'>${characterData.height}</span></div>
            <div class="text text__black">Gender: <span class='text__fw300'>${characterData.gender}</span></div>
            <div class="text text__black">Hair color: <span class='text__fw300'>${characterData.hair_color}</span></div>
        `
    })

    close.addEventListener('click', (e) => {
        modal.style = 'display: none';
    })

}

export default showData;