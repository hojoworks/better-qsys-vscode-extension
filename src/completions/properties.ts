import * as vscode from 'vscode';

export function createPropertyCompletions(): vscode.CompletionItem[] {
	const completions: vscode.CompletionItem[] = [];

	// String Property
	const stringProperty = new vscode.CompletionItem('Property string', vscode.CompletionItemKind.Snippet);
	stringProperty.insertText = new vscode.SnippetString(
		'table.insert(properties, {\n\tName = "${1:propertyName}",\n\tType = "string",\n\tValue = "${2:defaultString}",\n\t-- Header = "${3:}",\n\t-- Comment = "${4:}"\n})'
	);
	stringProperty.documentation = new vscode.MarkdownString('Insert a string property with Name, Type, and Value');
	stringProperty.detail = 'String Property';
	completions.push(stringProperty);

	// Integer Property
	const integerProperty = new vscode.CompletionItem('Property integer', vscode.CompletionItemKind.Snippet);
	integerProperty.insertText = new vscode.SnippetString(
		'table.insert(properties, {\n\tName = "${1:propertyName}",\n\tType = "integer",\n\tMin = ${2:min},\n\tMax = ${3:max},\n\tValue = ${4:value},\n\t-- Header = "${5:}",\n\t-- Comment = "${6:}"\n})'
	);
	integerProperty.documentation = new vscode.MarkdownString('Insert an integer property with Name, Type, Min, Max, and Value');
	integerProperty.detail = 'Integer Property';
	completions.push(integerProperty);

	// Double Property
	const doubleProperty = new vscode.CompletionItem('Property double', vscode.CompletionItemKind.Snippet);
	doubleProperty.insertText = new vscode.SnippetString(
		'table.insert(properties, {\n\tName = "${1:propertyName}",\n\tType = "double",\n\tMin = ${2:min},\n\tMax = ${3:max},\n\tValue = ${4:value},\n\t-- Header = "${5:}",\n\t-- Comment = "${6:}"\n})'
	);
	doubleProperty.documentation = new vscode.MarkdownString('Insert a double property with Name, Type, Min, Max, and Value');
	doubleProperty.detail = 'Double Property';
	completions.push(doubleProperty);

	// Boolean Property
	const booleanProperty = new vscode.CompletionItem('Property boolean', vscode.CompletionItemKind.Snippet);
	booleanProperty.insertText = new vscode.SnippetString(
		'table.insert(properties, {\n\tName = "${1:propertyName}",\n\tType = "boolean",\n\tValue = ${2|false,true|},\n\t-- Header = "${3:}",\n\t-- Comment = "${4:}"\n})'
	);
	booleanProperty.documentation = new vscode.MarkdownString('Insert a boolean property with Name, Type, and Value');
	booleanProperty.detail = 'Boolean Property';
	completions.push(booleanProperty);

	// Enum Property
	const enumProperty = new vscode.CompletionItem('Property enum', vscode.CompletionItemKind.Snippet);
	enumProperty.insertText = new vscode.SnippetString(
		'table.insert(properties, {\n\tName = "${1:propertyName}",\n\tType = "enum",\n\tChoices = {"${2:choice1}", "${3:choice2}", "${4:choice3}"},\n\tValue = "${5:choice1}",\n\t-- Header = "${6:}",\n\t-- Comment = "${7:}"\n})'
	);
	enumProperty.documentation = new vscode.MarkdownString('Insert an enum property with Name, Type, Choices, and Value');
	enumProperty.detail = 'Enum Property';
	completions.push(enumProperty);

	return completions;
}
