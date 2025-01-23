import { 
  FaBitcoin, 
  FaEthereum 
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

export default function Home() {
  return (
    <div className="container">
      <h1>Meine Krypto-Wallet-Adressen</h1>
      <div className="wallets-container">
        {wallets.map((wallet) => {
          const Icon = WALLET_ICONS[wallet.name] || FaBitcoin;
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
