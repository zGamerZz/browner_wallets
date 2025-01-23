import fs from "fs";
import path from "path";

export default function handler(req, res) {
    if (req.method === "POST") {
        const filePath = path.join(process.cwd(), "wallets.json");
        fs.writeFileSync(filePath, JSON.stringify(req.body, null, 2));
        res.status(200).json({ message: "Wallets gespeichert!" });
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}
