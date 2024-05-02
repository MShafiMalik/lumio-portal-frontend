import { ReactNode, useEffect, useState } from 'react';
import { useWeb3ModalAccount } from '@web3modal/ethers/react';
import axios from 'axios';
import Title from '../Title';
import WalletDetail from '../WalletDetail';
import ConnectBtn from '../ConnectBtn';
import AchievementCard from '../AchievementCard';
import { IAchievementsData, IWalletInfo } from './interfaces';
import { initialAchievementsData, initialWalletInfo } from './data';

const MainContent = (): ReactNode => {
  const { isConnected, address } = useWeb3ModalAccount();

  const [achievements, setAchievements] = useState<IAchievementsData[]>(initialAchievementsData);
  const [walletInfo, setWalletInfo] = useState<IWalletInfo>(initialWalletInfo);

  useEffect(() => {
    if (!isConnected) {
      setAchievements(initialAchievementsData);
      setWalletInfo(initialWalletInfo);
    } else if (address) getWalletData(address);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  const getWalletData = async (walletAddress: string) => {
    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL || '';
      const url = `${baseUrl}/transactions/${walletAddress}`;

      const response = await axios.get(url);

      if (response?.status === 200) {
        const responseData = response.data;

        setWalletInfo(responseData.walletInfo ? responseData.walletInfo : initialWalletInfo);
        const achievementsData = achievements.map((item) => ({
          ...item,
          status: responseData.walletStatus[item.name],
        }));
        setAchievements(achievementsData);
      } else {
        console.error('Unexpected response status:', response.status);
      }
    } catch (error) {
      console.error('Error fetching wallet status:', error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-12 pb-[10rem] sm:pb-[8rem]">
      <Title />
      <div className="bg rounded-lg border border-[#ffffff1a] bg-gradient-to-b from-white-10 to-white-1 backdrop-blur-md mb-8">
        {isConnected ? <WalletDetail walletData={walletInfo} /> : <ConnectBtn />}
      </div>
      <h1 className="font-roboto font-[800] leading-[1.563rem] sm:leading-[2.563rem] tracking-[-0.0045em] sm:tracking-[0.004em] text-[1.25rem] sm:text-[2.125rem] text-white text-center mx-auto mb-8">
        Achievements
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-5">
        {achievements.map((item) => (
          <AchievementCard
            title={item.title}
            subtitle={item.subTitle}
            img={item.iconUrl}
            active={item.status}
          />
        ))}
      </div>
    </div>
  );
};

export default MainContent;
