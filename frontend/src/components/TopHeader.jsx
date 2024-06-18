import React from "react";
import reward from "../img/REWARDS_whatsonM.jpg";

const TopHeader = () => {
  return (
    <section class="flex flex-col md:flex-row gap-4">
      {/* <!-- Left Section: App Promotion --> */}
      <div class="bg-yellow-400 p-8 rounded-lg flex flex-col justify-center text-center md:w-1/2">
        <p class="text-lg">Tích điểm, đổi quà và ưu đãi</p>
        <h2 class="text-3xl font-bold my-4">ỨNG DỤNG McDONALD'S</h2>
        <a
          href="#"
          class="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 inline-block"
        >
          TẢI ỨNG DỤNG
        </a>
      </div>

      {/* <!-- Right Section: Points Promotion --> */}
      <div class="bg-white rounded-lg shadow flex flex-col justify-center text-center md:w-1/2">
        <div class="  flex justify-center space-x-4 mb-4">
          <img src={reward} alt="Rewards on Phone" className="h-[50vh]" />
        </div>
      </div>
    </section>
  );
};

export default TopHeader;
