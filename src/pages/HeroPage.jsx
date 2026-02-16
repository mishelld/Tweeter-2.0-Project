import { Button, Container, Group, Text } from "@mantine/core";
import classes from "./HeroTitle.module.css";
import { useNavigate } from "react-router-dom";

function HeroPage() {
  const navigate = useNavigate();

  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          Tweeter{" "}
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            inherit
          >
            2.0{" "}
          </Text>{" "}
        </h1>

        <Text className={classes.description} color="dimmed">
          Welcome to Tweeter – share your thoughts, connect with people, and see
          what’s happening right now.
        </Text>

        <Group className={classes.controls}>
          <Button
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            onClick={() => navigate("/Tweeter-2.0-Project/login")}
          >
            Get started
          </Button>
        </Group>
      </Container>
    </div>
  );
}
export default HeroPage;
