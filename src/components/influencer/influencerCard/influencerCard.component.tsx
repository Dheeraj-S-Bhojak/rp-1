import React, { Fragment } from "react";
import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
} from "@coreui/react";
import { cilOptions } from "@coreui/icons";

import CIcon from "@coreui/icons-react";

import userAvetar from "../../../assets/images/avatars/2.jpg";
const InfluencerCard: React.FC = () => {
  const niches = ["Music", "Beauty", "Family", "gaming"];
  return (
    <Fragment>
      <div className=" font-semibold text-center rounded-3xl border shadow-lg px-10 pb-10 pt-2 max-w-[18rem] ">
        <div className="bg-indigo-500 -mx-10 -m-2 p-2 mb-2 rounded-bottom rounded-3xl">
          <img
            className="-mb-2 w-28 h-[116px] rounded-full shadow-lg mx-auto border-1 border-gray-600"
            src={userAvetar}
            alt="product designer"
          />

          <div className="inline-flex z-50 ">
            <img
              src="https://assets-global.website-files.com/6096c30cbe3be47082faee28/62f92c6b0825c8c05b256c32_a-social_in.png"
              loading="lazy"
              width="20"
              height="20"
              alt="Instagram"
              className="border-1 border-gray-600 rounded-full"
            />
            <img
              src="https://assets-global.website-files.com/6096c30cbe3be47082faee28/62f92c6b0825c8004f256c34_a-social_y.png"
              loading="lazy"
              width="20"
              height="20"
              alt="Youtube"
              className="border-1 border-gray-600 rounded-full -ml-1"
            />
            <img
              src="https://assets-global.website-files.com/6096c30cbe3be47082faee28/62f92c6b0825c83ef4256c2e_a-social_fb.png"
              loading="lazy"
              width="20"
              height="20"
              alt="Facebook"
              className="border-1 border-gray-600 rounded-full -ml-1"
            />
            <img
              src="https://assets-global.website-files.com/6096c30cbe3be47082faee28/62f92c6b0825c8596c256c2c_a-social_tw.png"
              loading="lazy"
              width="20"
              height="20"
              alt="Twitter"
              className="border-1 border-gray-600 rounded-full -ml-1"
            />
          </div>
          <h1
            className="text-lg text-white"
            style={{ WebkitTextStroke: "0.3px indigo" }}>
            {" "}
            John Doe{" "}
          </h1>
        </div>
        <div className="bg-white">
          <h3 className="text-xs text-gray-600 "> Creative Director </h3>
          <div className="">
            {niches.map((niche) => (
              <div
                data-te-chip-init
                data-te-ripple-init
                className="[word-wrap: break-word] my-[5px] mr-2 inline-flex  h-[20px] cursor-pointer items-center justify-between rounded-[6px] bg-[#bcc2c5] px-[12px] py-0 text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] dark:bg-neutral-600 dark:text-neutral-200"
                data-te-close="true">
                {niche}
              </div>
            ))}
          </div>
          <button className="w-full bg-indigo-600 px-8 py-2 mt-2 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">
            Hire Me
          </button>
          <button className="w-full border-1 border-black bg-white px-8 py-2 mt-2 rounded-3xl text-gray-950 font-semibold uppercase tracking-wide">
            Open Profile
          </button>
        </div>
      </div>
    </Fragment>
  );
};
export default InfluencerCard;
