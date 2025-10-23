import * as vscode from 'vscode';

export function createGraphicsCompletions(): vscode.CompletionItem[] {
	const completions: vscode.CompletionItem[] = [];

	// GroupBox Graphic
	const groupBoxGraphic = new vscode.CompletionItem('Graphics GroupBox', vscode.CompletionItemKind.Snippet);
	groupBoxGraphic.insertText = new vscode.SnippetString(
		'table.insert(graphics, {\n\tType = "GroupBox",\n\tText = "${1:groupboxText}",\n\tPosition = {${2:x}, ${3:y}},\n\tSize = {${4:width}, ${5:height}}\n})'
	);
	groupBoxGraphic.documentation = new vscode.MarkdownString('Insert a group box graphic');
	groupBoxGraphic.detail = 'GroupBox Graphic';
	completions.push(groupBoxGraphic);

	// Header Graphic
	const headerGraphic = new vscode.CompletionItem('Graphics Header', vscode.CompletionItemKind.Snippet);
	headerGraphic.insertText = new vscode.SnippetString(
		'table.insert(graphics, {\n\tType = "Header",\n\tText = "${1:headerText}",\n\tPosition = {${2:x}, ${3:y}},\n\tSize = {${4:width}, ${5:height}}\n})'
	);
	headerGraphic.documentation = new vscode.MarkdownString('Insert a header graphic');
	headerGraphic.detail = 'Header Graphic';
	completions.push(headerGraphic);

	// Image Graphic
	const imageGraphic = new vscode.CompletionItem('Graphics Image', vscode.CompletionItemKind.Snippet);
	imageGraphic.insertText = new vscode.SnippetString(
		'table.insert(graphics, {\n\tType = "Image",\n\tImage = "${1:base64String}",\n\tPosition = {${2:x}, ${3:y}},\n\tSize = {${4:width}, ${5:height}}\n})'
	);
	imageGraphic.documentation = new vscode.MarkdownString('Insert an Image graphic');
	imageGraphic.detail = 'Image Graphic';
	completions.push(imageGraphic);


	// Label Graphic
	const labelGraphic = new vscode.CompletionItem('Graphics Label', vscode.CompletionItemKind.Snippet);
	labelGraphic.insertText = new vscode.SnippetString(
		'table.insert(graphics, {\n\tType = "Label",\n\tText = "${1:text}",\n\tPosition = {${2:x}, ${3:y}},\n\tSize = {${4:width}, ${5:height}}\n})'
	);
	labelGraphic.documentation = new vscode.MarkdownString('Insert a label graphic');
	labelGraphic.detail = 'Label Graphic';
	completions.push(labelGraphic);

	// SVG Graphic
	const svgGraphic = new vscode.CompletionItem('Graphics Svg', vscode.CompletionItemKind.Snippet);
	svgGraphic.insertText = new vscode.SnippetString(
		'table.insert(graphics, {\n\tType = "Svg",\n\tImage = "${1:base64String}",\n\tPosition = {${2:x}, ${3:y}},\n\tSize = {${4:width}, ${5:height}}\n})'
	);
	svgGraphic.documentation = new vscode.MarkdownString('Insert a SVG graphic');
	svgGraphic.detail = 'SVG Graphic';
	completions.push(svgGraphic);

	return completions;
}


