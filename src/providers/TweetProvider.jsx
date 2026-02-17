import { createContext, useState, useEffect } from "react";
import { supabase } from "../data/supabaseClient";

export const TweetContext = createContext();

function TweetProvider({ children }) {
  const [tweets, setTweets] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const handleAddTweet = async (tweet) => {
    setLoading(true);
    setError(null);
    try {
      const { data, error } = await supabase
        .from("Tweets")
        .insert([tweet])
        .select();
      if (error) {
        setError(error.message);
        return;
      }
      setTweets((prevTweets) => [data[0], ...prevTweets]);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  const fetchTweets = async () => {
    setError(null);
    try {
      const { data, error } = await supabase
        .from("Tweets")
        .select("*")
        .order("date", { ascending: false });
      if (error) {
        setError(error.message);
        return;
      }

      setTweets(
        data.map((i) => ({
          id: i.id,
          date: i.date,
          username: i.username,
          content: i.content,
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

    const interval = setInterval(() => {
      fetchTweets();
    }, 10000);

    return () => clearInterval(interval);
  }, []);
  return (
    <TweetContext.Provider value={{ tweets, error, loading, handleAddTweet }}>
      {children}
    </TweetContext.Provider>
  );
}

export default TweetProvider;
