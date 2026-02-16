import { supabase } from "../components/supabaseClient";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../components/ContextProvider";
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

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin } = useContext(UserContext);

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Welcome back!
      </Title>

      <Text className={classes.subtitle}>
        Do not have an account yet?{" "}
        <Anchor component={Link} to="/Tweeter-2.0-Project/signup">
          Create account
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
          onClick={() => handleLogin(email, password)}
        >
          Sign in
        </Button>
      </Paper>
    </Container>
  );
}
export default LoginPage;
