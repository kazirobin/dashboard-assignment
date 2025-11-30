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
    icon:<DynamicIcon src="assets/cards-icon/Icon2.png"/>,
    counter: "10,293",
    status: "up",
    percentage: "1.3%",
    details: "Up from past week",
  },
  {
    id: 3,
    title: "total sales",
    icon:<DynamicIcon src="assets/cards-icon/Icon3.png"/>,
    counter: "$89,000",
    status: "down",
    percentage: "4.3%",
    details: "Down from yesterday",
  },
  {
    id: 4,
    title: "total pending",
    icon:<DynamicIcon src="assets/cards-icon/Icon4.png"/>,
    counter: "2,040",
    status: "up",
    percentage: "3.2%",
    details: "Up from yesterday",
  },
];

const Card = ({ card }) => {
  const StatusData = statusIcons[card.status] || statusIcons.up;
  const StatusIcon = StatusData.icon;
  
  return (
    <div className="mx-auto my-4 first:ms-0 last:me-0 p-4 bg-white rounded-lg shadow-sm">
      <Flex gap="8"  align="center">
        <div>
          <p className="capitalize text-gray-500 text-sm">{card.title}</p>
          <h1 className="text-2xl font-semibold">{card.counter}</h1>
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
          <p className="text-xs text-gray-500">{card.details}</p>

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