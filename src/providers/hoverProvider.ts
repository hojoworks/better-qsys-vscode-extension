import * as vscode from 'vscode';

export function provideHover(
	document: vscode.TextDocument,
	position: vscode.Position,
	token: vscode.CancellationToken
): vscode.Hover | null {
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
