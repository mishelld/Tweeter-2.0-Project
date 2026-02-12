import { useEffect, useState } from "react";
import CreateTweet from "../components/createTweet";
import Tweets from "../components/Tweets";
import { Flex, Box } from "@mantine/core";
import "./Tweeter.css";
function Tweeter() {
  const [tweets, setTweets] = useState(() => {
    const localTweets = localStorage.getItem("tweets");
    return localTweets ? JSON.parse(localTweets) : [];
  });
  useEffect(() => {
    localStorage.setItem("tweets", JSON.stringify(tweets));
  }, [tweets]);
  const handleAddTweet = (tweet) => {
    setTweets([...tweets, tweet]);
  };
  return (
    <Box className="tweeter">
      <Flex gap="md" align="center" direction="column">
        <CreateTweet onAddTweet={handleAddTweet} />
        <Tweets tweets={tweets} />
      </Flex>
    </Box>
  );
}
export default Tweeter;
