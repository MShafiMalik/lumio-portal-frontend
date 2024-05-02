import { useWeb3Modal, useWeb3ModalAccount } from '@web3modal/ethers/react';
import { ReactNode } from 'react';

const Navbar = (): ReactNode => {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useWeb3ModalAccount();

  return (
    <nav className="w-full px-6 py-4 fixed top-0 left-0 z-50">
      <div className="flow-root max-w-[1440px] mx-auto">
        <div className="float-right">
          {isConnected && (
            <button
              onClick={() => open()}
              className="flex items-center bg-zinc-600 text-[0.875rem] sm:text-xl text-gray-200 font-bold py-1 px-3 rounded-full border-[6px] border-slate-800"
            >
              {address?.slice(0, 4) + '...' + address?.slice(-4)}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 ml-2"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM6.262 6.072a8.25 8.25 0 1 0 10.562-.766 4.5 4.5 0 0 1-1.318 1.357L14.25 7.5l.165.33a.809.809 0 0 1-1.086 1.085l-.604-.302a1.125 1.125 0 0 0-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 0 1-2.288 4.04l-.723.724a1.125 1.125 0 0 1-1.298.21l-.153-.076a1.125 1.125 0 0 1-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 0 1-.21-1.298L9.75 12l-1.64-1.64a6 6 0 0 1-1.676-3.257l-.172-1.03Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>
        <div className="float-left">
          <img
            className="w-[1.875rem] sm:w-[3.125rem] h-[1.875rem] sm:h-[3.125rem]"
            src="logo.svg"
            alt=""
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
