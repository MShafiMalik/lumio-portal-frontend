const NotificationFooter = () => (
  <>
    <div className="bg-[#28253e] fixed bottom-0 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-12 py-4 sm:py-8 text-white columns-1 sm:columns-2">
        <div className="font-roboto mb-4 sm:mb-0 text-center sm:text-left">
          <h1 className="font-[600] text-[1.25rem] sm:text-[1.25rem] leading-[1.563rem] sm:leading-[1.563rem] tracking-[-0.0045em] mb-2">
            The bridge is now available
          </h1>
          <p className="font-[400] text-[0.938rem] sm:text-[1.063rem] leading-[1.125rem] sm:leading-[1.375rem] tracking-[-0.0045em] text-[#9594AA]">
            Bridge tokens to check the best Layer2 blockchain
          </p>
        </div>
        <div className="flex justify-center sm:justify-end">
          <a
            href="https://superbridge.lumio.io"
            target="_blank"
            className="flex items-center justify-center bg-gradient-to-r from-[#6E42CA] to-[#8D29C1] rounded-[6.5rem] p-4"
          >
            <div>
              <img
                className="w-[1.199rem] sm:w-[1.5rem] h-[1.199rem] sm:h-[1.5rem]"
                src="/lumio-bridge.png"
                alt="bridge logo"
              />
            </div>
            <p className="whitespace-nowrap uppercase ml-1 sm:ml-4 font-[700] text-[0.849rem] sm:text-[1.063rem] leading-[1.099rem] sm:leading-[1.375rem] tracking-[0.05em]">
              lumio bridge
            </p>
          </a>
          <a
            href="https://app.rollbridge.app/lumio-mainnet"
            target="_blank"
            className="flex ml-2 items-center justify-center bg-gradient-to-r from-[#6E42CA] to-[#8D29C1] rounded-[6.5rem] p-4"
          >
            <div>
              <img
                className="w-[1.199rem] sm:w-[1.5rem] h-[1.199rem] sm:h-[1.5rem]"
                src="/super-bridge.png"
                alt="bridge logo"
              />
            </div>
            <p className="whitespace-nowrap uppercase ml-1 sm:ml-4 font-[700] text-[0.849rem] sm:text-[1.063rem] leading-[1.099rem] sm:leading-[1.375rem] tracking-[0.05em]">
              super bridge
            </p>
          </a>
        </div>
      </div>
    </div>
  </>
);

export default NotificationFooter;
