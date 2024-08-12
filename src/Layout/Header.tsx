import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = ({  }: { Open: boolean }) => {
  const { setTheme, theme } = useTheme();
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between w-full bg-secondary pr-2 pl-2 h-16 duration-500 ease-in-out transition-all z-0">
      <p className="text-primary text-4xl mx-auto">TeleJob</p>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="!p-4" variant={"ghost"}>
              {theme === "dark" ? <FaMoon /> : <FaSun />}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button
          variant={"destructive"}
          onClick={() => {
            localStorage.clear();
            navigate("/login");
          }}
        >
          Logout
        </Button>
      </div>
    </header>
  );
};

export default Header;
