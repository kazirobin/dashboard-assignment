import { Flex } from "@radix-ui/themes";
import React from "react";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import DynamicIcon from "../../../components/common/dynamicIcon/dynamicIcon.component";

const statusIcons = {
  up: { icon: FaArrowTrendUp, color: "text-green-500" },
  down: { icon: FaArrowTrendDown, color: "text-red-500" },
};

const cardData = [
  {
    id: 1,
    title: "total user",
    icon:<DynamicIcon src="assets/cards-icon/Icon1.png"/>,
    counter: "40,689",
    status: "up",
    percentage: "8.5%",
    details: "Up from yesterday",
  },
  {
    id: 2,
    title: "total orders",
    icon:"",
    counter: "10,234",
    status: "down",
    percentage: "3.2%",
    details: "Down from yesterday",
  },
];

const Card = ({ card }) => {
  const StatusData = statusIcons[card.status] || statusIcons.up;
  const StatusIcon = StatusData.icon;
  
  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <Flex justify="between" align="center">
        <div>
          <p className="capitalize text-gray-500 text-sm">{card.title}</p>
          <h1 className="text-2xl font-semibold">{card.counter}</h1>
          <p className="text-xs text-gray-500">{card.details}</p>
        </div>
        <div className={`p-4 `}>
         {card.icon}
        </div>
      </Flex>
      <Flex align="center" gap="1" className="mt-2">
        <StatusIcon className={`text-xs ${StatusData.color}`} />
        <span className={`text-sm ${StatusData.color}`}>
          {card.percentage}
        </span>
      </Flex>
    </div>
  );
};

const CardsSection = () => {
  return (
    <div className="flex">
      {cardData.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default CardsSection;