"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const User = ({ user, signOut }) => {
  const [open, setOpen] = useState(false);
  const [hoverLogout, setHoverLogout] = useState(false);
  const [hoverSettings, setHoverSettings] = useState(false);

  return (
    <div className="relative size-[45px]">
      <div className="absolute w-[100px] h-[40px] bg-papaya z-20 -top-4 left-1/2 -translate-x-[55%]" />
      <div
        className="relative size-[45px]"
        onMouseOver={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <button className="size-[45px] rounded-full border-2 border-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer">
          <Image
            src={
              user?.avatar_url ||
              "https://cdn.discordapp.com/embed/avatars/0.png"
            }
            alt="User"
            width={45}
            height={45}
            className="rounded-full z-30"
          />
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ y: -25 }}
              animate={{ y: 90 }}
              exit={{ y: -25 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-[45px] h-[115px] absolute bottom-0 left-1/2 -translate-x-1/2 bg-black z-0 rounded-b-full flex flex-col items-center justify-end pb-1.5 gap-2"
            >
              <button
                onMouseOver={() => setHoverSettings(true)}
                onMouseLeave={() => setHoverSettings(false)}
                className="size-[35px] relative text-xs rounded-full bg-blue_light transition-all duration-200 hover:bg-blue_dark
                 text-white flex justify-center items-center cursor-pointer"
              >
                <svg
                  width="24px"
                  height="24px"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="currentColor"
                >
                  <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M19.6224 10.3954L18.5247 7.7448L20 6L18 4L16.2647 5.48295L13.5578 4.36974L12.9353 2H10.981L10.3491 4.40113L7.70441 5.51596L6 4L4 6L5.45337 7.78885L4.3725 10.4463L2 11V13L4.40111 13.6555L5.51575 16.2997L4 18L6 20L7.79116 18.5403L10.397 19.6123L11 22H13L13.6045 19.6132L16.2551 18.5155C16.6969 18.8313 18 20 18 20L20 18L18.5159 16.2494L19.6139 13.598L21.9999 12.9772L22 11L19.6224 10.3954Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <AnimatePresence>
                  {hoverSettings && (
                    <motion.p
                      initial={{ x: -50, y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ x: -50, y: -10, opacity: 0 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-xs text-white z-0 font-medium"
                    >
                      Settings
                    </motion.p>
                  )}
                </AnimatePresence>
              </button>
              <button
                onMouseOver={() => setHoverLogout(true)}
                onMouseLeave={() => setHoverLogout(false)}
                onClick={signOut}
                className="size-[35px] relative text-xs rounded-full bg-red transition-all duration-200 hover:bg-red_dark text-white flex justify-center items-center cursor-pointer"
              >
                <svg
                  width="24px"
                  height="24px"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="currentColor"
                >
                  <path
                    d="M12 12H19M19 12L16 15M19 12L16 9"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M19 6V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V18"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <AnimatePresence>
                  {hoverLogout && (
                    <motion.p
                      initial={{ x: -50, y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ x: -50, y: -10, opacity: 0 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-xs text-white z-0 font-medium"
                    >
                      Logout
                    </motion.p>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default User;
