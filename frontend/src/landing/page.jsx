import Features from "./features";
import Footer from "./footer";
import HeroSection from "./hero";
import Hero2 from "./hero2";

import TestimonialSection from "./testmonial";


export default function Landing(){
    return(
        <div>
            {/* <HeroSection /> */}
            <Hero2 />
              <Features />
            <TestimonialSection />
              <Footer />
        </div>
    )

}