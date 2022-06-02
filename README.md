[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues/joeyschroeder/code-the-way-project-starter.svg)](https://github.com/joeyschroeder/code-the-way-project-starter/issues)
[![GitHub stars](https://img.shields.io/github/stars/joeyschroeder/code-the-way-project-starter.svg)](https://github.com/joeyschroeder/code-the-way-project-starter/stargazers)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

# 🌈 code-the-way-project-starter

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Table of Contents

- [Getting Started](#getting-started)

  - [Prerequisites](#prerequisites)
  - [Installation](#installation)

- [Development](#development)

  - [Running the Application Locally](#running-application-locally)
  - [ESLint and Prettier.io](#eslint-and-prettierio)
  - [Committing](#committing)

- [Available Scripts](#available-scripts)

  - [npm start](#npm-start)
  - [npm run build](#npm-run-build)
  - [npm run eslint](#npm-run-eslint)
  - [npm run eslint:fix](#npm-run-eslint-fix)

- [Learn More](#learn-more)
- [Authors](#authors)
- [Acknowledgments](#acknowledgments)

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

<a name="running-application-locally"></a>

### Running the Application Locally

During development, this application will run inside a local web browser. To start the application in a web browser, navigate to the root of the project directory in the command line and run `npm run start`. This command will start the application and automatically open the application in a browser window.

First, navigate to the root of the project:

```
cd path/to/your/working/directory/code-the-way-project-starter
```

Then start the application:

```
npm run start
```

After Webpack has compiled the development bundle, it will print out something similar to following:

```
Compiled successfully!

You can now view code-the-way-project-starter in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.0.9:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
```

If the application does not automatically open, you can open the URL [http://localhost:3000](http://localhost:3000) in your web browser.

#### Hot Reloading

This project is equipped with [Webpack Hot Module Replacement](https://webpack.js.org/concepts/hot-module-replacement/). This means that while the application is running locally, you can make changes and save files, and they will automatically update in the web browser. **Occasionally, the web browser may need a manual refresh if you're changes affect application state or changes outside of the React life-cycle.**

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

<a name="available-scripts"></a>

## Available Scripts

In the project directory, you can run:

<a name="npm-start"></a>

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

<a name="npm-run-build"></a>

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

<a name="npm-run-eslint"></a>

### `npm run eslint`

This command runs `eslint src/`. It prints eslint warnings and errors in the command line.

<a name="npm-run-eslint-fix"></a>

### `npm eslint:fix`

This command runs `eslint --fix src/`. It attempts to fix any eslint warnings/errors then prints the remaining warnings and errors in the command line.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

<a name="authors"></a>

## Authors

- **Joey Schroeder** - _Initial work_

See also the list of [contributors](https://github.com/joeyschroeder/code-the-way-project-starter/contributors) who participated in this project.

<a name="acknowledgments"></a>

## Acknowledgments

Hat tip to anyone who's code was used! 🤠
