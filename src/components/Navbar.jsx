import { NavLink, Flex, Button } from "@mantine/core";
import { IconHome2, IconUser, IconLogout } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { UserContext } from "../components/ContextProvider";
import { useContext } from "react";
import "./Navbar.css";
function Navbar() {
  const { handleLogout } = useContext(UserContext);

  return (
    <>
      <Flex className="navbar">
        <NavLink
          component={Link}
          to="/Tweeter-2.0-Project/home"
          label="Home"
          variant="filled"
          active
          leftSection={<IconHome2 size={16} stroke={1.5} />}
        />
        <NavLink
          component={Link}
          to="/Tweeter-2.0-Project/user/1"
          label="User"
          variant="filled"
          active
          leftSection={<IconUser size={16} stroke={1.5} />}
        />
        <Button onClick={handleLogout}>Log out</Button>
      </Flex>
    </>
  );
}
export default Navbar;
