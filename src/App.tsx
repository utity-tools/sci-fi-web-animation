/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import AboutTheTime from "./components/AboutTheTime";
import FeaturedShows from "./components/FeaturedShows";
import SignupSection from "./components/SignupSection";
import NewsSection from "./components/NewsSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="relative min-h-screen bg-brand-black">
      <Header />
      <Hero />
      <div className="relative z-10">
        <AboutSection />
        <AboutTheTime />
        <SignupSection />
        <FeaturedShows />
        <NewsSection />
        <Footer />
      </div>
    </main>
  );
}


