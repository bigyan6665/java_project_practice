// import localFont from "next/font/local";
// import "./globals.css";


// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         {children}
//         {/* children refers to component exported from page.js */}
//       </body>
//     </html>
//   );
// }


"use client";
import { Box, CssBaseline } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Sidebar from "./menu/page";
import { isTokenValid } from "./utility/authUtil";

// export const metadata = {
//   title: "Voting System",
//   description: "Generated by create next app",
// };
// This layout will be used across all pages of the app
export default function Layout({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const validateToken = () => {
    const token = localStorage.getItem("authToken");
    if (isTokenValid(token)) {
      setIsAuthenticated(true);
      console.log("Authenticated");
    } else {
      setIsAuthenticated(false);
      router.push("/login");
    }
  };
  useEffect(() => {
    validateToken();
  }, [pathname, router]);

  const [drawerOpen, setDrawerOpen] = useState(true);
  const toggleDrawer = () => setDrawerOpen((prev) => !prev);
  return (
    <html>
      <body>
        <Box sx={{ display: "flex", width: "100%", height: "100vh" }}>

          <CssBaseline />


          {isAuthenticated && (
            <Sidebar drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
          )}


          <Box
            component="main"
            sx={{
              flexGrow: 1,
              marginLeft: drawerOpen ? "240px" : "60px", // Matches Sidebar width
              transition: "margin-left 0.3s ease", // Smooth transition
              padding: 2, // Add padding for inner content
            }}
          >
            {children}
          </Box>
        </Box>
      </body>
    </html>
  );
}