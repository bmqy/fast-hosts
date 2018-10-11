'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const fs = require("fs");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    console.log('Congratulations, your extension "fast-hosts" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let openHosts = vscode.commands.registerCommand('extension.fastHosts', () => {
        let filePathHost = 'C:\\Windows\\System32\\drivers\\etc\\hosts';
        if (filePathHost === "" || !fs.statSync(filePathHost).isFile()) {
            return vscode.window.showErrorMessage("fastHosts: error, please contact developer");
        }
        //打开文件
        vscode.workspace.openTextDocument(filePathHost).then(document => {
            //显示文件
            vscode.window.showTextDocument(document);
        }, error => {
            return vscode.window.showErrorMessage("fastHosts: " + error.message);
        });
    });
    context.subscriptions.push(openHosts);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map