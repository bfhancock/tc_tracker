import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import logo from "../../../public/tctrackerlogo.png";

const Header = () => {
  return (
    <header className="grid grid-cols-3 w-full max-w-7xl items-center justify-center py-2.5 px-6 gap-5 rounded-b-[15px] bg-[#FDF0D5] fixed top-0 left-1/2 translate-x-[-50%] shadow">
      <div></div>
      <div className="flex justify-center">
        <Image src={logo} alt="TC Tracker Logo" height={50} />
      </div>
      <div className="flex justify-end gap-2.5">
        <SignedOut>
          <SignInButton>
            <button className="bg-red text-ceramic-white rounded-full font-medium text-sm sm:text-base h-9 px-4 sm:px-5 cursor-pointer text-white transition-all duration-300 hover:-translate-y-[1px] hover:bg-red_dark">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="bg-blue_light transition-all duration-300 hover:bg-blue_dark text-ceramic-white rounded-full font-medium text-sm sm:text-base h-9 px-4 sm:px-5 cursor-pointer text-white hover:-translate-y-[1px]">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton showName />
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
