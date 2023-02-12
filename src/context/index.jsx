import React, { useContext, createContext } from "react";
import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
  useContractRead
} from "@thirdweb-dev/react";
import { ethers } from "ethers";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract(
    "0xC397eb74e0D6317ED6E55207ba5832eAc64FfE72"
  );
  const hospitalContract = contract
  const { mutateAsync: store_hospital_details } = useContractWrite(
    hospitalContract,
    "store_hospital_details"
  );

  // const { data: myData, isLoading } = useContractRead(hospitalContract, "retreive_hospital_details");

  const address = useAddress();
  const connect = useMetamask();

  return(
    <StateContext.Provider value={{ address, connect, hospitalContract, store_hospital_details  }}>
        {children}
    </StateContext.Provider>
  )
};

export const useStateContext = () => useContext(StateContext)