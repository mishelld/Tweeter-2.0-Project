import { supabase } from "../components/supabaseClient";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../components/providers/AuthProvider";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";
import {
  Anchor,
  Button,
  Checkbox,
  Container,
  Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import classes from "./AuthenticationTitle.module.css";
import { useState, useContext } from "react";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleSignup, error, loading } = useContext(AuthContext);

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : error ? (
        <ErrorPage message={error} />
      ) : (
        <Container size={420} my={40}>
          <Title ta="center" className={classes.title}>
            Welcome to tweeter
          </Title>

          <Text className={classes.subtitle}>
            Already have an account?{" "}
            <Anchor component={Link} to="/Tweeter-2.0-Project/login">
              Login
            </Anchor>
          </Text>

          <Paper withBorder shadow="sm" p={22} mt={30} radius="md">
            <TextInput
              label="Email"
              placeholder="you@mantine.dev"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              radius="md"
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              mt="md"
              radius="md"
            />
            <Button
              fullWidth
              mt="xl"
              radius="md"
              onClick={() => handleSignup(email.trim(), password)}
            >
              Register
            </Button>
          </Paper>
        </Container>
      )}
    </>
  );
}

export default SignupPage;
