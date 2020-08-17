export interface IValidDirectory {
  isValid: boolean;
  base: "root" | "packages" | "downTheRoad" | null;
}

export type TLayers =
  | "entities"
  | "usecase"
  | "controllers"
  | "interface"
  | "infra"
  | "global";

export type TPackageManager = "yarn" | "npm";
export interface IPackage {
  [key: string]: string;
}

export interface IJsonDB {
  packageManager: TPackageManager;
  entities: string[];
  usecase: string[];
  controllers: string[];
  interface: string[];
  infra: string[];
  global: string[];
}

export interface ISetPackage {
  status: "alreadyInstalled" | "added" | "conflict";
  error?: string;
}


export interface IParams {
  mode: "install" | "addPackage"| "remove";
  packageName?: string;
  packageManager: TPackageManager;
}

export interface IPackageExists {
  status: boolean,
  layer?: TLayers;
}