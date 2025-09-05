"use client";
import Image from "next/image";
import logo from "../../../public/tctrackerlogo.png";
import { createClient } from "../utils/supabase/client";
import User from "./User";
import { redirect } from "next/navigation";
import { useState, useEffect } from "react";
import type { User as SupabaseUser } from "@supabase/supabase-js";

const Header = () => {
  const supabase = createClient();

  const [user, setUser] = useState<SupabaseUser | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();
  }, [supabase]);

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    redirect("/login");
  };

  return (
    <header className="grid grid-cols-3 w-[90%] min-h-[50px] xl:w-full max-w-6xl items-center justify-center sm:py-2.5 px-6 gap-5 rounded-b-[15px] bg-[#FDF0D5] fixed top-0 left-1/2 translate-x-[-50%] shadow">
      <div></div>
      <div className="flex justify-center">
        <Image src={logo} alt="TC Tracker Logo" height={50} priority />
      </div>
      <div className="flex justify-end gap-2.5">
        {/* @ts-expect-error because its dumb */}
        {user ? <User user={user?.user_metadata} signOut={signOut} /> : null}
      </div>
    </header>
  );
};

export default Header;
