import { IAchievementsData, IWalletInfo } from './interfaces';

export const initialAchievementsData: IAchievementsData[] = [
  {
    name: 'uniswap',
    title: 'Unicorn',
    subTitle: 'Uniswap User',
    status: false,
    iconUrl: {
      active: 'achievements/uniswap-active.svg',
      inactive: 'achievements/uniswap-inactive.svg',
    },
  },
  {
    name: 'blast',
    title: 'Blaster',
    subTitle: 'Blast User',
    status: false,
    iconUrl: {
      active: 'achievements/blast-active.svg',
      inactive: 'achievements/blast-inactive.svg',
    },
  },
  {
    name: 'optimism',
    title: 'Optimist',
    subTitle: 'Optimism User',
    status: false,
    iconUrl: {
      active: 'achievements/optimism-active.svg',
      inactive: 'achievements/optimism-inactive.svg',
    },
  },
  {
    name: 'earlyBird',
    title: 'Early Bird',
    subTitle: 'Early Registration',
    status: false,
    iconUrl: {
      active: 'achievements/early-bird-active.svg',
      inactive: 'achievements/early-bird-inactive.svg',
    },
  },
  {
    name: 'pepe',
    title: 'PEPE',
    subTitle: 'PEPE Holder',
    status: false,
    iconUrl: {
      active: 'achievements/pepe-active.svg',
      inactive: 'achievements/pepe-inactive.svg',
    },
  },
  {
    name: 'pork',
    title: 'PORK',
    subTitle: 'PORK Holder',
    status: false,
    iconUrl: {
      active: 'achievements/pork-active.svg',
      inactive: 'achievements/pork-inactive.svg',
    },
  },
  {
    name: 'usdt',
    title: 'USDT',
    subTitle: 'Holder',
    status: false,
    iconUrl: {
      active: 'achievements/usdt-active.svg',
      inactive: 'achievements/usdt-inactive.svg',
    },
  },
  {
    name: 'usdc',
    title: 'USDC',
    subTitle: 'Holder',
    status: false,
    iconUrl: {
      active: 'achievements/usdc-active.svg',
      inactive: 'achievements/usdc-inactive.svg',
    },
  },
];

export const initialWalletInfo: IWalletInfo = {
  totalTrans: 0,
  totalTransVolumeEth: '0.0',
  totalTransVolumeUsd: '0.0',
};
