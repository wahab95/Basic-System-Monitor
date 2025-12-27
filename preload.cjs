const { contextBridge } = require('electron');
const si = require('systeminformation');


contextBridge.exposeInMainWorld('pc', {
  mem: () => si.mem(),
  cpu: () => si.cpu(),
  currentLoad: () => si.currentLoad(),
  graphics: () => si.graphics(),
  networkStats: () => si.networkStats(),
  networkInterfaces: () => si.networkInterfaces(),
});