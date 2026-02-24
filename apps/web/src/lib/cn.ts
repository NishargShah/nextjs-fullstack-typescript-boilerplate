import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import type { ClassValue } from 'clsx';

type Cn = (...inputs: ClassValue[]) => string;

const cn: Cn = (...inputs) => twMerge(clsx(inputs));

export default cn;
