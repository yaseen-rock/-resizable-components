import Image from "next/image";
import styles from "./page.module.css";
import LandingPage from "./about/page";

export default function Home() {
  return (
    <>
      <LandingPage />
      {/* You can use the Image component here if needed */}
    </>
  );
}

