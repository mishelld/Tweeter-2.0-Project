import { supabase } from "../components/supabaseClient";
import { useNavigate } from "react-router-dom";
import { Button, TextInput, Flex, em } from "@mantine/core";
import { UserContext } from "../components/ContextProvider";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";

import { useState, useContext } from "react";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleSignup, error, loading } = useContext(UserContext);

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : error ? (
        <ErrorPage message={error} />
      ) : (
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
          <Button
            variant="filled"
            onClick={() => handleSignup(email, password)}
          >
            Sign up
          </Button>
        </Flex>
      )}
    </>
  );
}

export default SignupPage;
