// import React, { useState } from "react";
// import { Home, Info, Folder, Mail } from "lucide-react";

// const BottomMenu = () => {
//   const [active, setActive] = useState("home");

//   const menuItems = [
//     { id: "home", icon: <Home size={22} /> },
//     { id: "about", icon: <Info size={22} /> },
//     { id: "projects", icon: <Folder size={22} /> },
//     { id: "contact", icon: <Mail size={22} /> },
//   ];

//   return (
//     <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6 px-6 py-3 
//                     bg-black/60 backdrop-blur-xl border border-white/10 rounded-full shadow-lg">
//       {menuItems.map((item) => (
//         <button
//           key={item.id}
//           onClick={() => setActive(item.id)}
//           className={`relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 cursor-pointer
//             ${active === item.id 
//               ? "bg-gradient-to-r from-pink-500 to-blue-400 text-white shadow-lg scale-110" 
//               : "text-gray-300 hover:text-pink-400 hover:scale-125 hover:shadow-[0_0_15px_rgba(255,100,200,0.6)]"}`}
//         >
//           {item.icon}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default BottomMenu;
