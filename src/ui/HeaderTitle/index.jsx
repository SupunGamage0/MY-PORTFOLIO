import "./HeaderTitle.css";

const HeaderTitle = () => {
  return (
    <svg
      width="614"
      height="390"
      viewBox="0 0 614 390"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="header__title"
    >
      {/* Gradient Animation */}
      <defs>
        <linearGradient id="gradText" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#60A5FA">
            <animate attributeName="offset" values="0;1;0" dur="5s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="#3B82F6">
            <animate attributeName="offset" values="1;0;1" dur="5s" repeatCount="indefinite" />
          </stop>
        </linearGradient>
      </defs>

      {/* Main Title */}
      <g id="text">
        <text
          x="50%"
          y="32%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="Poppins, Arial, sans-serif"
          fontSize="48"
          fill="url(#gradText)"
        >
          Full Stack Developer
        </text>

        {/* Tagline */}
        <text
          x="50%"
          y="42%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="Poppins, Arial, sans-serif"
          fontSize="16"
          fill="#BBBBBB"
        >
          "Code with purpose, design with passion."
        </text>
      </g>

      {/* 🎯 Smaller Cursor with Button and Name */}
      <g id="cursor" transform="scale(0.3) translate(950, 300)">
        <path
          d="M453.383 343L448 317L471 331L459.745 333.5L453.383 343Z"
          fill="#373737"
          stroke="white"
          strokeWidth="2"
        />
        <path
          d="M587 358C587 349.716 580.284 343 572 343H484.932C476.648 343 469.932 349.716 469.932 358V361C469.932 369.284 476.648 376 484.932 376H572C580.284 376 587 369.284 587 361V358Z"
          fill="#2563EB"
        />
        <text
          x="475"
          y="360"
          fontFamily="Poppins, Arial, sans-serif"
          fontSize="12"
          fill="#fff"
          alignmentBaseline="middle"
          style={{ letterSpacing: "1px" }}
        >
          Supun Gamage
        </text>
      </g>
    </svg>
  );
};

export default HeaderTitle;
