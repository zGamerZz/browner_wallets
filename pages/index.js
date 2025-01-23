import { useState, useEffect } from 'react';
import { 
  FaBitcoin, 
  FaEthereum,
  FaWallet
} from 'react-icons/fa';
import { 
  SiLitecoin, 
  SiSolana 
} from 'react-icons/si';
import { FaPaypal } from 'react-icons/fa';
import wallets from "../wallets.json";

// Icon-Mapping für verschiedene Wallet-Typen
const WALLET_ICONS = {
  "Bitcoin Wallet": FaBitcoin,
  "Ethereum Wallet": FaEthereum,
  "Solana Wallet": SiSolana,
  "Litecoin Wallet": SiLitecoin,
  "PayPal": FaPaypal
};

const FALLBACK_ICONS = [FaBitcoin, FaEthereum, FaWallet]; // Icons für die Rotation

export default function Home() {
  const [currentIconIndex, setCurrentIconIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIconIndex((prevIndex) => 
        (prevIndex + 1) % FALLBACK_ICONS.length
      );
    }, 1000); // Wechselt jede Sekunde

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h1>My Crypto Wallets</h1>
      <div className="wallets-container">
        {wallets.map((wallet) => {
          const Icon = WALLET_ICONS[wallet.name] || FALLBACK_ICONS[currentIconIndex];
          return (
            <div key={wallet.id} className="wallet-card">
              <div className="wallet-header">
                <Icon className="wallet-icon" />
                <h2>{wallet.name}</h2>
              </div>
              <p>{wallet.address}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
