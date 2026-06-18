import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Home() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <>
      {/* Header */}
      <header
        className="
          bg-white
          shadow-sm
          border-b
          sticky
          top-0
          z-50
        "
      >
        <div
          className="
            max-w-full
            px-6
            py-4
            flex
            items-center
            justify-between
          "
        >
          <h1 className="text-2xl font-bold text-[#343762]">
            NexaCode
          </h1>

          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-3"
            >
              <div
                className="
                  w-10
                  h-10
                  rounded-full
                  bg-gradient-to-r
                  from-purple-400
                  to-purple-700
                  text-white
                  flex
                  items-center
                  justify-center
                  font-bold
                "
              >
                {user?.name?.charAt(0)?.toUpperCase()}
              </div>

              <span className="font-medium text-[#343762]">
                {user?.name}
              </span>
            </button>

            {open && (
              <div
                className="
                  absolute
                  right-0
                  mt-3
                  w-52
                  bg-white
                  rounded-xl
                  shadow-lg
                  overflow-hidden
                "
              >
                <Link
                  to="/profile"
                  className="
                    block
                    px-4
                    py-3
                    hover:bg-gray-100
                  "
                >
                  View Profile
                </Link>

                <button
                  onClick={handleLogout}
                  className="
                    w-full
                    text-left
                    px-4
                    py-3
                    text-red-500
                    hover:bg-gray-100
                  "
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Home Content */}
      <main className="p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#343762] mb-4">
            Welcome, {user?.name} 👋
          </h2>

          <p className="text-gray-600">
            You are successfully logged in to NexaCode.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow rounded-xl p-6">
              <h3 className="font-semibold text-lg">Projects</h3>
              <p className="text-gray-500 mt-2">
                Manage your development projects.
              </p>
            </div>

            <div className="bg-white shadow rounded-xl p-6">
              <h3 className="font-semibold text-lg">Tasks</h3>
              <p className="text-gray-500 mt-2">
                Track and organize your tasks.
              </p>
            </div>

            <div className="bg-white shadow rounded-xl p-6">
              <h3 className="font-semibold text-lg">Profile</h3>
              <p className="text-gray-500 mt-2">
                Update your account information.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}