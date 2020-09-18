# vuerd-atom

> [vuerd](https://github.com/vuerd/vuerd) ERD Editor atom extension

[![npm version](https://img.shields.io/npm/v/vuerd.svg?style=flat-square&color=blue)](https://www.npmjs.com/package/vuerd) [![VS Marketplace version](https://vsmarketplacebadge.apphb.com/version-short/dineug.vuerd-vscode.svg?style=flat-square&color=blue&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=dineug.vuerd-vscode) [![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg?style=flat-square&logo=webcomponents.org)](https://www.webcomponents.org/element/vuerd) [![GitHub](https://img.shields.io/github/license/vuerd/vuerd?style=flat-square&color=blue)](https://github.com/vuerd/vuerd/blob/master/LICENSE) [![Codecov](https://img.shields.io/codecov/c/gh/vuerd/vuerd?logo=codecov&style=flat-square)](https://codecov.io/gh/vuerd/vuerd) [![CI](https://img.shields.io/github/workflow/status/vuerd/vuerd/CI?label=CI&logo=github&style=flat-square)](https://github.com/vuerd/vuerd/actions)

## ERD

![vuerd](https://github.com/vuerd/vuerd/blob/master/img/vuerd-erd.gif?raw=true)

## Generator SQL DDL

![vuerd](https://github.com/vuerd/vuerd/blob/master/img/vuerd-ddl.gif?raw=true)

## Generator Code

![vuerd](https://github.com/vuerd/vuerd/blob/master/img/vuerd-generator-code.gif?raw=true)

## Visualization

![vuerd](https://github.com/vuerd/vuerd/blob/master/img/vuerd-visualization.gif?raw=true)

## SQL DDL Import

![vuerd](https://github.com/vuerd/vuerd/blob/master/img/vuerd-ddl-import.gif?raw=true)

## Usage

1. ERD data [filename].vuerd.json Save a file as a form
1. Focus on the saved file and ctrl-alt-e

## Document

- [Live Demo](https://vuerd.github.io/vuerd/iframe.html?id=demo--live&viewMode=story)
- [Live Demo Sample](https://vuerd.github.io/vuerd/iframe.html?id=editor--load&viewMode=story)
- [Import SQL DDL support syntax](https://github.com/dineug/sql-ddl-parser/blob/master/src/SQL_DDL_Test_Case.md)

## Editor Keymap(default)

| Name                                                       | Keymap                                                                   |
| ---------------------------------------------------------- | ------------------------------------------------------------------------ |
| Editing - ERD                                              | dblclick, Enter                                                          |
| Editing - Grid                                             | dblclick, Enter                                                          |
| All Stop                                                   | Escape                                                                   |
| Search - find, filter                                      | Ctrl + Alt + F                                                           |
| Undo - ERD                                                 | Ctrl + Z                                                                 |
| Redo - ERD                                                 | Ctrl + Shift + Z                                                         |
| Selection - table, memo                                    | Ctrl + Drag, Click, Ctrl + Click, Ctrl + Alt + A                         |
| Selection - column, filter                                 | Click, Ctrl + Click, Shift + Click, Shift + Arrow key(up, down), Alt + A |
| Movement - table, memo, column, filter                     | Drag, Ctrl + Drag                                                        |
| Copy - column                                              | Ctrl + C                                                                 |
| Paste - column                                             | Ctrl + V                                                                 |
| Contextmenu - ERD, Table, Relationship, SQL, GeneratorCode | Right-click                                                              |
| Table Properties                                           | Ctrl + Space                                                             |
| New Table                                                  | Alt + N                                                                  |
| New Memo                                                   | Alt + M                                                                  |
| New - column, filter                                       | Alt + Enter                                                              |
| Delete - table, memo                                       | Ctrl + Delete                                                            |
| Delete - column, filter                                    | Alt + Delete                                                             |
| Select Hint - dataType, find                               | Arrow key(right), Click                                                  |
| Move Hint - dataType, find                                 | Arrow key(up, down)                                                      |
| Primary Key                                                | Alt + K                                                                  |
| checkbox - Grid, filter                                    | Space, Click                                                             |
| Move checkbox - Grid, filter                               | Arrow key(up, down, left, right)                                         |
| Relationship - Zero One N                                  | Ctrl + Alt + 1                                                           |
| Relationship - Zero One                                    | Ctrl + Alt + 2                                                           |
| Relationship - Zero N                                      | Ctrl + Alt + 3                                                           |
| Relationship - One Only                                    | Ctrl + Alt + 4                                                           |
| Relationship - One N                                       | Ctrl + Alt + 5                                                           |
| Relationship - One                                         | Ctrl + Alt + 6                                                           |
| Relationship - N                                           | Ctrl + Alt + 7                                                           |
