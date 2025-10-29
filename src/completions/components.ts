import * as vscode from 'vscode';

export function createComponentCompletions(): vscode.CompletionItem[] {
	const completions: vscode.CompletionItem[] = [];

	// Single Component Completion with all options
	const componentCompletion = new vscode.CompletionItem('Components Insert', vscode.CompletionItemKind.Snippet);
	componentCompletion.insertText = new vscode.SnippetString(
		'table.insert(components, {\n\tName = "${1:MainMixer}",\n\tType = "${2:mixer}",\n\tProperties = {\n\t\t["${3:n_inputs}"] = ${4:8},\n\t\t["${5:n_outputs}"] = ${6:1}\n\t}\n})'
	);
	componentCompletion.documentation = new vscode.MarkdownString(
		'Insert a component definition for GetComponents function.\n\n' +
		'**Properties:**\n' +
		'- **Name** (String, Required): Name of the component (must not contain spaces)\n' +
		'- **Type** (String, Required): Defines the type of component (e.g. "mixer", "scriptable_controls", "signal_presence")\n' +
		'- **Properties** (Table, Required): Defines the value of any properties the component requires\n\n' +
		'**Note:** Consider whether embedding components is necessary, as some have design limits that may cause compilation failures.'
	);
	componentCompletion.detail = 'Component Definition';
	completions.push(componentCompletion);

	return completions;
}