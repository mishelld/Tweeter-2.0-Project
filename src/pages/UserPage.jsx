import { Button, TextInput, Flex } from "@mantine/core";
import { useState, useContext } from "react";
import "./UserPage.css";
import { AuthContext } from "../components/AuthProvider";

function UserPage() {
  const { username, onUpdateUsername } = useContext(AuthContext);
  const [name, setName] = useState(username);

  return (
    <Flex direction="column" gap="md" className="user-page">
      <TextInput
        description="User Name"
        placeholder=""
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Flex justify="flex-end">
        <Button variant="filled" onClick={() => onUpdateUsername(name)}>
          Save
        </Button>
      </Flex>
    </Flex>
  );
}
export default UserPage;
