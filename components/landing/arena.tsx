import Link from "next/link";
import { ButtonVariants } from "../ui/button-variants";

export const Arena = () => {
  return (
    <section
      id="arena"
      className="bg-neutral-content relative z-[4] grid h-[54rem] w-full items-center
        justify-center pt-[5.5rem] md:h-[40rem] lg:h-[48rem]
        lg:pt-0 thick:h-[52.5rem] thick:border-b-8"
    >
      <img
        className="absolute h-full w-full object-cover"
        src="/images/background-images/variant2.png"
        alt=""
      />
      <div
        className="relative z-[4] flex flex-col items-center justify-center gap-12
          text-white md:flex-row-reverse md:gap-14 lg:gap-24"
      >
        <div>
          <div
            className="-mb-4 h-[12.5rem] w-[22rem] rotate-6 overflow-hidden rounded-xl border-4
              border-white bg-white/40 drop-shadow-lg lg:-mb-12 lg:h-[25rem] lg:w-[40rem]"
          >
            {/* <img
              className="absolute h-full w-full object-cover"
              src="/images/arena/placeholder1.PNG"
              alt=""
            /> */}
          </div>
          <div
            className="right-12 -mb-4 ml-20 h-[7.5rem] w-[13rem] -rotate-6 overflow-hidden rounded-xl
              border-4 border-white bg-white/40 drop-shadow-lg lg:-mb-[13rem] lg:ml-[22rem]
              lg:h-[12.5rem] lg:w-[22rem]"
          >
            {/* <img
              className="absolute h-full w-full object-cover"
              src="/images/arena/placeholder2.PNG"
              alt=""
            /> */}
          </div>
          <div
            className="relative -z-[1] ml-12 h-[6rem] w-[10rem] rotate-[16deg] overflow-hidden rounded-xl
              border-4 border-white bg-white/40 drop-shadow-lg lg:-ml-[6rem] lg:h-[9rem]
              lg:w-[15rem] lg:rotate-[2deg]"
          >
            {/* <img
              className="absolute h-full w-full object-cover"
              src="/images/arena/placeholder3.PNG"
              alt=""
            /> */}
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-shadow text-center text-3xl md:text-4xl">
              The Ultimate <br /> Play-ground for
            </h1>
            <h3 className="text-outline flex whitespace-nowrap text-3xl text-white before:content-['SAUSAGE_SHOWDOWNS!'] after:content-['SAUSAGE_SHOWDOWNS!'] md:text-4xl">
              SAUSAGE SHOWDOWNS!
            </h3>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Link href="">
              <ButtonVariants text="MORE ON GALLERY" />
            </Link>
            <Link href="">
              <ButtonVariants text="ABOUT US" whiteText />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
