export const findCharacters = () => {
  return fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters')
    .then((res) => res.json())
    .then((json) =>
      json.results.map((character) => ({
        id: character.id,
        name: character.name,
        image: character.image,
      }))
    );
};

export const findOneCharacter = (id) => {
  return fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters/${id}`)
    .then((res) => res.json())
    .then((character) => ({
      id: character.id,
      name: character.name,
      image: character.image,
    }));
};