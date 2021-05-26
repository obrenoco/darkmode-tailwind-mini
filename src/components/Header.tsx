import React from "react";
import { Logo } from "../components/Logo";

const buttonClass = "hover:opacity-75";

export const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between">
      <Logo />
      <section className="space-x-8">
        <a href="#" className={`font-bold ${buttonClass}`}>
          Home
        </a>
        <a href="#" className={buttonClass}>
          Home
        </a>
        <a href="#" className={buttonClass}>
          Home
        </a>
      </section>
    </header>
  );
};
