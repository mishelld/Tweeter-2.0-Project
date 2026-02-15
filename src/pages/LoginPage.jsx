import { supabase } from "../components/supabaseClient";
import { useNavigate } from "react-router-dom";
import { Button, TextInput, Flex, em } from "@mantine/core";
import { UserContext } from "../components/ContextProvider";

import { useState, useContext } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin } = useContext(UserContext);

  return (
    <>
      <Flex direction="column" gap="md">
        <TextInput
          description="Email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          description="Password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="filled" onClick={() => handleLogin(email, password)}>
          Log In
        </Button>
      </Flex>
    </>
  );
}
export default LoginPage;
