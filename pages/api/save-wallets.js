import db from '../../lib/firebase';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const wallets = req.body;
    try {
      // Firestore Collection für Wallets
      const walletsRef = db.collection('wallets');
      // Wallets speichern
      wallets.forEach(async (wallet) => {
        await walletsRef.add(wallet);
      });
      res.status(200).json({ message: 'Wallets gespeichert!' });
    } catch (error) {
      res.status(500).json({ message: 'Fehler beim Speichern der Wallets', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
