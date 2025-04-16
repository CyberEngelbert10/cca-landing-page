export const runtime = 'edge';

export default async function handler(request) {
  return new Response(JSON.stringify({ text: 'Hello' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
