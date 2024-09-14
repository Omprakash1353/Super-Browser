const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  newWindow: () => {
    ipcRenderer.send("new-window");
  },
});
