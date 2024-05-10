import { Crown, Gem, Laugh, Swords } from "lucide-react";
import Image from "next/image";

const icons = [
  {
    Icon: Swords,
  },
  {
    Icon: Crown,
  },
  {
    Icon: Gem,
  },
  {
    Icon: Laugh,
  },
];

export const Hero = () => {
  return (
    <section className="mt-[4.5rem]">
      <div className="flex flex-col items-center justify-center gap-3 bg-[#df6e29] py-[1rem] text-[1.4rem] text-white md:flex-row md:gap-6 md:py-[1.15rem]">
        <h3 className="leading-none">EXPERIENCE NOW!</h3>
        <div className="flex gap-[.7rem]">
          {icons.map((icon, index) => {
            const Icon = icon.Icon;

            return (
              <div
                key={index}
                className="flex size-10 cursor-pointer items-center justify-center rounded-[.27rem] bg-white/70 text-[#df6e29] hover:bg-white/100"
              >
                <Icon />
              </div>
            );
          })}
        </div>
      </div>
      <div className="grid size-10 min-h-screen w-full items-center justify-center bg-neutral-content">
        {/* <Image
          className="h-10 w-10"
          src="https://cdn2.unrealengine.com/fg-10-3-evg-keyart-backgroundonly-1920x1080-1920x1080-cf86998087ba.png"
          alt=""
          // width={100}
          // height={100}
          fill
        /> */}
        HOME
      </div>
    </section>
  );
};
