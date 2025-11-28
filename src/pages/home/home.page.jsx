import { Text } from "@radix-ui/themes";
import DynamicButton from "../../components/common/dynamicButton";
import DynamicIcon from "../../components/common/dynamicIcon";
import { FaUser } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      This is Home Page
      <FaUser />
      <Text>
        hello 
      <DynamicIcon src="/assets/menu.svg" />
      </Text>
      <DynamicButton styles="bg-red-200" btnText="hello" />
    </div>
  );
};

export default Home;
