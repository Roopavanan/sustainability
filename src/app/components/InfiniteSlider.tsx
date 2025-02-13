"use client";

const InfiniteSlider = () => {
  const modules = [
    { id: "01", text: "Environmental Science and Conservation" },
    { id: "02", text: "Sustainable Development and Policy Frameworks" },
    { id: "03", text: "Climate Science" },
    { id: "04", text: "GHG Accounting and Carbon Footprinting" },
    { id: "05", text: "Renewable Energy Systems" },
    { id: "06", text: "Water Resource Management" },
    { id: "07", text: "Waste Management and Circular Economy" },
    { id: "08", text: "Sustainable Architecture" },
    { id: "09", text: "Community Engagement and Social Innovation" },
  ];

  // Duplicate modules for smooth infinite scrolling
  const duplicatedModules = [...modules, ...modules];

  return (
    <div className="relative w-full overflow-hidden py-5 bg-[#1B360F]">
      <div className="flex gap-5 animate-slide my-6">
        {duplicatedModules.map((module, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[270px] h-[160px] p-4 bg-opacity-30 bg-[#2D5019] border border-[#90C645] rounded-[25px] 
            flex flex-col justify-start items-start 
            sm:w-[240px] sm:h-[140px] md:w-[250px] md:h-[150px] lg:w-[270px] lg:h-[160px]"
          >
            <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#A2E64D]">{module.id}</h2>
            <p className="text-sm sm:text-xs md:text-sm lg:text-md text-white text-left mt-4">
              {module.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
