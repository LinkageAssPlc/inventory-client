import { Flex, Text } from "@chakra-ui/react";
import { IconProp } from "./icon";

const ReportIcon = ({ active, label }: IconProp) => {
  return (
    <>
      {active ? (
        <svg
          width="16"
          height="18"
          viewBox="0 0 16 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.1652 12.7522H4.89233"
            stroke="#024F83"
            stroke-width="1.30322"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.1652 9.11493H4.89233"
            stroke="#024F83"
            stroke-width="1.30322"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.28592 5.48606H4.89233"
            stroke="#024F83"
            stroke-width="1.30322"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.3323 1.04616C11.3323 1.04616 4.66245 1.04964 4.65202 1.04964C2.25409 1.0644 0.769287 2.64217 0.769287 5.04879V13.0384C0.769287 15.4572 2.26539 17.041 4.68417 17.041C4.68417 17.041 11.3532 17.0384 11.3645 17.0384C13.7624 17.0237 15.2481 15.445 15.2481 13.0384V5.04879C15.2481 2.63001 13.7511 1.04616 11.3323 1.04616Z"
            stroke="#024F83"
            stroke-width="1.30322"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="16"
          height="18"
          viewBox="0 0 16 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.1652 12.7522H4.89233"
            stroke="#024F83"
            stroke-width="1.30322"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.1652 9.11493H4.89233"
            stroke="#024F83"
            stroke-width="1.30322"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.28592 5.48606H4.89233"
            stroke="#024F83"
            stroke-width="1.30322"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.3323 1.04616C11.3323 1.04616 4.66245 1.04964 4.65202 1.04964C2.25409 1.0644 0.769287 2.64217 0.769287 5.04879V13.0384C0.769287 15.4572 2.26539 17.041 4.68417 17.041C4.68417 17.041 11.3532 17.0384 11.3645 17.0384C13.7624 17.0237 15.2481 15.445 15.2481 13.0384V5.04879C15.2481 2.63001 13.7511 1.04616 11.3323 1.04616Z"
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

export default ReportIcon;
