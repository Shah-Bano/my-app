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

const countryPaths = {
  CN: "M 1625.6 185.5 1634.6 190 1640.6 195.8 1648.2 195.8 1650.8 193.4 1657.7 191.5 1659 197.2 1658.7 199.5 1661.5 206.3 1662.1 212.5 1655.2 211.4 1652.3 213.6 1657 219 1660.9 226.5 1658.4 226.6 1660.3 229.9 1654.8 226.1 1654.8 229.7 1648.4 232.4 1651.2 235.8 1646.6 235.5 1643 233.5 1641.9 238.1 1638 241.5 1635.9 245.6 1629.6 247.4 1627.2 250.4 1622.4 252.2 1623.7 249.2 1621.4 246.7 1623.4 242.4 1618.9 239.1 1615.5 241.3 1611.9 245.8 1610.6 249.9 1605.6 250.2 1604.3 253.2 1609.1 257.5 1613.9 258.6 1615.3 261.4 1620.4 263.3 1624.2 258.7 1630.1 261.2 1633.6 261.4 1635.9 264.7 1629.2 266.5 1628.2 270 1624.4 273.2 1623.5 277.7 1630.6 281.2 1635.2 287.5 1640.7 293.4 1646.2 298.3 1647.8 303.1 1645 304.9 1647.4 308.3 1651.3 310.3 1652.1 315.5 1652.2 320.6 1649.4 321.2 1647.3 328.1 1645 336.6 1641.6 344.2 1635.2 350.1 1628.6 355.6 1622.5 356.3 1619.6 359.1 1617.3 357.1 1614.8 360.2 1607.6 363.5 1601.8 364.4 1601.1 371.2 1598 371.6 1595.8 366.9 1596.7 364.5 1588.9 362.4 1586.5 363.5 1580.6 361.8 1577.5 359.2 1577.8 355.5 1572.5 354.3 1569.4 351.9 1565.3 355.3 1560 356.1 1555.6 356 1552.9 357.6 1550.2 358.5 1552.2 365.9 1549.2 365.7 1548.4 364.2 1547.9 361.5 1544.1 363.4 1541.5 362.2 1537 359.8 1537.8 354.5 1534.1 353.2 1531.7 347.3 1526.1 348.4 1525.4 340.8 1529.6 335.4 1528.7 330.1 1527.4 325.2 1524.7 323.7 1522 319.9 1518.9 320.4 1512.8 319.4 1514 316.7 1510.4 312.7 1507.2 315.4 1502.3 313.9 1496.9 317.9 1493 322.7 1488.8 323.5 1486 321.8 1483.1 321.6 1478.8 320.2 1476.2 321.8 1473.6 326.6 1472.1 321.5 1469 322.9 1462.5 322.2 1456 320.8 1451 317.9 1446.5 316.7 1444 313.6 1440.7 312.7 1434.3 308.5 1429.5 306.5 1427.6 308 1419 303.5 1412.8 299.5 1409.6 292.4 1413.7 293.3 1413.1 290 1410.1 286.7 1409.3 281.5 1401.6 273.9 1392.1 271.4 1389.2 266.4 1384.5 263.4 1383 261.6 1381.2 258 1380.7 255.5 1377 254 1375.5 254.7 1372.4 248.7 1373.5 247.3 1372.3 245.8 1376.4 242.8 1379.6 241.5 1385.4 242.4 1386 238.3 1392.4 237.6 1393.4 235 1400.3 231.6 1400.5 230.2 1398.8 226.5 1401.7 224.9 1392.9 213.9 1402 211.4 1404 210 1403 198.7 1413.8 200.8 1415.4 197.9 1412.9 191.7 1416.7 191.1 1418.6 186.9 1420.3 186.4 1423.6 190.8 1429.3 194.1 1437.5 196.4 1443.3 201.5 1444.7 208.8 1447.7 211.6 1454.2 212.7 1461.4 213.5 1469.4 217.5 1472.8 218.2 1477.8 224 1482.5 227.8 1488.1 227.6 1499.4 229.1 1505.8 228.2 1511.4 229.1 1520.8 233 1527 233 1530.3 234.9 1534.7 231.5 1541.9 229.3 1549.5 229.1 1554.4 226.9 1556.4 223.5 1558.8 221.3 1556.9 219.2 1554 216.8 1554.5 212.7 1557.7 213.3 1563.6 214.6 1566.8 211.2 1573.2 208.8 1574.5 204.6 1577 202.8 1583.8 202 1588.2 202.7 1587.4 200.5 1580.2 196.1 1575 194.1 1572.5 196.4 1567 195.4 1564.7 196.2 1561.9 193.7 1561.6 187.4 1561 182.7 1568.4 185.1 1572.8 181.2 1570.9 178.4 1570.7 171.9 1572 169.9 1569.5 166.5 1565.8 165.1 1567.5 162 1572.6 160.9 1578.8 160.7 1587.4 162.6 1593.4 164.8 1601.1 171 1604.9 173.7 1609.4 177.5 1615.6 183.5 1625.6 185.5 Z",
  GB: "M 972.6 129.5 967.5 136 972.2 135.2 977.3 135.2 976 140.1 971.7 145.5 976.6 145.8 976.9 146.5 981.1 153.6 984.3 154.6 987.2 161.6 988.6 164 994.5 165.1 993.9 169.1 991.5 170.9 993.4 174.1 989 177.3 982.5 177.2 974.1 179 971.9 177.7 968.6 180.6 964.1 179.9 960.5 182.3 958 181.1 965.3 174.6 969.7 173.2 962.1 172.2 960.8 169.7 965.9 167.8 963.4 164.5 964.4 160.5 971.5 161.1 972.3 157.5 969.2 153.8 969.1 153.7 963.4 152.6 962.3 151 964.1 148.3 962.6 146.6 960 149.5 959.9 143.6 957.7 140.6 959.6 134.4 963.4 129.6 967 130 972.6 129.5 Z",
  BE: "M1016.5 177.1l-0.4 4.2-1.3 0.2-0.4 3.5-4.4-2.9-2.5 0.5-3.5-2.9-2.4-2.5-2.2-0.1-0.8-2.2 3.9-1.2 3.6 0.5 4.5-1.3 3.1 2.7 2.8 1.5z",
  FR: "M 1014.4 185 1015.5 185.5 1016.9 185.4 1019.3 187 1026.5 188.2 1024.1 192.4 1023.7 196.9 1022.4 198 1020.1 197.4 1020.3 199 1016.7 202.5 1016.7 205.4 1019.1 204.4 1020.9 207.1 1020.8 208.9 1022.3 211.3 1020.6 213.2 1022.1 218.1 1024.9 218.9 1024.4 221.6 1019.9 225.2 1009.7 223.5 1002.3 225.6 1001.7 229.4 995.8 230.2 990 227.3 988.1 228.7 978.6 225.8 976.6 223.4 979.3 219.6 980.3 207 975.2 200.4 971.5 197.2 963.9 194.8 963.5 190.2 970 188.9 978.3 190.5 976.8 183.4 981.5 186.1 992.9 181.3 994.4 176.2 998.6 174.9 999.4 177.1 1001.6 177.2 1004 179.7 1007.5 182.6 1010 182.1 1014.4 185 Z",
  LB: "M1179.1 288.2l-1.4 0.1-0.4 1.1-1.8 0 1.3-5.3 2.2-4.5 0-0.2 2.5 0.3 1.2 2.5-2.7 2.5-0.9 3.5z",
  PS: "M1178.3 293.8l0.4 4-0.6 1.9-2.5 0.8 0.1-1.7 1.3-0.9-1.5-0.7 0.7-4.2 2.1 0.8z",
  IR:"M1229 253.2l1.8-0.2 5.3-4.7 1.9-0.5 1.9 1.9-1.2 3.1 3.9 3.4 1.3-0.4 2.5 4.8 5.3 1.3 4.3 3.2 7.7 1.1 8-1.7 0.2-1.5 4.4-1.2 3-3.7 3.6 0.2 2-1.2 3.9 0.6 6.6 3.3 4.3 0.7 7.3 5.6 4 0.3 1.7 5.3-0.6 8-0.5 4.7 2.5 1-1.6 3.5 2.7 5.1 1.2 4.1 4.3 1.1 1.1 4.1-3.9 5.8 3.2 3.4 2.8 3.9 5.7 2.8 1 5.6 2.7 1.1 0.9 2.9-7.5 3.4-1.1 7.4-10.6-1.9-6.2-1.5-6.3-0.8-3.3-7.9-2.8-1.1-4.1 1.1-5.1 3.1-7-2.1-6.1-5-5.5-1.8-4.4-6.1-5.2-8.5-2.8 1-3.7-2.1-1.7 2.5-3.5-3.4-0.5-3.4-1.7 0 0.2-4.7-3.5-4.8-7.1-3.6-4.6-6.1 0.5-5 2.3-2.2-0.9-3.7-3.8-2-4.7-7.6-3.8-5.1 0.7-2-2.9-7.3 3.3-1.9 1.2 2.5 3.2 2.9 3.8 0.9z",
  SA: "M1240.5 315l5 0.6 1.7 3.1 3.9-0.2 2.7 5.6 2.9 1.4 1.2 2.3 4 2.7 0.7 2.6-0.4 2.2 0.9 2.1 1.8 1.8 0.9 2.1 1 1.6 1.8 1.3 1.5-0.5 1.3 2.5 0.3 1.4 2.7 6.6 16.9 3.2 1-1.4 3 4.6-2.6 12.8-16.3 6.4-15.9 2.5-5 2.9-3.5 6.7-2.6 1.1-1.5-2.1-2.1 0.3-5.5-0.7-1.1-0.6-6.4 0.1-1.5 0.6-2.4-1.6-1.3 3.1 0.8 2.7-2.4 2.1-0.9-2.8-1.8-1.9-0.5-2.6-3.1-2.3-3.3-5.4-1.9-5.2-4.1-4.4-2.5-1.1-4.1-6.1-0.9-4.4 0-3.8-3.6-7.2-2.8-2.5-3-1.3-2.1-3.7 0.2-1.4-1.8-3.4-1.7-1.4-2.5-4.8-3.8-5.1-3.1-4.4-2.7 0 0.5-3.5 0.1-2.3 0.4-2.6 6.2 1.1 2.1-2 1.1-2.3 4.1-0.9 0.7-2.2 1.6-1-6-6.5 10.4-3.2 0.9-1 6.8 1.8 8.6 4.5 16.8 12.9 10.2 0.5z",
  YE: "M1283.8 394.9l-4 1.7-0.9 2.9 0 2.2-5.4 2.7-8.8 3-4.7 4.5-2.5 0.4-1.7-0.4-3.2 2.7-3.5 1.2-4.7 0.3-1.4 0.4-1.1 1.7-1.5 0.5-0.8 1.6-2.8-0.2-1.7 0.9-4-0.3-1.6-3.8 0-3.5-1-1.9-1.3-4.7-1.8-2.6 1.1-0.4-0.7-2.9 0.6-1.2-0.4-2.8 2.4-2.1-0.8-2.7 1.3-3.1 2.4 1.6 1.5-0.6 6.4-0.1 1.1 0.6 5.5 0.7 2.1-0.3 1.5 2.1 2.6-1.1 3.5-6.7 5-2.9 15.9-2.5 5.2 10.6 2.2 4.5z",
  PK: "M1401.6 273.9l-3.8 5.4-5.7 1-8.5-1.6-2 2.8 3.3 5.6 2.9 4.4 5.1 3.1-3.8 3.7 1 4.6-3.9 6.5-2.2 6.5-4.5 6.7-6.5-0.5-4.9 6.8 4 2.8 1.4 5 3.5 3.2 1.8 5.5-12.1 0-3.2 4.3-4.2-1.6-2.2-4.6-4.9-4.9-10 1.2-9 0.1-7.6 0.9 1.1-7.4 7.5-3.4-0.9-2.9-2.7-1.1-1-5.6-5.7-2.8-2.8-3.9-3.2-3.4 9.6 3.3 5.3-1 3.4 0.8 0.9-1.4 3.9 0.6 6.6-2.7-0.8-5.4 2.3-3.7 4.1 0 0.2-1.7 4-0.9 2.1 0.6 1.8-1.8-1.1-3.9 1.4-3.8 3.1-1.7-3.1-4.2 5.2 0.2 0.9-2.3-0.8-2.5 2-2.7-1.4-3.2-1.9-2.7 2.4-2.8 5.3-1.3 5.9-0.8 2.4-1.1 2.9-0.8 4.7 3 2.9 5 9.5 2.5z",
  IN: "M1427.6 308l-2.8 3-0.9 6 5.8 2.4 5.8 3.1 7.8 3.6 7.7 0.9 3.8 3.2 4.3 0.6 6.9 1.5 4.6-0.1 0.1-2.5-1.5-4.1-0.2-2.7 3.1-1.4 1.5 5.1 0.4 1.2 5.5 2.5 3.2-1 4.7 0.4 4.5-0.2-0.5-3.9-2.6-2.1 4.2-0.8 3.9-4.8 5.4-4 4.9 1.5 3.2-2.7 3.6 4-1.2 2.7 6.1 1 1 2.4-1.7 1.2 1.4 3.9-4.2-1.1-6.2 4.4 0.9 3.7-2 5.4 0.3 3.1-1.6 5.3-4.6-1.5 0.9 6.7-1 2.2 1 2.7-2.5 1.5-4.4-10.2-1.5 0-0.3 4.2-3.6-3.4 1.2-3.6 2.4-0.4 1.6-5.4-3.4-1.1-5.1 0.1-5.4-0.9-1.2-4.5-2.7-0.3-4.9-2.8-1.2 4.4 4.6 3.4-3 2.4-0.9 2.3 3.7 1.7-0.3 3.9 2.6 4.8 1.6 5.3-0.5 2.4-3.8-0.1-6.6 1.3 0.9 4.8-2.4 3.8-7.5 4.4-5.3 7.5-3.8 4.1-5 4.2 0.3 2.9-2.6 1.6-4.8 2.3-2.6 0.3-1.2 4.9 1.9 8.4 0.7 5.3-1.9 6.1 0.7 10.9-2.9 0.3-2.3 4.9 1.9 2.2-5.1 1.8-1.7 4.3-2.2 1.9-5.6-6-3.1-9-2.5-6.5-2.2-3-3.4-6.2-2-8-1.4-4-5.9-8.8-3.5-12.5-2.6-8.2-0.8-7.8-1.7-6-7.7 3.9-4-0.8-8.1-7.8 2.4-2.3-1.9-2.5-7.1-5.5 3.2-4.3 12.1 0-1.8-5.5-3.5-3.2-1.4-5-4-2.8 4.9-6.8 6.5 0.5 4.5-6.7 2.2-6.5 3.9-6.5-1-4.6 3.8-3.7-5.1-3.1-2.9-4.4-3.3-5.6 2-2.8 8.5 1.6 5.7-1 3.8-5.4 7.7 7.6 0.8 5.2 3 3.3 0.6 3.3-4.1-0.9 3.2 7.1 6.2 4 8.6 4.5z",
  EG: "M1172.1 301.4l3.9 9.4 0.7 1.6-1.3 2.6-0.7 4.8-1.2 3.4-1.2 1.1-2-2.1-2.7-2.8-4.7-9.2-0.5 0.6 2.8 6.7 3.9 6.5 4.9 10 2.3 3.5 2 3.6 5.4 7.1-1 1.1 0.4 4.2 6.8 5.8 1.1 1.3-22.1 0-21.5 0-22.3 0-1-23.7-1.3-22.8-2-5.2 1.1-3.9-1-2.8 1.7-3.1 7.2-0.1 5.4 1.7 5.5 1.9 2.6 1 4-2 2.1-1.8 4.7-0.6 3.9 0.8 1.8 3.2 1.1-2.1 4.4 1.5 4.3 0.4 2.5-1.6z",
  TR: "M 1201.7 235.3 1207.2 235 1212.8 238.2 1214.1 240.4 1214.2 243.5 1218.4 245.1 1220.8 246.9 1217.5 248.8 1220.4 256.1 1219.7 258.1 1223.5 263.2 1221.1 264.3 1219 262.7 1212.7 261.8 1210.6 262.8 1204.7 263.8 1201.8 263.7 1196.1 266.1 1191.7 266.1 1188.7 264.9 1183.1 266.7 1181.2 265.5 1181.4 269 1180.2 270.4 1178.9 271.8 1176.6 268.9 1178.3 266.5 1175.1 267.1 1170.5 265.6 1167.3 269.3 1159.3 270 1154.6 266.6 1148.9 266.4 1147.9 269 1144.3 269.8 1138.9 266.4 1133.1 266.5 1129.3 260.1 1125.1 256.6 1127.1 251.6 1123.5 248.5 1128.6 242.4 1136.6 242.2 1138.2 237.3 1148.2 238.2 1153.8 234.1 1159.6 232.3 1168.1 232.1 1177.9 236.6 1185.8 239.1 1191.6 238.1 1196.2 238.7 1201.7 235.3 Z",
  AF: "M1383 261.6l1.5 1.8-2.9 0.8-2.4 1.1-5.9 0.8-5.3 1.3-2.4 2.8 1.9 2.7 1.4 3.2-2 2.7 0.8 2.5-0.9 2.3-5.2-0.2 3.1 4.2-3.1 1.7-1.4 3.8 1.1 3.9-1.8 1.8-2.1-0.6-4 0.9-0.2 1.7-4.1 0-2.3 3.7 0.8 5.4-6.6 2.7-3.9-0.6-0.9 1.4-3.4-0.8-5.3 1-9.6-3.3 3.9-5.8-1.1-4.1-4.3-1.1-1.2-4.1-2.7-5.1 1.6-3.5-2.5-1 0.5-4.7 0.6-8 5.9 2.5 3.9-0.9 0.4-2.9 4-0.9 2.6-2-0.2-5.1 4.2-1.3 0.3-2.2 2.9 1.7 1.6 0.2 3 0 4.3 1.4 1.8 0.7 3.4-2 2.1 1.2 0.9-2.9 3.2 0.1 0.6-0.9-0.2-2.6 1.7-2.2 3.3 1.4-0.1 2 1.7 0.3 0.9 5.4 2.7 2.1 1.5-1.4 2.2-0.6 2.5-2.9 3.8 0.5 5.4 0z"
};

export default function WorldMap() {
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (id, name) => {
    setHoveredCountry({ id, name });
  };

  const handleMouseLeave = () => setHoveredCountry(null);

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

      <div
        className="relative bg-white rounded-lg shadow-lg overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        <div className="w-full" style={{ aspectRatio: "2.33 / 1" }}>
          <svg
            viewBox="0 0 2000 857"
            preserveAspectRatio="xMidYMid meet"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            className="border border-gray-200"
          >
            <defs>
              <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#bfdbfe', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#dbeafe', stopOpacity: 1 }} />
              </linearGradient>

              {countries.map(({ id, image }) => (
              <pattern
                key={id}
                id={`${id}Pattern`}
                patternUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <image
                  href={`${process.env.PUBLIC_URL}/images/${image}`}
                  x="-25"
                  y="-25"
                  width="150"
                  height="150"
                  preserveAspectRatio="xMidYMid slice"
                />
              </pattern>

              ))}
            </defs>

            {/* Ocean background */}
            <rect width="2000" height="857" fill="url(#oceanGradient)" />

     

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
                className={`cursor-pointer transition-all duration-300 ${
                  hoveredCountry?.id === id ? 'pulsing' : ''
                } ${selectedCountry?.id === id ? 'selected' : ''}`}
                style={{
                  stroke: hoveredCountry?.id === id ? '#3b82f6' : '#374151',
                  strokeWidth: hoveredCountry?.id === id ? 1 : 0.5,
                }}
              />
            ))}
          </svg>
        </div>

        {/* Hover Tooltip */}
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
            <div className="text-sm text-gray-600">
              Click to view more about this country's cuisine.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
// Gray outline countries (non-interactive)
// const grayCountries = [
//   // Europe
//   { d: "M950 140L1080 155L1070 180L940 170Z", name: "Germany" },
//   { d: "M1080 160L1130 165L1120 190L1070 180Z", name: "Poland" },
//   { d: "M900 180L1010 185L1000 210L890 200Z", name: "Spain" },
//   { d: "M1020 200L1080 205L1070 230L1010 220Z", name: "Italy" },
//   { d: "M960 130L1020 145L1010 170L950 160Z", name: "Netherlands" },
  
//   // Asia  
//   { d: "M1500 150L1700 210L1680 250L1480 190Z", name: "Russia" },
//   { d: "M1550 280L1650 310L1640 340L1540 310Z", name: "Mongolia" },
//   { d: "M1300 250L1380 260L1370 290L1290 280Z", name: "Kazakhstan" },
//   { d: "M1200 280L1300 290L1290 320L1190 310Z", name: "Iraq" },
//   { d: "M1150 320L1240 330L1230 360L1140 350Z", name: "Jordan" },
  
//   // Other continents
//   { d: "M200 200L400 220L380 320L180 300Z", name: "United States" },
//   { d: "M300 450L500 470L480 570L280 550Z", name: "Brazil" },
//   { d: "M1600 450L1750 470L1730 550L1580 530Z", name: "Australia" },
//   { d: "M1050 450L1150 470L1130 550L1030 530Z", name: "South Africa" },
//   { d: "M100 350L200 370L180 450L80 430Z", name: "Mexico" },
//   { d: "M50 150L180 170L160 250L30 230Z", name: "Canada" },
// ];



// export default function WorldMap() {
//   const [hoveredCountry, setHoveredCountry] = useState(null);
//   const [selectedCountry, setSelectedCountry] = useState(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   const handleMouseEnter = (id, name) => {
//     setHoveredCountry({ id, name });
//   };

//   const handleMouseLeave = () => {
//     setHoveredCountry(null);
//   };

//   const handleMouseMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
//   };

//   const handleCountryClick = (id, name) => {
//     setSelectedCountry(selectedCountry?.id === id ? null : { id, name });
//   };

//   return (
//     <div className="w-full bg-gradient-to-b from-blue-50 to-blue-100 p-4 rounded-lg">
//       <style>{`
//         @keyframes pulse {
//           0% { transform: scale(1); opacity: 1; }
//           50% { transform: scale(1.05); opacity: 0.8; }
//           100% { transform: scale(1); opacity: 1; }
//         }
//         .pulsing {
//           animation: pulse 1.5s infinite ease-in-out;
//           transform-box: fill-box;
//           transform-origin: center;
//           filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.6));
//         }
//         .selected {
//           filter: drop-shadow(0 0 12px rgba(34, 197, 94, 0.8));
//           stroke: #22c55e !important;
//           stroke-width: 1.5 !important;
//         }
//       `}</style>

    

//       <div 
//         className="relative bg-white rounded-lg shadow-lg overflow-hidden"
//         onMouseMove={handleMouseMove}
//       >
//         <svg
//           viewBox="0 0 2000 857"
//           width="100%"
//           height="auto"
//           xmlns="http://www.w3.org/2000/svg"
//           className="border border-gray-200"
//         >
//           <defs>
//             <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//               <stop offset="0%" style={{ stopColor: '#bfdbfe', stopOpacity: 1 }} />
//               <stop offset="100%" style={{ stopColor: '#dbeafe', stopOpacity: 1 }} />
//             </linearGradient>
            
//             {countries.map(({ id }) => (
//               <pattern
//                 key={id}
//                 id={`${id}Pattern`}
//                 patternUnits="userSpaceOnUse"
//                 width="100"
//                 height="100"
//               >
//                 <rect width="100" height="100" fill="#f3f4f6" />
//                 <circle cx="50" cy="50" r="30" fill="#3b82f6" opacity="0.7" />
//                 <text x="50" y="55" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">
//                   {id}
//                 </text>
//               </pattern>
//             ))}
//           </defs>

//           {/* Ocean background */}
//           <rect width="2000" height="857" fill="url(#oceanGradient)" />

//           {/* Gray countries (non-interactive background) */}
//           {grayCountries.map((country, index) => (
//             <path
//               key={`gray-${index}`}
//               d={country.d}
//               fill="#e5e7eb"
//               stroke="#d1d5db"
//               strokeWidth="0.5"
//               opacity="0.7"
//             />
//           ))}

//           {/* Interactive countries */}
//           {countries.map(({ id, name }) => (
//             <path
//               key={id}
//               id={id}
//               name={name}
//               d={countryPaths[id] || "M0,0"}
//               fill={`url(#${id}Pattern)`}
//               stroke="#374151"
//               strokeWidth={0.5}
//               onMouseEnter={() => handleMouseEnter(id, name)}
//               onMouseLeave={handleMouseLeave}
//               onClick={() => handleCountryClick(id, name)}
//               className={`
//                 cursor-pointer transition-all duration-300
//                 ${hoveredCountry?.id === id ? 'pulsing' : ''}
//                 ${selectedCountry?.id === id ? 'selected' : ''}
//               `}
//               style={{
//                 stroke: hoveredCountry?.id === id ? '#3b82f6' : '#374151',
//                 strokeWidth: hoveredCountry?.id === id ? 1 : 0.5,
//               }}
//             />
//           ))}
//         </svg>

//         {/* Hover tooltip */}
//         {hoveredCountry && (
//           <div
//             className="absolute bg-white border border-gray-300 rounded-lg shadow-lg p-3 pointer-events-none z-10 max-w-xs"
//             style={{
//               top: Math.min(mousePosition.y + 10, window.innerHeight - 200),
//               left: Math.min(mousePosition.x + 10, window.innerWidth - 200),
//             }}
//           >
//             <div className="font-bold text-lg text-gray-800 mb-2">
//               {hoveredCountry.name}
//             </div>
            
//           </div>
//         )}
//       </div>



     
//     </div>
//   );
// }
