import { IconProp } from "./icon";

const ProductIcon = ({ active }: IconProp) => {
  return (
    <>
      {active ? (
        <svg
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.858 17.9499H5.60524C2.94114 17.9499 0.897343 16.9877 1.47788 13.1148L2.15384 7.86613C2.51171 5.93366 3.74435 5.19408 4.8259 5.19408H13.6691C14.7666 5.19408 15.9276 5.98933 16.3412 7.86613L17.0171 13.1148C17.5102 16.5503 15.5221 17.9499 12.858 17.9499Z"
            stroke="#fff"
            stroke-width="1.30322"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.9774 5.00322C12.9774 2.93016 11.2969 1.24962 9.22385 1.24962V1.24962C8.22558 1.24539 7.26675 1.63899 6.55937 2.34339C5.85199 3.04778 5.45434 4.00494 5.45435 5.00322H5.45435"
            stroke="#fff"
            stroke-width="1.30322"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.8003 8.91586H11.7606"
            stroke="#fff"
            stroke-width="1.30322"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.73465 8.91586H6.69488"
            stroke="#fff"
            stroke-width="1.30322"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.858 17.9499H5.60524C2.94114 17.9499 0.897343 16.9877 1.47788 13.1148L2.15384 7.86613C2.51171 5.93366 3.74435 5.19408 4.8259 5.19408H13.6691C14.7666 5.19408 15.9276 5.98933 16.3412 7.86613L17.0171 13.1148C17.5102 16.5503 15.5221 17.9499 12.858 17.9499Z"
            stroke="#024F83"
            stroke-width="1.30322"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.9774 5.00322C12.9774 2.93016 11.2969 1.24962 9.22385 1.24962V1.24962C8.22558 1.24539 7.26675 1.63899 6.55937 2.34339C5.85199 3.04778 5.45434 4.00494 5.45435 5.00322H5.45435"
            stroke="#024F83"
            stroke-width="1.30322"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.8003 8.91586H11.7606"
            stroke="#024F83"
            stroke-width="1.30322"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.73465 8.91586H6.69488"
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

export default ProductIcon;
