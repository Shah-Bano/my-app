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

const countryPaths = {
  CN: "M 1602.2 381.9 1597.9 385 1593 383 1592 377.5 1594.2 374.6 1600 372.8 1603.3 372.9 1604.9 375.4 1602.9 378.2 1602.2 381.9 Z",
  GB: "M 956.7 158.2 953.2 157 950.2 157.1 951.4 153.8 950.5 150.6 954.5 150.3 959.4 154.1 956.7 158.2 Z",
  BE: "M1016.5 177.1l-0.4 4.2-1.3 0.2-0.4 3.5-4.4-2.9-2.5 0.5-3.5-2.9-2.4-2.5-2.2-0.1-0.8-2.2 3.9-1.2 3.6 0.5 4.5-1.3 3.1 2.7 2.8 1.5z",
  FR: "M 1035.7 231.4 1034.2 236.3 1031.8 235 1030.5 230.8 1031.4 228.4 1034.6 226 1035.7 231.4 Z",
  LB: "M1179.1 288.2l-1.4 0.1-0.4 1.1-1.8 0 1.3-5.3 2.2-4.5 0-0.2 2.5 0.3 1.2 2.5-2.7 2.5-0.9 3.5z",
  PS: "M1178.3 293.8l0.4 4-0.6 1.9-2.5 0.8 0.1-1.7 1.3-0.9-1.5-0.7 0.7-4.2 2.1 0.8z",
  SA: "M1240.5 315l5 0.6 1.7 3.1 3.9-0.2 2.7 5.6 2.9 1.4 1.2 2.3 4 2.7 0.7 2.6-0.4 2.2 0.9 2.1 1.8 1.8 0.9 2.1 1 1.6 1.8 1.3 1.5-0.5 1.3 2.5 0.3 1.4 2.7 6.6 16.9 3.2 1-1.4 3 4.6-2.6 12.8-16.3 6.4-15.9 2.5-5 2.9-3.5 6.7-2.6 1.1-1.5-2.1-2.1 0.3-5.5-0.7-1.1-0.6-6.4 0.1-1.5 0.6-2.4-1.6-1.3 3.1 0.8 2.7-2.4 2.1-0.9-2.8-1.8-1.9-0.5-2.6-3.1-2.3-3.3-5.4-1.9-5.2-4.1-4.4-2.5-1.1-4.1-6.1-0.9-4.4 0-3.8-3.6-7.2-2.8-2.5-3-1.3-2.1-3.7 0.2-1.4-1.8-3.4-1.7-1.4-2.5-4.8-3.8-5.1-3.1-4.4-2.7 0 0.5-3.5 0.1-2.3 0.4-2.6 6.2 1.1 2.1-2 1.1-2.3 4.1-0.9 0.7-2.2 1.6-1-6-6.5 10.4-3.2 0.9-1 6.8 1.8 8.6 4.5 16.8 12.9 10.2 0.5z",
  YE: "M1283.8 394.9l-4 1.7-0.9 2.9 0 2.2-5.4 2.7-8.8 3-4.7 4.5-2.5 0.4-1.7-0.4-3.2 2.7-3.5 1.2-4.7 0.3-1.4 0.4-1.1 1.7-1.5 0.5-0.8 1.6-2.8-0.2-1.7 0.9-4-0.3-1.6-3.8 0-3.5-1-1.9-1.3-4.7-1.8-2.6 1.1-0.4-0.7-2.9 0.6-1.2-0.4-2.8 2.4-2.1-0.8-2.7 1.3-3.1 2.4 1.6 1.5-0.6 6.4-0.1 1.1 0.6 5.5 0.7 2.1-0.3 1.5 2.1 2.6-1.1 3.5-6.7 5-2.9 15.9-2.5 5.2 10.6 2.2 4.5z",
  PK: "M1401.6 273.9l-3.8 5.4-5.7 1-8.5-1.6-2 2.8 3.3 5.6 2.9 4.4 5.1 3.1-3.8 3.7 1 4.6-3.9 6.5-2.2 6.5-4.5 6.7-6.5-0.5-4.9 6.8 4 2.8 1.4 5 3.5 3.2 1.8 5.5-12.1 0-3.2 4.3-4.2-1.6-2.2-4.6-4.9-4.9-10 1.2-9 0.1-7.6 0.9 1.1-7.4 7.5-3.4-0.9-2.9-2.7-1.1-1-5.6-5.7-2.8-2.8-3.9-3.2-3.4 9.6 3.3 5.3-1 3.4 0.8 0.9-1.4 3.9 0.6 6.6-2.7-0.8-5.4 2.3-3.7 4.1 0 0.2-1.7 4-0.9 2.1 0.6 1.8-1.8-1.1-3.9 1.4-3.8 3.1-1.7-3.1-4.2 5.2 0.2 0.9-2.3-0.8-2.5 2-2.7-1.4-3.2-1.9-2.7 2.4-2.8 5.3-1.3 5.9-0.8 2.4-1.1 2.9-0.8 4.7 3 2.9 5 9.5 2.5z",
  IN: "M1427.6 308l-2.8 3-0.9 6 5.8 2.4 5.8 3.1 7.8 3.6 7.7 0.9 3.8 3.2 4.3 0.6 6.9 1.5 4.6-0.1 0.1-2.5-1.5-4.1-0.2-2.7 3.1-1.4 1.5 5.1 0.4 1.2 5.5 2.5 3.2-1 4.7 0.4 4.5-0.2-0.5-3.9-2.6-2.1 4.2-0.8 3.9-4.8 5.4-4 4.9 1.5 3.2-2.7 3.6 4-1.2 2.7 6.1 1 1 2.4-1.7 1.2 1.4 3.9-4.2-1.1-6.2 4.4 0.9 3.7-2 5.4 0.3 3.1-1.6 5.3-4.6-1.5 0.9 6.7-1 2.2 1 2.7-2.5 1.5-4.4-10.2-1.5 0-0.3 4.2-3.6-3.4 1.2-3.6 2.4-0.4 1.6-5.4-3.4-1.1-5.1 0.1-5.4-0.9-1.2-4.5-2.7-0.3-4.9-2.8-1.2 4.4 4.6 3.4-3 2.4-0.9 2.3 3.7 1.7-0.3 3.9 2.6 4.8 1.6 5.3-0.5 2.4-3.8-0.1-6.6 1.3 0.9 4.8-2.4 3.8-7.5 4.4-5.3 7.5-3.8 4.1-5 4.2 0.3 2.9-2.6 1.6-4.8 2.3-2.6 0.3-1.2 4.9 1.9 8.4 0.7 5.3-1.9 6.1 0.7 10.9-2.9 0.3-2.3 4.9 1.9 2.2-5.1 1.8-1.7 4.3-2.2 1.9-5.6-6-3.1-9-2.5-6.5-2.2-3-3.4-6.2-2-8-1.4-4-5.9-8.8-3.5-12.5-2.6-8.2-0.8-7.8-1.7-6-7.7 3.9-4-0.8-8.1-7.8 2.4-2.3-1.9-2.5-7.1-5.5 3.2-4.3 12.1 0-1.8-5.5-3.5-3.2-1.4-5-4-2.8 4.9-6.8 6.5 0.5 4.5-6.7 2.2-6.5 3.9-6.5-1-4.6 3.8-3.7-5.1-3.1-2.9-4.4-3.3-5.6 2-2.8 8.5 1.6 5.7-1 3.8-5.4 7.7 7.6 0.8 5.2 3 3.3 0.6 3.3-4.1-0.9 3.2 7.1 6.2 4 8.6 4.5z",
  EG: "M1172.1 301.4l3.9 9.4 0.7 1.6-1.3 2.6-0.7 4.8-1.2 3.4-1.2 1.1-2-2.1-2.7-2.8-4.7-9.2-0.5 0.6 2.8 6.7 3.9 6.5 4.9 10 2.3 3.5 2 3.6 5.4 7.1-1 1.1 0.4 4.2 6.8 5.8 1.1 1.3-22.1 0-21.5 0-22.3 0-1-23.7-1.3-22.8-2-5.2 1.1-3.9-1-2.8 1.7-3.1 7.2-0.1 5.4 1.7 5.5 1.9 2.6 1 4-2 2.1-1.8 4.7-0.6 3.9 0.8 1.8 3.2 1.1-2.1 4.4 1.5 4.3 0.4 2.5-1.6z",
  IR: "M1229 253.2l1.8-0.2 5.3-4.7 1.9-0.5 1.9 1.9-1.2 3.1 3.9 3.4 1.3-0.4 2.5 4.8 5.3 1.3 4.3 3.2 7.7 1.1 8-1.7 0.2-1.5 4.4-1.2 3-3.7 3.6 0.2 2-1.2 3.9 0.6 6.6 3.3 4.3 0.7 7.3 5.6 4 0.3 1.7 5.3-0.6 8-0.5 4.7 2.5 1-1.6 3.5 2.7 5.1 1.2 4.1 4.3 1.1 1.1 4.1-3.9 5.8 3.2 3.4 2.8 3.9 5.7 2.8 1 5.6 2.7 1.1 0.9 2.9-7.5 3.4-1.1 7.4-10.6-1.9-6.2-1.5-6.3-0.8-3.3-7.9-2.8-1.1-4.1 1.1-5.1 3.1-7-2.1-6.1-5-5.5-1.8-4.4-6.1-5.2-8.5-2.8 1-3.7-2.1-1.7 2.5-3.5-3.4-0.5-3.4-1.7 0 0.2-4.7-3.5-4.8-7.1-3.6-4.6-6.1 0.5-5 2.3-2.2-0.9-3.7-3.8-2-4.7-7.6-3.8-5.1 0.7-2-2.9-7.3 3.3-1.9 1.2 2.5 3.2 2.9 3.8 0.9z",
  TR: "M1121.9 239.9 1123.1 239.2 1124.2 235.2 1121.5 233.5 1126.5 231.5 1131.1 232.3 1132 234.8 1136.8 236.8 1136.1 238.4 1129.9 238.7 1127.9 240.7 1124 244.1 1122 241.2 1121.9 239.9 Z",
  AF: "M1383 261.6l1.5 1.8-2.9 0.8-2.4 1.1-5.9 0.8-5.3 1.3-2.4 2.8 1.9 2.7 1.4 3.2-2 2.7 0.8 2.5-0.9 2.3-5.2-0.2 3.1 4.2-3.1 1.7-1.4 3.8 1.1 3.9-1.8 1.8-2.1-0.6-4 0.9-0.2 1.7-4.1 0-2.3 3.7 0.8 5.4-6.6 2.7-3.9-0.6-0.9 1.4-3.4-0.8-5.3 1-9.6-3.3 3.9-5.8-1.1-4.1-4.3-1.1-1.2-4.1-2.7-5.1 1.6-3.5-2.5-1 0.5-4.7 0.6-8 5.9 2.5 3.9-0.9 0.4-2.9 4-0.9 2.6-2-0.2-5.1 4.2-1.3 0.3-2.2 2.9 1.7 1.6 0.2 3 0 4.3 1.4 1.8 0.7 3.4-2 2.1 1.2 0.9-2.9 3.2 0.1 0.6-0.9-0.2-2.6 1.7-2.2 3.3 1.4-0.1 2 1.7 0.3 0.9 5.4 2.7 2.1 1.5-1.4 2.2-0.6 2.5-2.9 3.8 0.5 5.4 0z"
};

// Gray outline countries (non-interactive)
const grayCountries = [
  // Europe
  { d: "M950 140L1080 155L1070 180L940 170Z", name: "Germany" },
  { d: "M1080 160L1130 165L1120 190L1070 180Z", name: "Poland" },
  { d: "M900 180L1010 185L1000 210L890 200Z", name: "Spain" },
  { d: "M1020 200L1080 205L1070 230L1010 220Z", name: "Italy" },
  { d: "M960 130L1020 145L1010 170L950 160Z", name: "Netherlands" },
  
  // Asia  
  { d: "M1500 150L1700 210L1680 250L1480 190Z", name: "Russia" },
  { d: "M1550 280L1650 310L1640 340L1540 310Z", name: "Mongolia" },
  { d: "M1300 250L1380 260L1370 290L1290 280Z", name: "Kazakhstan" },
  { d: "M1200 280L1300 290L1290 320L1190 310Z", name: "Iraq" },
  { d: "M1150 320L1240 330L1230 360L1140 350Z", name: "Jordan" },
  
  // Other continents
  { d: "M200 200L400 220L380 320L180 300Z", name: "United States" },
  { d: "M300 450L500 470L480 570L280 550Z", name: "Brazil" },
  { d: "M1600 450L1750 470L1730 550L1580 530Z", name: "Australia" },
  { d: "M1050 450L1150 470L1130 550L1030 530Z", name: "South Africa" },
  { d: "M100 350L200 370L180 450L80 430Z", name: "Mexico" },
  { d: "M50 150L180 170L160 250L30 230Z", name: "Canada" },
];

// Sample menu data for countries
const countryMenus = {
  CN: ["Kung Pao Chicken", "Peking Duck", "Sweet & Sour Pork", "Fried Rice"],
  GB: ["Fish & Chips", "Bangers & Mash", "Shepherd's Pie", "Beef Wellington"],
  BE: ["Moules-frites", "Belgian Waffles", "Carbonnade Flamande", "Speculoos"],
  FR: ["Coq au Vin", "Ratatouille", "Bouillabaisse", "Crème Brûlée"],
  LB: ["Hummus", "Tabbouleh", "Fattoush", "Kibbeh"],
  PS: ["Musakhan", "Knafeh", "Maqluba", "Za'atar Bread"],
  SA: ["Kabsa", "Shawarma", "Mutabbaq", "Qursan"],
  YE: ["Saltah", "Fahsa", "Bint al-Sahn", "Zurbian"],
  PK: ["Biryani", "Karahi", "Nihari", "Chapli Kebab"],
  IN: ["Butter Chicken", "Biryani", "Masala Dosa", "Samosa"],
  EG: ["Koshari", "Ful Medames", "Molokhia", "Baklava"],
  IR: ["Kebab", "Ghormeh Sabzi", "Fesenjan", "Tahdig"],
  TR: ["Kebab", "Baklava", "Turkish Delight", "Pide"],
  AF: ["Kabuli Pulao", "Mantu", "Ashak", "Bolani"]
};

export default function WorldMap() {
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
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

  const handleCountryClick = (id, name) => {
    setSelectedCountry(selectedCountry?.id === id ? null : { id, name });
  };

  return (
    <div className="w-full bg-gradient-to-b from-blue-50 to-blue-100 p-4 rounded-lg">
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
          100% { transform: scale(1); opacity: 1; }
        }
        .pulsing {
          animation: pulse 1.5s infinite ease-in-out;
          transform-box: fill-box;
          transform-origin: center;
          filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.6));
        }
        .selected {
          filter: drop-shadow(0 0 12px rgba(34, 197, 94, 0.8));
          stroke: #22c55e !important;
          stroke-width: 1.5 !important;
        }
      `}</style>

      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Interactive World Cuisine Map</h1>
        <p className="text-gray-600">Hover over countries to see their traditional dishes</p>
      </div>

      <div 
        className="relative bg-white rounded-lg shadow-lg overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        <svg
          viewBox="0 0 2000 857"
          width="100%"
          height="auto"
          xmlns="http://www.w3.org/2000/svg"
          className="border border-gray-200"
        >
          <defs>
            <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#bfdbfe', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#dbeafe', stopOpacity: 1 }} />
            </linearGradient>
            
            {countries.map(({ id }) => (
              <pattern
                key={id}
                id={`${id}Pattern`}
                patternUnits="userSpaceOnUse"
                width="100"
                height="100"
              >
                <rect width="100" height="100" fill="#f3f4f6" />
                <circle cx="50" cy="50" r="30" fill="#3b82f6" opacity="0.7" />
                <text x="50" y="55" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">
                  {id}
                </text>
              </pattern>
            ))}
          </defs>

          {/* Ocean background */}
          <rect width="2000" height="857" fill="url(#oceanGradient)" />

          {/* Gray countries (non-interactive background) */}
          {grayCountries.map((country, index) => (
            <path
              key={`gray-${index}`}
              d={country.d}
              fill="#e5e7eb"
              stroke="#d1d5db"
              strokeWidth="0.5"
              opacity="0.7"
            />
          ))}

          {/* Interactive countries */}
          {countries.map(({ id, name }) => (
            <path
              key={id}
              id={id}
              name={name}
              d={countryPaths[id] || "M0,0"}
              fill={`url(#${id}Pattern)`}
              stroke="#374151"
              strokeWidth={0.5}
              onMouseEnter={() => handleMouseEnter(id, name)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleCountryClick(id, name)}
              className={`
                cursor-pointer transition-all duration-300
                ${hoveredCountry?.id === id ? 'pulsing' : ''}
                ${selectedCountry?.id === id ? 'selected' : ''}
              `}
              style={{
                stroke: hoveredCountry?.id === id ? '#3b82f6' : '#374151',
                strokeWidth: hoveredCountry?.id === id ? 1 : 0.5,
              }}
            />
          ))}
        </svg>

        {/* Hover tooltip */}
        {hoveredCountry && (
          <div
            className="absolute bg-white border border-gray-300 rounded-lg shadow-lg p-3 pointer-events-none z-10 max-w-xs"
            style={{
              top: Math.min(mousePosition.y + 10, window.innerHeight - 200),
              left: Math.min(mousePosition.x + 10, window.innerWidth - 200),
            }}
          >
            <div className="font-bold text-lg text-gray-800 mb-2">
              {hoveredCountry.name}
            </div>
            <div className="text-sm text-gray-600 mb-2">Traditional Dishes:</div>
            <div className="space-y-1">
              {(countryMenus[hoveredCountry.id] || ["No data available"]).map((dish, index) => (
                <div key={index} className="text-sm bg-blue-50 px-2 py-1 rounded">
                  • {dish}
                </div>
              ))}
            </div>
            <div className="text-xs text-gray-500 mt-2">Click to select</div>
          </div>
        )}
      </div>

      {/* Selected country panel */}
      {selectedCountry && (
        <div className="mt-6 bg-white rounded-lg shadow-lg p-6 border border-green-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              {selectedCountry.name} Cuisine
            </h2>
            <button
              onClick={() => setSelectedCountry(null)}
              className="text-gray-500 hover:text-gray-700 text-xl font-bold"
            >
              ×
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-green-700">Popular Dishes</h3>
              <div className="space-y-2">
                {(countryMenus[selectedCountry.id] || []).map((dish, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">{dish}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-green-700">About the Cuisine</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Discover the rich culinary traditions of {selectedCountry.name}. 
                Each dish tells a story of culture, history, and local ingredients 
                that have been passed down through generations.
              </p>
              <button className="Here's the continuation from where your code cut off:

```jsx
mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                Explore Recipes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="mt-6 bg-white rounded-lg shadow-lg p-4">
        <h3 className="text-lg font-semibold mb-3 text-gray-800">Map Legend</h3>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-blue-500 rounded"></div>
            <span>Interactive Countries</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gray-300 rounded"></div>
            <span>Other Countries</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-blue-100 rounded"></div>
            <span>Ocean</span>
          </div>
        </div>
      </div>
    </div>
  );
}
