import { Flex, Text } from "@chakra-ui/react";
import { IconProp } from "./icon";

const AnalyticsIcon = ({ active, label }: IconProp) => {
  return (
    <>
      {active ? (
        <svg
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.91519 8.00494V13.9651"
            stroke="white"
            stroke-width="1.30322"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.96987 5.15298V13.9651"
            stroke="white"
            stroke-width="1.30322"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.9579 11.1545V13.9651"
            stroke="white"
            stroke-width="1.30322"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.0077 0.879181H5.86567C3.02754 0.879181 1.24854 2.88795 1.24854 5.73165V13.403C1.24854 16.2467 3.01926 18.2555 5.86567 18.2555H14.0077C16.8541 18.2555 18.6248 16.2467 18.6248 13.403V5.73165C18.6248 2.88795 16.8541 0.879181 14.0077 0.879181Z"
            stroke="white"
            stroke-width="1.30322"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.91519 8.00494V13.9651"
            stroke="white"
            stroke-width="1.30322"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.96987 5.15298V13.9651"
            stroke="white"
            stroke-width="1.30322"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.9579 11.1545V13.9651"
            stroke="white"
            stroke-width="1.30322"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.0077 0.879181H5.86567C3.02754 0.879181 1.24854 2.88795 1.24854 5.73165V13.403C1.24854 16.2467 3.01926 18.2555 5.86567 18.2555H14.0077C16.8541 18.2555 18.6248 16.2467 18.6248 13.403V5.73165C18.6248 2.88795 16.8541 0.879181 14.0077 0.879181Z"
            stroke="white"
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

export default AnalyticsIcon;
