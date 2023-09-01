import { OrmModule } from './infra/orm.module';
import { ICacheSeeder } from '../seeders/CacheSeeder';
import { StorageModule } from './infra/storage.module';
import { RedisModule } from './infra/redis.module';
import { Constructor } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { IStorageSeeder } from '../seeders/StorageSeeder';

//--scaffold database start--
const contexts = {
  MAIN: 'main',
  COMMENT: 'comment',
} as const;

const dbModules = [
  OrmModule.register(contexts.MAIN),
  OrmModule.register(contexts.COMMENT),
] as const;
//--scaffold database end--

//--scaffold cache start--
const redis = {
  MAIN: Symbol('main'),
} as const;

const redisModules = [RedisModule.register('main', redis)] as const;
//--scaffold cache end--

//--scaffold storage start--
const stores = {
  MAIN: Symbol('main'),
} as const;

const storeModules = [StorageModule.register('main', stores)] as const;
//--scaffold storage end--

const dbSeeders: Record<string, Constructor<Seeder> | undefined | null> = {};

const redisSeeders: Record<symbol, ICacheSeeder | undefined | null> = {};

const storeSeeders: Record<symbol, IStorageSeeder | undefined | null> = {};

export {
  contexts,
  dbSeeders,
  dbModules,
  redis,
  stores,
  storeSeeders,
  storeModules,
  redisSeeders,
  redisModules,
};
