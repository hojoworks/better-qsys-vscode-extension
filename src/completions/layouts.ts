import * as vscode from 'vscode';

export function createLayoutCompletions(): vscode.CompletionItem[] {
	const completions: vscode.CompletionItem[] = [];
	// Button Layout
	const buttonLayout = new vscode.CompletionItem('Layout Button', vscode.CompletionItemKind.Snippet);
	buttonLayout.insertText = new vscode.SnippetString(
		'Layout["${1:buttonName}"] = {\n\tPrettyName = "${2:prettyName}",\n\tStyle = "Button",\n\tButtonStyle = "${3|Toggle,Momentary,Trigger,StateTrigger,On,Off,Custom|}",\n\tPosition = {${4:x}, ${5:y}},\n\tSize = {${6:width}, ${7:height}}\n}'
	);
	buttonLayout.documentation = new vscode.MarkdownString('Insert a button layout definition');
	buttonLayout.detail = 'Button Layout';
	completions.push(buttonLayout);

	// ComboBox Layout
	const comboBoxLayout = new vscode.CompletionItem('Layout ComboBox', vscode.CompletionItemKind.Snippet);
	comboBoxLayout.insertText = new vscode.SnippetString(
		'Layout["${1:comboboxName}"] = {\n\tPrettyName = "${2:prettyName}",\n\tStyle = "ComboBox",\n\tPosition = {${3:x}, ${4:y}},\n\tSize = {${5:width}, ${6:height}}\n}'
	);
	comboBoxLayout.documentation = new vscode.MarkdownString('Insert a combobox layout definition');
	comboBoxLayout.detail = 'ComboBox Layout';
	completions.push(comboBoxLayout);

	// Fader Layout
	const faderLayout = new vscode.CompletionItem('Layout Fader', vscode.CompletionItemKind.Snippet);
	faderLayout.insertText = new vscode.SnippetString(
		'Layout["${1:faderName}"] = {\n\tPrettyName = "${2:prettyName}",\n\tStyle = "Fader",\n\tPosition = {${3:x}, ${4:y}},\n\tSize = {${5:width}, ${6:height}},\n\tShowTextbox = ${7|true,false|}\n}'
	);
	faderLayout.documentation = new vscode.MarkdownString('Insert a fader layout definition');
	faderLayout.detail = 'Fader Layout';
	completions.push(faderLayout);

	// Knob Layout
	const knobLayout = new vscode.CompletionItem('Layout Knob', vscode.CompletionItemKind.Snippet);
	knobLayout.insertText = new vscode.SnippetString(
		'Layout["${1:knobName}"] = {\n\tPrettyName = "${2:prettyName}",\n\tStyle = "Knob",\n\tPosition = {${3:x}, ${4:y}},\n\tSize = {${5:width}, ${6:height}}\n}'
	);
	knobLayout.documentation = new vscode.MarkdownString('Insert a knob layout definition');
	knobLayout.detail = 'Knob Layout';
	completions.push(knobLayout);

	// Led Layout
	const ledLayout = new vscode.CompletionItem('Layout Led', vscode.CompletionItemKind.Snippet);
	ledLayout.insertText = new vscode.SnippetString(
		'Layout["${1:ledName}"] = {\n\tPrettyName = "${2:prettyName}",\n\tStyle = "Led",\n\tPosition = {${3:x}, ${4:y}},\n\tSize = {${5:width}, ${6:height}}\n}'
	);
	ledLayout.documentation = new vscode.MarkdownString('Insert a led layout definition');
	ledLayout.detail = 'Led Layout';
	completions.push(ledLayout);

	// ListBox Layout
	const listBoxLayout = new vscode.CompletionItem('Layout ListBox', vscode.CompletionItemKind.Snippet);
	listBoxLayout.insertText = new vscode.SnippetString(
		'Layout["${1:listboxName}"] = {\n\tPrettyName = "${2:prettyName}",\n\tStyle = "ListBox",\n\tPosition = {${3:x}, ${4:y}},\n\tSize = {${5:width}, ${6:height}}\n}'
	);
	listBoxLayout.documentation = new vscode.MarkdownString('Insert a listbox layout definition');
	listBoxLayout.detail = 'ListBox Layout';
	completions.push(listBoxLayout);

	// Media Layout
	const mediaLayout = new vscode.CompletionItem('Layout Media', vscode.CompletionItemKind.Snippet);
	mediaLayout.insertText = new vscode.SnippetString(
		'Layout["${1:mediaName}"] = {\n\tPrettyName = "${2:prettyName}",\n\tStyle = "Media",\n\tPosition = {${3:x}, ${4:y}},\n\tSize = {${5:width}, ${6:height}}\n}'
	);
	mediaLayout.documentation = new vscode.MarkdownString('Insert a media layout definition');
	mediaLayout.detail = 'Media Layout';
	completions.push(mediaLayout);

	// Meter Layout
	const meterLayout = new vscode.CompletionItem('Layout Meter', vscode.CompletionItemKind.Snippet);
	meterLayout.insertText = new vscode.SnippetString(
		'Layout["${1:meterName}"] = {\n\tPrettyName = "${2:prettyName}",\n\tStyle = "Meter",\n\tMeterStyle = "${3|Gain,Level,Reduction,Standard|}",\n\tPosition = {${4:x}, ${5:y}},\n\tSize = {${6:width}, ${7:height}}\n}'
	);
	meterLayout.documentation = new vscode.MarkdownString('Insert a meter layout definition');
	meterLayout.detail = 'Meter Layout';
	completions.push(meterLayout);

	// None Layout
	const noneLayout = new vscode.CompletionItem('Layout None', vscode.CompletionItemKind.Snippet);
	noneLayout.insertText = new vscode.SnippetString(
		'Layout["${1:noneName}"] = {\n\tPrettyName = "${2:prettyName}",\n\tStyle = "None",\n\tPosition = {${3:0}, ${4:0}},\n\tSize = {${5:0}, ${6:0}}\n}'
	);
	noneLayout.documentation = new vscode.MarkdownString('Insert a none layout definition');
	noneLayout.detail = 'None Layout';
	completions.push(noneLayout);

	// Text Layout
	const textLayout = new vscode.CompletionItem('Layout Text', vscode.CompletionItemKind.Snippet);
	textLayout.insertText = new vscode.SnippetString(
		'Layout["${1:textName}"] = {\n\tPrettyName = "${2:prettyName}",\n\tStyle = "Text",\n\tPosition = {${3:x}, ${4:y}},\n\tSize = {${5:width}, ${6:height}}\n}'
	);
	textLayout.documentation = new vscode.MarkdownString('Insert a text layout definition');
	textLayout.detail = 'Text Layout';
	completions.push(textLayout);

	return completions;
}
