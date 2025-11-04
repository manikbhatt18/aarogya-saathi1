// import React, { useState, useEffect } from "react";
// import {
//   MapContainer,
//   TileLayer,
//   Marker,
//   Popup,
//   useMap,
// } from "react-leaflet";
// import axios from "axios";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";

// // ### 1. Map Control Component ###
// function ChangeView({ center, zoom }) {
//   const map = useMap();
//   useEffect(() => {
//     if (center) {
//       map.setView(center, zoom);
//     }
//   }, [center, zoom, map]);
//   return null;
// }

// // ### 2. Custom Icon Definitions ###
// // User Icon (Blue)
// const userIcon = new L.Icon({
//   iconUrl:
//     "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgY2xhc3M9Imljb24iPjxwYXRoIGQ9Ik0xNiAyQzkuOTI1IDIgNSA2LjkyNSA1IDEzYzAgMy43OCAxLjU1OCA3LjIxMyA0LjAxNSAxMC4wMDhMMTYgMzBsNi45ODUtNi45OTJDMjUuNDQyIDIwLjIxMyAyNyAxNi43OCAyNyAxM0MyNyA2LjkyNSAyMi4wNzUgMiAxNiAyem0wIDExLjVhMy41IDMuNSAwIDEgMSAwLTcgMy41IDMuNSAwIDAgMSAwIDd6IiBmaWxsPSIjMGE4NGZlIiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PC9zdmc+",
//   iconSize: [32, 32],
//   iconAnchor: [16, 32],
//   popupAnchor: [0, -32],
// });

// // Hospital Icon (Red)
// const hospitalIcon = new L.Icon({
//   iconUrl:
//     "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgY2xhc3M9Imljb24iPjxwYXRoIGQ9Ik0xNiAyQzkuOTI1IDIgNSA2LjkyNSA1IDEzYzAgMy43OCAxLjU1OCA3LjIxMyA0LjAxNSAxMC4wMDhMMTYgMzBsNi45ODUtNi45OTJDMjUuNDQyIDIwLjIxMyAyNyAxNi43OCAyNyAxM0MyNyA2LjkyNSAyMi4wNzUgMiAxNiAyem0tMyAxM2gxLjV2LDRoM3YtMS41aC0zdj00aC0xLjV2NGgtNHYxLjVoNHYzem04LjI1LTEuMjVjMC0uNDEzLS4zMzgtLjc1LS43NS0uNzVzLS43NS4zMzctLjc1Ljc1di41aC0uNXYtLjVjMC0uNDEzLS4zMzgtLjc1LS43NS0uNzVzLS43NS4zMzctLjc1Ljc1di41aC0uNXYtLjVjMC0uNDEzLS4zMzgtLjc1LS47NS0uNzVzLS43NS4zMzctLjc1Ljc1di41aC0uNXYtLjVjMC0uNDEzLS4zMzgtLjc1LS43NS0uNzVzLS43NS4zMzctLjc1Ljc1djEuNWg1di0xLjV6IiBmaWxsPSIjZDUzNzM3IiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PC9zdmc+",
//   iconSize: [32, 32],
//   iconAnchor: [16, 32],
//   popupAnchor: [0, -32],
// });

// const Services = () => {
//   // ### 3. Enhanced State Management ###
//   const [userPosition, setUserPosition] = useState(null);
//   const [mapCenter, setMapCenter] = useState(null);
//   const [hospitals, setHospitals] = useState([]);
//   const [selectedHospital, setSelectedHospital] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // ... (Geolocation and data fetching logic remains the same)
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (pos) => {
//           const coords = { lat: pos.coords.latitude, lng: pos.coords.longitude };
//           setUserPosition(coords);
//           setMapCenter(coords); 
//           fetchHospitals(coords.lat, coords.lng);
//         },
//         (err) => {
//           console.error(err);
//           setError("Location access denied. Please enable location to use this feature.");
//           setIsLoading(false);
//         }
//       );
//     } else {
//       setError("Geolocation is not supported by your browser.");
//       setIsLoading(false);
//     }
//   }, []);

//   const fetchHospitals = async (lat, lng) => {
//     setIsLoading(true);
//     try {
//       const res = await axios.get(
//         `http://localhost:4000/api/hospitals?lat=${lat}&lng=${lng}`
//       );
//       setHospitals(res.data.hospitals || []);
//     } catch (error) {
//       console.error("Error fetching hospitals:", error);
//       setError("Failed to fetch nearby hospitals. Please try again later.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleHospitalClick = (hospital) => {
//     setSelectedHospital(hospital);
//     setMapCenter([hospital.location.lat, hospital.location.lng]);
//   };

//   // ### 4. Improved Loading and Error UI ###
//   // ... (Error and initial loading states remain the same)
//   if (error && !hospitals.length) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-gray-100">
//         <div className="p-8 bg-white shadow-lg rounded-lg text-center">
//           <h2 className="text-2xl font-semibold text-red-600 mb-4">
//             Error
//           </h2>
//           <p className="text-gray-700">{error}</p>
//         </div>
//       </div>
//     );
//   }

//   if (isLoading && !userPosition) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <p className="text-lg text-gray-600 animate-pulse">
//           Detecting your location...
//         </p>
//       </div>
//     );
//   }

//   // ### 5. New Layout with Heading and Navbar Padding ###
//   return (
//     //  NEW: Wrapper div adds padding-top (pt-20 = 80px) to clear a fixed navbar
//     <div className="pt-20 bg-gray-100"> 

//       {/* NEW: Main page heading */}
//       <div className="pb-4">
//         <h1 className="text-3xl font-bold text-center text-gray-800">
//           Find Nearby Hospitals
//         </h1>
//       </div>

//       {/* MODIFIED: 
//         - Flex container height is now calculated to fill the *remaining* viewport.
//         - h-[calc(100vh-80px)] matches the pt-20 (80px) padding from the wrapper.
//       */}
//       <div className="flex flex-col lg:flex-row h-[calc(100vh-80px)]">

//         {/* === Sidebar List === */}
//         {/* MODIFIED: Added h-full to ensure it fills the parent's calculated height */}
//         <div className="lg:w-1/3 w-full p-4 overflow-y-auto bg-gray-50 border-r border-gray-200 h-full">
          
//           {/* MODIFIED: Changed <h2> to <h3> for semantic correctness */}
//           <h3 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
//             Hospitals List
//           </h3>

//           {isLoading && hospitals.length === 0 && (
//             <p className="text-center text-gray-500">Finding hospitals...</p>
//           )}
//           {!isLoading && hospitals.length === 0 && (
//             <p className="text-center text-gray-500">No hospitals found nearby.</p>
//           )}

//           <div className="space-y-3">
//             {hospitals.map((hospital, i) => (
//               <div
//                 key={i}
//                 onClick={() => handleHospitalClick(hospital)}
//                 className={`p-4 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-all ${
//                   selectedHospital?.name === hospital.name
//                     ? "ring-2 ring-blue-500 shadow-blue-100"
//                     : "hover:bg-gray-50"
//                 }`}
//               >
//                 <h4 className="font-bold text-lg text-blue-700"> {/* Changed to h4 */}
//                   {hospital.name}
//                 </h4>
//                 <p className="text-sm text-gray-600">{hospital.address}</p>
//                 <p className="text-sm font-medium text-yellow-600 mt-1">
//                   ⭐ {hospital.rating || "N/A"}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* === Map Area === */}
//         <div className="lg:w-2/3 w-full h-full">
//           {mapCenter ? (
//             <MapContainer
//               center={mapCenter}
//               zoom={14}
//               style={{ height: "100%", width: "100%" }}
//             >
//               <ChangeView center={mapCenter} zoom={14} />
//               <TileLayer
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 attribution="&copy; OpenStreetMap contributors"
//               />

//               {userPosition && (
//                 <Marker
//                   position={[userPosition.lat, userPosition.lng]}
//                   icon={userIcon} 
//                 >
//                   <Popup>You are here</Popup>
//                 </Marker>
//               )}

//               {hospitals.map((hospital, i) => (
//                 <Marker
//                   key={i}
//                   position={[hospital.location.lat, hospital.location.lng]}
//                   icon={hospitalIcon} 
//                 >
//                   <Popup>
//                     <strong>{hospital.name}</strong>
//                     <br />
//                     {hospital.address}
//                     <br />
//                     ⭐ {hospital.rating || "N/A"}
//                   </Popup>
//                 </Marker>
//               ))}
//             </MapContainer>
//           ) : (
//             <div className="flex items-center justify-center h-full bg-gray-200">
//               <p>Loading map...</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;



// import React, { useState, useEffect } from "react";
// import {
//   MapContainer,
//   TileLayer,
//   Marker,
//   Popup,
//   useMap,
// } from "react-leaflet";
// import axios from "axios";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";

// // ### 1. Map Control Component ###
// function ChangeView({ center, zoom }) {
//   const map = useMap();
//   useEffect(() => {
//     if (center) {
//       map.setView(center, zoom);
//     }
//   }, [center, zoom, map]);
//   return null;
// }

// // ### 2. Custom Icon Definitions ###
// // User Icon (Blue)
// const userIcon = new L.Icon({
//   iconUrl:
//     "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgY2xhc3M9Imljb24iPjxwYXRoIGQ9Ik0xNiAyQzkuOTI1IDIgNSA2LjkyNSA1IDEzYzAgMy43OCAxLjU1OCA3LjIxMyA0LjAxNSAxMC4wMDhMMTYgMzBsNi45ODUtNi45OTJDMjUuNDQyIDIwLjIxMyAyNyAxNi43OCAyNyAxM0MyNyA2LjkyNSAyMi4wNzUgMiAxNiAyem0wIDExLjVhMy41IDMuNSAwIDEgMSAwLTcgMy41IDMuNSAwIDAgMSAwIDd6IiBmaWxsPSIjMGE4NGZlIiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PC9zdmc+",
//   iconSize: [32, 32],
//   iconAnchor: [16, 32],
//   popupAnchor: [0, -32],
// });

// // Hospital Icon (Red)
// const hospitalIcon = new L.Icon({
//   iconUrl:
//     "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgY2xhc3M9Imljb24iPjxwYXRoIGQ9Ik0xNiAyQzkuOTI1IDIgNSA2LjkyNSA1IDEzYzAgMy43OCAxLjU1OCA3LjIxMyA0LjAxNSAxMC4wMDhMMTYgMzBsNi45ODUtNi45OTJDMjUuNDQyIDIwLjIxMyAyNyAxNi43OCAyNyAxM0MyNyA2LjkyNSAyMi4wNzUgMiAxNiAyem0tMyAxM2gxLjV2LDRoM3YtMS41aC0zdj00aC0xLjV2NGgtNHYxLjVoNHYzem04LjI1LTEuMjVjMC0uNDEzLS4zMzgtLjc1LS43NS0uNzVzLS43NS4zMzctLjc1Ljc1di41aC0uNXYtLjVjMC0uNDEzLS4zMzgtLjc1LS43NS0uNzVzLS43NS4zMzctLjc1Ljc1di41aC0uNXYtLjVjMC0uNDEzLS4zMzgtLjc1LS47NS0uNzVzLS43NS4zMzctLjc1Ljc1di41aC0uNXYtLjVjMC0uNDEzLS4zMzgtLjc1LS43NS0uNzVzLS43NS4zMzctLjc1Ljc1djEuNWg1di0xLjV6IiBmaWxsPSIjZDUzNzM3IiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PC9zdmc+",
//   iconSize: [32, 32],
//   iconAnchor: [16, 32],
//   popupAnchor: [0, -32],
// });

// const Services = () => {
//   // ### 3. Enhanced State Management ###
//   const [userPosition, setUserPosition] = useState(null);
//   const [mapCenter, setMapCenter] = useState(null);
//   const [hospitals, setHospitals] = useState([]);
//   const [selectedHospital, setSelectedHospital] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // ... (Geolocation and data fetching logic remains the same)
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (pos) => {
//           const coords = { lat: pos.coords.latitude, lng: pos.coords.longitude };
//           setUserPosition(coords);
//           setMapCenter(coords);
//           fetchHospitals(coords.lat, coords.lng);
//         },
//         (err) => {
//           console.error(err);
//           setError("Location access denied. Please enable location to use this feature.");
//           setIsLoading(false);
//         }
//       );
//     } else {
//       setError("Geolocation is not supported by your browser.");
//       setIsLoading(false);
//     }
//   }, []);

//   const fetchHospitals = async (lat, lng) => {
//     setIsLoading(true);
//     try {
//       const res = await axios.get(
//         `http://localhost:4000/api/hospitals?lat=${lat}&lng=${lng}`
//       );
//       setHospitals(res.data.hospitals || []);
//     } catch (error) {
//       console.error("Error fetching hospitals:", error);
//       setError("Failed to fetch nearby hospitals. Please try again later.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleHospitalClick = (hospital) => {
//     setSelectedHospital(hospital);
//     setMapCenter([hospital.location.lat, hospital.location.lng]);
//   };

//   // ### 4. Improved Loading and Error UI ###
//   // ... (Error and initial loading states remain the same)
//   if (error && !hospitals.length) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-gray-100">
//         <div className="p-8 bg-white shadow-lg rounded-lg text-center">
//           <h2 className="text-2xl font-semibold text-red-600 mb-4">
//             Error
//           </h2>
//           <p className="text-gray-700">{error}</p>
//         </div>
//       </div>
//     );
//   }

//   if (isLoading && !userPosition) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <p className="text-lg text-gray-600 animate-pulse">
//           Detecting your location...
//         </p>
//       </div>
//     );
//   }

//   // ### 5. Layout with 2/5 and 3/5 Split ###
//   return (
//     //  Wrapper div with padding-top (pt-20 = 80px) to clear navbar
//     <div className="pt-20 bg-gray-100">
      
//       {/* Main page heading */}
//       <div className="pb-4">
//         <h1 className="text-3xl font-bold text-center text-gray-800">
//           Find Nearby Hospitals
//         </h1>
//       </div>

//       {/* Flex container height is calculated to fill the *remaining* viewport.
//         h-[calc(100vh-80px)] matches the pt-20 (80px) padding.
//       */}
//       <div className="flex flex-col lg:flex-row h-[calc(100vh-80px)]">
        
//         {/* === Sidebar List === */}
//         {/* MODIFIED: Changed from lg:w-1/3 to lg:w-2/5 (40% width) */}
//         <div className="lg:w-2/5 w-full p-4 overflow-y-auto bg-gray-50 border-r border-gray-200 h-full">
//           <h3 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
//             Hospitals List
//           </h3>

//           {isLoading && hospitals.length === 0 && (
//             <p className="text-center text-gray-500">Finding hospitals...</p>
//           )}
//           {!isLoading && hospitals.length === 0 && (
//             <p className="text-center text-gray-500">No hospitals found nearby.</p>
//           )}

//           <div className="space-y-3">
//             {hospitals.map((hospital, i) => (
//               <div
//                 key={i}
//                 onClick={() => handleHospitalClick(hospital)}
//                 className={`p-4 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-all ${
//                   selectedHospital?.name === hospital.name
//                     ? "ring-2 ring-blue-500 shadow-blue-100"
//                     : "hover:bg-gray-50"
//                 }`}
//               >
//                 <h4 className="font-bold text-lg text-blue-700">
//                   {hospital.name}
//                 </h4>
//                 <p className="text-sm text-gray-600">{hospital.address}</p>
//                 <p className="text-sm font-medium text-yellow-600 mt-1">
//                   ⭐ {hospital.rating || "N/A"}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* === Map Area === */}
//         {/* MODIFIED: Changed from lg:w-2/3 to lg:w-3/5 (60% width) */}
//         <div className="lg:w-3/5 w-full h-full">
//           {mapCenter ? (
//             <MapContainer
//               center={mapCenter}
//               zoom={14}
//               style={{ height: "100%", width: "100%" }}
//             >
//               <ChangeView center={mapCenter} zoom={14} />
//               <TileLayer
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 attribution="&copy; OpenStreetMap contributors"
//               />

//               {userPosition && (
//                 <Marker
//                   position={[userPosition.lat, userPosition.lng]}
//                   icon={userIcon}
//                 >
//                   <Popup>You are here</Popup>
//                 </Marker>
//               )}

//               {hospitals.map((hospital, i) => (
//                 <Marker
//                   key={i}
//                   position={[hospital.location.lat, hospital.location.lng]}
//                   icon={hospitalIcon}
//                 >
//                   <Popup>
//                     <strong>{hospital.name}</strong>
//                     <br />
//                     {hospital.address}
//                     <br />
//                     ⭐ {hospital.rating || "N/A"}
//                   </Popup>
//                 </Marker>
//               ))}
//             </MapContainer>
//           ) : (
//             <div className="flex items-center justify-center h-full bg-gray-200">
//               <p>Loading map...</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;


import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import axios from "axios";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Loader from "../Components/Loader";

// ### 1. Map Control Component ###
function ChangeView({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center, zoom);
    }
  }, [center, zoom, map]);
  return null;
}

// ### 2. Custom Icon Definitions ###
// User Icon (Blue)
const userIcon = new L.Icon({
  iconUrl:
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgY2xhc3M9Imljb24iPjxwYXRoIGQ9Ik0xNiAyQzkuOTI1IDIgNSA2LjkyNSA1IDEzYzAgMy43OCAxLjU1OCA3LjIxMyA0LjAxNSAxMC4wMDhMMTYgMzBsNi45ODUtNi45OTJDMjUuNDQyIDIwLjIxMyAyNyAxNi43OCAyNyAxM0MyNyA2LjkyNSAyMi4wNzUgMiAxNiAyem0wIDExLjVhMy41IDMuNSAwIDEgMSAwLTcgMy41IDMuNSAwIDAgMSAwIDd6IiBmaWxsPSIjMGE4NGZlIiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PC9zdmc+",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

// Hospital Icon (Red)
const hospitalIcon = new L.Icon({
  iconUrl:
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgY2xhc3M9Imljb24iPjxwYXRoIGQ9Ik0xNiAyQzkuOTI1IDIgNSA2LjkyNSA1IDEzYzAgMy43OCAxLjU1OCA3LjIxMyA0LjAxNSAxMC4wMDhMMTYgMzBsNi45ODUtNi45OTJDMjUuNDQyIDIwLjIxMyAyNyAxNi43OCAyNyAxM0MyNyA2LjkyNSAyMi4wNzUgMiAxNiAyem0tMyAxM2gxLjV2LDRoM3YtMS41aC0zdjQ2aC0xLjV2NGgtNHYxLjVoNHYzem04LjI1LTEuMjVjMC0uNDEzLS4zMzgtLjc1LS43NS0uNzVzLS43NS4zMzctLjc1Ljc1di41aC0uNXYtLjVjMC0uNDEzLS4zMzgtLjc1LS43NS0uNzVzLS43NS4zMzctLjc1Ljc1di41aC0uNXYtLjVjMC0uNDEzLS4zMzgtLjc1LS43NS0uNzVzLS43NS4zMzctLjc1Ljc1di41aC0uNXYtLjVjMC0uNDEzLS4zMzgtLjc1LS43NS0uNzVzLS43NS4zMzctLjc1Ljc1djEuNWg1di0xLjV6IiBmaWxsPSIjZDUzNzM3IiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+PC9zdmc+",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const Services = () => {
  const [userPosition, setUserPosition] = useState(null);
  const [mapCenter, setMapCenter] = useState(null);
  const [hospitals, setHospitals] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const coords = { lat: pos.coords.latitude, lng: pos.coords.longitude };
          setUserPosition(coords);
          setMapCenter(coords);
          fetchHospitals(coords.lat, coords.lng);
        },
        (err) => {
          console.error(err);
          setError("Location access denied. Please enable location to use this feature.");
          setIsLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
      setIsLoading(false);
    }
  }, []);

  const fetchHospitals = async (lat, lng) => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:4000/api/hospitals?lat=${lat}&lng=${lng}`
      );
      setHospitals(res.data.hospitals || []);
    } catch (error) {
      console.error("Error fetching hospitals:", error);
      setError("Failed to fetch nearby hospitals. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleHospitalClick = (hospital) => {
    setSelectedHospital(hospital);
    setMapCenter([hospital.location.lat, hospital.location.lng]);
  };

  // === Error and Loading States ===
  if (error && !hospitals.length) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="p-8 bg-white shadow-lg rounded-lg text-center">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">Error</h2>
          <p className="text-gray-700">{error}</p>
        </div>
      </div>
    );
  }

  if (isLoading && !userPosition) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader/>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-gray-100">
      <div className="pb-4">
        <h1 className="text-5xl font-bold text-center text-[#0096f2]">
          Find Nearby Hospitals
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row h-[calc(100vh-80px)]">
        {/* Sidebar List */}
        <div className="lg:w-2/5 w-full p-8 overflow-y-auto bg-gray-50 border-r border-gray-200 h-full">
          

          {isLoading && hospitals.length === 0 && (
            <Loader/>
          )}
          {!isLoading && hospitals.length === 0 && (
            <p className="text-center text-gray-500">No hospitals found nearby.</p>
          )}

          <div className="space-y-3 p-6">
            {hospitals.map((hospital, i) => (
              <div
                key={i}
                onClick={() => handleHospitalClick(hospital)}
                className={`p-4 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-all ${
                  selectedHospital?.name === hospital.name
                    ? "ring-2 ring-blue-500 shadow-blue-100"
                    : "hover:bg-gray-50"
                }`}
              >
                <h4 className="font-bold text-lg text-blue-700">
                  {hospital.name}
                </h4>
                <p className="text-sm text-gray-600">{hospital.address}</p>
                <p className="text-sm font-medium text-yellow-600 mt-1">
                  ⭐ {hospital.rating || "N/A"}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* === Map Area (Improved UI) === */}
        <div className="lg:w-3/5 w-full h-full flex items-center justify-center p-6 bg-gray-100">
          {mapCenter ? (
            <div className="w-full h-full max-w-4xl max-h-[600px] bg-white rounded-2xl shadow-lg overflow-hidden p-2">
              <MapContainer
                center={mapCenter}
                zoom={14}
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "12px",
                }}
              >
                <ChangeView center={mapCenter} zoom={14} />
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; OpenStreetMap contributors"
                />

                {userPosition && (
                  <Marker
                    position={[userPosition.lat, userPosition.lng]}
                    icon={userIcon}
                  >
                    <Popup>You are here</Popup>
                  </Marker>
                )}

                {hospitals.map((hospital, i) => (
                  <Marker
                    key={i}
                    position={[hospital.location.lat, hospital.location.lng]}
                    icon={hospitalIcon}
                  >
                    <Popup>
                      <strong>{hospital.name}</strong>
                      <br />
                      {hospital.address}
                      <br />
                      ⭐ {hospital.rating || "N/A"}
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full bg-gray-200 rounded-lg">
              <p>Loading map...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
