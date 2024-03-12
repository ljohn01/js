import { name as mName, getMiles } from './modules/modFile.js';
import { name, getMiles as myModVal, findPath, walkPath, walkFaster } from './modules/myWalk.js';

console.log(mName);
console.log(getMiles(8)); //track how many miles you have walked
console.log(walkPath());
console.log(walkFaster());
console.log(findPath(1, 2));
