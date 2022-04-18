[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues/joeyschroeder/code-the-way-project-starter.svg)](https://github.com/joeyschroeder/code-the-way-project-starter/issues)
[![GitHub stars](https://img.shields.io/github/stars/joeyschroeder/code-the-way-project-starter.svg)](https://github.com/joeyschroeder/code-the-way-project-starter/stargazers)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

# 🌈 code-the-way-project-starter

An application using [React](https://reactjs.org/) and [Redux](https://redux.js.org/) designed to be used as a starting point for front-end applications.

## Table of Contents

1. [Getting Started](#getting-started)

- [Prerequisites](#prerequisites)
- [Installation](#installation)

2. [Development](#development)

- [Webpack Dev Server](#webpack-dev-server)
- [ESLint and Prettier.io](#eslint-and-prettierio)
- [Committing](#committing)

5. [Scripts](#scripts)
6. [Dependencies](#dependencies)

- [Development](#dependencies-development)
- [Production](#dependencies-production)

7. [Authors](#authors)
8. [Acknowledgments](#acknowledgments)

<a name="getting-started"></a>

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a production environment.

<a name="prerequisites"></a>

### Prerequisites

#### Node.js & Node Package Manager (npm)

You'll need to download and install [Node.js](https://nodejs.org) to install dependencies and run the scripts in this project to develop, test, and deploy this project. This project requires **Node.js** version 16 or hire along with **Node Package Manager (npm)**. npm is installed automatically when Node.js is installed. Download the latest version of Node.js [here](https://nodejs.org/en/download/) and install.

<a name="installation"></a>

### Installation

After **Node.js** and **npm** are installed, you'll need to **clone** this repository to your working directory on your local machine, then install the project dependencies using npm through the command line.

First, navigate to your working directory:

```
cd path/to/your/working/directory
```

Then clone this repository to your working directory.
First, clone the repository:

```
git clone https://github.com/joeyschroeder/code-the-way-project-starter.git
```

After cloning is complete, navigate inside the newly cloned repository:

```
cd code-the-way-project-starter
```

Finally, run `npm install` to install all project dependencies:

```
npm install
```

**NOTE:** _Occaisionally, depending on your user permissions, you may need to **force** npm to install dependencies. If errors occur while running `npm install`, you can do this by running `npm install --force` instead._

<a name="development"></a>

## Development

<a name="webpack-dev-server"></a>

### Webpack Dev Server

During development, this application will run inside a local web browser using [Webpack Dev Server](https://webpack.js.org/configuration/dev-server/). To start the application in a web browser, navigate to the root of the project directory in the command line and run `npm run start`. This command will print out a URL which can be opened in a web browser.

First, navigate to the root of the project:

```
cd path/to/your/working/directory/code-the-way-project-starter
```

Then start the application:

```
npm run start
```

After Webpack Dev Server has compiled the development bundle, it will print out something similar to following:

```
<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:9090/, http://127.0.0.1:9090/
<i> [webpack-dev-server] Content not from webpack is served from '/Users/joey/Documents/workspace/code-the-way-project-starter/public' directory
<i> [webpack-dev-server] 404s will fallback to '/index.html'
```

Open the URL [http://localhost:9090/](http://localhost:9090/) in your web browser.

#### Hot Reloading

This project is equipped with [Webpack Hot Module Replacement](https://webpack.js.org/concepts/hot-module-replacement/). This means that while Webpack Dev Server is running the documentation application, you can make changes to the files and they will automatically update in the web browser. **Occasionally, the web browser may need a manual refresh if you're changes affect application state or changes outside of the React life-cycle.**

<a name="eslint-and-prettierio"></a>

### ESLint and Prettier.io

This project is equipped with [ESLint](https://eslint.org/) and [Prettier.io](https://prettier.io/) to ensure a homogeneous code-style and prevent JavaScript syntactical errors.

During development, you can run `npm run eslint:fix` in the root of the project to automatically fix any fixable [ESLint errors/warnings](.eslintrc), and format your JavaScript [Prettier standards](https://prettier.io/).

#### Fix ESLint and Prettier errors/warnings on Save

⚠️ This documentation is under construction. ⚠️

<a name="committing"></a>

### Committing

To ensure the commit history of this project remains helpful, please use the commit rules outlined [here](https://chris.beams.io/posts/git-commit/) when committing.

To making following these rules easier, this project is equipped with a [Git commit template](commit.template.txt):

```
# <type>: (If applied, this commit will...) <subject> (Max 50 char)
# |<----  Using a Maximum Of 50 Characters  ---->|


# Explain why this change is being made
# |<----   Try To Limit Each Line to a Maximum Of 72 Characters   ---->|

# Provide links or keys to any relevant tickets, articles or other resources
# Example: JIRA issue #23

# --- COMMIT END ---
# Type can be
#    breaking (changes that break previous implementations)
#    feat     (new feature)
#    fix      (bug fix)
#    refactor (refactoring production code)
#    revert   (changes that revert a previous commit)
#    style    (formatting, missing semi colons, etc; no code change)
#    docs     (changes to documentation)
#    test     (adding or refactoring tests; no production code change)
#    chore    (updating grunt tasks etc; no production code change)
#    other    (changes that do not fit in above categories)
# --------------------
# Remember to
#    Capitalize the subject line
#    Use the imperative mood in the subject line
#    Do not end the subject line with a period
#    Separate subject from body with a blank line
#    Use the body to explain what and why vs. how
#    Can use multiple lines with "-" for bullet points in body
# --------------------

```

To enable this Git commit template, run the following command from the root of the project:

```
git config --global commit.template commit.template.txt
```

#### Pre-Commit Hooks

This project is equipped with [Git Pre-Commit Hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) to help ensure successful builds. These **hooks** are a set of scripts that will run before allowing a developer to commit to the project. If any of these scripts fail the commit will cancel.

Before allowing a successful commit Git will run the following scripts:

```
npm run eslint
```

It's recommended a developers run `npm run eslint:fix` often during development to prevent any failures from code-style or JavaScript syntactical errors.

<a name="scripts"></a>

## Scripts

### `build`

This command runs `webpack` in "production" mode. It uses the `src/index.js` file as it's entry point, and generates a JavaScript `main.js` and `vendor.js` file in `dist/`.

### `clean`

This command delets the `dist/` directory.

### `eslint`

This command runs `eslint src/`. It prints eslint warnings and errors in the command line.

### `eslint:fix`

This command runs `eslint --fix src/`. It attempts to fix any eslint warnings/errors then prints the remaining warnings and errors in the command line.

#### `start`

This command runs `webpack-dev-server` in "development" mode on the documentation. Hot reloading is enabled. Once running, you can access the documentation running locally at [localhost:9090/](http://localhost:9090/).

<a name="dependencies"></a>

## Dependencies

The following are the dependencies in `package.json` separated into the categories in which the dependencies are required.

<a name="dependencies-development"></a>

### Development

- @hot-loader/react-dom
- webpack
- webpack-cli
- webpack-dev-server

#### Git

- pre-commit

#### Linting JavaScript

- @babel/eslint-parser
- eslint
- eslint-config-airbnb
- eslint-config-prettier
- eslint-import-resolver-babel-module
- eslint-plugin-import
- eslint-plugin-jest
- eslint-plugin-jsx-a11y
- eslint-plugin-prettier
- eslint-plugin-react"
- eslint-plugin-react-hooks
- prettier

#### Transpilation

- @babel/core
- @babel/preset-env
- @babel/preset-react
- babel-plugin-lodash
- babel-plugin-module-resolver

#### Webpack

- buffer
- clean-webpack-plugin
- compression-webpack-plugin
- path
- process
- webpack-merge

##### JavaScript

- @babel/register
- babel-loader
- terser-webpack-plugin

##### Styles

- autoprefixer
- css-loader
- css-minimizer-webpack-plugin
- mini-css-extract-plugin
- postcss
- postcss-loader
- postcss-scss
- sass
- sass-loader
- style-loader

##### Templates

- favicons
- favicons-webpack-plugin
- html-webpack-plugin

<a name="dependencies-production"></a>

### Production

#### JavaScript

- classnames
- lodash
- prop-types
- react
- react-dom
- react-hot-loader
- react-redux
- react-router
- react-router-dom
- redux
- redux-actions
- redux-thunk

#### Styles

- animate.css
- font-awesome
- normalize.css

<a name="authors"></a>

## Authors

- **Joey Schroeder** - _Initial work_

See also the list of [contributors](https://github.com/joeyschroeder/code-the-way-project-starter/contributors) who participated in this project.

<a name="acknowledgments"></a>

## Acknowledgments

Hat tip to anyone who's code was used! 🤠
