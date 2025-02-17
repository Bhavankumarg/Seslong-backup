import Banner from "../components/HomePage/Banner/Banner";
import WhatWe from "../components/HomePage/WhatWe/WhatWe";
import OurPresence from "../components/HomePage/OurPresense/OurPresence";
import Product from "../components/HomePage/ProductRage/Product";
// import Contact from "../components/HomePage/Contact/Contact";
import Contact from "@/components/ContactUs/Form/Page";
export default function Home() {
  return (
    <>
      <Banner />
      <WhatWe />
      <OurPresence />
      <Product />
      <Contact />
    </>
  );
}
