import localFont from "next/font/local";
import "./globals.css";
import Bootstrap from "./services/Bootstrap";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Bootstrap />
      <body>
        <container className="container-fluid p-0 vh-100">{children}</container>
      </body>
    </html>
  );
}
