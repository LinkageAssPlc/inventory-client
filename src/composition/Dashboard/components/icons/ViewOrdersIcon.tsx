import { IconProp } from "./icon";

const ViewOrdersIcon = ({ active }: IconProp) => {
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.3152 1.31435H4.53496C2.72783 1.3074 1.2465 2.74789 1.20393 4.55416V13.8618C1.16396 15.6976 2.61923 17.2189 4.45503 17.2597C4.48197 17.2597 4.50803 17.2606 4.53496 17.2597H11.4759C13.2952 17.1859 14.7288 15.6828 14.7157 13.8618V5.89822L10.3152 1.31435Z"
            stroke="#fff"
            stroke-width="1.30322"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.0869 1.30411V3.83149C10.0869 5.06521 11.0843 6.06521 12.318 6.06869H14.7116"
            stroke="#fff"
            stroke-width="1.30322"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.92427 12.2586H5.23267"
            stroke="#fff"
            stroke-width="1.30322"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.14768 8.99833H5.23193"
            stroke="#fff"
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.3152 1.31435H4.53496C2.72783 1.3074 1.2465 2.74789 1.20393 4.55416V13.8618C1.16396 15.6976 2.61923 17.2189 4.45503 17.2597C4.48197 17.2597 4.50803 17.2606 4.53496 17.2597H11.4759C13.2952 17.1859 14.7288 15.6828 14.7157 13.8618V5.89822L10.3152 1.31435Z"
            stroke="#024F83"
            stroke-width="1.30322"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.0869 1.30411V3.83149C10.0869 5.06521 11.0843 6.06521 12.318 6.06869H14.7116"
            stroke="#024F83"
            stroke-width="1.30322"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.92427 12.2586H5.23267"
            stroke="#024F83"
            stroke-width="1.30322"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.14768 8.99833H5.23193"
            stroke="#024F83"
            stroke-width="1.30322"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
    </>
  );
};

export default ViewOrdersIcon;
