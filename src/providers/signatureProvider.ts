import * as vscode from 'vscode';

export function provideSignatureHelp(
	document: vscode.TextDocument,
	position: vscode.Position,
	token: vscode.CancellationToken,
	context: vscode.SignatureHelpContext
): vscode.SignatureHelp {
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
