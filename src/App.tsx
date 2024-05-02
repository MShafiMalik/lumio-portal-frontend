import Navbar from './components/Navbar';
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react';
import MainContent from './components/main-content';
import { ReactNode } from 'react';
import NotificationFooter from './components/NotificationFooter';

const App = (): ReactNode => {
  const projectId = import.meta.env.VITE_ETHERSCAN_PROJECT_ID || null;
  const rpcURL = import.meta.env.VITE_RPC_URL || '';

  if (projectId) {
    const mainnet = {
      chainId: 1,
      name: 'Ethereum',
      currency: 'ETH',
      explorerUrl: 'https://etherscan.io',
      rpcUrl: rpcURL,
    };

    const metadata = {
      name: 'Lumio portal',
      description: 'Lumio portal dashboard',
      url: 'https://dashboard.lumio.io',
      icons: ['https://dashboard.lumio.io/lumio-bridge.png'],
    };

    createWeb3Modal({
      ethersConfig: defaultConfig({ metadata }),
      chains: [mainnet],
      projectId,
      enableAnalytics: true,
    });
  }

  return (
    <div className='bg-[url("/bridge-bg.svg")] w-full min-h-[100vh] pt-[90px]  bg-cover'>
      <Navbar />
      <MainContent />
      <NotificationFooter />
    </div>
  );
};

export default App;
