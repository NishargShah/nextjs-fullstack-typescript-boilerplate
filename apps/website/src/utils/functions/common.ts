// Convert to fixed decimal number
type Sleep = (ms: number) => Promise<void>;

export const sleep: Sleep = async (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
