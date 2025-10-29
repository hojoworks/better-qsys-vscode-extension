import * as vscode from 'vscode';

export function createPinCompletions(): vscode.CompletionItem[] {
	const completions: vscode.CompletionItem[] = [];

	// Single Pin Completion with all options
	const pinCompletion = new vscode.CompletionItem('Pins Insert', vscode.CompletionItemKind.Snippet);
	pinCompletion.insertText = new vscode.SnippetString(
		'table.insert(pins, {\n\tName = "${1:Audio Output}",\n\tDirection = "${2|output,input|}",\n\tDomain = "${3|audio,serial|}"\n})'
	);
	pinCompletion.documentation = new vscode.MarkdownString('Insert a pin definition with Name, Direction, and Domain properties.\n\n**Properties:**\n- **Name** (String, Required): Name of the pin\n- **Direction** (String, Required): "input" or "output"\n- **Domain** (String, Optional): "audio" (default) or "serial"');
	pinCompletion.detail = 'Pin Definition';
	completions.push(pinCompletion);

	return completions;
}