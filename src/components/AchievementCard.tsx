import { ReactNode } from 'react';

interface IAchievementCard {
  title: string;
  subtitle: string;
  img: { active: string; inactive: string };
  active: boolean;
}

const AchievementCard = ({ title, subtitle, img: imgUrl, active }: IAchievementCard): ReactNode => (
  <div
    className={`w-full shadow-lg lg:basis-1/4 border border-[#ffffff1a] flex items-center p-4 sm:p-8 rounded-lg border-solid h-[86px] 
    ${active ? 'bg-gradient-active text-white' : 'bg-gradient-inactive text-[#9594AA]'}`}
  >
    <img src={active ? imgUrl.active : imgUrl.inactive} alt={title} width={45} />
    <div className="ml-2 sm:ml-6 font-roboto">
      <h1 className="font-[700] text-[0.946rem] sm:text-[1.25rem] leading-[1.234rem] sm:leading-[1.631rem]">
        {title}
      </h1>
      <p className="text-[0.757rem] sm:text-[1rem] font-[400] leading-[0.988rem] sm:leading-[1.305rem]">
        {subtitle}
      </p>
    </div>
  </div>
);

export default AchievementCard;
