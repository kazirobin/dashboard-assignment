import {
  Avatar,
  Button,
  DropdownMenu,
  Flex,
  Text,
  TextField,
} from "@radix-ui/themes";
import { FaHamburger } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";

const NavbarComponent = ({ handleSidebar }) => {
  return (
    <Flex justify="between" align="center" className="bg-amber-300 p-4" gap="4">
      <Button onClick={handleSidebar}>
        <FaHamburger />
      </Button>
      <TextField.Root placeholder="Search..." size="2">
        <TextField.Slot>
          <FaMagnifyingGlass />
        </TextField.Slot>
      </TextField.Root>

      <Flex align="center" gap="4" className="cursor-pointer">
        <Button variant="ghost" size="2">
          <IoIosNotifications className="text-blue-500 text-3xl" />
        </Button>

        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="ghost">

            <Flex gap="6px" align="center">
              <Avatar
                src="https://avatars.githubusercontent.com/u/110531952?v=4"
                fallback="K"
                size="2"
                radius="full"
                />
              <Text>Kazi Robin</Text>
            </Flex>
                </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content
            style={{ marginTop: "6px", marginInlineStart: "8px" }}
          >
            <Button color="sky" style={{ cursor: "pointer" }}>
              Log Out
            </Button>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Flex>
    </Flex>
  );
};

export default NavbarComponent;
