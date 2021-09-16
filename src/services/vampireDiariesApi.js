export const findCharacters = () => {
  return fetch('https://vampire-diaries.herokuapp.com/api/characters')
    .then((res) => res.json())
    .then((json) =>
      json.map((character) => ({
        id: character.id,
        name: character.name,
        actor: charactor.actor,
        episodeCount: character.episodeCount,
      }))
    );
};

export const findOneCharacter = (id) => {
  return fetch(`https://vampire-diaries.herokuapp.com/api/characters/${id}`)
    .then((res) => res.json())
    .then((character) =>
    ({
      id: character.id,
      name: character.name,
      actor: charactor.actor,
      episodeCount: character.episodeCount,
    })
    );
};