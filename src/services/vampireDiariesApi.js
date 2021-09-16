export const findCharacters = () => {
    return fetch('https://vampire-diaries.herokuapp.com/api/characters')
      .then((res) => res.json())
      .then((json) =>
        jsonjson.results.map((quote) => ({
            id: character.id,
            name: character.name,
            actor: charactor.actor,
            episodeCount: character.episodeCount,
        }))
      );
}