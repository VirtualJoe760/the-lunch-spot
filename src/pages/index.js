import * as React from "react";
import Layout from "../components/layout";
import heroImage from "../images/hero.png";

const IndexPage = () => {
  return (
    <Layout>
      <div className="pt-24 bg-navy">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          {/* <!--Left Col--> */}
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <p className="uppercase tracking-loose w-full text-white">
              Welcome to The Lunch Spot!
            </p>
            <h1 className="my-4 text-5xl font-bold leading-tight text-white">
              Fresh food made daily!
            </h1>
            <p className="leading-normal text-2xl mb-8 text-white">
              Come enjoy our Sandwhiches, Soups, Breakfast & More!
            </p>
            <a
              href="https://www.grubhub.com/restaurant/the-lunch-spot-74868-joni-dr-palm-desert/2369998"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto lg:mx-0"
            >
              <button className="mx-auto lg:mx-0 hover:underline hover:text-red bg-white text-navy font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Order food
              </button>
            </a>
          </div>
          {/* <!--Right Col--> */}
          <div className="w-full md:w-3/5 py-6 text-center">
            <img
              className="w-full md:w-4/5 z-50"
              src={heroImage}
              alt="hero img"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
