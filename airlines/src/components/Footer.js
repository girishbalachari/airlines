import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;
  return (
    <footer className="footers">
      <p>
        Copyright &copy; {currentYear} - {nextYear}
      </p>
    </footer>
  );
}

export default Footer;
