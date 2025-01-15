import { IconProp } from "./icon";

const AddStockIcon = ({ active }: IconProp) => {
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
            d="M0.900146 1.60954L2.70728 1.92231L3.54395 11.8902C3.61085 12.7043 4.29113 13.329 5.10782 13.3264H14.5857C15.365 13.3281 16.0262 12.7547 16.1366 11.9832L16.9611 6.2855C17.0532 5.64866 16.6109 5.05786 15.975 4.96577C15.9193 4.95795 2.99747 4.9536 2.99747 4.9536"
            stroke="#fff"
            stroke-width="1.30322"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.7827 8.16466H13.1919"
            stroke="#fff"
            stroke-width="1.30322"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.72654 16.3382C4.98805 16.3382 5.19918 16.5502 5.19918 16.8108C5.19918 17.0723 4.98805 17.2843 4.72654 17.2843C4.46503 17.2843 4.25391 17.0723 4.25391 16.8108C4.25391 16.5502 4.46503 16.3382 4.72654 16.3382Z"
            fill="#fff"
            stroke="#fff"
            stroke-width="1.30322"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.5271 16.3382C14.7886 16.3382 15.0006 16.5502 15.0006 16.8108C15.0006 17.0723 14.7886 17.2843 14.5271 17.2843C14.2656 17.2843 14.0544 17.0723 14.0544 16.8108C14.0544 16.5502 14.2656 16.3382 14.5271 16.3382Z"
            fill="#fff"
            stroke="#fff"
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
            d="M0.900146 1.60954L2.70728 1.92231L3.54395 11.8902C3.61085 12.7043 4.29113 13.329 5.10782 13.3264H14.5857C15.365 13.3281 16.0262 12.7547 16.1366 11.9832L16.9611 6.2855C17.0532 5.64866 16.6109 5.05786 15.975 4.96577C15.9193 4.95795 2.99747 4.9536 2.99747 4.9536"
            stroke="#024F83"
            stroke-width="1.30322"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.7827 8.16466H13.1919"
            stroke="#024F83"
            stroke-width="1.30322"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.72654 16.3382C4.98805 16.3382 5.19918 16.5502 5.19918 16.8108C5.19918 17.0723 4.98805 17.2843 4.72654 17.2843C4.46503 17.2843 4.25391 17.0723 4.25391 16.8108C4.25391 16.5502 4.46503 16.3382 4.72654 16.3382Z"
            fill="#024F83"
            stroke="#024F83"
            stroke-width="1.30322"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.5271 16.3382C14.7886 16.3382 15.0006 16.5502 15.0006 16.8108C15.0006 17.0723 14.7886 17.2843 14.5271 17.2843C14.2656 17.2843 14.0544 17.0723 14.0544 16.8108C14.0544 16.5502 14.2656 16.3382 14.5271 16.3382Z"
            fill="#024F83"
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

export default AddStockIcon;
