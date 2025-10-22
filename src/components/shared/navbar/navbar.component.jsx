import {
  Avatar,
  Button,
  DropdownMenu,
  Flex,
  Text,
  TextField,
} from "@radix-ui/themes";
import MenuIcon from "/assets/menu.svg";
import { FaHamburger } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";

const NavbarComponent = ({ handleSidebar, sidebarActive }) => {
  return (
    <Flex justify="between" align="center" className=" h-20" gap="4">
      {sidebarActive && (
        <Button color="amber" onClick={handleSidebar}>
          <img src={MenuIcon} alt="" className="cursor-pointer text-white" />
        </Button>
      )}
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
              <Flex gap="6px" align="center" className="cursor-pointer">
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
