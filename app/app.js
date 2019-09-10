var electron = require('electron')  
   
    electron.app.on('ready', function () {  
       var mainWindow = new electron.BrowserWindow({width: 800, height: 600, webPreferences: {nodeIntegration: true}});  
       mainWindow.loadURL('file://' + __dirname + '/index.html');  
       
    });