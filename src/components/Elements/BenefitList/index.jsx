const BenefitList = (props) => {
  const { children, iconWidth, iconHeight, iconColor } = props;
  return (
    <div className="flex flex-row items-center gap-x-3">
      <svg
        width={iconWidth}
        height={iconHeight}
        viewBox={`0 0 30 31`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="15"
          cy="15.5"
          r="15"
          fill={
            iconColor === "orange"
              ? "#FF9736"
              : iconColor === "blue"
              ? "#5313CA"
              : "#000000"
          }
        />
        <path
          d="M7.5 16L10.8281 19.2542C12.0705 20.4689 14.0817 20.3775 15.2087 19.0551L22.5 10.5"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-lg font-semibold">{children}</span>
    </div>
  );
};

export default BenefitList;
