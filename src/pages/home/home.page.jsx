import { Text } from "@radix-ui/themes";
import DynamicButton from "../../components/common/dynamicButton";
import DynamicIcon from "../../components/common/dynamicIcon";

const Home = () => {
  return (
    <div>
      This is Home Page
      <Text>
        hello <DynamicIcon src="/assets/menu.svg" />
      </Text>
      <DynamicButton styles="bg-red-200" btnText="hello" />
    </div>
  );
};

export default Home;
