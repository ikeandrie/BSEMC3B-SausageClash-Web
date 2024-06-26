import { Asap } from "next/font/google";
import { CharacterCarousel } from "./ui/character-carousel";

const asap = Asap({ subsets: ["latin"] });

export const Character = () => {
  return (
    <>
      <section
        id="character"
        className="clip-path bg-gray-600] relative z-[6] -mb-[4.7rem] grid
        h-[49rem] w-full items-center justify-center pt-[3.5rem] md:h-[40rem] lg:h-[50rem]
        lg:pt-0 thick:-mb-[6rem] thick:h-[55rem]"
      >
        <img
          className="absolute h-full w-full object-cover"
          src="/images/background-images/variant3.png"
          alt=""
        />

        <div
          className="z-[6] flex flex-col items-center gap-10 text-white md:flex-row-reverse
            md:gap-4 lg:-ml-[8rem] lg:gap-4 thick:gap-4"
        >
          <div className="flex w-[31ch] flex-col text-center leading-none">
            <h2 className="text-shadow text-2xl text-yellow-400">CHARACTERS</h2>
            <h1 className="text-shadow text-4xl">
              CHOOSE YOUR OWN CULINARY CONTENDER
            </h1>
            <p className={`${asap.className} mt-4 text-lg font-bold leading-6`}>
              Step into a wildly entertaining sausage fighting game where
              players from all around dive into thrilling, chaotic battles,
              using wacky strategies and hilarious power-ups to outmaneuver each
              other and claim the title of the ultimate sausage champion!
            </p>
          </div>

          <CharacterCarousel />
        </div>
      </section>
      <div className="clip-path relative z-[5] -mb-[5rem] h-[5rem] w-full bg-white thick:-mb-[6rem] thick:h-[6.5rem]"></div>
    </>
  );
};
