import { useState } from "react";
import CreateTweet from "../components/createTweet";
import Tweets from "../components/Tweets";
function Tweeter() {
  const [tweets, setTweets] = useState([]);
  const handleAddTweet = (tweet) => {
    setTweets([...tweets, tweet]);
  };
  return (
    <>
      <CreateTweet onAddTweet={handleAddTweet} />
      <Tweets tweets={tweets} />
    </>
  );
}
export default Tweeter;
