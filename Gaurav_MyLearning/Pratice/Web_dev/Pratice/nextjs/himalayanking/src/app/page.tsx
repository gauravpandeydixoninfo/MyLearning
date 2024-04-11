import Image from "next/image";
// let Logo = require(../app/images/hk.jpg);
import Login from "../app/components/login";
import SignUp from "../app/components/signup";
import Services from "../app/components/services";
import Cards from "../app/components/cards";
import About from "../app/components/about"
import Packages from "../app/components/fiter";

import Navbar from '../app/components/navbar';
import Filter_data from './components/fiter';
export default function Home() {
  return (
    <>
    <Navbar/>
    <About/>
    {/* <Packages/> */}
    {/* <Cards/> */}
    <Filter_data/>
    {/* <Login/> */}
    <SignUp/>
    </>
  );
}
