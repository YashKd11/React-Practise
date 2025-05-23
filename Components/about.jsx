import React from "react";

function about() {
  return (
    <div  data-scroll data-scroll-section data-scroll-speed="-.2" className="w-full bg-[#cdea68] relative z-10">
      <div className="w-full h-[90vh]">
        <div className="w-[75%] h-[45%] text-black text-xl leading-6 pt-10 pl-5 tracking-tighter">
          <p>
            Ochi is a strategic partner for fast-grow­ing tech businesses that
            need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and
            hire great peo­ple.
          </p>
        </div>
        <div className="w-full h-[55%] border-[0.4px] border-zinc-500 mt-4 flex relative">
          <div className="w-[50%] h-[100%] pl-5 pt-1">
            <p className="text-zinc-900 align-left text-[2.5vh]">
              What you can expect:
            </p>
          </div>
          <div className="w-[20%] h-[100%] pt-1">
            <p className="text-[2.2vh] block align-justify ">
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it’s live or digital,
              delivered for one or a hundred people.
            </p>
            <p className="text-[2.2vh] block align-justify pt-2">
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </p>
          </div>
          <div className="h-[50%] w-[10%] pt-1 absolute bottom-10 right-11 ">
            {["S:", "Instagram", "Behance", "Facebook", "Linkdin"].map(
              (item, index) => {
                return (
                  <p className={`text-[2.4vh] ${index === 0 ? "mb-1" : ""} `}>
                    {item}
                  </p>
                );
              }
            )}
          </div>
        </div>
      </div>
      <div className="w-full h-[75vh] mt-4 flex">
        <div className="w-1/2 h-full pl-5">
          <h1 className="text-2xl tracking-tight">
            Our approach:
          </h1>
          <button className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-900 transition ease-in-out uppercase text-white text-xs rounded-full m-2 flex items-center justify-center gap-3">Read more <div className="w-1 h-1 bg-zinc-100 rounded-full"></div></button>
        </div>
        <div className="w-1/2 h-full pt-2">
            <img src="src\Components\Homepage-Photo-663x469.jpg" alt="" className="w-[93%] rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default about;
