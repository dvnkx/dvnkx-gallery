import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-col items-start p-10 gap-5">
      <hr className="w-full mb-2 border-light_gray" />
      <p>&copy; {year} dvnkx&apos;s Gallery</p>
    </footer>
  );
};

export default Footer;
