import { useState } from 'react';

export default function Admin() {
  const [walletData, setWalletData] = useState([]);
  const [newWallet, setNewWallet] = useState({ name: '', address: '' });

  const addWallet = () => {
    if (newWallet.name && newWallet.address) {
      setWalletData([...walletData, { id: walletData.length + 1, ...newWallet }]);
      setNewWallet({ name: '', address: '' });
    }
  };

  const saveWallets = async () => {
    const response = await fetch('/api/save-wallets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(walletData),
    });

    if (response.ok) {
      alert('Wallets gespeichert!');
    } else {
      alert('Fehler beim Speichern.');
    }
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <input
        type="text"
        placeholder="Wallet Name"
        value={newWallet.name}
        onChange={(e) => setNewWallet({ ...newWallet, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Wallet Adresse"
        value={newWallet.address}
        onChange={(e) => setNewWallet({ ...newWallet, address: e.target.value })}
      />
      <button onClick={addWallet}>Hinzufügen</button>
      <button onClick={saveWallets}>Speichern</button>
    </div>
  );
}
