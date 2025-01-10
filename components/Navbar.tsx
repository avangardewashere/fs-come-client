import React from "react";
import { Container } from "./ui/container";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="border-b">
      <Container>
        <div className="relatice px-4 sm:px-6 lg:px-6 flex h-18 items:center">
          <Link href="" className="ml-4 flex lg:ml-0 gap-x-2"></Link>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
