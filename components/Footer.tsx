import React from "react";

const Footer = () => {
  return (
    <footer className="pt-28">
      <div className="flex flex-col gap-8 pb-4 md:flex-row md:justify-between 3xl:justify-evenly">
        <p className="logo">loomi.</p>

        <div className="flex flex-col gap-4 uppercase">
          <p className="font-Josefin text-lg font-medium">Contact</p>
          <div className="flex flex-col gap-2 text-gray-200">
            <p className="font-Josefin text-sm">+19956600</p>
            <p className="font-Josefin text-sm">Loomi@mail.com</p>
            <p className="font-Josefin text-sm">82 Rue Royale, Paris</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 uppercase">
          <p className="font-Josefin text-lg font-medium">Open hours</p>
          <div className="flex flex-col gap-2 text-gray-200">
            <p className="font-Josefin text-sm">Weekdays: 10am - 9pm</p>
            <p className="font-Josefin text-sm">Saturday: 10am - 6pm</p>
            <p className="font-Josefin text-sm">Sunday Closed</p>
          </div>
        </div>
      </div>
      <p className="py-8 text-center text-sm text-gray-200">© {new Date().getFullYear()} Copy Interactive, All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
