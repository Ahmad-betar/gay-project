import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import useLinks from "./Links";
import { FaGripLines } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SideBar = ({
  Open,
  openHandler,
}: {
  Open: boolean;
  openHandler: () => void;
}) => {
  const { dashBoardNavLinks } = useLinks();

  return (
    <div
      className={cn("duration-500 ease-in-out transition-all ", {
        "w-60": Open,
        "w-20": !Open,
      })}
    >
      <div
        className={cn(
          "duration-500 bg-black-100 ease-in-out transition-all overflow-y-scroll z-50 fixed auto-cols-auto flex flex-col h-full border-r border-white-600 pl-0  pt-4 px-1",
          {
            "w-60": Open,
            "w-20": !Open,
          }
        )}
      >
        <Button
          variant={"ghost"}
          onClick={openHandler}
          className="p-1 rounded-full flex justify-center"
        >
          <FaGripLines />
        </Button>

        <nav className="flex">
          <Link to={"/"} className="h-full flex justify-center p-3 mx-auto">
            <img className={`!max-w-[50%] ${!Open && "max-w-[60%]"}`} />
          </Link>
        </nav>
        <NavLinks Open={Open} links={dashBoardNavLinks} />
      </div>
    </div>
  );
};

export default SideBar;
