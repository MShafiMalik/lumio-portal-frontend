import { ReactNode } from 'react';
import TransactionCard from './TransactionCard';
import { IWalletInfo } from './main-content/interfaces';

const WalletDetail = ({ walletData }: { walletData: IWalletInfo }): ReactNode => {
  return (
    <div className="flex">
      <div className="basis-1/2 border-b border-[#ffffff1a]">
        <TransactionCard
          value={walletData.totalTrans}
          title="Total Transactions"
          imgUrl={() => (
            <div className="w-[1.75rem] h-[1.471rem] sm:w-[3.5rem] sm:h-[3.5rem] flex items-center">
              <img src={'/total-transactions.png'} alt="" />
            </div>
          )}
        />
      </div>
      <div className="basis-1/2 border-x border-b border-[#ffffff1a]">
        <TransactionCard
          value={walletData.totalTransVolumeEth}
          usdValue={walletData.totalTransVolumeUsd}
          title="Total Transferred Volume"
          imgUrl={() => (
            <div className="w-[1.75rem] h-[0.984rem] sm:w-[3.5rem] sm:h-[3.5rem] flex items-center">
              <img src={'/transferred-volume.png'} alt="" />
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default WalletDetail;
