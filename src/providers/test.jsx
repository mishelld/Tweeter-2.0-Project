import { createContext, useState, useEffect } from "react";

export const TweetContext = createContext();

const API_URL =
  "https://agsaphbcwazvuenwsnca.supabase.co/rest/v1/Tweets?apikey=sb_publishable_3kTDeTVg6NfWrboe7oMopA_X-cuT_ih";

function TweetProvider({ children }) {
  const [tweets, setTweets] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchTweets = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Failed to fetch tweets");
      const data = await res.json();
      setTweets(
        data
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((i) => ({
            id: i.id,
            date: i.date,
            username: i.userName,
            content: i.content,
          })),
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTweet = async (tweet) => {
    if (loading) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tweet),
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to add tweet");
      }
      const data = await res.json();
      setTweets((prev) => [data[0], ...prev]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTweets();
    // const interval = setInterval(fetchTweets, 10000);
    // return () => clearInterval(interval);
  }, []);

  return (
    <TweetContext.Provider value={{ tweets, error, loading, handleAddTweet }}>
      {children}
    </TweetContext.Provider>
  );
}

export default TweetProvider;
