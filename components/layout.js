
import React, { Fragment } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import Logo from "./logo";

export default function Layout({children}) {
  return (
    <div className="w-full ">
        <Navbar className="shadow" maxWidth={'full'}>
        <NavbarBrand>
            <Logo/>
        </NavbarBrand>
        <NavbarContent  >
            <NavbarItem>
            <Link color="foreground" href="/mypokeman">
                My Pokeman
            </Link>
            </NavbarItem>
            <NavbarItem isActive>
            <Link href="/" aria-current="page">
                cloud Pokeman
            </Link>
            </NavbarItem>
            <NavbarItem>
            <Link color="foreground" href="#">
                Blog
            </Link>
            </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
            </NavbarItem>
            <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
                Sign Up
            </Button>
            </NavbarItem>
        </NavbarContent>
        </Navbar>

    <div className="w-full px-4  py-4">
            {children}
    </div>

</div>
  );
}
