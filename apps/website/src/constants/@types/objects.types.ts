import type { ValueOf } from 'type-fest';

import type { environments } from '@/constants/objects';

export type Environment = ValueOf<typeof environments>;
