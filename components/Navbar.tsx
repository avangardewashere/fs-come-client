import React from "react";
import { Container } from "./ui/container";
import Link from "next/link";
import MainNav from "./ui/MainNav";
import getCategories from "@/actions/getCategories";
import NavbarActions from "./ui/NavbarActions";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-46 sm:px-6 lg:px-6 flex h-16 items-center">
          <Link href="" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
