# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### add repository to project

git init

git remote add origin git@github.com:minhtiepaa1/header_antd_custom_ui.git // add link repo

git remote -v // check

#### fix: There isn’t anything to compare. main and master are entirely different commit histories.

git checkout master

// main is branch origin, master is your branch

git branch main master -f

git checkout main

git push origin main -f

#### fix error pull when just add new repository: fatal: refusing to merge unrelated histories

git pull origin master --allow-unrelated-histories

#### fix not push to git when add new gmail in git config (create new sshKey)

cmd -> run command -> ssh-keygen and add to the git account

## check gmail at vs code

git config user.email

git config user.name

add new email to vs code: git config --global user.email "your_email@example.com"

## change or add new repository

change name remote: origin to old origin (git remote rename origin old-origin)

add more remote: git remote add origin git@github.com:quangvantiepp/sales_website_fe.git

check again: git remote -v

and push code to new repo, two repo need permission to access (git - repo - setting - collaborators ++ add people)

## custom snippets

// https://snippet-generator.app/?description=&tabtrigger=&snippet=&mode=vscode
