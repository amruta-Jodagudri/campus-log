// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import { getServerSession } from "next-auth";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default async function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const session = await getServerSession()
//   console.log({session})
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <nav >
//           {session && <span>Logout</span> }
//           {!session && <span>Login</span> }
//         </nav>
//         {children}</body>
//     </html>
//   );
// }


import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./Navbar/Navbar";
import { SidebarDemo } from "./Sidebar/Sidebar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <Navbar/>
        <SidebarDemo/>
        {children}</body>
    </html>
  );
}
