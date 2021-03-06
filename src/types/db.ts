import nedb from 'nedb';
import { TLayers } from './packageManager';


export interface IDbClient {
    db: nedb
}


// export type TRun =  (sql: string, params?: any[] | Record<string, unknown> ) => Promise<TRan>;


export interface IAdd {
    packageName: string;
    version?: string;
    dev: boolean;
    layer: TLayers;
}

export interface IPackage extends IAdd {
    id: string;
}


export interface IRemove {
    packageName: string;
}