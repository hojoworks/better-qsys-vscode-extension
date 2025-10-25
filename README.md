# Better Lua for Q-SYS Plugins

A VS Code extension providing intelligent autocomplete and IntelliSense for Q-SYS plugin development in Lua.

## Features

This extension provides autocomplete support for Q-SYS plugin design-time functions and properties based on the [Q-SYS Developer Documentation](https://q-syshelp.qsc.com/DeveloperHelp/Content/Standards_Definitions/Reserved_Functions.htm).

### Supported File Types
- `.lua` files
- `.qplug` files

### Property Completions (5 types)
Type `property` to see all options:
- `property string` - String property with Name, Type, Value
- `property integer` - Integer property with Name, Type, Min, Max, Value
- `property double` - Double property with Name, Type, Min, Max, Value
- `property boolean` - Boolean property with Name, Type, Value
- `property enum` - Enum property with Name, Type, Choices, Value

All properties include optional commented Header and Comment fields.

### Control Completions (4 types)
Type `control` to see all options:
- `control button` - Button control with ButtonType, Count, UserPin, PinStyle
- `control indicator` - Indicator control with IndicatorType, Count, UserPin, PinStyle
- `control knob` - Knob control with ControlUnit, Min, Max, Count, UserPin, PinStyle
- `control text` - Text control with Count, UserPin, PinStyle

### Layout Completions (11 types)
Type `layout` to see all options:
- `layout button` - Button layout with PrettyName, Style, ButtonStyle, Position, Size
- `layout combobox` - ComboBox layout
- `layout fader` - Fader layout with ShowTextbox option
- `layout general` - General layout template with Style dropdown
- `layout knob` - Knob layout
- `layout led` - LED layout
- `layout listbox` - ListBox layout
- `layout media` - Media layout
- `layout meter` - Meter layout with MeterStyle options
- `layout none` - None layout (hidden control)
- `layout text` - Text layout

### Graphics Completions (5 types)
Type `graphics` to see all options:
- `graphics groupbox` - GroupBox graphic
- `graphics header` - Header graphic
- `graphics image` - Image graphic with base64 Image property
- `graphics label` - Label graphic
- `graphics svg` - SVG graphic with base64 Image property

### Runtime Control Properties (5 properties)

Autocomplete for accessing control values at runtime:

- `.Value` - Read/Write floating point value
- `.String` - Read/Write string representation
- `.Boolean` - Read/Write boolean value (true if position > 0.5)
- `.Position` - Read/Write position from 0.0 to 1.0
- `.EventHandler` - Assign function called when control value changes

Example usage: `Controls.MyButton.Value = 1` or `Controls.MyButton.EventHandler = function() ... end`

### Single Property Completions (39 properties)

Autocomplete for individual layout and graphics properties:

- BackgroundColor
- ButtonStyle
- ButtonVisualStyle
- ClassName
- Color
- CornerRadius
- CustomButtonDown
- CustomButtonUp
- Fill
- Font
- FontSize
- FontStyle
- HTextAlign
- IconColor
- Image
- IsBold
- IsReadOnly
- Legend
- Margin
- MeterStyle
- OffColor
- Padding
- Position
- PrettyName
- Radius
- ShowTextbox
- Size
- StrokeColor
- StrokeWidth
- Style
- Text
- TextBoxStyle
- TextColor
- Type
- UnlinkOffColor
- VTextAlign
- WordWrap
- ZOrder

#### Font Support

11 available fonts:

- Adamina
- Droid Sans
- Lato
- Montserrat
- Noto Serif
- Open Sans
- Poppins
- Roboto
- Roboto Mono
- Roboto Slab
- Slabo 27px

18 available font styles:

- Regular
- Bold
- Light
- Light Italic
- Italic
- Bold Italic
- Black
- Black Italic
- Thin
- Thin Italic
- ExtraLight
- ExtraLight Italic
- Medium
- Medium Italic
- SemiBold
- SemiBold Italic
- ExtraBold
- ExtraBold Italic

## Installation

### From .vsix file

1. Download the latest `.vsix` file
2. In VS Code, go to Extensions (Ctrl+Shift+X)
3. Click the "..." menu at the top
4. Select "Install from VSIX..."
5. Choose the downloaded `.vsix` file

## Usage

1. Open a `.lua` or `.qplug` file
2. Start typing one of the supported keywords:
   - `property` - Shows all property types
   - `control` - Shows all control types
   - `layout` - Shows all layout types
   - `graphics` - Shows all graphics types
   - Any property name (e.g., `Font`, `Color`, `Position`)
3. Select from the autocomplete dropdown
4. Use Tab to move through placeholders
5. Choose from dropdown options where available

## Repository

https://github.com/hojoworks/better-qsys-vscode-extension

## License

MIT
3. Update `package.json` to change the language file extensions or add more features

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## License

MIT
