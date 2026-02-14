import CreateTweet from "../components/createTweet";
import Tweets from "../components/Tweets";
import "./Home.css";
import { Flex, Box } from "@mantine/core";

function Home() {
  return (
    <>
      <Box className="tweeter">
        <Flex gap="md" align="center" direction="column">
          <CreateTweet />
          <Tweets />
        </Flex>
      </Box>
    </>
  );
}
export default Home;
