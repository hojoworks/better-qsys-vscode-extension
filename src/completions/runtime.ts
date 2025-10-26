import * as vscode from 'vscode';

export function createRuntimeCompletions(): vscode.CompletionItem[] {
	const completions: vscode.CompletionItem[] = [];

	// Runtime Value
	const runtimeValueCompletion = new vscode.CompletionItem('Runtime value', vscode.CompletionItemKind.Snippet);
	runtimeValueCompletion.insertText = new vscode.SnippetString("Controls['${1:controlName}'].Value");
	runtimeValueCompletion.documentation = new vscode.MarkdownString('Read/Write floating point value of control. Boolean values are converted to 0 (false) or 1 (true).');
	runtimeValueCompletion.detail = 'Control Runtime Value';
	completions.push(runtimeValueCompletion);

	// Runtime String
	const runtimeStringCompletion = new vscode.CompletionItem('Runtime string', vscode.CompletionItemKind.Snippet);
	runtimeStringCompletion.insertText = new vscode.SnippetString("Controls['${1:controlName}'].String");
	runtimeStringCompletion.documentation = new vscode.MarkdownString('Read/Write string representation of control value');
	runtimeStringCompletion.detail = 'Control Runtime String';
	completions.push(runtimeStringCompletion);

	// Runtime Boolean
	const runtimeBooleanCompletion = new vscode.CompletionItem('Runtime boolean', vscode.CompletionItemKind.Snippet);
	runtimeBooleanCompletion.insertText = new vscode.SnippetString("Controls['${1:controlName}'].Boolean");
	runtimeBooleanCompletion.documentation = new vscode.MarkdownString('Read/Write boolean value. Returns true if position > 0.5');
	runtimeBooleanCompletion.detail = 'Control Runtime Boolean';
	completions.push(runtimeBooleanCompletion);

	// Runtime Position
	const runtimePositionCompletion = new vscode.CompletionItem('Runtime position', vscode.CompletionItemKind.Snippet);
	runtimePositionCompletion.insertText = new vscode.SnippetString("Controls['${1:controlName}'].Position");
	runtimePositionCompletion.documentation = new vscode.MarkdownString('Read/Write floating point position which goes from 0.0 to 1.0');
	runtimePositionCompletion.detail = 'Control Runtime Position';
	completions.push(runtimePositionCompletion);

	// Runtime EventHandler (function reference)
	const runtimeEventHandlerRefCompletion = new vscode.CompletionItem('Runtime eventhandler function', vscode.CompletionItemKind.Snippet);
	runtimeEventHandlerRefCompletion.insertText = new vscode.SnippetString("Controls['${1:controlName}'].EventHandler = ${2:functionName}");
	runtimeEventHandlerRefCompletion.documentation = new vscode.MarkdownString('Assign a function reference to be called when the control value changes.');
	runtimeEventHandlerRefCompletion.detail = 'Control Runtime EventHandler (Function Reference)';
	completions.push(runtimeEventHandlerRefCompletion);

	// Runtime EventHandler (inline function)
	const runtimeEventHandlerInlineCompletion = new vscode.CompletionItem('Runtime eventhandler inline', vscode.CompletionItemKind.Snippet);
	runtimeEventHandlerInlineCompletion.insertText = new vscode.SnippetString("Controls['${1:controlName}'].EventHandler = function()\n\t${2}\nend");
	runtimeEventHandlerInlineCompletion.documentation = new vscode.MarkdownString('Assign an inline function to be called when the control value changes. Add a parameter like (ctl) if you need access to the control object.');
	runtimeEventHandlerInlineCompletion.detail = 'Control Runtime EventHandler (Inline Function)';
	completions.push(runtimeEventHandlerInlineCompletion);

	return completions;
}
