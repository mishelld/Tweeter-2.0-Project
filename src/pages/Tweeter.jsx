import { useContext } from "react";
import LoadingPage from "./LoadingPage";
import "./Tweeter.css";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import "./home.css";
import { TweetContext } from "../providers/TweetProvider";

function Tweeter() {
  const { error, loading } = useContext(TweetContext);

  /*
  const [tweets, setTweets] = useState(() => {
    const localTweets = localStorage.getItem("tweets");
    return localTweets ? JSON.parse(localTweets) : [];
  });

  useEffect(() => {
    localStorage.setItem("tweets", JSON.stringify(tweets));
  }, [tweets]);
    */

  return loading ? (
    <LoadingPage />
  ) : error ? (
    <ErrorPage message={error} />
  ) : (
    <Home className="home" />
  );
  // return <Home className="home" />;
}
export default Tweeter;
