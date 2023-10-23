import { Utils } from "alchemy-sdk";
import { useAccountInfo } from "../../services";

export default function Account({ address }: { address: string }) {
  const accountInfo = useAccountInfo(address);
  const tokensTable = accountInfo?.tokens.map((token) => {
    return (
      <tr key={token.contractAddress}>
        <td>
          <img src={token.logo} alt="" />
        </td>
        <td>{token.name}</td>
        <td>{token.balance}</td>
        <td>{token.symbol}</td>
      </tr>
    );
  });

  return (
    <>
      {accountInfo && (
        <>
          <h3>
            This is{" "}
            <u>{accountInfo.isContract ? "a smart-contract" : "an EOA"}</u> with
            a balance of{" "}
            {Utils.formatEther(accountInfo.balance.toString()).substring(0, 7)}{" "}
            ETH
          </h3>
          <hr />
          <h3>Address' tokens</h3>
          <table border={1}>
            <thead>
              <tr>
                <th>Logo</th>
                <th>Name</th>
                <th>Balance</th>
                <th>Symbol</th>
              </tr>
            </thead>
            <tbody>{tokensTable}</tbody>
          </table>
        </>
      )}
    </>
  );
}
