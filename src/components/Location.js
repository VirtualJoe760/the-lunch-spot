import * as React from "react";
import LinkButton from "./LinkButton";
import loadable from '@loadable/component';

const Map = loadable(() => import('./Map'));

const Location = () => {
  return (
    <section className="bg-white py-5">
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        {/* left col */}
        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <h1 className="uppercase tracking-loose w-full text-navy mt-10 text-5xl font-bold leading-tight">
          Hurry! We can't wait to feed you!
          </h1>
          <p className="my-5 text-xl">
          We're located in Palm Desert, CA in the industrial park off of Joni Dr by Cook St. Click below for directions via Google maps.
          </p>
            <LinkButton
            to="https://maps.app.goo.gl/EjVrG8iARfSh9QF67"
            external
            className="bg-navy text-red hover:text-white hover:bg-navy my-5"
            >
                Directions
            </LinkButton>
        </div>
        <Map />
      </div>
    </section>
  );
};

export default Location;
