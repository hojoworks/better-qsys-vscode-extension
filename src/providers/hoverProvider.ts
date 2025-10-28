import * as vscode from 'vscode';

export function provideHover(
	document: vscode.TextDocument,
	position: vscode.Position,
	token: vscode.CancellationToken
): vscode.Hover | null {
	const range = document.getWordRangeAtPosition(position);
	const word = document.getText(range);

	// Design-time functions
	const designTimeFunctions: { [key: string]: string } = {
		'GetProperties': 'Returns a table of properties that appear in the plugin properties. Called at design time.',
		'GetControls': 'Returns a table of controls that define the input/output pins. Called at design time.',
		'GetControlLayout': 'Returns a table that defines the layout of controls in the plugin UI. Called at design time.',
		'GetPages': 'Returns a table of page names for multi-page plugin UIs. Optional. Called at design time.',
		'GetComponents': 'Returns a table of named components used by the plugin. Called at design time.',
		'GetPins': 'Returns a table of pins for the plugin schematic block. Called at design time.',
		'GetColor': 'Returns the color of the plugin block in the schematic. Called at design time.',
		'GetPrettyName': 'Returns the display name shown in the schematic. Called at design time.',
		'RectifyProperties': 'Validates and corrects property values. Called at design time when properties change.',
		'GetWiring': 'Returns the internal wiring configuration for the plugin. Called at design time.'
	};

	// Control properties
	const controlProperties: { [key: string]: string } = {
		'Name': 'String - Unique identifier for the property, control, or object. Used to reference it in code (e.g., Properties["Name"], Controls["Name"]). Must be unique within its scope.',
		'Type': 'String - Defines data type. For Properties: "string", "integer", "double", "enum", "boolean". For Controls: use ControlType instead.',
		'ControlType': 'Type of control: "Button", "Indicator", "Knob", or "Text"',
		'ButtonType': 'Button behavior: "Toggle", "Momentary", "Trigger", or "StateTrigger"',
		'IndicatorType': 'Indicator type: "Led", "Meter", "Status", or "Text"',
		'ControlUnit': 'Unit of measurement: "dB", "Float", "Hz", "Integer", "Pan", "Percent", "Position", or "Seconds"',
		'PinStyle': 'Pin visibility: "Input", "Output", "Both", or "None"',
		'UserPin': 'Boolean - if true, pin is exposed on the plugin block',
		'Count': 'Number of controls to create (for creating multiple similar controls)',
		'Icon': 'String - Icon name (e.g., "skull") or Base64-encoded image data for button graphics',
		'IconType': 'String - Format of Icon image. Options: "Icon" (default), "Image" (PNG with alpha or JPG), "SVG"',
		'Min': 'Integer or Double - Minimum value for numeric properties and knob controls',
		'Max': 'Integer or Double - Maximum value for numeric properties and knob controls',
		'Value': 'Default value for property or control. Type depends on property type (string, number, boolean, etc.)',
		'Choices': 'Table (array) of strings - List of options for "enum" type properties. Displayed in a combo box.',
		'Header': 'String - Define a header label this property displays under. Requires QDS 9.10+',
		'Comment': 'String - Comment text shown below this property. Requires QDS 9.10+',
		'Description': 'String - Brief description of the property shown in the properties panel'
	};

	// Layout properties
	const layoutProperties: { [key: string]: string } = {
		'PrettyName': 'String - User-friendly display name shown in UI and pin labels. Different from Name (which is the code identifier). Can use "~" to create sub-levels in pin hierarchy.',
		'Style': 'Layout style: "Fader", "Knob", "Button", "Text", "Meter", "Led", "ListBox", "ComboBox", "Media", or "None"',
		'Position': 'Table {x, y} - position of control in pixels',
		'Size': 'Table {width, height} - size of control in pixels',
		'ButtonStyle': 'Button display style: "Toggle", "Momentary", "Trigger", "StateTrigger", "On", "Off", or "Custom"',
		'MeterStyle': 'Meter display style: "Level", "Reduction", "Gain", or "Standard"',
		'TextBoxStyle': 'Text box display style: "Normal" (default), "Meter", or "NoBackground"',
		'ShowTextbox': 'Boolean - if true, displays a text box showing the control value',
		'IsReadOnly': 'Boolean - if true, control cannot be changed at runtime. Good for status displays',
		'Margin': 'Integer - Margin space for control in pixels. Default is 0',
		'Padding': 'Integer - Padding space for control graphics in pixels. Default is 1',
		'Color': 'Table {r, g, b, alpha} - RGB values 0-255, alpha optional',
		'TextColor': 'Table {r, g, b, alpha} - Color of text. RGB values 0-255, alpha optional',
		'Fill': 'Table {r, g, b, alpha} - Fill color for graphics. RGB values 0-255, alpha optional',
		'StrokeColor': 'Table {r, g, b, alpha} - Color of outline. RGB values 0-255, alpha optional',
		'StrokeWidth': 'Integer - Thickness of outline in pixels. Default is 1',
		'BackgroundColor': 'Table {r, g, b, alpha} - Background color. RGB values 0-255, alpha optional',
		'OffColor': 'Table {r, g, b, alpha} - Color of button/LED when off. Used with UnlinkOffColor=true. RGB values 0-255, alpha optional',
		'UnlinkOffColor': 'Boolean - if true, allows button/LED to show different colors for on and off states',
		'IconColor': 'Table {r, g, b, alpha} - Color of button icon. RGB values 0-255, alpha optional',
		'CornerRadius': 'Integer - Rounds the corners of the control. Default is 0 (square corners)',
		'Radius': 'Integer - Same as CornerRadius. Alias for corner rounding',
		'FontSize': 'Integer - Size of text in points. Default varies by control type',
		'Font': 'String - Font family name. Available fonts: "Roboto", "Roboto Mono", "Roboto Slab", "Open Sans", "Lato", "Montserrat", "Noto Serif", "Poppins", "Droid Sans", "Adamina", "Slabo 27px"',
		'FontStyle': 'String - Font style/weight. Available styles depend on selected Font. Common: "Regular", "Bold", "Italic", "Light", "Medium", "SemiBold", "Thin", "Black", "ExtraBold". See Font-specific styles in documentation.',
		'HTextAlign': 'Horizontal text alignment: "Left", "Center", or "Right"',
		'VTextAlign': 'Vertical text alignment: "Top", "Center", or "Bottom"',
		'WordWrap': 'Boolean - if true, text wraps to multiple lines',
		'Legend': 'String - Text label displayed on button or fader',
		'ZOrder': 'Signed Integer - Layering order. Higher values are in front. Applies to both controls and graphics on same page.'
	};

	// Runtime control properties
	const runtimeProperties: { [key: string]: string } = {
		'Value': 'Read/Write - Floating point value of control. Boolean values convert to 0 (false) or 1 (true)',
		'String': 'Read/Write - String representation of the control value',
		'Boolean': 'Read/Write - Boolean value. Returns true if position > 0.5',
		'Position': 'Read/Write - Floating point position from 0.0 to 1.0',
		'EventHandler': 'Assign a function to be called when the control value changes. Function can optionally receive the control object as parameter',
		'Legend': 'Read/Write - String displayed on button or fader label',
		'RampTime': 'Read/Write - Time in seconds for value changes to ramp. Defaults to 0 (instant)',
		'IsDisabled': 'Read/Write - Boolean. false = enabled, true = disabled',
		'IsInvisible': 'Read/Write - Boolean. false = visible, true = hidden',
		'IsIndeterminate': 'Read/Write - Boolean. false = value is valid, true = value is not valid',
		'Color': 'Read/Write - Table {r, g, b, alpha} representing the color. RGB values 0-255, alpha optional',
		'Choices': 'Read/Write - String array (table) containing the list of choices for a combo box or list box control',
		'Values': 'Read/Write - Table of floating point values. Used by 2D Panner, RTA - Band-Pass, Responsalyzer, and Meters components',
		'Index': 'Read-only - Index number of the control',
		'Trigger': 'Method - Call as Controls[name]:Trigger() to trigger the output, similar to a momentary button press'
	};

	// Font families and their supported styles
	const fonts: { [key: string]: string } = {
		'Roboto': 'Supported FontStyles: Thin, Thin Italic, Light, Light Italic, Regular, Italic, Medium, Medium Italic, Bold, Bold Italic, Black, Black Italic',
		'Roboto Mono': 'Supported FontStyles: Thin, Thin Italic, Light, Light Italic, Regular, Italic, Medium, Medium Italic, Bold, Bold Italic',
		'Roboto Slab': 'Supported FontStyles: Thin, Light, Regular, Bold',
		'Open Sans': 'Supported FontStyles: Light, Light Italic, Regular, Italic, Semibold, Semibold Italic, Bold, Bold Italic, Extrabold, Extrabold Italic',
		'Lato': 'Supported FontStyles: Light, Light Italic, Regular, Italic, Bold, Bold Italic, Black, Black Italic',
		'Montserrat': 'Supported FontStyles: Thin, Thin Italic, ExtraLight, ExtraLight Italic, Light, Light Italic, Regular, Italic, Medium, Medium Italic, SemiBold, SemiBold Italic, Bold, Bold Italic, ExtraBold, ExtraBold Italic, Black, Black Italic',
		'Noto Serif': 'Supported FontStyles: Regular, Italic, Bold, BoldItalic',
		'Poppins': 'Supported FontStyles: Light, Regular, Medium, SemiBold, Bold',
		'Droid Sans': 'Supported FontStyles: Regular, Bold',
		'Adamina': 'Supported FontStyles: Regular',
		'Slabo 27px': 'Supported FontStyles: Regular'
	};

	// Check all dictionaries
	if (word in designTimeFunctions) {
		return new vscode.Hover(
			new vscode.MarkdownString(`**Q-SYS Design-Time Function**\n\n${designTimeFunctions[word]}`)
		);
	}

	if (word in controlProperties) {
		return new vscode.Hover(
			new vscode.MarkdownString(`**Control Property**\n\n${controlProperties[word]}`)
		);
	}

	if (word in layoutProperties) {
		return new vscode.Hover(
			new vscode.MarkdownString(`**Layout Property**\n\n${layoutProperties[word]}`)
		);
	}

	if (word in runtimeProperties) {
		return new vscode.Hover(
			new vscode.MarkdownString(`**Runtime Control Property**\n\n${runtimeProperties[word]}`)
		);
	}

	if (word in fonts) {
		return new vscode.Hover(
			new vscode.MarkdownString(`**Q-SYS Font Family**\n\n${fonts[word]}`)
		);
	}

	return null;
}
