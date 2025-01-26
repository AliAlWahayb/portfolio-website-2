import React from "react";
import HeaderBar from "../components/HeaderBar";
import Hero from "../components/Hero";

const Page: React.FC = () => {
  return (
    <div className="bg-background-base overflow-hidden" id="rootPage">
      <HeaderBar />

      <Hero />
      <section className="h-screen border border-white m-10 "></section>
    </div>
  );
};

export default Page;
