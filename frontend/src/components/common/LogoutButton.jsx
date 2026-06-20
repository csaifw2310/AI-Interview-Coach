import useAuth from "../../hooks/useAuth";
import { LogOut } from "lucide-react";

const LogoutButton = () => {

const { logout } = useAuth();

return (

<button
  onClick={logout}
  className="
  group
  relative
  overflow-hidden
  flex
  items-center
  gap-2
  px-4
  py-2.5
  rounded-2xl
  border
  border-red-200
  dark:border-red-900/50
  bg-white/70
  dark:bg-slate-800/70
  backdrop-blur-md
  hover:bg-red-50
  dark:hover:bg-red-950/20
  hover:shadow-xl
  hover:scale-105
  active:scale-95
  transition-all
  duration-300
  "
>

  <div
    className="
    absolute
    inset-0
    bg-gradient-to-r
    from-red-500/0
    via-red-500/5
    to-red-500/0
    opacity-0
    group-hover:opacity-100
    transition-all
    duration-500
    "
  />

  <LogOut
    size={18}
    className="
    relative
    text-red-500
    group-hover:translate-x-1
    transition-all
    duration-300
    "
  />

  <span
    className="
    relative
    text-sm
    font-medium
    text-slate-700
    dark:text-slate-200
    "
  >
    Logout
  </span>

</button>


);

};

export default LogoutButton;
