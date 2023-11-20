import Image from "next/image";
import { Inter } from "next/font/google";
import QRContainer from "@/components/QRContainer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex justify-center min-h-screen flex-col items-center  p-24 ${inter.className}`}
    >
      <QRContainer />
    </main>
  );
}
