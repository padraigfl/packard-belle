# Packard Belle: A nostalgic component UI

[![Coverage Status](https://coveralls.io/repos/github/padraigfl/packard-belle/badge.svg?branch=master)](https://coveralls.io/github/padraigfl/packard-belle?branch=master) [![Build Status](https://travis-ci.org/padraigfl/packard-belle/badge.svg?branch=master)](https://travis-ci.org/padraigfl/packard-belle?branch=master) [![Maintainability](https://api.codeclimate.com/v1/badges/57fda55403f052a1579b/maintainability)](https://codeclimate.com/github/padraigfl/packard-belle/maintainability)

The primary object of this project is to further my knowledge of various browsers and see how far I can push CSS.

Components previewable at http://packard-belle.herokuapp.com/

## Goals

### 1. To create a CSS framework that mimics my first home computer

A CSS framework primarily because this is mainly a CSS and browser learning experiment. On top of that I suspect the component behaviour can swap out styles to effectively work as skins with minimal additional changes for a fairly wide range of desktop UIs

### 2. To create a component library which mimics standard desktop behaviours

Following on from 1, the goals of this step are to initially mimic the behaviours of my first computer as close as possible. Where CSS either doesn't work, or provides an unsatisfactory solution (e.g. cursor triggered dropdown menus), the goal is to use the most globally acceptable javascript as I can find to trigger the required changes.
For certain components (e.g. select boxes), I'm using quick solutions for now, ain't nobody got the time for that stuff.

Code quality needs improvement currently as the hacking out a working model is largely done.

### 3. Build a website utilising the components

To be done, I hope to do this in the next few weeks and expand and refine the necessary components as needed.

## Scripts

1. `npm run build` For building storybook
2. `npm run build:css` For exporting CSS framework (needs work)
3. `npm run build:module` For building ES and CJS outputs

## Indexing

Thanks to @cryiography for the script to autogenerate these

<!--- INJECTION:START -->

| Name                | Docs                                        | Dir                                              | Source                                                           |
| ------------------- | ------------------------------------------- | ------------------------------------------------ | ---------------------------------------------------------------- |
| Button              | N/A                                         | [source dir](src/components/Button)              | [index](src/components/Button/Button.js)                         |
| ButtonForm          | N/A                                         | [source dir](src/components/ButtonForm)          | [index](src/components/ButtonForm/ButtonForm.js)                 |
| ButtonIconLarge     | N/A                                         | [source dir](src/components/ButtonIconLarge)     | [index](src/components/ButtonIconLarge/ButtonIconLarge.js)       |
| ButtonIconSmall     | N/A                                         | [source dir](src/components/ButtonIconSmall)     | [index](src/components/ButtonIconSmall/ButtonIconSmall.js)       |
| ButtonNav           | N/A                                         | [source dir](src/components/ButtonNav)           | [index](src/components/ButtonNav/ButtonNav.js)                   |
| ButtonProgram       | N/A                                         | [source dir](src/components/ButtonProgram)       | [index](src/components/ButtonProgram/ButtonProgram.js)           |
| ButtonStart         | N/A                                         | [source dir](src/components/ButtonStart)         | [index](src/components/ButtonStart/ButtonStart.js)               |
| DetailsSection      | N/A                                         | [source dir](src/components/DetailsSection)      | [index](src/components/DetailsSection/DetailsSection.js)         |
| ExplorerView        | N/A                                         | [source dir](src/components/ExplorerView)        | [index](src/components/ExplorerView/ExplorerView.js)             |
| FormCheckbox        | N/A                                         | [source dir](src/components/FormCheckbox)        | [index](src/components/FormCheckbox/index.js)                    |
| FormFakeSelect      | N/A                                         | [source dir](src/components/FormFakeSelect)      | [index](src/components/FormFakeSelect/index.js)                  |
| FormInputText       | N/A                                         | [source dir](src/components/FormInputText)       | [index](src/components/FormInputText/index.js)                   |
| FormRadio           | N/A                                         | [source dir](src/components/FormRadio)           | [index](src/components/FormRadio/index.js)                       |
| FormSelect          | [DOCS](src/components/FormSelect/README.md) | [source dir](src/components/FormSelect)          | [index](src/components/FormSelect/index.js)                      |
| FormSelectBox       | N/A                                         | [source dir](src/components/FormSelectBox)       | [index](src/components/FormSelectBox/index.js)                   |
| FormSelectBoxSimple | N/A                                         | [source dir](src/components/FormSelectBoxSimple) | [index](src/components/FormSelectBoxSimple/index.js)             |
| FormToggle          | N/A                                         | [source dir](src/components/FormToggle)          | [index](src/components/FormToggle/index.js)                      |
| Frame               | N/A                                         | [source dir](src/components/Frame)               | [index](src/components/Frame/Frame.js)                           |
| Icon                | N/A                                         | [source dir](src/components/Icon)                | [index](src/components/Icon/Icon.js)                             |
| IconExplorerIcon    | N/A                                         | [source dir](src/components/IconExplorerIcon)    | [index](src/components/IconExplorerIcon/IconExplorerIcon.js)     |
| IconListIcon        | N/A                                         | [source dir](src/components/IconListIcon)        | [index](src/components/IconListIcon/IconListIcon.js)             |
| MenuBar             | N/A                                         | [source dir](src/components/MenuBar)             | [index](src/components/MenuBar/MenuBar.js)                       |
| ResizableIconsList  | N/A                                         | [source dir](src/components/ResizableIconsList)  | [index](src/components/ResizableIconsList/ResizableIconsList.js) |
| StandardMenu        | N/A                                         | [source dir](src/components/StandardMenu)        | [index](src/components/StandardMenu/StandardMenu.js)             |
| StandardMenuHOC     | N/A                                         | [source dir](src/components/StandardMenuHOC)     | [index](src/components/StandardMenuHOC/StandardMenuHOC.js)       |
| StartMenu           | N/A                                         | [source dir](src/components/StartMenu)           | [index](src/components/StartMenu/StartMenu.js)                   |
| TaskBar             | N/A                                         | [source dir](src/components/TaskBar)             | [index](src/components/TaskBar/TaskBar.js)                       |
| Window              | N/A                                         | [source dir](src/components/Window)              | [index](src/components/Window/Window.js)                         |
| WindowAlert         | N/A                                         | [source dir](src/components/WindowAlert)         | [index](src/components/WindowAlert/WindowAlert.js)               |
| WindowExplorer      | N/A                                         | [source dir](src/components/WindowExplorer)      | [index](src/components/WindowExplorer/WindowExplorer.js)         |
| WindowProgram       | N/A                                         | [source dir](src/components/WindowProgram)       | [index](src/components/WindowProgram/WindowProgram.js)           |

<!--- INJECTION:END -->

## Credits

Build tools largely created with help of https://hackernoon.com/making-of-a-component-library-for-react-e6421ea4e6c7

Font created using http://www.pentacom.jp/pentacom/bitfontmaker2/
