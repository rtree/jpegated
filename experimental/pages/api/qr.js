import crypto from 'crypto';
import QRCode from 'qrcode';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { secret, pin } = req.body;
  
  if (!secret || !pin) {
    return res.status(400).json({ message: 'Secret and PIN are required' });
  }

  // Create a hash from the secret and the pin
  const hash = crypto.createHash('sha256');
  hash.update(secret + pin);

  // Generate a QR code from the hash
  const qrCode = await QRCode.toDataURL(hash.digest('hex'));

  res.status(200).json({ qrCode });
}
