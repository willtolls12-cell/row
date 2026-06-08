export function creds() {
  return {
    clientId:     (process.env.WHOOP_CLIENT_ID     || '').trim(),
    clientSecret: (process.env.WHOOP_CLIENT_SECRET || '').trim(),
  };
}
