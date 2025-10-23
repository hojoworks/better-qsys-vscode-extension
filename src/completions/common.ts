import * as vscode from 'vscode';

export function createCommonValueCompletions(): vscode.CompletionItem[] {
	const completions: vscode.CompletionItem[] = [];

	// Font completion
	const fontCompletion = new vscode.CompletionItem('Font', vscode.CompletionItemKind.Snippet);
	fontCompletion.insertText = new vscode.SnippetString(
		'Font = "${1|Adamina,Droid Sans,Lato,Montserrat,Noto Serif,Open Sans,Poppins,Roboto,Roboto Mono,Roboto Slab,Slabo 27px|}"'
	);
	fontCompletion.documentation = new vscode.MarkdownString('Insert Font property with available font choices');
	fontCompletion.detail = 'Font Property';
	completions.push(fontCompletion);

	// FontStyle completion
	const fontStyleCompletion = new vscode.CompletionItem('FontStyle', vscode.CompletionItemKind.Snippet);
	fontStyleCompletion.insertText = new vscode.SnippetString(
		'FontStyle = "${1|Regular,Bold,Light,Light Italic,Italic,Bold Italic,Black,Black Italic,BoldItalic,Semibold,Semibold Italic,Extrabold,Extrabold Italic,Thin,Thin Italic,ExtraLight,ExtraLight Italic,Medium,Medium Italic,SemiBold,SemiBold Italic,ExtraBold,ExtraBold Italic|}"'
	);
	fontStyleCompletion.documentation = new vscode.MarkdownString('Insert FontStyle property with available style choices');
	fontStyleCompletion.detail = 'FontStyle Property';
	completions.push(fontStyleCompletion);

	return completions;
}
