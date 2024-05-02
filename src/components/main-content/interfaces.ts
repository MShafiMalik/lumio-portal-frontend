export interface IAchievementsData {
  name: string;
  title: string;
  subTitle: string;
  status: boolean;
  iconUrl: {
    active: string;
    inactive: string;
  };
}

export interface IWalletInfo {
  totalTrans: number;
  totalTransVolumeEth: string;
  totalTransVolumeUsd: string;
}
