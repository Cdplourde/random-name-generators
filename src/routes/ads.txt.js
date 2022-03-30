export async function get() {
  return {
    headers: {
      'Content-Type': 'text/plain'
    },
    body: `
      google.com, pub-2310955616732742, DIRECT, f08c47fec0942fa0
    `.trim()
  };
}