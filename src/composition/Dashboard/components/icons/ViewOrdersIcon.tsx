import { Flex, Text } from "@chakra-ui/react";
import { IconProp } from "./icon";

const ViewOrdersIcon = ({ active, label }: IconProp) => {
  return (
    <>
      {active ? (
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke=""
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <rect
              x="5"
              y="4"
              width="14"
              height="17"
              rx="2"
              stroke="#024F83"
            ></rect>{" "}
            <path d="M9 9H15" stroke="#024F83" stroke-linecap="round"></path>{" "}
            <path d="M9 13H15" stroke="#024F83" stroke-linecap="round"></path>{" "}
            <path d="M9 17H13" stroke="#024F83" stroke-linecap="round"></path>{" "}
          </g>
        </svg>
      ) : (
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke=""
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <rect
              x="5"
              y="4"
              width="14"
              height="17"
              rx="2"
              stroke="#024F83"
            ></rect>{" "}
            <path d="M9 9H15" stroke="#024F83" stroke-linecap="round"></path>{" "}
            <path d="M9 13H15" stroke="#024F83" stroke-linecap="round"></path>{" "}
            <path d="M9 17H13" stroke="#024F83" stroke-linecap="round"></path>{" "}
          </g>
        </svg>
      )}
      <Flex>{active ? <Text>{label}</Text> : <Text>{label}</Text>}</Flex>
    </>
  );
};

export default ViewOrdersIcon;
