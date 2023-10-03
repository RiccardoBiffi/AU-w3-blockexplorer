import { Utils } from "alchemy-sdk";
import { useAccountInfo } from "../../services";

export default function Account({ address }: { address: string }) {
  const accountInfo = useAccountInfo(address);

  return (
    <>
      {accountInfo && (
        <p>
          {address} is {accountInfo.isContract ? "a contract" : "an EOA"} with a
          balance of{" "}
          {Utils.formatEther(accountInfo.balance.toString()).substring(0, 7)}{" "}
          ETH
          {/* use getTokensForOwner to get tokens info*/}
        </p>
      )}
    </>
  );
}
