// Escapes special characters in a string to make it safe
export type EscapeRegex = (str: string) => string;

export const escapeRegex: EscapeRegex = (str) =>
  str.replaceAll(/[/\-\\^$*+?.()|[\]{}]/g, String.raw`\$&`);

// Capitalizes the first letter of a string
export type Capitalize = (str: string) => string;

export const capitalize: Capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
