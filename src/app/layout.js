import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import AuthProvider from "@/services/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   // title: "Car Doctor Next",
//   // description: "Car Repair Workshop",
//   // dynamic metadata template
//   title: {
//     default: "Car Doctor",
//     template: "%s | Car Doctor",
//   },
//   description: "Car Repairing Workshop",
// };
export const metadata = {
  title: {
    default: "Car Doctor",
    template: "%s | Car Doctor",
  },
  description: "Car Doctor Workshop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="carDoctorTheme">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <div>{children}</div>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
