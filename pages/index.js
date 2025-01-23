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
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIconIndex((prevIndex) => 
          (prevIndex + 1) % FALLBACK_ICONS.length
        );
        setIsAnimating(false);
      }, 500); // Hälfte der Intervalzeit für die Animation
    }, 2000); // Gesamtintervall auf 2 Sekunden erhöht

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
                <div className={`icon-container ${isAnimating ? 'slide-out' : ''}`}>
                  <Icon className="wallet-icon" />
                </div>
                <h2>{wallet.name}</h2>
              </div>
              <p>{wallet.address}</p>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .icon-container {
          transform: translateY(0);
          opacity: 1;
          transition: all 0.5s ease-in-out;
        }
        
        .icon-container.slide-out {
          transform: translateY(-20px);
          opacity: 0;
        }
        
        .wallet-icon {
          font-size: 24px;
        }
      `}</style>
    </div>
  );
}
