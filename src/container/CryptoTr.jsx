import React, { Fragment } from "react";
import Search from "./Search";

const CryptoTr = ({ data }) => {
  return (
    <>
      <Search />
      <tr>
        {console.log("from child", data)}
        <td className="p-2 whitespace-nowrap">
          <div className="flex items-center">
            <div className="w-10 h-10 sm:w-5 sm:h-5  flex-shrink-0 mr-2 sm:mr-3">
              <img
                className="rounded-full"
                src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                alt="Alex Shatov"
              />
            </div>
            <div className="font-medium">bitcoin</div>
            <div className="text-xs flex-shrink-0 text-slate-500 ml-2 sm:ml-3">
              BTC
            </div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left">$41558</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium text-green-500">$41558</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium ">69386048550</div>
        </td>
      </tr>
    </>
  );
};

export default CryptoTr;
