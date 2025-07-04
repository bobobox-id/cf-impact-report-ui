export default function Ellipse() {
  return (
    <div className="relative size-full" data-name="ellipse">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 70 70"
      >
        <circle
          cx="35"
          cy="35"
          id="ellipse"
          r="29"
          stroke="url(#paint0_linear_2003_168)"
          strokeWidth="12"
        />
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_2003_168"
            x1="1.56462e-06"
            x2="81.4415"
            y1="70"
            y2="17.8774"
          >
            <stop stopColor="#CFE6A6" />
            <stop offset="1" stopColor="#006A64" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}