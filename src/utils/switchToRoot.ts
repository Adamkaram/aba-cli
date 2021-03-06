import { isValidDirectory } from '../dir';
import { join } from 'path';




export function switchToRoot(): void {
    const validDir = isValidDirectory();
    // check if project is valid
    if (!validDir.validDir) throw new Error(`not a nca / nodelib/ rrn project`);
  
    // if base is in root, no need to change directory
    if (validDir.base === "root") return;
  
    const currentPath = process.cwd();
    // if base is in packages, should go one level up
    if (validDir.base === "packages" || validDir.base === "src") {
      const upDir = join(currentPath, "..");
      process.chdir(upDir);
      return;
    }
  
    // if base is into project folder tree, should go up
    // until it reaches root base
    if (validDir.base === "downTheRoad") {
      let upDir: string = currentPath;
      // 4, because four level of structure is allowed from root base
      for (let index = 0; index < 4; index++) {
        upDir = join(upDir, "..");
        process.chdir(upDir);
        if (isValidDirectory().base === "root") {
          return;
        }
      }
    }
  }