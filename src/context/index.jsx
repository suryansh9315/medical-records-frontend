import React, { useContext, createContext } from "react";
import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract(
    "0x1610917e4eb3598B918f313172B3502075F6d7CB"
  );
//   const { mutateAsync: createCampaign } = useContractWrite(
//     contract,
//     "createCampaign"
//   );

  const address = useAddress();
  const connect = useMetamask();

  return(
    <StateContext.Provider value={{ address, connect, contract }}>
        {children}
    </StateContext.Provider>
  )
};

export const useStateContext = () => useContext(StateContext)