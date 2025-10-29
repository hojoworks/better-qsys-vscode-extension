import * as vscode from 'vscode';
import { createPropertyCompletions } from '../completions/properties';
import { createControlCompletions } from '../completions/controls';
import { createLayoutCompletions } from '../completions/layouts';
import { createGraphicsCompletions } from '../completions/graphics';
import { createCommonValueCompletions } from '../completions/common';
import { createRuntimeCompletions } from '../completions/runtime';
import { createPinCompletions } from '../completions/pins';
import { createComponentCompletions } from '../completions/components';

export function provideCompletionItems(
	document: vscode.TextDocument,
	position: vscode.Position,
	token: vscode.CancellationToken,
	context: vscode.CompletionContext
): vscode.CompletionItem[] {
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

	// Runtime Control Properties
	completionItems.push(...createRuntimeCompletions());

	// Pin Completions
	completionItems.push(...createPinCompletions());

	// Component Completions
	completionItems.push(...createComponentCompletions());

	return completionItems;
}
