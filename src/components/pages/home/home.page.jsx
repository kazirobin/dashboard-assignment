import { Text } from "@radix-ui/themes";
import Icon from "../../shared/icon/icon.component";
import DynamicButton from './../../shared/dynamicButton/dynamicButton.component';

const Home = () => {
  return <div>This is Home Page

    <Text>hello <Icon src="/assets/menu.svg"/></Text>
    <DynamicButton color="bg-red-200" btnText="hello"/>
  </div>;
};

export default Home;
