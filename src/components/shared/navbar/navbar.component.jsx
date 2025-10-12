import {
  Avatar,
  Button,
  DropdownMenu,
  Flex,
  Text,
  TextField,
} from "@radix-ui/themes";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";

const NavbarComponent = () => {
  return (
    <Flex justify="between" align="center" className="bg-amber-300 p-4" gap="4">
      <TextField.Root placeholder="Search..." size="2">
        <TextField.Slot>
          <FaMagnifyingGlass />
        </TextField.Slot>
      </TextField.Root>

      <Flex align="center" gap="4" className="cursor-pointer">
        <Button variant="ghost" size="2">
          <IoIosNotifications className="text-blue-500 text-3xl" />
        </Button>

        <DropdownMenu.Root content="LogOut" side="bottom">
          <DropdownMenu.Trigger>
            <Flex gap="6px">
              <Avatar
                src="https://avatars.githubusercontent.com/u/110531952?v=4"
                alt="User avatar"
                size="8"
                radius="full"
                fallback="U"
                style={{
                  width: "27px",
                  height: "27px",
                }}
              />
              <Text>Kazi Robin</Text>
            </Flex>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content
            style={{ marginTop: "6px", marginInlineStart: "8px" }}
          >
            <Button color="sky" style={{cursor:"pointer"}}>Log Out</Button>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Flex>
    </Flex>
  );
};

export default NavbarComponent;
