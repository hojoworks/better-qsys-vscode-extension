import * as vscode from 'vscode';
import { provideCompletionItems } from './providers/completionProvider';
import { provideHover } from './providers/hoverProvider';
import { provideSignatureHelp } from './providers/signatureProvider';

/**
 * This method is called when your extension is activated
 * Your extension is activated the very first time the command is executed
 */
export function activate(context: vscode.ExtensionContext) {
	console.log('QSYS IntelliSense extension is now active!');

	// Define document selector for .lua and .qplug files
	const luaDocSelector: vscode.DocumentSelector = [
		{ scheme: 'file', language: 'lua' },
		{ scheme: 'file', pattern: '**/*.qplug' }
	];

	// Register command to open Q-SYS documentation
	const openDocsCommand = vscode.commands.registerCommand('qsys-intellisense.openDocumentation', () => {
		const docUrl = 'https://q-syshelp.qsc.com/DeveloperHelp/Content/Standards_Definitions/Reserved_Functions.htm';
		vscode.env.openExternal(vscode.Uri.parse(docUrl));
		vscode.window.showInformationMessage('Opening Q-SYS Reserved Functions Documentation...');
	});

	context.subscriptions.push(openDocsCommand);

	// Register command to open Q-SYS Lua Extensions documentation
	const openLuaExtensionsCommand = vscode.commands.registerCommand('qsys-intellisense.openLuaExtensions', () => {
		const docUrl = 'https://help.qsys.com/q-sys_9.4/Index.htm#Control_Scripting/Using_Lua_in_Q-Sys/Q-SYS_Extensions_to_Lua.htm';
		vscode.env.openExternal(vscode.Uri.parse(docUrl));
		vscode.window.showInformationMessage('Opening Q-SYS Lua Extensions Documentation...');
	});

	context.subscriptions.push(openLuaExtensionsCommand);

	// Register the completion provider for QSYS files
	const completionProvider = vscode.languages.registerCompletionItemProvider(
		luaDocSelector,
		{ provideCompletionItems },
		'.', '"', "'" // Trigger characters
	);

	context.subscriptions.push(completionProvider);

	// Register hover provider for additional IntelliSense features
	const hoverProvider = vscode.languages.registerHoverProvider(
		luaDocSelector,
		{ provideHover }
	);

	context.subscriptions.push(hoverProvider);

	// Register signature help provider for function parameters
	const signatureHelpProvider = vscode.languages.registerSignatureHelpProvider(
		luaDocSelector,
		{ provideSignatureHelp },
		'(', ',' // Trigger characters
	);

	context.subscriptions.push(signatureHelpProvider);
}

/**
 * This method is called when your extension is deactivated
 */
export function deactivate() {}
