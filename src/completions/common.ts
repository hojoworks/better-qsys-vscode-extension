import * as vscode from 'vscode';

export function createCommonValueCompletions(): vscode.CompletionItem[] {
	const completions: vscode.CompletionItem[] = [];

	// BackgroundColor
	const backgroundColorCompletion = new vscode.CompletionItem('BackgroundColor', vscode.CompletionItemKind.Snippet);
	backgroundColorCompletion.insertText = new vscode.SnippetString('BackgroundColor = {${1:r}, ${2:g}, ${3:b}, ${4:alpha}}');
	backgroundColorCompletion.documentation = new vscode.MarkdownString('Sets background color for the meter');
	backgroundColorCompletion.detail = 'BackgroundColor Property';
	completions.push(backgroundColorCompletion);

	// ButtonStyle
	const buttonStyleCompletion = new vscode.CompletionItem('ButtonStyle', vscode.CompletionItemKind.Snippet);
	buttonStyleCompletion.insertText = new vscode.SnippetString('ButtonStyle = "${1|Toggle,Momentary,Trigger,StateTrigger,On,Off,Custom|}"');
	buttonStyleCompletion.documentation = new vscode.MarkdownString('Defines how button is displayed');
	buttonStyleCompletion.detail = 'ButtonStyle Property';
	completions.push(buttonStyleCompletion);

	// ButtonVisualStyle
	const buttonVisualStyleCompletion = new vscode.CompletionItem('ButtonVisualStyle', vscode.CompletionItemKind.Snippet);
	buttonVisualStyleCompletion.insertText = new vscode.SnippetString('ButtonVisualStyle = "${1|Flat,Gloss|}"');
	buttonVisualStyleCompletion.documentation = new vscode.MarkdownString('Visual style of button');
	buttonVisualStyleCompletion.detail = 'ButtonVisualStyle Property';
	completions.push(buttonVisualStyleCompletion);

	// ClassName
	const classNameCompletion = new vscode.CompletionItem('ClassName', vscode.CompletionItemKind.Snippet);
	classNameCompletion.insertText = new vscode.SnippetString('ClassName = "${1:className}"');
	classNameCompletion.documentation = new vscode.MarkdownString('Default CSS Class Name of control');
	classNameCompletion.detail = 'ClassName Property';
	completions.push(classNameCompletion);

	// Color
	const colorCompletion = new vscode.CompletionItem('Color', vscode.CompletionItemKind.Snippet);
	colorCompletion.insertText = new vscode.SnippetString('Color = {${1:r}, ${2:g}, ${3:b}, ${4:alpha}}');
	colorCompletion.documentation = new vscode.MarkdownString('Defines color of control');
	colorCompletion.detail = 'Color Property';
	completions.push(colorCompletion);

	// CornerRadius
	const cornerRadiusCompletion = new vscode.CompletionItem('CornerRadius', vscode.CompletionItemKind.Snippet);
	cornerRadiusCompletion.insertText = new vscode.SnippetString('CornerRadius = ${1:radius}');
	cornerRadiusCompletion.documentation = new vscode.MarkdownString('Sets radius of corners');
	cornerRadiusCompletion.detail = 'CornerRadius Property';
	completions.push(cornerRadiusCompletion);

	// CustomButtonDown
	const customButtonDownCompletion = new vscode.CompletionItem('CustomButtonDown', vscode.CompletionItemKind.Snippet);
	customButtonDownCompletion.insertText = new vscode.SnippetString('CustomButtonDown = "${1:string}"');
	customButtonDownCompletion.documentation = new vscode.MarkdownString('Custom button string when in down position');
	customButtonDownCompletion.detail = 'CustomButtonDown Property';
	completions.push(customButtonDownCompletion);

	// CustomButtonUp
	const customButtonUpCompletion = new vscode.CompletionItem('CustomButtonUp', vscode.CompletionItemKind.Snippet);
	customButtonUpCompletion.insertText = new vscode.SnippetString('CustomButtonUp = "${1:string}"');
	customButtonUpCompletion.documentation = new vscode.MarkdownString('Custom button string when in up position');
	customButtonUpCompletion.detail = 'CustomButtonUp Property';
	completions.push(customButtonUpCompletion);

	// Fill
	const fillCompletion = new vscode.CompletionItem('Fill', vscode.CompletionItemKind.Snippet);
	fillCompletion.insertText = new vscode.SnippetString('Fill = {${1:r}, ${2:g}, ${3:b}, ${4:alpha}}');
	fillCompletion.documentation = new vscode.MarkdownString('Fill color');
	fillCompletion.detail = 'Fill Property';
	completions.push(fillCompletion);

	// Font
	const fontCompletion = new vscode.CompletionItem('Font', vscode.CompletionItemKind.Snippet);
	fontCompletion.insertText = new vscode.SnippetString(
		'Font = "${1|Adamina,Droid Sans,Lato,Montserrat,Noto Serif,Open Sans,Poppins,Roboto,Roboto Mono,Roboto Slab,Slabo 27px|}"'
	);
	fontCompletion.documentation = new vscode.MarkdownString('Insert Font property with available font choices');
	fontCompletion.detail = 'Font Property';
	completions.push(fontCompletion);

	// FontSize
	const fontSizeCompletion = new vscode.CompletionItem('FontSize', vscode.CompletionItemKind.Snippet);
	fontSizeCompletion.insertText = new vscode.SnippetString('FontSize = ${1:fontSize}');
	fontSizeCompletion.documentation = new vscode.MarkdownString('Size of font used for text');
	fontSizeCompletion.detail = 'FontSize Property';
	completions.push(fontSizeCompletion);

	// FontStyle
	const fontStyleCompletion = new vscode.CompletionItem('FontStyle', vscode.CompletionItemKind.Snippet);
	fontStyleCompletion.insertText = new vscode.SnippetString(
		'FontStyle = "${1|Regular,Bold,Light,Light Italic,Italic,Bold Italic,Black,Black Italic,Thin,Thin Italic,ExtraLight,ExtraLight Italic,Medium,Medium Italic,SemiBold,SemiBold Italic,ExtraBold,ExtraBold Italic|}"'
	);
	fontStyleCompletion.documentation = new vscode.MarkdownString('Insert FontStyle property with available style choices');
	fontStyleCompletion.detail = 'FontStyle Property';
	completions.push(fontStyleCompletion);

	// HTextAlign
	const hTextAlignCompletion = new vscode.CompletionItem('HTextAlign', vscode.CompletionItemKind.Snippet);
	hTextAlignCompletion.insertText = new vscode.SnippetString('HTextAlign = "${1|Center,Left,Right|}"');
	hTextAlignCompletion.documentation = new vscode.MarkdownString('Horizontal text alignment');
	hTextAlignCompletion.detail = 'HTextAlign Property';
	completions.push(hTextAlignCompletion);

	// IconColor
	const iconColorCompletion = new vscode.CompletionItem('IconColor', vscode.CompletionItemKind.Snippet);
	iconColorCompletion.insertText = new vscode.SnippetString('IconColor = {${1:r}, ${2:g}, ${3:b}, ${4:alpha}}');
	iconColorCompletion.documentation = new vscode.MarkdownString('Sets color of button icon');
	iconColorCompletion.detail = 'IconColor Property';
	completions.push(iconColorCompletion);

	// Image
	const imageCompletion = new vscode.CompletionItem('Image', vscode.CompletionItemKind.Snippet);
	imageCompletion.insertText = new vscode.SnippetString('Image = "${1:base64String}"');
	imageCompletion.documentation = new vscode.MarkdownString('Base64 encoded image or SVG string');
	imageCompletion.detail = 'Image Property';
	completions.push(imageCompletion);

	// IsBold
	const isBoldCompletion = new vscode.CompletionItem('IsBold', vscode.CompletionItemKind.Snippet);
	isBoldCompletion.insertText = new vscode.SnippetString('IsBold = ${1|true,false|}');
	isBoldCompletion.documentation = new vscode.MarkdownString('Sets FontStyle to Bold');
	isBoldCompletion.detail = 'IsBold Property';
	completions.push(isBoldCompletion);

	// IsReadOnly
	const isReadOnlyCompletion = new vscode.CompletionItem('IsReadOnly', vscode.CompletionItemKind.Snippet);
	isReadOnlyCompletion.insertText = new vscode.SnippetString('IsReadOnly = ${1|true,false|}');
	isReadOnlyCompletion.documentation = new vscode.MarkdownString('Control cannot be changed at run-time');
	isReadOnlyCompletion.detail = 'IsReadOnly Property';
	completions.push(isReadOnlyCompletion);

	// Legend
	const legendCompletion = new vscode.CompletionItem('Legend', vscode.CompletionItemKind.Snippet);
	legendCompletion.insertText = new vscode.SnippetString('Legend = "${1:text}"');
	legendCompletion.documentation = new vscode.MarkdownString('Defines legend for the button');
	legendCompletion.detail = 'Legend Property';
	completions.push(legendCompletion);

	// Margin
	const marginCompletion = new vscode.CompletionItem('Margin', vscode.CompletionItemKind.Snippet);
	marginCompletion.insertText = new vscode.SnippetString('Margin = ${1:margin}');
	marginCompletion.documentation = new vscode.MarkdownString('Sets margin for control');
	marginCompletion.detail = 'Margin Property';
	completions.push(marginCompletion);

	// MeterStyle
	const meterStyleCompletion = new vscode.CompletionItem('MeterStyle', vscode.CompletionItemKind.Snippet);
	meterStyleCompletion.insertText = new vscode.SnippetString('MeterStyle = "${1|Level,Reduction,Gain,Standard|}"');
	meterStyleCompletion.documentation = new vscode.MarkdownString('Style of meter display');
	meterStyleCompletion.detail = 'MeterStyle Property';
	completions.push(meterStyleCompletion);

	// OffColor
	const offColorCompletion = new vscode.CompletionItem('OffColor', vscode.CompletionItemKind.Snippet);
	offColorCompletion.insertText = new vscode.SnippetString('OffColor = {${1:r}, ${2:g}, ${3:b}, ${4:alpha}}');
	offColorCompletion.documentation = new vscode.MarkdownString('Color of button when off');
	offColorCompletion.detail = 'OffColor Property';
	completions.push(offColorCompletion);

	// Padding
	const paddingCompletion = new vscode.CompletionItem('Padding', vscode.CompletionItemKind.Snippet);
	paddingCompletion.insertText = new vscode.SnippetString('Padding = ${1:padding}');
	paddingCompletion.documentation = new vscode.MarkdownString('Number of pixels to pad the control graphics');
	paddingCompletion.detail = 'Padding Property';
	completions.push(paddingCompletion);

	// Position
	const positionCompletion = new vscode.CompletionItem('Position', vscode.CompletionItemKind.Snippet);
	positionCompletion.insertText = new vscode.SnippetString('Position = {${1:x}, ${2:y}}');
	positionCompletion.documentation = new vscode.MarkdownString('Defines position of the control');
	positionCompletion.detail = 'Position Property';
	completions.push(positionCompletion);

	// PrettyName
	const prettyNameCompletion = new vscode.CompletionItem('PrettyName', vscode.CompletionItemKind.Snippet);
	prettyNameCompletion.insertText = new vscode.SnippetString('PrettyName = "${1:prettyName}"');
	prettyNameCompletion.documentation = new vscode.MarkdownString('Used to create alternate names for control pins');
	prettyNameCompletion.detail = 'PrettyName Property';
	completions.push(prettyNameCompletion);

	// Radius
	const radiusCompletion = new vscode.CompletionItem('Radius', vscode.CompletionItemKind.Snippet);
	radiusCompletion.insertText = new vscode.SnippetString('Radius = ${1:radius}');
	radiusCompletion.documentation = new vscode.MarkdownString('Same as CornerRadius');
	radiusCompletion.detail = 'Radius Property';
	completions.push(radiusCompletion);

	// ShowTextbox
	const showTextboxCompletion = new vscode.CompletionItem('ShowTextbox', vscode.CompletionItemKind.Snippet);
	showTextboxCompletion.insertText = new vscode.SnippetString('ShowTextbox = ${1|true,false|}');
	showTextboxCompletion.documentation = new vscode.MarkdownString('Show text box to display current value');
	showTextboxCompletion.detail = 'ShowTextbox Property';
	completions.push(showTextboxCompletion);

	// Size
	const sizeCompletion = new vscode.CompletionItem('Size', vscode.CompletionItemKind.Snippet);
	sizeCompletion.insertText = new vscode.SnippetString('Size = {${1:width}, ${2:height}}');
	sizeCompletion.documentation = new vscode.MarkdownString('Defines size of the control');
	sizeCompletion.detail = 'Size Property';
	completions.push(sizeCompletion);

	// StrokeColor
	const strokeColorCompletion = new vscode.CompletionItem('StrokeColor', vscode.CompletionItemKind.Snippet);
	strokeColorCompletion.insertText = new vscode.SnippetString('StrokeColor = {${1:r}, ${2:g}, ${3:b}, ${4:alpha}}');
	strokeColorCompletion.documentation = new vscode.MarkdownString('Color of outline');
	strokeColorCompletion.detail = 'StrokeColor Property';
	completions.push(strokeColorCompletion);

	// StrokeWidth
	const strokeWidthCompletion = new vscode.CompletionItem('StrokeWidth', vscode.CompletionItemKind.Snippet);
	strokeWidthCompletion.insertText = new vscode.SnippetString('StrokeWidth = ${1:width}');
	strokeWidthCompletion.documentation = new vscode.MarkdownString('Thickness of outline');
	strokeWidthCompletion.detail = 'StrokeWidth Property';
	completions.push(strokeWidthCompletion);

	// Style
	const styleCompletion = new vscode.CompletionItem('Style', vscode.CompletionItemKind.Snippet);
	styleCompletion.insertText = new vscode.SnippetString('Style = "${1|Fader,Knob,Button,Text,Meter,Led,ListBox,ComboBox,Media,None|}"');
	styleCompletion.documentation = new vscode.MarkdownString('Defines how control is displayed');
	styleCompletion.detail = 'Style Property';
	completions.push(styleCompletion);

	// Text
	const textCompletion = new vscode.CompletionItem('Text', vscode.CompletionItemKind.Snippet);
	textCompletion.insertText = new vscode.SnippetString('Text = "${1:text}"');
	textCompletion.documentation = new vscode.MarkdownString('Text content');
	textCompletion.detail = 'Text Property';
	completions.push(textCompletion);

	// TextBoxStyle
	const textBoxStyleCompletion = new vscode.CompletionItem('TextBoxStyle', vscode.CompletionItemKind.Snippet);
	textBoxStyleCompletion.insertText = new vscode.SnippetString('TextBoxStyle = "${1|Normal,Meter,NoBackground|}"');
	textBoxStyleCompletion.documentation = new vscode.MarkdownString('Style of text box');
	textBoxStyleCompletion.detail = 'TextBoxStyle Property';
	completions.push(textBoxStyleCompletion);

	// TextColor
	const textColorCompletion = new vscode.CompletionItem('TextColor', vscode.CompletionItemKind.Snippet);
	textColorCompletion.insertText = new vscode.SnippetString('TextColor = {${1:r}, ${2:g}, ${3:b}, ${4:alpha}}');
	textColorCompletion.documentation = new vscode.MarkdownString('Color of text');
	textColorCompletion.detail = 'TextColor Property';
	completions.push(textColorCompletion);

	// Type
	const typeCompletion = new vscode.CompletionItem('Type', vscode.CompletionItemKind.Snippet);
	typeCompletion.insertText = new vscode.SnippetString('Type = "${1|Label,GroupBox,Header,Image,Svg|}"');
	typeCompletion.documentation = new vscode.MarkdownString('Type of graphic element');
	typeCompletion.detail = 'Type Property';
	completions.push(typeCompletion);

	// UnlinkOffColor
	const unlinkOffColorCompletion = new vscode.CompletionItem('UnlinkOffColor', vscode.CompletionItemKind.Snippet);
	unlinkOffColorCompletion.insertText = new vscode.SnippetString('UnlinkOffColor = ${1|true,false|}');
	unlinkOffColorCompletion.documentation = new vscode.MarkdownString('Allow button to show two completely different colors for on and off states');
	unlinkOffColorCompletion.detail = 'UnlinkOffColor Property';
	completions.push(unlinkOffColorCompletion);

	// VTextAlign
	const vTextAlignCompletion = new vscode.CompletionItem('VTextAlign', vscode.CompletionItemKind.Snippet);
	vTextAlignCompletion.insertText = new vscode.SnippetString('VTextAlign = "${1|Center,Top,Bottom|}"');
	vTextAlignCompletion.documentation = new vscode.MarkdownString('Vertical text alignment');
	vTextAlignCompletion.detail = 'VTextAlign Property';
	completions.push(vTextAlignCompletion);

	// WordWrap
	const wordWrapCompletion = new vscode.CompletionItem('WordWrap', vscode.CompletionItemKind.Snippet);
	wordWrapCompletion.insertText = new vscode.SnippetString('WordWrap = ${1|true,false|}');
	wordWrapCompletion.documentation = new vscode.MarkdownString('Defines whether legend text should wrap');
	wordWrapCompletion.detail = 'WordWrap Property';
	completions.push(wordWrapCompletion);

	// ZOrder
	const zOrderCompletion = new vscode.CompletionItem('ZOrder', vscode.CompletionItemKind.Snippet);
	zOrderCompletion.insertText = new vscode.SnippetString('ZOrder = ${1:zOrder}');
	zOrderCompletion.documentation = new vscode.MarkdownString('Sets position of control in vertical plane');
	zOrderCompletion.detail = 'ZOrder Property';
	completions.push(zOrderCompletion);

	return completions;
}
