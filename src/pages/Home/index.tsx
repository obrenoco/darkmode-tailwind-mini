import React from "react";
import { Header } from "../../components/Header";

export const Home = () => {
  return (
    <body className="py-6 px-10">
      <Header />
      <section className="flex">
        <article className="py-16 w-full lg:max-w-md">
          <h1 className="text-5xl font-bold mb-4">
            We have thousands of your dream home
          </h1>
          <p className="text-gray-400 mb-6">
            Take me out tonight where I wanna see people and I want to see life.
          </p>
          <p className="text-gray-400">Location</p>
          <div className="bg-gray-100 p-4 mb-4">
            <span>Rio de Janeiro, Brasil</span>
          </div>
          <button className="bg-yellow-500 text-white font-bold rounded-sm transition duration-500 ease-in-out px-8 py-2 hover:bg-yellow-600">
            Explore Now
          </button>
        </article>
        <article className="mt-12 hidden lg:block">
          <img
            src="https://i.imgur.com/7zeRQaF.png"
            className="w-full"
            alt=""
          />
        </article>
      </section>
    </body>
  );
};
