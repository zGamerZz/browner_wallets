import wallets from "../wallets.json";

export default function Home() {
    return (
        <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "20px" }}>
            <h1>Meine Krypto-Wallet-Adressen</h1>
            {wallets.map((wallet) => (
                <div key={wallet.id} style={{ marginBottom: "20px" }}>
                    <h2>{wallet.name}</h2>
                    <p>{wallet.address}</p>
                </div>
            ))}
        </div>
    );
}
