import { ReactNode } from 'react';

interface ITransactionCard {
  value: number | string;
  title: string;
  usdValue?: string;
  imgUrl: React.FC;
}

const TransactionCard = ({
  value,
  title,
  usdValue,
  imgUrl: Image,
}: ITransactionCard): ReactNode => {
  return (
    <div className="rounded-lg shadow p-6 md:pb-20">
      <div className="flex flex-row justify-center sm:flex-col items-center sm:items-start mb-4 sm:mb-0">
        <div className="flex justify-start mr-2">
          <Image />
        </div>
        <div className="font-montserrat font-[700] sm:mx-auto text-[1.875rem] sm:text-[6.5rem] leading-[2.25rem] sm:leading-[7.8rem] text-center text-white break-all">
          {value}
        </div>
      </div>
      <div className="mx-auto font-roboto font-[400] text-[0.813rem] sm:text-[1.063rem]] leading-[1.125rem] sm:leading-[1.375rem] tracking-[-0.0008em] sm:tracking-[-0.0043em] text-center text-[#9594AA]">
        <div className="mb-2 sm:mb-4">{title}</div>
        <div>{usdValue ? `$${usdValue}` : null}</div>
      </div>
    </div>
  );
};

export default TransactionCard;
