import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Search from "./Search";

const ListCrypto = () => {
  //TODO: This Method For Formating Number
  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const [GetCrypto, SetCrypto] = useState([]);
  const [GetAllCrypto, SetAllCrypto] = useState();
  //   const [GetInput, SetInput] = useState([]);
  const OnSearch = (value) => {
    SetCrypto(GetAllCrypto);
    console.log("after ", GetCrypto);
    console.log("Value", value);
    if ((value.length !== 0, value)) {
      SetCrypto(
        GetCrypto.filter((cry) => {
          return cry.name.toLowerCase().includes(value.toLowerCase());
        })
      );
    } else {
      SetCrypto(GetAllCrypto);
    }
    console.log("before ", GetCrypto);
  };
  //TODO: FetchApi
  const FunGetcrypto = async () => {
    const response = await axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false`
      )
      .catch((err) => {
        console.log(err);
      });
    SetCrypto(response.data);
    SetAllCrypto(response.data);
  };

  //TODO: ComponentDidMount
  useEffect(() => {
    FunGetcrypto();
  }, []);
  return (
    <>
      <Search OnSearch={OnSearch} />
      <div className="lg:p-14 flex flex-col overflow-hidden">
        <div className="-my-2 overflow-x-auto  sm:-mx-6 lg:-mx-8">
          <div className="lg:py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide- bg-slate-900 divide-gray-50">
                <thead className="bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-50 uppercase tracking-wider"
                    >
                      Coin
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-50  uppercase tracking-wider"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-50  uppercase tracking-wider"
                    >
                      24h
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-50  uppercase tracking-wider"
                    >
                      Mkt Cap
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-slate-700 divide-y divide-gray-200">
                  {Object.keys(GetCrypto).length !== 0 &&
                    GetCrypto.map((person) => (
                      <tr key={person.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex">
                            <div className="px-2 text-sky-100  font-bold text-lg">
                              # {person.market_cap_rank}
                            </div>
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={person.image}
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-bold  text-gray-100 ">
                                {person.name}
                              </div>
                              <div className="text-xs text-left text-gray-50">
                                {person.symbol}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 whitespace-nowrap font-mono">
                          <div className="px-6 text-sm text-left text-gray-100">
                            {formatter.format(person.current_price)}
                          </div>
                        </td>
                        <td className="py-4 whitespace-nowrap">
                          {person.market_cap_change_percentage_24h > 0 ? (
                            <div className="px-6 text-sm text-left text-green-500">
                              {person.market_cap_change_percentage_24h.toFixed(
                                2
                              )}{" "}
                              %
                            </div>
                          ) : (
                            <div className="px-6 text-sm text-left text-red-500">
                              {person.market_cap_change_percentage_24h.toFixed(
                                2
                              )}{" "}
                              %
                            </div>
                          )}
                        </td>
                        <td className="py-4 whitespace-nowrap text-sm text-gray-100">
                          {formatter.format(person.market_cap)}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListCrypto;
