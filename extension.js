

// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import getFolderStructure from "./index.js";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
export function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "Know Your Project" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('know-your-project.getStructure', async function (uri) {
		const folderPath = uri ? uri.fsPath : vscode.workspace.workspaceFolders?.[0].uri.fsPath;
		
		if(!folderPath){
			vscode.window.showErrorMessage("No folder selected or workspace open. Please activate the workspace or select a folder ..");
			return ;
		}

		await vscode.window.withProgress({
			location : vscode.ProgressLocation.Notification,
			title : "Generating Project Folder Structure ...",
			cancellable : false,
		}, async( progress ) =>{

			return new Promise((resolve) => {
				setTimeout(async() => {
					const structure = getFolderStructure(folderPath);

					console.log(`Structure for: ${folderPath} is : \n${structure}`);

					const selection = await vscode.window.showInformationMessage("Folder Structure Generated !", "Copy to ClipBoard");

					if(selection === "Copy to ClipBoard"){
						await vscode.env.clipboard.writeText(structure);
						vscode.window.showInformationMessage("Copied to clipboard!");
					}
					else{
						vscode.window.showInformationMessage("Folder structure displayed in the debug console !");
					}

					

					resolve();
				},100)
			})
		})
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {
	console.log("Thank You for using it . Please activate it again for best usgae in your projects.");
}


