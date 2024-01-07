import { Link } from "react-router-dom";
import getImage from "@/helpers/getImage.ts";
import useUserStore from "@/store/useUserStore.ts";
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/Avatar.tsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@components/ui/DropdownMenu.tsx";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Settings } from "lucide-react";
import { Input } from "@components/ui/Input.tsx";

const Navbar = () => {
  const user = useUserStore((s) => s.user);

  return (
    <div className="w-screen bg-base-100 flex justify-between items-center h-[66px] px-4">
      <div className="flex items-center gap-2">
        <Link to="/" className="btn btn-ghost text-xl font-bold">
          TOYA
        </Link>
        <div className="form-control ml-2">
          <Input
            type="text"
            placeholder="Поиск"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <Link to="/projects" className="ml-2">
          Проекты
        </Link>
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src={getImage(user.avatarUrl)} />
              <AvatarFallback>{user.firstName[0]}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            collisionPadding={{
              right: 10,
            }}
          >
            <DropdownMenuItem>
              <Link to="/profile/settings" className="flex items-center">
                <Settings className="mr-2 h-4 w-4" />
                <span>Настройки</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
