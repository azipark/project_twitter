import React from "react";
import { useNavigate } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { FaUserCircle } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";

export default function MenuList() {
  const navigate = useNavigate();
  const HomeIcon = GoHome as React.ComponentType<{ className?: string }>;
  const UserIcon = FaUserCircle as React.ComponentType<{ className?: string }>;
  const LogoutIcon = IoIosLogOut as React.ComponentType<{ className?: string }>;

  return <div className="footer">
    <div className="footer__grid">
      <button type="button" onClick={() => navigate("/")}>
        <HomeIcon />
        Home
      </button>
      <button type="button" onClick={() => navigate("/profile")}>
        <UserIcon />
        Profile
      </button>
      <button type="button" onClick={() => navigate("/")}>
        <LogoutIcon />
        Logout
      </button>
    </div>
  </div>
}