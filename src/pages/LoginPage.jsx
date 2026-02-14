import { supabase } from "../components/supabaseClient";
import { useNavigate } from "react-router-dom";
import { Button, TextInput, Flex, em } from "@mantine/core";
import { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) return;
    navigate("/Tweeter-2.0-Project/home");
  };
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
        <Button variant="filled" onClick={() => handleLogin()}>
          Log In
        </Button>
      </Flex>
    </>
  );
}
export default LoginPage;
