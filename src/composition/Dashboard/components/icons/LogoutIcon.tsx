import { IconProp } from "./icon";

const LogoutIcon = ({ active }: IconProp) => {
  return (
    <>
      {active ? (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.7579 5.56046V4.68231C12.7579 2.76693 11.2049 1.21393 9.28951 1.21393H4.70108C2.78665 1.21393 1.23364 2.76693 1.23364 4.68231V15.158C1.23364 17.0734 2.78665 18.6264 4.70108 18.6264H9.29892C11.2086 18.6264 12.7579 17.0781 12.7579 15.1684V14.2808"
            stroke="white"
            stroke-width="1.30322"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.1523 9.92007H7.81909"
            stroke="white"
            stroke-width="1.30322"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.396 7.17633L19.1519 9.91998L16.396 12.6646"
            stroke="white"
            stroke-width="1.30322"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.7579 5.56046V4.68231C12.7579 2.76693 11.2049 1.21393 9.28951 1.21393H4.70108C2.78665 1.21393 1.23364 2.76693 1.23364 4.68231V15.158C1.23364 17.0734 2.78665 18.6264 4.70108 18.6264H9.29892C11.2086 18.6264 12.7579 17.0781 12.7579 15.1684V14.2808"
            stroke="white"
            stroke-width="1.30322"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.1523 9.92007H7.81909"
            stroke="white"
            stroke-width="1.30322"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.396 7.17633L19.1519 9.91998L16.396 12.6646"
            stroke="white"
            stroke-width="1.30322"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
    </>
  );
};

export default LogoutIcon;
