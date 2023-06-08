import React from "react";
//state array have all stats data

const stats: { id: number; name: string; value: string }[] = [
  { id: 1, name: "Influencers", value: "1 million +" },
  { id: 2, name: "Social Channels", value: "4" },
  { id: 3, name: "companies", value: "46,000 +" },
];
const Stats: React.FC = () => {
  return (
    <>
      <div className=" stats bg-gray-100 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
                {stat.id === 2 ? (
                  <div className="a-social_block inline-flex m-1">
                    <img
                      src="https://assets-global.website-files.com/6096c30cbe3be47082faee28/62f92c6b0825c8c05b256c32_a-social_in.png"
                      loading="lazy"
                      width="32"
                      height="32"
                      alt="Instagram"
                      className="a-social__image "
                    />
                    <img
                      src="https://assets-global.website-files.com/6096c30cbe3be47082faee28/62f92c6b0825c8004f256c34_a-social_y.png"
                      loading="lazy"
                      width="32"
                      height="32"
                      alt="Youtube"
                      className="a-social__image"
                    />
                    <img
                      src="https://assets-global.website-files.com/6096c30cbe3be47082faee28/62f92c6b0825c83ef4256c2e_a-social_fb.png"
                      loading="lazy"
                      width="32"
                      height="32"
                      alt="Facebook"
                      className="a-social__image"
                    />
                    <img
                      src="https://assets-global.website-files.com/6096c30cbe3be47082faee28/62f92c6b0825c8596c256c2c_a-social_tw.png"
                      loading="lazy"
                      width="32"
                      height="32"
                      alt="Twitter"
                      className="a-social__image"
                    />
                  </div>
                ) : (
                  " "
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
};

export default Stats;
