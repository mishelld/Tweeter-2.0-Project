import { NavLink, Flex } from "@mantine/core";
import { IconHome2, IconUser } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <Flex className="navbar">
        <NavLink
          component={Link}
          to="/"
          label="Home"
          variant="filled"
          active
          leftSection={<IconHome2 size={16} stroke={1.5} />}
        />
        <NavLink
          component={Link}
          to="/user/1"
          label="User"
          variant="filled"
          active
          leftSection={<IconUser size={16} stroke={1.5} />}
        />
      </Flex>
    </>
  );
}
export default Navbar;
