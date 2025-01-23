import { useState } from "react";
import wallets from "../wallets.json";
import fs from "fs";
import path from "path";

export default function Admin() {
    const [walletData, setWalletData] = useState(wallets);
    const [newWallet, setNewWallet] = useState({ name: "", address: "" });

    const addWallet = () => {
        if (newWallet.name && newWallet.address) {
            setWalletData([...walletData, { id: walletData.length + 1, ...newWallet }]);
            setNewWallet({ name: "", address: "" });
        }
    };

    const saveWallets = async () => {
        const response = await fetch("/api/save-wallets", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(walletData),
        });

        if (response.ok) alert("Wallets gespeichert!");
        else alert("Fehler beim Speichern.");
    };

    return (
        <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "20px" }}>
            <h1>Admin Panel</h1>
            <div style={{ marginBottom: "20px" }}>
                <input
                    type="text"
                    placeholder="Wallet Name"
                    value={newWallet.name}
                    onChange={(e) => setNewWallet({ ...newWallet, name: e.target.value })}
                    style={{ marginRight: "10px" }}
                />
                <input
                    type="text"
                    placeholder="Wallet Adresse"
                    value={newWallet.address}
                    onChange={(e) => setNewWallet({ ...newWallet, address: e.target.value })}
                    style={{ marginRight: "10px" }}
                />
                <button onClick={addWallet}>Hinzufügen</button>
            </div>
            <ul>
                {walletData.map((wallet) => (
                    <li key={wallet.id}>
                        {wallet.name}: {wallet.address}
                    </li>
                ))}
            </ul>
            <button onClick={saveWallets}>Speichern</button>
        </div>
    );
}
