export function siloService() {
  const socket = new WebSocket(`${process.env.NEXT_PUBLIC_API_URL}/silos`);
  return socket;
}
