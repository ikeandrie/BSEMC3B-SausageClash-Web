import { LandingPages, Links } from "@/lib/nav-data";
import { ArrowDown, Earth, Gamepad2 } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { DM_Sans } from "next/font/google";
import Link from "next/link";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { PiTiktokLogoFill } from "react-icons/pi";
import { RiInstagramFill } from "react-icons/ri";

const dmSans = DM_Sans({ subsets: ["latin"] });

interface SidebarProps {
  handleClick: () => void;
  isRoot: boolean;
  pathName: string;
  buttonTransition?: string;
}

const linkStylesSideBar =
  "text-base leading-none px-4 text-white/70 py-[1.2rem] bg-slate-50/5 w-full rounded-xl hover:bg-slate-50/20 hover:text-white/90";

const icons = [
  {
    Icon: FaSquareFacebook,
    Link: "",
  },
  {
    Icon: PiTiktokLogoFill,
    Link: "",
  },
  {
    Icon: IoLogoYoutube,
    Link: "",
  },
  {
    Icon: FaXTwitter,
    Link: "",
  },
  {
    Icon: RiInstagramFill,
    Link: "",
  },
];

export const Sidebar: React.FC<SidebarProps> = ({
  handleClick,
  isRoot,
  pathName,
  buttonTransition,
}) => {
  return (
    <div className="fixed top-0 z-10 flex h-full w-full flex-col bg-white/30 backdrop-blur">
      <div
        className={`${dmSans.className} flex h-full flex-col items-center justify-between bg-[#101013] px-[1.25rem] pb-8 pt-[5rem]`}
      >
        <div className="flex w-full flex-col gap-4">
          <Link
            onClick={handleClick}
            href={isRoot ? "#home" : Links[0].Link}
            className={`${linkStylesSideBar} ${buttonTransition}`}
          >
            {Links[0].Text}
          </Link>
          {isRoot && (
            <div className="flex items-center justify-center gap-8 rounded-xl border-2 border-slate-50/10 px-4 py-[.9rem] text-[1rem] text-white/50">
              {LandingPages.map((page, i) => {
                return (
                  <Link
                    onClick={handleClick}
                    className={`${buttonTransition} hover:text-white/90`}
                    href={page.Id}
                    key={i}
                  >
                    {page.Text}
                  </Link>
                );
              })}
              <Link
                onClick={handleClick}
                href="#footer"
                className={`${buttonTransition} hover:text-white/90`}
              >
                <ArrowDown size={15} />
              </Link>
            </div>
          )}
          {Links &&
            Links.slice(1).map((link, i) => {
              return (
                <Link
                  className={`${linkStylesSideBar} ${buttonTransition} ${pathName === link.Link && "bg-slate-50/20 text-white/90"}`}
                  onClick={handleClick}
                  href={link.Link}
                  key={i}
                >
                  {link.Text}
                </Link>
              );
            })}
          <Link
            className="ml-auto mr-2 w-fit"
            onClick={handleClick}
            href={Links[1].Link}
          >
            <Earth
              className={`${buttonTransition} size-[1.5rem] text-white/60 hover:text-white`}
            />
          </Link>
        </div>
        <Link
          onClick={handleClick}
          className={`${buttonTransition} flex w-[22rem] items-center justify-center gap-2 rounded-xl bg-[#ffddb8] py-[1rem] text-base font-medium leading-none text-[#101013] hover:bg-[#ffddb8]/80`}
          href={isRoot ? LandingPages[2].Id : Links[0].Link}
        >
          <Gamepad2 className="size-[1.25rem] " />
          Play now
        </Link>
      </div>
      <div className="flex h-[10svh] w-full items-center justify-center gap-8 bg-gradient-to-r from-[#545fab] from-[1%] via-indigo-500 via-[40%] to-sky-500 to-[90%] px-4 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        <p className="text-2xl drop-shadow-md">SOCIALS:</p>
        <div className="flex gap-3">
          {icons.map((icon, index) => {
            const Icon = icon.Icon;

            return (
              <Link href={icon.Link} key={index}>
                <Icon
                  size={30}
                  className={`${buttonTransition} drop-shadow-md hover:text-white/70`}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};