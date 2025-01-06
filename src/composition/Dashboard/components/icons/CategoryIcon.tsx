import { Flex, Text } from "@chakra-ui/react";
import { IconProp } from "./icon";

const CategoryIcon = ({ active, label }: IconProp) => {
  return (
    <>
      {active ? (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.11719 4.1755C1.11719 1.89468 1.14161 1.13465 4.15804 1.13465C7.17447 1.13465 7.19889 1.89468 7.19889 4.1755C7.19889 6.45633 7.20851 7.21635 4.15804 7.21635C1.10757 7.21635 1.11719 6.45633 1.11719 4.1755Z"
            stroke="#024F83"
            stroke-width="1.30322"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.6743 4.1755C10.6743 1.89468 10.6987 1.13465 13.7152 1.13465C16.7316 1.13465 16.756 1.89468 16.756 4.1755C16.756 6.45633 16.7656 7.21635 13.7152 7.21635C10.6647 7.21635 10.6743 6.45633 10.6743 4.1755Z"
            stroke="#024F83"
            stroke-width="1.30322"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.11719 13.7325C1.11719 11.4516 1.14161 10.6916 4.15804 10.6916C7.17447 10.6916 7.19889 11.4516 7.19889 13.7325C7.19889 16.0133 7.20851 16.7733 4.15804 16.7733C1.10757 16.7733 1.11719 16.0133 1.11719 13.7325Z"
            stroke="#024F83"
            stroke-width="1.30322"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.6743 13.7325C10.6743 11.4516 10.6987 10.6916 13.7152 10.6916C16.7316 10.6916 16.756 11.4516 16.756 13.7325C16.756 16.0133 16.7656 16.7733 13.7152 16.7733C10.6647 16.7733 10.6743 16.0133 10.6743 13.7325Z"
            stroke="#024F83"
            stroke-width="1.30322"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.11719 4.1755C1.11719 1.89468 1.14161 1.13465 4.15804 1.13465C7.17447 1.13465 7.19889 1.89468 7.19889 4.1755C7.19889 6.45633 7.20851 7.21635 4.15804 7.21635C1.10757 7.21635 1.11719 6.45633 1.11719 4.1755Z"
            stroke="#024F83"
            stroke-width="1.30322"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.6743 4.1755C10.6743 1.89468 10.6987 1.13465 13.7152 1.13465C16.7316 1.13465 16.756 1.89468 16.756 4.1755C16.756 6.45633 16.7656 7.21635 13.7152 7.21635C10.6647 7.21635 10.6743 6.45633 10.6743 4.1755Z"
            stroke="#024F83"
            stroke-width="1.30322"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.11719 13.7325C1.11719 11.4516 1.14161 10.6916 4.15804 10.6916C7.17447 10.6916 7.19889 11.4516 7.19889 13.7325C7.19889 16.0133 7.20851 16.7733 4.15804 16.7733C1.10757 16.7733 1.11719 16.0133 1.11719 13.7325Z"
            stroke="#024F83"
            stroke-width="1.30322"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.6743 13.7325C10.6743 11.4516 10.6987 10.6916 13.7152 10.6916C16.7316 10.6916 16.756 11.4516 16.756 13.7325C16.756 16.0133 16.7656 16.7733 13.7152 16.7733C10.6647 16.7733 10.6743 16.0133 10.6743 13.7325Z"
            stroke="#024F83"
            stroke-width="1.30322"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
      <Flex>{active ? <Text>{label}</Text> : <Text>{label}</Text>}</Flex>
    </>
  );
};

export default CategoryIcon;
