import React, { useState } from "react";

const countries = [
  { id: "CN", name: "China", image: "1.png" },
  { id: "GB", name: "Britain", image: "2.png" },
  { id: "BE", name: "Belgium", image: "3.png" },
  { id: "FR", name: "France", image: "4.png" },
  { id: "LB", name: "Lebanon", image: "5.png" },
  { id: "PS", name: "Palestine", image: "6.png" },
  { id: "SA", name: "Saudi Arabia", image: "7.png" },
  { id: "YE", name: "Yemen", image: "8.png" },
  { id: "PK", name: "Pakistan", image: "9.png" },
  { id: "IN", name: "India", image: "10.png" },
  { id: "EG", name: "Egypt", image: "11.png" },
  { id: "IR", name: "Iran", image: "12.png" },
  { id: "TR", name: "Turkey", image: "13.png" },
  { id: "AF", name: "Afghanistan", image: "14.png" },
];

export default function WorldMap() {
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (id, name) => {
    setHoveredCountry({ id, name });
  };

  const handleMouseLeave = () => {
    setHoveredCountry(null);
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div style={{ position: "relative" }} onMouseMove={handleMouseMove}>
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.03); opacity: 0.85; }
          100% { transform: scale(1); opacity: 1; }
        }
        .pulsing {
          animation: pulse 1s infinite ease-in-out;
          transform-box: fill-box;
          transform-origin: center;
          filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.4));
        }
      `}</style>

      <svg
        viewBox="0 0 2000 857"
        width="100%"
        height="auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {countries.map(({ id, image }) => (
            <pattern
              key={id}
              id={`${id}Pattern`}
              patternUnits="userSpaceOnUse"
              width="500"
              height="500"
            >
              <image
                href={`${process.env.PUBLIC_URL}/images/${image}`}
                x="0"
                y="0"
                width="500"
                height="500"
                preserveAspectRatio="xMidYMid slice"
              />
            </pattern>
          ))}
        </defs>

        {countries.map(({ id, name }) => (
          <path
            key={id}
            id={id}
            name={name}
            d={
              id === "EG"
                ? "M1172.1 301.4l3.9 9.4 0.7 1.6-1.3 2.6-0.7 4.8-1.2 3.4-1.2 1.1-2-2.1-2.7-2.8-4.7-9.2-0.5 0.6 2.8 6.7 3.9 6.5 4.9 10 2.3 3.5 2 3.6 5.4 7.1-1 1.1 0.4 4.2 6.8 5.8 1.1 1.3-22.1 0-21.5 0-22.3 0-1-23.7-1.3-22.8-2-5.2 1.1-3.9-1-2.8 1.7-3.1 7.2-0.1 5.4 1.7 5.5 1.9 2.6 1 4-2 2.1-1.8 4.7-0.6 3.9 0.8 1.8 3.2 1.1-2.1 4.4 1.5 4.3 0.4 2.5-1.6z"
                : id === "IR"
                ? "M1229 253.2l1.8-0.2 5.3-4.7 1.9-0.5 1.9 1.9-1.2 3.1 3.9 3.4 1.3-0.4 2.5 4.8 5.3 1.3 4.3 3.2 7.7 1.1 8-1.7 0.2-1.5 4.4-1.2 3-3.7 3.6 0.2 2-1.2 3.9 0.6 6.6 3.3 4.3 0.7 7.3 5.6 4 0.3 1.7 5.3-0.6 8-0.5 4.7 2.5 1-1.6 3.5 2.7 5.1 1.2 4.1 4.3 1.1 1.1 4.1-3.9 5.8 3.2 3.4 2.8 3.9 5.7 2.8 1 5.6 2.7 1.1 0.9 2.9-7.5 3.4-1.1 7.4-10.6-1.9-6.2-1.5-6.3-0.8-3.3-7.9-2.8-1.1-4.1 1.1-5.1 3.1-7-2.1-6.1-5-5.5-1.8-4.4-6.1-5.2-8.5-2.8 1-3.7-2.1-1.7 2.5-3.5-3.4-0.5-3.4-1.7 0 0.2-4.7-3.5-4.8-7.1-3.6-4.6-6.1 0.5-5 2.3-2.2-0.9-3.7-3.8-2-4.7-7.6-3.8-5.1 0.7-2-2.9-7.3 3.3-1.9 1.2 2.5 3.2 2.9 3.8 0.9z"
                : id === "TR"
                ? "M1121.9 239.9 1123.1 239.2 1124.2 235.2 1121.5 233.5 1126.5 231.5 1131.1 232.3 1132 234.8 1136.8 236.8 1136.1 238.4 1129.9 238.7 1127.9 240.7 1124 244.1 1122 241.2 1121.9 239.9 Z"
                : id === "AF"
                ? "M1383 261.6l1.5 1.8-2.9 0.8-2.4 1.1-5.9 0.8-5.3 1.3-2.4 2.8 1.9 2.7 1.4 3.2-2 2.7 0.8 2.5-0.9 2.3-5.2-0.2 3.1 4.2-3.1 1.7-1.4 3.8 1.1 3.9-1.8 1.8-2.1-0.6-4 0.9-0.2 1.7-4.1 0-2.3 3.7 0.8 5.4-6.6 2.7-3.9-0.6-0.9 1.4-3.4-0.8-5.3 1-9.6-3.3 3.9-5.8-1.1-4.1-4.3-1.1-1.2-4.1-2.7-5.1 1.6-3.5-2.5-1 0.5-4.7 0.6-8 5.9 2.5 3.9-0.9 0.4-2.9 4-0.9 2.6-2-0.2-5.1 4.2-1.3 0.3-2.2 2.9 1.7 1.6 0.2 3 0 4.3 1.4 1.8 0.7 3.4-2 2.1 1.2 0.9-2.9 3.2 0.1 0.6-0.9-0.2-2.6 1.7-2.2 3.3 1.4-0.1 2 1.7 0.3 0.9 5.4 2.7 2.1 1.5-1.4 2.2-0.6 2.5-2.9 3.8 0.5 5.4 0z"
                : "M0,0"
            }
            fill={`url(#${id}Pattern)`}
            stroke="black"
            strokeWidth={0.2}
            onMouseEnter={() => handleMouseEnter(id, name)}
            onMouseLeave={handleMouseLeave}
            className={hoveredCountry?.id === id ? "pulsing" : ""}
            style={{
              cursor: "pointer",
              transition: "all 0.3s ease",
              stroke: hoveredCountry?.id === id ? "#444" : "black",
              strokeWidth: hoveredCountry?.id === id ? 0.5 : 0.2,
            }}
          />
        ))}
      </svg>

      {hoveredCountry && (
        <div
          style={{
            position: "absolute",
            top: mousePosition.y + 10,
            left: mousePosition.x + 10,
            backgroundColor: "white",
            padding: "8px",
            border: "1px solid black",
            pointerEvents: "none",
            zIndex: 10,
          }}
        >
          <strong>{hoveredCountry.name}</strong>
          <div>Menu items or dishes here...</div>
        </div>
      )}
    </div>
  );
}
