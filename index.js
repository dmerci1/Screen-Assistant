const electron = require('electron');

const { app, BrowserWindow, Menu } = electron;

let mainWindow;

app.on('ready', () => {
  const mainWindow = new BrowserWindow({});
  mainWindow.loadURL(`file://${__dirname}/mirror.html`);

const menuTemplate = [
  {
    label: 'Screen Assistant',
    submenu: [
      {
        label: 'About Screen Assistant'
      },
      {
        label: 'New Screen'
      },
      {
        label: 'Quit',
        click() {
          app.quit();
        }
      }

    ]
  }
];
if (process.platform === 'darwin') {
  menuTemplate.unshift({});
}
const menu = Menu.buildFromTemplate(menuTemplate);
Menu.setApplicationMenu(menu);
});
