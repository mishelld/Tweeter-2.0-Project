import { NavLink, Flex } from "@mantine/core";
import { IconHome2, IconUser } from "@tabler/icons-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Flex>
        <NavLink
          component={Link}
          to="/"
          href="#required-for-focus"
          label="Home"
          variant="filled"
          active
          leftSection={<IconHome2 size={16} stroke={1.5} />}
        />
        <NavLink
          component={Link}
          to="/user/1"
          href="#required-for-focus"
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
