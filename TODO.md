# Todo Lists

# Critical

- [x] get rid of node-sass
- [x] fix storybook build issues
- [x] fix css file build issues
- [x] mass upgrade of key dependencies
- [ ] either fix tests or delete them
- [ ] remove unused things such as playroom and arguably stylelint 

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
- [x] Options (needs sections, resize handling and see more icons)
- [x] Explorer input (cosmetic only)
- [ ] Explorer input (working)
- [ ] Status footer (partially done, logic not figured out)
- [ ] Explorer views (?)

## Interactive

General

- [ ] Right click actions
- [ ] State sharing
- [ ] Loading
- [x] ~Shut down~
- [x] ~Font substitution~
- [x] ~Scaling display size~
- [ ] Make CSS pseudoclass driven design choices optional

W98 Toolbar

- [x] Interactive start menu, validated inputs
- [x] ~Only one active window~
- [ ] Network notifications icon

## Performance

- [ ] Tests
- [ ] CI
- [ ] Coverage
- [x] Linting
- [x] PropTypes

# Necessary Refactorings

- [ ] Decouple CSS build from React build (i.e. style everything within mixins, include where appropriate)
- [x] ~Reimplement CSS Modules~
- [x] Make dummy Select component for places where aesthetically needed
- [x] Group options collections in explorer
- [ ] Pixel near perfect (leave to last)
- [ ] Switch to react-testing-library
- [ ] Sematic HTML improvements

## To fix later

- [ ] Use svg filter for icon highlighting (checkered blue pixel)
- [ ] Refactor various list option groups
- [ ] Blue selected areas grey when parent not active
- [x] Radio and checkbox for Menus (via classes)
- [x] Custom font
- [ ] Start menu animation on iOS (absolute transitions issue, considering disabling on mobile)
- [ ] Selected sections grey when not focus
- [ ] Filter overhauls
- [ ] Redundant CSS clearout
- [x] StandardMenuWrapper as HOC?
- [ ] Gradient improvements
- [ ] Add empty taskbar to core css
- [ ] Disabled buttons
- [x] ~Single width font~
- [ ] Firefox outlines issue
- [ ] PERFORMANCE IMPROVMENTS
