# Better Lua for Q-SYS Plugins

A VS Code extension providing intelligent autocomplete and IntelliSense for Q-SYS plugin development in Lua.

## Features

This extension provides autocomplete support and hover documentation for Q-SYS plugin design-time functions and properties based on the [Q-SYS Developer Documentation](https://q-syshelp.qsc.com/DeveloperHelp/Content/Standards_Definitions/Reserved_Functions.htm).

### Supported File Types

- `.lua` files
- `.qplug` files

### Hover Documentation

Hover over Q-SYS-specific keywords to see helpful documentation including:

- **Design-Time Functions** (10) - `GetProperties`, `GetControls`, `GetControlLayout`, `GetPages`, `GetComponents`, `GetPins`, `GetColor`, `GetPrettyName`, `RectifyProperties`, `GetWiring`
- **Control Properties** (18) - `Name`, `Type`, `ControlType`, `ButtonType`, `IndicatorType`, `ControlUnit`, `PinStyle`, `UserPin`, `Count`, `Icon`, `IconType`, `Min`, `Max`, `Value`, `Choices`, `Header`, `Comment`, `Description`
- **Layout Properties** (31) - `PrettyName`, `Style`, `Position`, `Size`, `ButtonStyle`, `MeterStyle`, `TextBoxStyle`, `ShowTextbox`, `IsReadOnly`, `Margin`, `Padding`, `Color`, `TextColor`, `Fill`, `StrokeColor`, `StrokeWidth`, `BackgroundColor`, `OffColor`, `UnlinkOffColor`, `IconColor`, `CornerRadius`, `Radius`, `FontSize`, `Font`, `FontStyle`, `HTextAlign`, `VTextAlign`, `WordWrap`, `Legend`, `ZOrder`
- **Runtime Properties** (16) - `Value`, `String`, `Boolean`, `Position`, `EventHandler`, `Legend`, `RampTime`, `IsDisabled`, `IsInvisible`, `IsIndeterminate`, `Color`, `Choices`, `Values`, `Index`, `Trigger`
- **Font Families** (11) - Hover over font names like `"Roboto"` or `"Montserrat"` to see all supported FontStyles for that font

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

### Runtime Control Properties (6 completions)

Type `runtime` to see all options for accessing controls at runtime:

- `runtime value` - Controls['controlName'].Value (Read/Write floating point)
- `runtime string` - Controls['controlName'].String (Read/Write string representation)
- `runtime boolean` - Controls['controlName'].Boolean (Read/Write boolean, true if position > 0.5)
- `runtime position` - Controls['controlName'].Position (Read/Write position from 0.0 to 1.0)
- `runtime eventhandler function` - Assign a function reference to EventHandler
- `runtime eventhandler inline` - Assign an inline function to EventHandler

Example usage:

```lua
Controls['MyButton'].Value = 1
Controls['Volume'].EventHandler = VolumeChanged
Controls['Mute'].EventHandler = function()
    -- Handle control change
end
```

### Single Property Completions (43 properties)

Autocomplete for individual layout and graphics properties:

- BackgroundColor
- ButtonStyle
- ButtonVisualStyle
- ClassName
- Choices
- Color
- CornerRadius
- Count
- CustomButtonDown
- CustomButtonUp
- Fill
- Font
- FontSize
- FontStyle
- HTextAlign
- IconColor
- IconType
- Image
- IsBold
- IsReadOnly
- Legend
- Margin
- Max
- MeterStyle
- Min
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

### Quick Access to Documentation

- **Reserved Functions Documentation**
  - Command Palette: Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac), then type "Q-SYS: Open Reserved Functions Documentation"
  - Keyboard Shortcut: Press `Ctrl+Shift+H` (Windows/Linux) or `Cmd+Shift+H` (Mac)
  - Opens the official Q-SYS Reserved Functions documentation in your browser

- **Lua Extensions Documentation**
  - Command Palette: Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac), then type "Q-SYS: Open Lua Extensions Documentation"
  - Keyboard Shortcut: Press `Ctrl+Shift+L` (Windows/Linux) or `Cmd+Shift+L` (Mac)
  - Opens the Q-SYS Extensions to Lua documentation (Timer, Component, Named Components, etc.) in your browser

All keyboard shortcuts only work while editing Lua files (`.lua` or `.qplug`).

## Repository

[Repository](https://github.com/hojoworks/better-qsys-vscode-extension)

1. Update `package.json` to change the language file extensions or add more features

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## Changelog

### Version 1.2.0 (Current)

#### Added

- **Hover Documentation Expansion** - Significantly expanded hover tooltips:
  - Added `GetPages` design-time function
  - Added control properties: `Name`, `Type`, `Icon`, `IconType`, `Min`, `Max`, `Value`, `Choices`, `Header`, `Comment`, `Description`
  - Added layout properties: `CornerRadius`, `Radius`, `FontSize`, `Font`, `FontStyle`, `HTextAlign`, `VTextAlign`, `WordWrap`, `Legend`, `ZOrder`, `TextBoxStyle`, `IsReadOnly`, `Margin`, `Padding`, `StrokeWidth`, `UnlinkOffColor`
  - Added color properties: `Color`, `TextColor`, `Fill`, `StrokeColor`, `BackgroundColor`, `OffColor`, `IconColor`
  - Added runtime properties: `RampTime`, `IsIndeterminate`, `Choices`, `Values`, `Trigger`
- **Font Family Hover Support** - Hover over font names (e.g., "Roboto", "Montserrat") to see all supported FontStyles for that specific font
- **Name vs PrettyName Documentation** - Clear hover tooltips explaining the distinction between code identifiers and display names
- **Single Property Completions** - Added 4 new single property completions:
  - `Choices` - List of options for enum properties or combo box controls
  - `Count` - Number of controls to create
  - `IconType` - Format of Icon image (Icon, Image, SVG)
  - `Min` and `Max` - Minimum and maximum values for numeric properties
- **Quick Documentation Access** - Added command and keyboard shortcut to open Q-SYS Reserved Functions documentation:
  - Command: "Q-SYS: Open Reserved Functions Documentation"
  - Shortcut: `Ctrl+Shift+H` (Windows/Linux) or `Cmd+Shift+H` (Mac)
- **Lua Extensions Documentation** - Added command and keyboard shortcut to open Q-SYS Lua Extensions documentation:
  - Command: "Q-SYS: Open Lua Extensions Documentation"
  - Shortcut: `Ctrl+Shift+L` (Windows/Linux) or `Cmd+Shift+L` (Mac)
  - Covers Timer, Component, Named Components (TcpSocket, UdpSocket, SerialPort, Ssh, etc.)

#### Changed

- **Color Format Documentation** - Simplified color property documentation to focus on table format `{r, g, b, alpha}` (primary Q-SYS format)
- **Documentation Accuracy** - Aligned all hover documentation with official Q-SYS Reserved Functions documentation

### Version 1.1.0

#### Added

- **Runtime Property Completions** - 6 new completions for runtime control access:
  - `runtime value`, `runtime string`, `runtime boolean`, `runtime position`
  - `runtime eventhandler function`, `runtime eventhandler inline`

#### Changed

- **Consistent Naming** - Standardized all completion names to lowercase after prefix (e.g., `property string`, `control button`, `runtime value`)
- **Runtime Syntax** - Updated to use `Controls['controlName']` bracket notation (Q-SYS standard)
- **Text Control Enhancement** - Added `PinStyle` property to text control completions

### Version 1.0.0

- Initial release with basic autocomplete support
- Property, Control, Layout, and Graphics completions
- Basic hover documentation

## License

MIT
