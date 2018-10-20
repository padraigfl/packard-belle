# Todo Lists

# Initial UI Todo List

Abstract

- [x] Standard colors
- [x] Borders
- [x] Button
- [x] Actions list
- [x] Nested actions list
- [x] Icons in action list
- [x] Cursor

Forms/etc

- [x] Form button
- [x] Section dividers
- [x] Radio buttons
- [x] Checkbox
- [x] Text input
- [x] Select (using react-select)
- [x] Select multiple
- [x] Disabled states for inputs
- [ ] Tabs
- [ ] Alert/dialog text handling

W98 Toolbar

- [x] Start Button
- [x] Notifications + time
- [x] Bar and dividers
- [x] Quick Launch
- [x] Active windows
- [x] Start menu

Explorer/Program

- [x] Heading
- [x] Standard view icons
- [x] close/minimize/restore/help
- [x] File/Edit/etc toolbar
- [x] Options (needs sections handling and see more icons)
- [x] Explorer input (cosmetic only)
- [ ] Explorer input (working)
- [ ] Status footer (partially done, logic not figured out)
- [ ] Explorer views (?)

## Interactive

General

- [ ] Right click actions
- [ ] State sharing
- [ ] Loading
- [ ] Shut down
- [ ] Font substitution
- [ ] Scaling display size
- [ ] Make CSS pseudoclass driven design choices optional

W98 Toolbar

- [x] Interactive start menu, validated inputs
- [ ] Only one active window
- [ ] Network notifications icon

## Performance

- [ ] Tests
- [ ] CI
- [ ] Coverage
- [ ] Snapshots (only when finished with core components)
- [x] Linting
- [x] PropTypes

# Necessary Refactorings

- [ ] Decouple CSS build from React build (i.e. style everything within mixins, include where appropriate)
- [ ] Reimplement CSS Modules
- [ ] Make dummy Select component for places where aesthetically needed
- [ ] Group options collections in explorer
- [ ] Pixel near perfect (leave to last)

## To fix later

- [ ] Use svg filter for icon highlighting (checkered blue pixel)
- [ ] Refactor various list option groups
- [ ] Blue selected areas grey when parent not active
- [ ] Radio and checkbox for Menus
- [ ] Custom font
- [ ] Start menu animation on iOS (absolute transitions issue, considering disabling on mobile)
- [ ] Selected sections grey when not focus
- [ ] Filter overhauls
- [ ] Redundant CSS clearout
- [x] StandardMenuWrapper as HOC?
- [ ] Gradient improvements
- [ ] Add empty taskbar to core css
- [ ] Disabled buttons
- [ ] Single width font
- [ ] Right clicking
