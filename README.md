# Packard Belle: A nostalgic component UI

[![Coverage Status](https://coveralls.io/repos/github/padraigfl/packard-belle/badge.svg?branch=master)](https://coveralls.io/github/padraigfl/packard-belle?branch=master) [![Build Status](https://travis-ci.org/padraigfl/packard-belle.svg?branch=master)](https://travis-ci.org/padraigfl/packard-belle) [![Maintainability](https://api.codeclimate.com/v1/badges/57fda55403f052a1579b/maintainability)](https://codeclimate.com/github/padraigfl/packard-belle/maintainability)

The primary object of this project is to further my knowledge of various browsers and see how far I can push CSS.

Components previewable at http://packard-belle.herokuapp.com/

Demo site previewable https://packard-belle.netlify.com

Demo site source https://github.com/padraigfl/packard-belle-desktop

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

| Name                | Docs                                        | Dir                                              | Source                                                                            |
| ------------------- | ------------------------------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------- |
| Button              | N/A                                         | [source dir](src/components/Button)              | [/Button.js](src/components/Button/Button.js)                                     |
| ButtonForm          | N/A                                         | [source dir](src/components/ButtonForm)          | [/ButtonForm.js](src/components/ButtonForm/ButtonForm.js)                         |
| ButtonIconLarge     | N/A                                         | [source dir](src/components/ButtonIconLarge)     | [/ButtonIconLarge.js](src/components/ButtonIconLarge/ButtonIconLarge.js)          |
| ButtonIconSmall     | N/A                                         | [source dir](src/components/ButtonIconSmall)     | [/ButtonIconSmall.js](src/components/ButtonIconSmall/ButtonIconSmall.js)          |
| ButtonNav           | N/A                                         | [source dir](src/components/ButtonNav)           | [/ButtonNav.js](src/components/ButtonNav/ButtonNav.js)                            |
| ButtonProgram       | N/A                                         | [source dir](src/components/ButtonProgram)       | [/ButtonProgram.js](src/components/ButtonProgram/ButtonProgram.js)                |
| ButtonStart         | N/A                                         | [source dir](src/components/ButtonStart)         | [/ButtonStart.js](src/components/ButtonStart/ButtonStart.js)                      |
| DetailsSection      | N/A                                         | [source dir](src/components/DetailsSection)      | [/DetailsSection.js](src/components/DetailsSection/DetailsSection.js)             |
| ExplorerView        | N/A                                         | [source dir](src/components/ExplorerView)        | [/ExplorerView.js](src/components/ExplorerView/ExplorerView.js)                   |
| FormCheckbox        | N/A                                         | [source dir](src/components/FormCheckbox)        | [/index.js](src/components/FormCheckbox/index.js)                                 |
| FormFakeSelect      | N/A                                         | [source dir](src/components/FormFakeSelect)      | [/index.js](src/components/FormFakeSelect/index.js)                               |
| FormInputText       | N/A                                         | [source dir](src/components/FormInputText)       | [/index.js](src/components/FormInputText/index.js)                                |
| FormRadio           | N/A                                         | [source dir](src/components/FormRadio)           | [/index.js](src/components/FormRadio/index.js)                                    |
| FormSelect          | [DOCS](src/components/FormSelectDISABLED/README.md) | [source dir](src/components/FormSelectDISABLED)          | [/index.js](src/components/FormSelectDISABLED/index.js)                                   |
| FormSelectBox       | N/A                                         | [source dir](src/components/FormSelectBox)       | [/index.js](src/components/FormSelectBox/index.js)                                |
| FormSelectBoxSimple | N/A                                         | [source dir](src/components/FormSelectBoxSimple) | [/index.js](src/components/FormSelectBoxSimple/index.js)                          |
| FormToggle          | N/A                                         | [source dir](src/components/FormToggle)          | [/index.js](src/components/FormToggle/index.js)                                   |
| Frame               | N/A                                         | [source dir](src/components/Frame)               | [/Frame.js](src/components/Frame/Frame.js)                                        |
| Icon                | N/A                                         | [source dir](src/components/Icon)                | [/Icon.js](src/components/Icon/Icon.js)                                           |
| IconExplorerIcon    | N/A                                         | [source dir](src/components/IconExplorerIcon)    | [/IconExplorerIcon.js](src/components/IconExplorerIcon/IconExplorerIcon.js)       |
| IconListIcon        | N/A                                         | [source dir](src/components/IconListIcon)        | [/IconListIcon.js](src/components/IconListIcon/IconListIcon.js)                   |
| MenuBar             | N/A                                         | [source dir](src/components/MenuBar)             | [/MenuBar.js](src/components/MenuBar/MenuBar.js)                                  |
| ResizableIconsList  | N/A                                         | [source dir](src/components/ResizableIconsList)  | [/ResizableIconsList.js](src/components/ResizableIconsList/ResizableIconsList.js) |
| StandardMenu        | N/A                                         | [source dir](src/components/StandardMenu)        | [/StandardMenu.js](src/components/StandardMenu/StandardMenu.js)                   |
| StandardMenuHOC     | N/A                                         | [source dir](src/components/StandardMenuHOC)     | [/StandardMenuHOC.js](src/components/StandardMenuHOC/StandardMenuHOC.js)          |
| StartMenu           | N/A                                         | [source dir](src/components/StartMenu)           | [/StartMenu.js](src/components/StartMenu/StartMenu.js)                            |
| TaskBar             | N/A                                         | [source dir](src/components/TaskBar)             | [/TaskBar.js](src/components/TaskBar/TaskBar.js)                                  |
| Window              | N/A                                         | [source dir](src/components/Window)              | [/Window.js](src/components/Window/Window.js)                                     |
| WindowAlert         | N/A                                         | [source dir](src/components/WindowAlert)         | [/WindowAlert.js](src/components/WindowAlert/WindowAlert.js)                      |
| WindowExplorer      | N/A                                         | [source dir](src/components/WindowExplorer)      | [/WindowExplorer.js](src/components/WindowExplorer/WindowExplorer.js)             |
| WindowProgram       | N/A                                         | [source dir](src/components/WindowProgram)       | [/WindowProgram.js](src/components/WindowProgram/WindowProgram.js)                |

<!--- INJECTION:END -->

## Credits

Build tools largely created with help of https://hackernoon.com/making-of-a-component-library-for-react-e6421ea4e6c7

Font created using http://www.pentacom.jp/pentacom/bitfontmaker2/
