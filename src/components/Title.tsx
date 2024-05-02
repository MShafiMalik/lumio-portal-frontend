import { ReactNode } from 'react';

const Title = (): ReactNode => {
  return (
    <div className="text-white flex flex-col items-center mb-8 font-roboto">
      <h1 className="text-center font-[800] text-[2rem] sm:text-[3rem] leading-[2.563rem] tracking-[0.004em]">
        Lumio Dashboard
      </h1>
      <p className="w-[90%] sm:w-full mt-4 text-[#9594AA] text-[1.063rem] sm:text-[1.25rem] font-[400] leading-[1.375rem] sm:leading-[1.563rem] tracking-[-0.0045em] text-center">
        Here you can find your results of use the Lumio. Deposit at least 1$ to see achievements
      </p>
    </div>
  );
};

export default Title;
