import * as vscode from 'vscode';

export function createRuntimeCompletions(): vscode.CompletionItem[] {
	const completions: vscode.CompletionItem[] = [];

	// .Value property
	const valueCompletion = new vscode.CompletionItem('.Value', vscode.CompletionItemKind.Property);
	valueCompletion.insertText = new vscode.SnippetString('Value');
	valueCompletion.documentation = new vscode.MarkdownString('Read/Write floating point value of control. Boolean values are converted to 0 (false) or 1 (true).');
	valueCompletion.detail = 'Control Value Property';
	completions.push(valueCompletion);

	// .String property
	const stringCompletion = new vscode.CompletionItem('.String', vscode.CompletionItemKind.Property);
	stringCompletion.insertText = new vscode.SnippetString('String');
	stringCompletion.documentation = new vscode.MarkdownString('Read/Write string representation of control value');
	stringCompletion.detail = 'Control String Property';
	completions.push(stringCompletion);

	// .Boolean property
	const booleanCompletion = new vscode.CompletionItem('.Boolean', vscode.CompletionItemKind.Property);
	booleanCompletion.insertText = new vscode.SnippetString('Boolean');
	booleanCompletion.documentation = new vscode.MarkdownString('Read/Write boolean value. Returns true if position > 0.5');
	booleanCompletion.detail = 'Control Boolean Property';
	completions.push(booleanCompletion);

	// .Position property
	const positionCompletion = new vscode.CompletionItem('.Position', vscode.CompletionItemKind.Property);
	positionCompletion.insertText = new vscode.SnippetString('Position');
	positionCompletion.documentation = new vscode.MarkdownString('Read/Write floating point position which goes from 0.0 to 1.0');
	positionCompletion.detail = 'Control Position Property';
	completions.push(positionCompletion);

	// .EventHandler property
	const eventHandlerCompletion = new vscode.CompletionItem('.EventHandler', vscode.CompletionItemKind.Property);
	eventHandlerCompletion.insertText = new vscode.SnippetString('EventHandler = function()\n\t${1:-- Handle control change}\nend');
	eventHandlerCompletion.documentation = new vscode.MarkdownString('Assign a function to be called when the control value changes. Function can optionally receive the control object as parameter.');
	eventHandlerCompletion.detail = 'Control EventHandler';
	completions.push(eventHandlerCompletion);

	return completions;
}
