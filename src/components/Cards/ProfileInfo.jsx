import React from "react";
import { getInitials } from "../../utils/helper";

const ProfileInfo = ({ onLogout }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center justify-center w-12 h-12 rounded-full text-slate-950 font-medium bg-slate-100">
        {getInitials("Hibou Gaming")}
      </div>
      <div>
        <p className="text-sm font-medium">Hibou Gaming</p>
        <button className="text-sm text-slate-700 underline" onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
};

export default ProfileInfo;
