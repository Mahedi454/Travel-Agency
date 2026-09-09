import { Hero } from "@/components/hero";
import { Destinations } from "@/components/sections/destinations";
import { PopularTours } from "@/components/sections/popular-tours";
import { Offers } from "@/components/sections/offers";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Statistics } from "@/components/sections/statistics";
import { Categories } from "@/components/sections/categories";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Testimonials } from "@/components/sections/testimonials";
import { Gallery } from "@/components/sections/gallery";
import { Blog } from "@/components/sections/blog";
import { Newsletter } from "@/components/sections/newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Destinations />
      <PopularTours />
      <Offers />
      <Statistics />
      <WhyChooseUs />
      <Categories />
      <HowItWorks />
      <Testimonials />
      <Gallery />
      <Blog />
      <Newsletter />
    </>
  );
}