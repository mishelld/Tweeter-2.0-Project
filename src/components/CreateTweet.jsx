import { Button, Textarea, Box } from "@mantine/core";
import "./CreateTweet.css";
import { useState } from "react";
function CreateTweet({ onAddTweet }) {
  const [text, setText] = useState("");
  const [username, setUsername] = useState("Bob");
  const maxChars = 140;
  const isDisabled = text.length > maxChars;
  return (
    <div className="create-tweet">
      <Textarea
        placeholder="What you have in mind..."
        autosize
        minRows={4}
        value={text}
        onChange={(e) => setText(e.target.value)}
        error={text.length > maxChars ? "more than 140 chars" : null}
        className="textarea"
      />
      <Button
        variant="filled"
        disabled={isDisabled}
        onClick={() =>
          onAddTweet({
            username: username,
            tweet: text,
            date: new Date().toLocaleDateString(),
          })
        }
      >
        Tweet
      </Button>
    </div>
  );
}
export default CreateTweet;
