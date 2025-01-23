import wallets from "../wallets.json";

export default function Home() {
  return (
    <div className="container">
      <h1>Meine Krypto-Wallet-Adressen</h1>
      <div className="wallets-container">
        {wallets.map((wallet) => (
          <div key={wallet.id} className="wallet-card">
            <h2>{wallet.name}</h2>
            <p>{wallet.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
