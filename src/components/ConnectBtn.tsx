import { useWeb3Modal } from '@web3modal/ethers/react';
import { ReactNode } from 'react';

const ConnectBtn = (): ReactNode => {
  const { open } = useWeb3Modal();

  return (
    <div className="flex justify-center py-16 border-b border-[#ffffff1a]">
      <button onClick={() => open()} className="btn-bg text-lg py-4 px-8">
        Connect Wallet
      </button>
    </div>
  );
};

export default ConnectBtn;
