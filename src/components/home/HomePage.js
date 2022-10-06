import Row from "./Row";
import Header from "./Header";
import requests from "../../utils/requests";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Row title="Trending" url={requests.trending} />
      <Row title="Upcoming Movies" url={requests.upcoming} />
      <Row title="Popular TV Shows" url={requests.latestShows} />
      <Row title="Shows Airing Today" url={requests.airing} />
    </div>
  );
};

export default HomePage;
