import React from "react";
import _ from "lodash";
import "./Marquee.css";
import userAvatar from "../../../assets/images/avatars/7.jpg";

const Marquee = () => {
  const influencerMarquee = [
    {
      id: 1,
      bgColor: "bg-red-500",
      title: 1,
    },
    {
      id: 2,
      bgColor: "bg-purple-500",
      title: 2,
    },
    {
      id: 3,
      bgColor: "bg-blue-500",
      title: 3,
    },
    {
      id: 4,
      bgColor: "bg-indigo-500",
      title: 4,
    },
    {
      id: 5,
      bgColor: "bg-pink-500",
      title: 5,
    },
    {
      id: 6,
      bgColor: "bg-green-500",
      title: 6,
    },
    {
      id: 7,
      bgColor: "bg-yellow-500",
      title: 7,
    },
    {
      id: 8,
      bgColor: "bg-gray-500",
      title: 8,
    },
    {
      id: 9,
      bgColor: "bg-pink-500",
      title: 9,
    },
  ];
  const influencerData = [
    {
      id: 1,
      name: "Jone Doe",
      platform: "Youtube",
      userName: "@jonny_Vlogs",
      platformScore: 98,
      subscribers: 709252,
      Avg_views: 32572,
    },
  ];
  const socialIcons = {
    instagram:
      "https://assets-global.website-files.com/6096c30cbe3be47082faee28/62f92c6b0825c8c05b256c32_a-social_in.png",
    facebook:
      "https://assets-global.website-files.com/6096c30cbe3be47082faee28/62f92c6b0825c83ef4256c2e_a-social_fb.png",
    youtube:
      "https://assets-global.website-files.com/6096c30cbe3be47082faee28/62f92c6b0825c8004f256c34_a-social_y.png",
    twitter:
      "https://assets-global.website-files.com/6096c30cbe3be47082faee28/62f92c6b0825c8596c256c2c_a-social_tw.png",
  };
  return (
    <div className="py-8">
      <div className="slider">
        <div className="slide-track text-gray-100">
          {_.map(influencerMarquee, (element) => (
            <div
              className={`slide border rounded-lg ${element.bgColor}`}
              key={element.id}>
              <div className="profile relative">
                <h4 className="text-white  text-xs mb-2 absolute top-6 right-6">
                  {influencerData[0].platform}
                </h4>
                <img
                  className=" relative w-14 h-14 rounded-full shadow-lg  border-1 mt-2 ml-3 border-gray-600"
                  src={userAvatar}
                  alt="product designer"
                />
                <div className="inline-flex z-50">
                  <img
                    src={socialIcons.facebook}
                    loading="lazy"
                    width="14"
                    height="14"
                    alt="Instagram"
                    className="absolute border-1 instagram-border rounded-full -mt-6 ml-[31px] "
                  />
                </div>
                <div className="">
                  <h1 className=" z-index -mt-10 text-xl right-5 absolute ">
                    {influencerData[0].name}
                  </h1>
                  <h1 className=" z-index text-[12px] right-5 text-gray-900 absolute top-20 ">
                    {influencerData[0].userName}
                  </h1>

                  <p className="text-[12px] font-medium absolute left-3 bottom-8">
                    RI-Scores
                  </p>
                  <p className="text-lg font-medium absolute left-3 bottom-1 ml-2">
                    {influencerData[0].platformScore}
                  </p>
                  <div className="text-[12px]  font-medium absolute inline-flex right-8 bottom-8">
                    <p className="mx-2">subscribers </p>
                    <p className="mx-2"> Avg_views</p>
                  </div>
                  <div className="text-lg font-medium absolute inline-flex right-8 bottom-1">
                    <p className="mx-2"> {influencerData[0].subscribers}</p>
                    <p className="mx-2"> {influencerData[0].Avg_views}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
