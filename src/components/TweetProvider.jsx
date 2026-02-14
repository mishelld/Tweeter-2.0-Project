import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const TweetContext = createContext();

function TweetProvider({ children }) {
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
  return (
    <TweetContext.Provider value={{ tweets, error, loading, handleAddTweet }}>
      {children}
    </TweetContext.Provider>
  );
}

export default TweetProvider;
