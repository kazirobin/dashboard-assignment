import {
  Avatar,
  Badge,
  Button,
  DropdownMenu,
  Flex,
  Heading,
  Text,
  TextField,
} from "@radix-ui/themes";
import { FaBars, FaMagnifyingGlass } from "react-icons/fa6";
import { IoIosArrowDropdown } from "react-icons/io";
import { PiBellSimpleFill } from "react-icons/pi";
import { IoSettings } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";

const NavbarComponent = ({ handleSidebar, sidebarActive }) => {
  return (
    <Flex justify="between" align="center" className=" h-20" gap="4">
      <Flex align="center">
        {sidebarActive && (
          <FaBars
            className="text-2xl mx-6 cursor-pointer"
            onClick={handleSidebar}
          />
        )}
        <TextField.Root
          placeholder="Search"
          size="2"
          style={{
            width: "388px",
            borderRadius: "19px",
            height: "39px",
            paddingInlineStart: "25px",
          }}
        >
          <TextField.Slot style={{ position: "relative" }}>
            <FaMagnifyingGlass
              style={{ position: "absolute", left: "-6px", top: "11px" }}
            />
          </TextField.Slot>
        </TextField.Root>
      </Flex>

      <Flex align="center" gap="5" className="cursor-pointer">
        <Button variant="ghost" size="2" className="relative">
          <Flex className="relative">
            <PiBellSimpleFill className="text-blue-500 text-3xl" />
            <Badge
              variant="solid"
              color="red"
              size="1"
              style={{
                position: "absolute",
                top: "-8px",
                right: "-6px",
                transform: "scale(0.8)",
                minWidth: "22px",
                height: "22px",
                borderRadius: "22px",
                padding: "4px",
                fontSize: "16px",
                fontWeight: "700",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              6
            </Badge>
          </Flex>
        </Button>

        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="ghost">
              <Flex gap="4" align="center" className="cursor-pointer">
                <Avatar
                  src="https://avatars.githubusercontent.com/u/110531952?v=4"
                  fallback="KR"
                  size="2"
                  radius="full"
                />
                <Flex direction="column" align="start" pr="2">
                  <Heading size="3">Kazi Robin</Heading>
                  <Text>Admin</Text>
                </Flex>
                <IoIosArrowDropdown className="text-2xl" />
              </Flex>
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content
            align="center"
            style={{ width: "170px" }}
            gap="2"
          >
            <Flex direction="column" gap="1">

              <DropdownMenu.Item>
                <Flex
                  justify="center"
                  align="center"
                  gap="2"
                  className="cursor-pointer w-full h-7 rounded-sm"
                >
                  <CgProfile /> <Text>Profile</Text>
                </Flex>
              </DropdownMenu.Item>

              <DropdownMenu.Item>
                <Flex
                  justify="center"
                  align="center"
                  gap="2"
                  className="cursor-pointer w-full h-7 rounded-sm"
                >
                  <IoSettings /> <Text>Settings</Text>
                </Flex>
              </DropdownMenu.Item>

              <DropdownMenu.Item>
                <Flex
                  justify="center"
                  align="center"
                  gap="2"
                  className="cursor-pointer w-full h-7 rounded-sm"
                >
                  <LuLogOut /> <Text>Log Out</Text>
                </Flex>
              </DropdownMenu.Item>

            </Flex>

            
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Flex>
    </Flex>
  );
};

export default NavbarComponent;
