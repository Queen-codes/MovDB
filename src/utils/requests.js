const API_KEY = "60620af18861c760135cc8079b2dc7a5";

//console.log(API_KEY);

const requests = {
  trending: `/trending/all/week?api_key=${API_KEY}`,
  upcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  latestShows: `/tv/popular?api_key=${API_KEY}&language=en-US`,
  airing: `/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`,
};

export default requests;
