const {app, BrowserWindow,dialog} = require('electron')
const path = require('path')

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 250,
    height: 275,
    resizable: false,
  })
const gm=require('./build/Release/ecpp.node');
console.log('exports',gm);
//console.log(gm.print("TEST"));
//console.log(gm.msgbox("TEST2"));
gm.shh();
gm.httpreqz();
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
 
