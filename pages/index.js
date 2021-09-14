import Head from "next/head";
import AnimatedTyping from "../components/AnimatedTyping";
import Countdown from "../components/Countdown";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google Developer Student Club | CMRIT</title>
      </Head>
      <Header />
      <main>
        <HeroSection />
      </main>
    </div>
  );
}
