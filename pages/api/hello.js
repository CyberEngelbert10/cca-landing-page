export const runtime = 'edge';

// This function handles the request and response for the API route
export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' });
}