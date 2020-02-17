import * as path from 'path';
import { Logger } from '@nestjs/common';

const env = process.env.NODE_ENV || 'development';
const p = path.join(process.cwd(), `${env}.env`);

console.log(`Loading environment from:${p}`,  'Environment');
const dotEnvOptions = {
  path: p,
};

export { dotEnvOptions };
