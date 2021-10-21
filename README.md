# react-ts-eslint-prettier-stylint-webpack-boilerplate


To set up the pre-commit hook, create a script in package.json:

"husky-install": "husky install"
And run it with:

npm run husky-install
Then create your hook with the following command:

npx husky add .husky/pre-commit "npm run lint-staged"
The following file will be automatically generated in the .husky folder at the root of the project:

#!/bin/sh
. "$(dirname "$0")/_/husky.sh"
npm run lint-staged
