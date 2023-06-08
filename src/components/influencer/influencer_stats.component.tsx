import React from "react";

/**
 * InfluencerStatic
 * @returns
 */
const InfluencerStatic: React.FC = () => {
  //stats contain all influencer home page stats
  const stats = [
    {
      id: 1,
      title: "144k",
      discription: "Downloads",
    },
    {
      id: 2,
      title: "32.1K",
      discription: "Users",
    },
    {
      id: 3,
      title: "12.9K",
      discription: "Subscribers",
    },
    {
      id: 4,
      title: "24.5K",
      discription: "Cookies",
    },
  ];
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.id} className="text-center">
            <h6 className="text-3xl font-bold text-deep-purple-accent-400">
              {stat.title}
            </h6>
            <p className="font-bold">{stat.discription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfluencerStatic;
