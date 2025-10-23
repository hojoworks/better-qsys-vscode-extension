import * as vscode from 'vscode';

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
		{
			provideCompletionItems(
				document: vscode.TextDocument,
				position: vscode.Position,
				token: vscode.CancellationToken,
				context: vscode.CompletionContext
			) {
				const completionItems: vscode.CompletionItem[] = [];
				const linePrefix = document.lineAt(position).text.substr(0, position.character);

				// Property Types and Options
				completionItems.push(...createPropertyCompletions());

				// Control Types and Options
				completionItems.push(...createControlCompletions());

				// Layout Properties
				completionItems.push(...createLayoutCompletions());

				// Graphics Properties
				completionItems.push(...createGraphicsCompletions());

				// Common Values
				completionItems.push(...createCommonValueCompletions());

				return completionItems;
			}
		},
		'.', '"', "'" // Trigger characters
	);

	context.subscriptions.push(completionProvider);

	// Register hover provider for additional IntelliSense features
	const hoverProvider = vscode.languages.registerHoverProvider(
		luaDocSelector,
		{
		provideHover(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken) {
			const range = document.getWordRangeAtPosition(position);
			const word = document.getText(range);

			// Provide hover information based on the word
			if (word === 'exampleKeyword') {
				return new vscode.Hover(
					new vscode.MarkdownString('**QSYS Keyword**: exampleKeyword\n\nProvides example functionality.')
				);
			}

			return null;
		}
	});

	context.subscriptions.push(hoverProvider);

	// Register signature help provider for function parameters
	const signatureHelpProvider = vscode.languages.registerSignatureHelpProvider(
		luaDocSelector,
		{
			provideSignatureHelp(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.SignatureHelpContext) {
				const signatureHelp = new vscode.SignatureHelp();

				// Example signature
				const signature = new vscode.SignatureInformation(
					'qsysFunction(param: string): void',
					new vscode.MarkdownString('A sample QSYS function')
				);
				signature.parameters = [
					new vscode.ParameterInformation('param', 'The parameter description')
				];

				signatureHelp.signatures = [signature];
				signatureHelp.activeSignature = 0;
				signatureHelp.activeParameter = 0;

				return signatureHelp;
			}
		},
		'(', ',' // Trigger characters
	);

	context.subscriptions.push(signatureHelpProvider);
}

// Helper function to create property-related completions
function createPropertyCompletions(): vscode.CompletionItem[] {
	const completions: vscode.CompletionItem[] = [];

	// String Property
	const stringProperty = new vscode.CompletionItem('property string', vscode.CompletionItemKind.Snippet);
	stringProperty.insertText = new vscode.SnippetString(
		'table.insert(properties, {\n\tName = "${1:propertyName}",\n\tType = "string",\n\tValue = "${2:defaultString}",\n\t-- Header = "${3:}",\n\t-- Comment = "${4:}"\n})'
	);
	stringProperty.documentation = new vscode.MarkdownString('Insert a string property with Name, Type, and Value');
	stringProperty.detail = 'String Property';
	completions.push(stringProperty);

	// Integer Property
	const integerProperty = new vscode.CompletionItem('property integer', vscode.CompletionItemKind.Snippet);
	integerProperty.insertText = new vscode.SnippetString(
		'table.insert(properties, {\n\tName = "${1:propertyName}",\n\tType = "integer",\n\tMin = ${2:min},\n\tMax = ${3:max},\n\tValue = ${4:value},\n\t-- Header = "${5:}",\n\t-- Comment = "${6:}"\n})'
	);
	integerProperty.documentation = new vscode.MarkdownString('Insert an integer property with Name, Type, Min, Max, and Value');
	integerProperty.detail = 'Integer Property';
	completions.push(integerProperty);

	// Double Property
	const doubleProperty = new vscode.CompletionItem('property double', vscode.CompletionItemKind.Snippet);
	doubleProperty.insertText = new vscode.SnippetString(
		'table.insert(properties, {\n\tName = "${1:propertyName}",\n\tType = "double",\n\tMin = ${2:min},\n\tMax = ${3:max},\n\tValue = ${4:value},\n\t-- Header = "${5:}",\n\t-- Comment = "${6:}"\n})'
	);
	doubleProperty.documentation = new vscode.MarkdownString('Insert a double property with Name, Type, Min, Max, and Value');
	doubleProperty.detail = 'Double Property';
	completions.push(doubleProperty);

	// Boolean Property
	const booleanProperty = new vscode.CompletionItem('property boolean', vscode.CompletionItemKind.Snippet);
	booleanProperty.insertText = new vscode.SnippetString(
		'table.insert(properties, {\n\tName = "${1:propertyName}",\n\tType = "boolean",\n\tValue = ${2|false,true|},\n\t-- Header = "${3:}",\n\t-- Comment = "${4:}"\n})'
	);
	booleanProperty.documentation = new vscode.MarkdownString('Insert a boolean property with Name, Type, and Value');
	booleanProperty.detail = 'Boolean Property';
	completions.push(booleanProperty);

	// Enum Property
	const enumProperty = new vscode.CompletionItem('property enum', vscode.CompletionItemKind.Snippet);
	enumProperty.insertText = new vscode.SnippetString(
		'table.insert(properties, {\n\tName = "${1:propertyName}",\n\tType = "enum",\n\tChoices = {"${2:choice1}", "${3:choice2}", "${4:choice3}"},\n\tValue = "${5:choice1}",\n\t-- Header = "${6:}",\n\t-- Comment = "${7:}"\n})'
	);
	enumProperty.documentation = new vscode.MarkdownString('Insert an enum property with Name, Type, Choices, and Value');
	enumProperty.detail = 'Enum Property';
	completions.push(enumProperty);

	return completions;
}

// Helper function to create control-related completions
function createControlCompletions(): vscode.CompletionItem[] {
	const completions: vscode.CompletionItem[] = [];

	// Button Control
	const buttonControl = new vscode.CompletionItem('control button', vscode.CompletionItemKind.Snippet);
	buttonControl.insertText = new vscode.SnippetString(
		'table.insert(controls, {\n\tName = "${1:buttonName}",\n\tControlType = "Button",\n\tButtonType = "${2|Momentary,StateTrigger,Toggle,Trigger|}",\n\tCount = ${3:1},\n\tUserPin = ${4|true,false|},\n\tPinStyle = "${5|Both,Input,None,Output|}"\n})'
	);
	buttonControl.documentation = new vscode.MarkdownString('Insert a Button control definition');
	buttonControl.detail = 'Button Control';
	completions.push(buttonControl);

	// Indicator Control
	const indicatorControl = new vscode.CompletionItem('control indicator', vscode.CompletionItemKind.Snippet);
	indicatorControl.insertText = new vscode.SnippetString(
		'table.insert(controls, {\n\tName = "${1:indicatorName}",\n\tControlType = "Indicator",\n\tIndicatorType = "${2|Led,Meter,Status,Text|}",\n\tCount = ${3:1},\n\tUserPin = ${4|true,false|},\n\tPinStyle = "${5|Both,Input,None,Output|}"\n})'
	);
	indicatorControl.documentation = new vscode.MarkdownString('Insert an Indicator control definition');
	indicatorControl.detail = 'Indicator Control';
	completions.push(indicatorControl);

	// Knob Control
	const knobControl = new vscode.CompletionItem('control knob', vscode.CompletionItemKind.Snippet);
	knobControl.insertText = new vscode.SnippetString(
		'table.insert(controls, {\n\tName = "${1:knobName}",\n\tControlType = "Knob",\n\tControlUnit = "${2|dB,Float,Hz,Integer,Pan,Percent,Position,Seconds|}",\n\tMin = ${3:min},\n\tMax = ${4:max},\n\tCount = ${5:1},\n\tUserPin = ${6|true,false|},\n\tPinStyle = "${7|Both,Input,None,Output|}"\n})'
	);
	knobControl.documentation = new vscode.MarkdownString('Insert a Knob control definition');
	knobControl.detail = 'Knob Control';
	completions.push(knobControl);

	// Text Control
	const textControl = new vscode.CompletionItem('control text', vscode.CompletionItemKind.Snippet);
	textControl.insertText = new vscode.SnippetString(
		'table.insert(controls, {\n\tName = "${1:textName}",\n\tControlType = "Text",\n\tCount = ${2:1},\n\tUserPin = ${3|true,false|}\n})'
	);
	textControl.documentation = new vscode.MarkdownString('Insert a Text control definition');
	textControl.detail = 'Text Control';
	completions.push(textControl);

	return completions;
}

// Helper function to create layout-related completions
function createLayoutCompletions(): vscode.CompletionItem[] {
	const completions: vscode.CompletionItem[] = [];

	// Layout Object Template
	const layoutTemplate = new vscode.CompletionItem('layout general', vscode.CompletionItemKind.Snippet);
	layoutTemplate.insertText = new vscode.SnippetString(
		'layout["${1:controlName}"] = {\n\tPosition = {${2:x}, ${3:y}},\n\tSize = {${4:width}, ${5:height}},\n\tStyle = "${6|Button,ComboBox,Fader,Knob,Led,ListBox,Media,Meter,None,Text|}"\n}'
	);
	layoutTemplate.documentation = new vscode.MarkdownString('Insert a layout definition for a control');
	layoutTemplate.detail = 'General Layout';
	completions.push(layoutTemplate);

	// Button Layout
	const buttonLayout = new vscode.CompletionItem('layout button', vscode.CompletionItemKind.Snippet);
	buttonLayout.insertText = new vscode.SnippetString(
		'layout["${1:buttonName}"] = {\n\tPosition = {${2:x}, ${3:y}},\n\tSize = {${4:width}, ${5:height}},\n\tStyle = "Button",\n\tButtonStyle = "${6|Custom,Momentary,Off,On,Toggle,Trigger|}",\n\tButtonVisualStyle = "${7|Flat,Gloss|}",\n\tLegend = "${8:text}"\n}'
	);
	buttonLayout.documentation = new vscode.MarkdownString('Insert a button layout definition');
	buttonLayout.detail = 'Button Layout';
	completions.push(buttonLayout);

	// Fader Layout
	const faderLayout = new vscode.CompletionItem('layout fader', vscode.CompletionItemKind.Snippet);
	faderLayout.insertText = new vscode.SnippetString(
		'layout["${1:faderName}"] = {\n\tPosition = {${2:x}, ${3:y}},\n\tSize = {${4:width}, ${5:height}},\n\tStyle = "Fader",\n\tShowTextbox = ${6|true,false|}\n}'
	);
	faderLayout.documentation = new vscode.MarkdownString('Insert a fader layout definition');
	faderLayout.detail = 'Fader Layout';
	completions.push(faderLayout);

	// Meter Layout
	const meterLayout = new vscode.CompletionItem('layout meter', vscode.CompletionItemKind.Snippet);
	meterLayout.insertText = new vscode.SnippetString(
		'layout["${1:meterName}"] = {\n\tPosition = {${2:x}, ${3:y}},\n\tSize = {${4:width}, ${5:height}},\n\tStyle = "Meter",\n\tMeterStyle = "${6|Gain,Level,Reduction,Standard|}",\n\tShowTextbox = ${7|true,false|}\n}'
	);
	meterLayout.documentation = new vscode.MarkdownString('Insert a meter layout definition');
	meterLayout.detail = 'Meter Layout';
	completions.push(meterLayout);

	return completions;
}

// Helper function to create graphics-related completions
function createGraphicsCompletions(): vscode.CompletionItem[] {
	const completions: vscode.CompletionItem[] = [];

	// Label Graphic
	const labelGraphic = new vscode.CompletionItem('Label Graphic', vscode.CompletionItemKind.Snippet);
	labelGraphic.insertText = new vscode.SnippetString(
		'table.insert(graphics, {\n\tType = "Label",\n\tText = "${1:text}",\n\tPosition = {${2:x}, ${3:y}},\n\tSize = {${4:width}, ${5:height}},\n\tFont = "${6|Lato,Montserrat,Noto Serif,Open Sans,Poppins,Roboto|}",\n\tFontSize = ${7:size},\n\tHTextAlign = "${8|Center,Left,Right|}"\n})'
	);
	labelGraphic.documentation = new vscode.MarkdownString('Insert a label graphic');
	completions.push(labelGraphic);

	// GroupBox Graphic
	const groupBoxGraphic = new vscode.CompletionItem('GroupBox Graphic', vscode.CompletionItemKind.Snippet);
	groupBoxGraphic.insertText = new vscode.SnippetString(
		'table.insert(graphics, {\n\tType = "GroupBox",\n\tText = "${1:title}",\n\tPosition = {${2:x}, ${3:y}},\n\tSize = {${4:width}, ${5:height}},\n\tCornerRadius = ${6:radius},\n\tStrokeWidth = ${7:width}\n})'
	);
	groupBoxGraphic.documentation = new vscode.MarkdownString('Insert a group box graphic');
	completions.push(groupBoxGraphic);

	// Header Graphic
	const headerGraphic = new vscode.CompletionItem('Header Graphic', vscode.CompletionItemKind.Snippet);
	headerGraphic.insertText = new vscode.SnippetString(
		'table.insert(graphics, {\n\tType = "Header",\n\tText = "${1:headerText}",\n\tPosition = {${2:x}, ${3:y}},\n\tSize = {${4:width}, ${5:height}},\n\tFont = "${6|Lato,Montserrat,Open Sans,Poppins,Roboto|}",\n\tFontSize = ${7:size}\n})'
	);
	headerGraphic.documentation = new vscode.MarkdownString('Insert a header graphic');
	completions.push(headerGraphic);

	return completions;
}

// Helper function to create common value completions
function createCommonValueCompletions(): vscode.CompletionItem[] {
	const completions: vscode.CompletionItem[] = [];

	// Font choices
	const fonts = ['Roboto', 'Lato', 'Montserrat', 'Open Sans', 'Poppins', 'Noto Serif', 'Roboto Mono', 'Roboto Slab', 'Adamina', 'Droid Sans', 'Slabo 27px'];
	fonts.forEach(font => {
		const item = new vscode.CompletionItem(font, vscode.CompletionItemKind.Value);
		item.detail = 'Font';
		completions.push(item);
	});

	return completions;
}

/**
 * This method is called when your extension is deactivated
 */
export function deactivate() {}
