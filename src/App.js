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
  { id: "PK", name: "Pakistan", image: "14.jpg" },
  { id: "IN", name: "India", image: "10.png" },
  { id: "EG", name: "Egypt", image: "11.png" },
  { id: "IR", name: "Iran", image: "12.png" },
  { id: "TR", name: "Turkey", image: "13.png" },
  { id: "AF", name: "Afghanistan", image: "9.png" },
];

export default function WorldMap() {
  const [hoveredCountry, setHoveredCountry] = useState(null);

  const handleMouseEnter = (id, name) => {
    setHoveredCountry({ id, name });
  };

  const handleMouseLeave = () => {
    setHoveredCountry(null);
  };

  return (
    <div style={{ position: "relative" }}>
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
            d="M0,0" // Replace with actual SVG path data for each country
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
            top: 20,
            left: 20,
            backgroundColor: "white",
            padding: "8px",
            border: "1px solid black",
            pointerEvents: "none",
          }}
        >
          <strong>{hoveredCountry.name}</strong>
          <div>Menu items or dishes here...</div>
        </div>
      )}
    </div>
  );
}
