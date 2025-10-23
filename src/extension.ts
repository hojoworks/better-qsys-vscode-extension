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
