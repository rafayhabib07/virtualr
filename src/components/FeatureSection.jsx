import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="relative mt-10 border-b border-neutral-800 min-h-[400px]">
      <div className="text-center">
        <span className="inline-block bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-3 py-1 uppercase">
          Features
        </span>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-10 tracking-wide">
          Easy Build{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Your Code
          </span>
        </h2>
      </div>

      <div className="flex flex-wrap mt-10 lg:mt-10">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-6">
            <div className="bg-neutral-900 rounded-xl p-6 hover:bg-neutral-800 transition">
              <div className="flex items-center justify-center mb-6 w-12 h-12 rounded-full bg-orange-500/10 text-orange-500">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2">{feature.text}</h3>

              <p className="text-neutral-500">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
