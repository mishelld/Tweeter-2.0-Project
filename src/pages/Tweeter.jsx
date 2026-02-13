import { useEffect, useState } from "react";
import CreateTweet from "../components/createTweet";
import Tweets from "../components/Tweets";
import LoadingPage from "./LoadingPage";
import { Flex, Box } from "@mantine/core";
import "./Tweeter.css";
import axios from "axios";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import "./home.css";

function Tweeter({ username }) {
  /*
  const [tweets, setTweets] = useState(() => {
    const localTweets = localStorage.getItem("tweets");
    return localTweets ? JSON.parse(localTweets) : [];
  });

  useEffect(() => {
    localStorage.setItem("tweets", JSON.stringify(tweets));
  }, [tweets]);
    */
  const [tweets, setTweets] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleAddTweet = async (tweet) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        tweet,
      );
      console.log(response);
      fetchTweets();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  const fetchTweets = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
      );
      setTweets(
        response.data.map((i) => ({
          id: i.id,
          date: i.id,
          userName: i.title,
          content: i.body,
        })),
      );
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchTweets();
  }, []);
  return loading ? (
    <LoadingPage />
  ) : error ? (
    <ErrorPage message={error} />
  ) : (
    <Home
      className="home"
      username={username}
      tweets={tweets}
      onAddTweet={handleAddTweet}
    />
  );
}
export default Tweeter;
