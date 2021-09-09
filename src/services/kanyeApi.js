export const findQuotes = () => {
  return fetch('https://api.kanye.rest')
    .then((res) => res.json())
      .then((json) =>
          json.results.map((quote) => ({
        id: quote.id,
        quote: quote.quote,
      }))
    );
};
