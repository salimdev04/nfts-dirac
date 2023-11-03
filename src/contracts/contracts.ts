import { nftsConfigs } from "./contractConfig";
// ------- ERC20 CCIP CONTRACT ZONE

import {
  useContractRead,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";

// READ
export function useNFTsContractRead(functionName: string, args: any = []): any {
  const { data, refetch } = useContractRead({
    ...nftsConfigs,
    functionName: functionName,
    args,
  });
  return { data, refetch };
}
// WRITE
export function useNFTsContractWrite(
  functionName: string,
  args: any = [],
  callback: Function = () => {},
  callbackError: Function = () => {}
): any {
  const {
    data,
    error,
    isError,
    write,
    isLoading: isLoadingWrite,
  } = useContractWrite({
    ...nftsConfigs,
    functionName: functionName,
    args,
  });

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
    onSuccess() {
      callback();
    },
    onError(error) {
      callbackError(error);
    },
  });

  return {
    isLoading: isLoadingWrite || isLoading,
    isSuccess,
    data,
    error,
    isError,
    write,
  };
}
