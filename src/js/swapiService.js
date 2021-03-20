const _apiBase = 'https://swapi.dev/api';

const getResource = async (url) => {
    const res = await fetch(`${_apiBase}${url}`);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
}

const getCharacter = async (id) => {
    const character = await getResource(`/people/${id}`);
    console.log(character)
    return character;
}

export default getCharacter;
