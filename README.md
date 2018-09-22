# Packard Belle: A nostalgic component UI

[![Coverage Status](https://coveralls.io/repos/github/padraigfl/packard-belle/badge.svg?branch=master)](https://coveralls.io/github/padraigfl/packard-belle?branch=master) [![Build Status](https://travis-ci.org/padraigfl/packard-belle/badge.svg?branch=master)](https://travis-ci.org/padraigfl/packard-belle?branch=master) [![Maintainability](https://api.codeclimate.com/v1/badges/57fda55403f052a1579b/maintainability)](https://codeclimate.com/github/padraigfl/packard-belle/maintainability)

The primary object of this project is to further my knowledge of various browsers and see how far I can push CSS.

Components previewable at http://packard-belle.herokuapp.com/

## Goals

### 1. To create a CSS framework that mimics my first home computer

A CSS framework primarily because this is mainly a CSS  and browser learning experiment. On top of that I suspect the component behaviour can swap out styles to effectively work as skins with minimal additional changes for a fairly wide range of desktop UIs

### 2. To create a component library which mimics standard desktop behaviours

Following on from 1, the goals of this step are to initially mimic the behaviours of my first computer as close as possible. Where CSS either doesn't work, or provides an unsatisfactory solution  (e.g. cursor triggered dropdown menus), the goal is to use the most globally acceptable javascript as I can find to trigger the required changes.
For certain components (e.g. select boxes), I'm using quick solutions for now, ain't nobody got the time for that stuff.

Code quality needs improvement currently as the hacking out a working model is largely done.

### 3. Build a website utilising the components

To be done, I hope to do this in the next few weeks and expand and refine the necessary components as needed.

## Scripts

1. `npm run build` For building storybook
2. `npm run build:css` For exporting CSS framework (needs work)
3. `npm run build:module` For building ES and CJS outputs

Build tools largely created with help of https://hackernoon.com/making-of-a-component-library-for-react-e6421ea4e6c7

Font created using http://www.pentacom.jp/pentacom/bitfontmaker2/
