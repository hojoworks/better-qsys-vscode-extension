import * as vscode from 'vscode';

export function createControlCompletions(): vscode.CompletionItem[] {
	const completions: vscode.CompletionItem[] = [];

	// Button Control
	const buttonControl = new vscode.CompletionItem('Control Button', vscode.CompletionItemKind.Snippet);
	buttonControl.insertText = new vscode.SnippetString(
		'table.insert(controls, {\n\tName = "${1:buttonName}",\n\tControlType = "Button",\n\tButtonType = "${2|Toggle,Momentary,Trigger,StateTrigger|}",\n\tCount = ${3:1},\n\tUserPin = ${4|true,false|},\n\tPinStyle = "${5|Input,Output,Both,None|}"\n})'
	);
	buttonControl.documentation = new vscode.MarkdownString('Insert a Button control definition');
	buttonControl.detail = 'Button Control';
	completions.push(buttonControl);

	// Indicator Control
	const indicatorControl = new vscode.CompletionItem('Control Indicator', vscode.CompletionItemKind.Snippet);
	indicatorControl.insertText = new vscode.SnippetString(
		'table.insert(controls, {\n\tName = "${1:indicatorName}",\n\tControlType = "Indicator",\n\tIndicatorType = "${2|Led,Meter,Status,Text|}",\n\tCount = ${3:1},\n\tUserPin = ${4|true,false|},\n\tPinStyle = "${5|Input,Output,Both,None|}"\n})'
	);
	indicatorControl.documentation = new vscode.MarkdownString('Insert an Indicator control definition');
	indicatorControl.detail = 'Indicator Control';
	completions.push(indicatorControl);

	// Knob Control
	const knobControl = new vscode.CompletionItem('Control Knob', vscode.CompletionItemKind.Snippet);
	knobControl.insertText = new vscode.SnippetString(
		'table.insert(controls, {\n\tName = "${1:knobName}",\n\tControlType = "Knob",\n\tControlUnit = "${2|dB,Float,Hz,Integer,Pan,Percent,Position,Seconds|}",\n\tMin = ${3:min},\n\tMax = ${4:max},\n\tCount = ${5:1},\n\tUserPin = ${6|true,false|},\n\tPinStyle = "${7|Input,Output,Both,None|}"\n})'
	);
	knobControl.documentation = new vscode.MarkdownString('Insert a Knob control definition');
	knobControl.detail = 'Knob Control';
	completions.push(knobControl);

	// Text Control
	const textControl = new vscode.CompletionItem('Control Text', vscode.CompletionItemKind.Snippet);
	textControl.insertText = new vscode.SnippetString(
		'table.insert(controls, {\n\tName = "${1:textName}",\n\tControlType = "Text",\n\tCount = ${2:1},\n\tUserPin = ${3|true,false|},\n\tPinStyle = "${4|Input,Output,Both,None|}"\n})'
	);
	textControl.documentation = new vscode.MarkdownString('Insert a Text control definition');
	textControl.detail = 'Text Control';
	completions.push(textControl);

	return completions;
}
