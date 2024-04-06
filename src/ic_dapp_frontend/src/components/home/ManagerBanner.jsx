import React from "react";
import managerImg from "../../../../images/managers/ars.png";
import { COLORS } from "../../../../utils/Colors";
function ManagerBanner() {
  const bgColor = COLORS.primary;
  return (
    <div
      className={`flex justify-between items-center py-4 px-4 bg-[#9fcd8f] rounded-lg hover:scale-110 cursor-pointer ease-in duration-100 shadow-xl`}
    >
      <div>
        <img
          src={managerImg}
          alt="manager"
          className="object-contain"
          width={300}
          height={300}
        />
      </div>
      <div>
        <div>
          <h1 className="pl-4">Mikel Arteta</h1>
        </div>
        <div>
          <p>
            Criticism is part of being at a club like Arsenal. You always have
            to win and when you're not winning you have to be prepared for that.
            After winning, it's hard to go to not winning. What I've learned
            mostly is that you have to be ruthless and you have to be consistent
            and you have to fit every day the culture of the club to create a
            winning mentality.
          </p>
        </div>
        <div>
          <h1 className="pl-4">Arsenal</h1>
        </div>
      </div>
    </div>
  );
}

export default ManagerBanner;
