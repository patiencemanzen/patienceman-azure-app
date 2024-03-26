/**
 * The cjs file extension is important because it tells Node that this file is not a ES module, 
 * as it would expect because of "type": "module" in the package.json. It allows other CommonJS files 
 * to include our new file - namely iisnode's interceptor.js. It again imports the server.js 
 * which then runs fine as ES module.
 */
import("./server.js");