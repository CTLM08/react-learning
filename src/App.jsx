import React from "react";
import apple from "./assets/applebg.png";
import { Icon } from "@iconify/react";

const App = () => {
  return (
    <div className="bg-teal-300 flex w-full h-screen  justify-center items-center relative">
      <div className="absolute right-3 top-2">
        <a href=" https://liming-shirt.vercel.app/">
          <button>
            <Icon icon="lucide:shirt" className="w-8 h-8" />
          </button>
        </a>
      </div>
      {/* flex(整个区域) justify-center items-center(区域中间) */}

      <div className="  bg-white  w-64 md:w-96 rounded-xl shadow-xl relative hover:shadow-2xl ">
        <img
          src={apple}
          className="w-64 md:w-96 rounded-xl bg-green-200  "
        ></img>

        <div className="p-5">
          <div className="text-base md:text-xl font-bold ">
            apple with 'apple'
          </div>
          <div>
            <span className="text-slate-600 md:text-base">by</span>
            <span> </span>
            <span className="text-slate-600  font-bold">LIMING</span>
          </div>
          <div className="">
            <span className="text-base md:text-xl font-bold text-slate-600 mt-2 tracking-wide">
              $40000
            </span>
            <span className="text-slate-600 font-bold"> offer now!!</span>
          </div>
          <div className="flex flex-row mt-2">
            {Array(5)
              .fill(0)
              .map(() => (
                <Icon
                  icon="emojione:glowing-star"
                  className="h-4 w-2 md:h-6 md:w-6 "
                />
              ))}
            <span className="text-slate-600 font-bold">(87)</span>
          </div>
          {/* flex-row(横着走) */}
          <div className="bg-green-200 rounded-xl w-min p-2 absolute bottom-3 right-4 hover:animate-bounce ">
            {/* absoluto(摆脱白色，搭配relative) */}

            <a href="">
              <Icon
                icon="bxs:shopping-bag-alt"
                className="text-slate-800 w-6 h-6 "
              />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0  text-neutral-600">
        made by{" "}
        <span className="text-black font-['Iceberg'] text-base md:text-xl">
          MRGA
        </span>
        .All right reserved
      </div>
    </div>
  );
};

export default App;
