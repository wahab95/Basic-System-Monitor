import pkg from 'electron';
const { app, BrowserWindow, session} = pkg;
import { fileURLToPath } from 'node:url'
import path, { dirname } from 'path'

/**
 * the app is hobbiy project and show case and never intended to replace windows the task manager
 */
async function main() {
    const creatWin = ()=>{
        //creating the main window function
        // preload: is the script that is run before the program run 
        const __dirname = dirname(fileURLToPath(import.meta.url))
        const win = new BrowserWindow({
            title: 'BSM',
            webPreferences: {
                preload: path.join(__dirname,'preload.cjs'),
                nodeIntegration:true,
                allowRunningInsecureContent:true,
                sandbox:false,
            
            
        }});
        //changing the police to be able to scan the hardware with fs in node
        //also no scurity risk since it would never have network access
        session.defaultSession.webRequest.onHeadersReceived((d,cb)=>{
            cb({
                ...d,
                'Content-Security-Policy':['*']
            })
        })
        //renoving the maue bar
        //win.setMenuBarVisibility(false);
        win.setMenu(null);

        //win.webContents.openDevTools({ mode: 'detach' })
        //win.loadURL('http://localhost:5173/');
        win.loadFile(path.join(__dirname, 'dist', 'index.html'))
    }
    //the app need to run first before creating a window
    await app.whenReady();
    // create the window
    creatWin();
}

main()