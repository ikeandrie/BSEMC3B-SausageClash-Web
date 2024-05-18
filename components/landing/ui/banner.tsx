import { Crown, Gem, Laugh, Swords } from "lucide-react";
import { Links, LandingPages } from "@/lib/nav-data";
import Link from "next/link";

const icons = [
  {
    Icon: Swords,
    Link: LandingPages[0].Id,
  },
  {
    Icon: Crown,
    Link: LandingPages[2].Id,
  },
  {
    Icon: Gem,
    Link: Links[1].Link,
  },
  {
    Icon: Laugh,
    Link: LandingPages[1].Id,
  },
];

export const Banner = () => {
  return (
    <div className="absolute top-0 z-30 mt-[4.5rem] flex w-full flex-col items-center justify-center gap-3 bg-gradient-to-r from-[#4397c6] to-[#9cd0ee] py-[1rem] text-[1.4rem] text-white md:flex-row md:gap-6 md:py-[1.15rem]">
      <h3 className="text-2xl leading-none drop-shadow-lg">EXPERIENCE NOW!</h3>
      <div className="flex gap-[.7rem]">
        {icons.map((icon, index) => {
          const Icon = icon.Icon;

          return (
            <Link
              href={icon.Link}
              key={index}
              className="flex size-10 cursor-pointer items-center justify-center rounded-[.27rem] bg-white/80 text-[#4397c6] drop-shadow-lg hover:bg-white/100"
            >
              <Icon />
            </Link>
          );
        })}
      </div>
    </div>
  );
};