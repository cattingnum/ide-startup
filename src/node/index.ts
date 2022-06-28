import { startServer } from './start-server';
import { ExpressFileServerModule } from '@opensumi/ide-express-file-server/lib/node';
import { CommonNodeModules } from '../../src/node/common-modules';

startServer({
  modules: [
    ...CommonNodeModules,
    ExpressFileServerModule,
  ],
});
