import React, { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

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
  AF: ["Kabuli Pulao", "Mantu", "Ashak", "Bolani"],
};

export default function WorldMap() {
  const [hovered, setHovered] = useState(null);
  const [selected, setSelected] = useState(null);
  const [geoData, setGeoData] = useState(null);

  const interactiveCountryIDs = countries.map((c) => c.id);

  useEffect(() => {
    fetch("/custom.geo.json")
      .then((res) => res.json())
      .then((data) => setGeoData(data));
  }, []);

  if (!geoData) return <div>Loading map...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Interactive World Cuisine Map</h1>

      <ComposableMap projection="geoMercator" width={1000} height={500}>
        <Geographies geography={geoData}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const id = geo.properties.ISO_A2;
              const name = geo.properties.ADMIN;
              const isInteractive = interactiveCountryIDs.includes(id);

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() =>
                    isInteractive && setHovered({ id, name })
                  }
                  onMouseLeave={() => setHovered(null)}
                  onClick={() =>
                    isInteractive &&
                    setSelected(
                      selected?.id === id ? null : { id, name }
                    )
                  }
                  fill={
                    selected?.id === id
                      ? "#34d399"
                      : hovered?.id === id
                      ? "#60a5fa"
                      : isInteractive
                      ? "#3b82f6"
                      : "#e5e7eb"
                  }
                  stroke="#374151"
                  strokeWidth={0.5}
                  style={{
                    default: {
                      outline: "none",
                      cursor: isInteractive ? "pointer" : "default",
                    },
                    hover: {
                      fill: isInteractive ? "#60a5fa" : "#e5e7eb",
                      outline: "none",
                    },
                    pressed: {
                      fill: "#34d399",
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      {hovered && (
        <div className="mt-4 p-4 bg-white border shadow max-w-md rounded">
          <h2 className="text-lg font-bold mb-2">{hovered.name}</h2>
          <p className="text-sm text-gray-600">Hovering over this country.</p>
        </div>
      )}

      {selected && (
        <div className="mt-6 bg-white border border-green-200 shadow-lg p-6 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">
              {selected.name} Cuisine
            </h2>
            <button
              onClick={() => setSelected(null)}
              className="text-gray-500 hover:text-gray-700 text-xl"
            >
              ×
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-green-700 mb-2">
                Popular Dishes
              </h3>
              <ul className="space-y-1 text-gray-700">
                {(countryMenus[selected.id] || []).map((dish, idx) => (
                  <li key={idx}>• {dish}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-green-700 mb-2">Flag</h3>
              <img
                src={`/${countries.find((c) => c.id === selected.id)?.image}`}
                alt={`${selected.name} flag`}
                className="w-28 border rounded shadow"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
