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

Type `Property` to see all options:

- `Property string` - String property with Name, Type, Value
- `Property integer` - Integer property with Name, Type, Min, Max, Value
- `Property double` - Double property with Name, Type, Min, Max, Value
- `Property boolean` - Boolean property with Name, Type, Value
- `Property enum` - Enum property with Name, Type, Choices, Value

All properties include optional commented Header and Comment fields.

### Control Completions (4 types)

Type `Control` to see all options:

- `Control Button` - Button control with ButtonType, Count, UserPin, PinStyle
- `Control Indicator` - Indicator control with IndicatorType, Count, UserPin, PinStyle
- `Control Knob` - Knob control with ControlUnit, Min, Max, Count, UserPin, PinStyle
- `Control Text` - Text control with Count, UserPin, PinStyle

### Layout Completions (11 types)

Type `Layout` to see all options:

- `Layout Button` - Button layout with PrettyName, Style, ButtonStyle, Position, Size
- `Layout ComboBox` - ComboBox layout
- `Layout Fader` - Fader layout with ShowTextbox option
- `Layout General` - General layout template with Style dropdown
- `Layout Knob` - Knob layout
- `Layout Led` - LED layout
- `Layout ListBox` - ListBox layout
- `Layout Media` - Media layout
- `Layout Meter` - Meter layout with MeterStyle options
- `Layout None` - None layout (hidden control)
- `Layout Text` - Text layout

### Graphics Completions (5 types)

Type `Graphics` to see all options:

- `Graphics GroupBox` - GroupBox graphic
- `Graphics Header` - Header graphic
- `Graphics Image` - Image graphic with base64 Image property
- `Graphics Label` - Label graphic
- `Graphics Svg` - SVG graphic with base64 Image property

### Pin Completions (1 type)

Type `Pins Insert` to get pin definition completion:

- `Pins Insert` - Pin definition with Name, Direction, and Domain properties for GetPins function

Example usage:

```lua
function GetPins(props)
  local pins = {}
  table.insert(pins, {
    Name = "Audio Output",
    Direction = "output",
    Domain = "audio"
  })
  return pins
end
```

### Component Completions (1 type)

Type `Components Insert` to get component definition completion:

- `Components Insert` - Component definition with Name, Type, and Properties for GetComponents function

Example usage:

```lua
function GetComponents(props)
  local components = {}
  table.insert(components, {
    Name = "MainMixer",
    Type = "mixer",
    Properties = {
      ["n_inputs"] = 8,
      ["n_outputs"] = 1
    }
  })
  return components
end
```

### Runtime Control Properties (6 completions)

Type `Runtime` to see all options for accessing controls at runtime:

- `Runtime value` - Controls['controlName'].Value (Read/Write floating point)
- `Runtime string` - Controls['controlName'].String (Read/Write string representation)
- `Runtime boolean` - Controls['controlName'].Boolean (Read/Write boolean, true if position > 0.5)
- `Runtime position` - Controls['controlName'].Position (Read/Write position from 0.0 to 1.0)
- `Runtime eventhandler function` - Assign a function reference to EventHandler
- `Runtime eventhandler inline` - Assign an inline function to EventHandler

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
   - `Property` - Shows all property types
   - `Control` - Shows all control types
   - `Layout` - Shows all layout types
   - `Graphics` - Shows all graphics types
   - `Runtime` - Shows all runtime control properties
   - `Pins Insert` - Pin definition for GetPins function
   - `Components Insert` - Component definition for GetComponents function
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

### Version 1.3.1 (Current)

#### Added

- **ButtonType Completion** - Added single property completion for ButtonType with options: Toggle, Momentary, Trigger, StateTrigger

#### Changed

- **Layout Completion Capitalization** - Updated all layout completions to use proper capitalization, the default table in QSYS base plugin uses "layout" all lowercase.

### Version 1.3.0

#### Added

- **Pin Completions** - Added new autocomplete support for GetPins function:
  - `Pins Insert` - Pin definition completion with Name, Direction, and Domain properties
  - Supports both audio (default) and serial pin types
  - Tab navigation through all pin properties (Name → Direction → Domain)
  - Comprehensive documentation for pin properties and usage
- **Component Completions** - Added new autocomplete support for GetComponents function:
  - `Components Insert` - Component definition completion with Name, Type, and Properties
  - Tab navigation through component properties and nested Properties table
  - Includes documentation about component limitations and design implications

### Version 1.2.0

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
  - `Runtime value`, `Runtime string`, `Runtime boolean`, `Runtime position`
  - `Runtime eventhandler function`, `Runtime eventhandler inline`

#### Changed

- **Consistent Naming** - Standardized all completion names with proper capitalization (e.g., `Property string`, `Control Button`, `Runtime value`)
- **Runtime Syntax** - Updated to use `Controls['controlName']` bracket notation (Q-SYS standard)
- **Text Control Enhancement** - Added `PinStyle` property to text control completions

### Version 1.0.0

- Initial release with basic autocomplete support
- Property, Control, Layout, and Graphics completions
- Basic hover documentation

## License

MIT
