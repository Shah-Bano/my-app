import React, { useState, useEffect } from "react";
import * as d3 from "d3";

export default function WorldMap() {
  const [geoData, setGeoData] = useState(null);
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    d3.json("/custom.geo.json").then((data) => {
      setGeoData(data);
    });
  }, []);

  const handleMouseEnter = (feature) => {
    setHoveredCountry(feature);
  };

  const handleMouseLeave = () => {
    setHoveredCountry(null);
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleCountryClick = (feature) => {
    setSelectedCountry(selectedCountry?.id === feature.id ? null : feature);
  };

  return (
    <div className="w-full bg-gradient-to-b from-blue-50 to-blue-100 p-4 rounded-lg">
      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Interactive World Cuisine Map</h1>
        <p className="text-gray-600">Hover over countries to see more info</p>
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
          <rect width="2000" height="857" fill="#dbeafe" />

          {geoData &&
            geoData.features.map((feature, index) => {
              const { name } = feature.properties;
              const path = d3.geoPath().projection(
                d3.geoMercator()
                  .scale(300)
                  .translate([1000, 450])
              );

              return (
                <path
                  key={index}
                  d={path(feature)}
                  fill={
                    hoveredCountry?.properties.name === name
                      ? "#60a5fa"
                      : selectedCountry?.properties.name === name
                      ? "#34d399"
                      : "#3b82f6"
                  }
                  stroke="#374151"
                  strokeWidth={0.5}
                  onMouseEnter={() => handleMouseEnter(feature)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleCountryClick(feature)}
                  className={`transition-all duration-300 cursor-pointer`}
                />
              );
            })}
        </svg>

        {/* Tooltip */}
        {hoveredCountry && (
          <div
            className="absolute bg-white border border-gray-300 rounded-lg shadow-lg p-3 pointer-events-none z-10 max-w-xs"
            style={{
              top: mousePosition.y + 10,
              left: mousePosition.x + 10,
            }}
          >
            <div className="font-bold text-lg text-gray-800 mb-2">
              {hoveredCountry.properties.name}
            </div>
            <div className="text-sm text-gray-600">
              ISO Code: {hoveredCountry.properties.iso_a2}
            </div>
          </div>
        )}
      </div>

      {/* Selected Country Info */}
      {selectedCountry && (
        <div className="mt-6 bg-white rounded-lg shadow-lg p-6 border border-green-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              {selectedCountry.properties.name} Selected
            </h2>
            <button
              onClick={() => setSelectedCountry(null)}
              className="text-gray-500 hover:text-gray-700 text-xl font-bold"
            >
              ×
            </button>
          </div>
          <p className="text-gray-600">
            More information can go here, like cultural facts, dishes, or links.
          </p>
        </div>
      )}
    </div>
  );
}
