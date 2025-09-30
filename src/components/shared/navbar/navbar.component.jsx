import { Flex, TextField } from "@radix-ui/themes";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Navbar = () => {
  return <Flex justify="between" className="bg-amber-300 w-full">
    <TextField.Root placeholder="Search..." >
      <TextField.Slot><FaMagnifyingGlass/></TextField.Slot>
    </TextField.Root>
    Navbar
    
    </Flex>;
};

export default Navbar;
