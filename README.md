# react-ts-eslint-prettier-stylint-webpack-boilerplate


To set up the pre-commit hook, create a script in package.json:

```bash
"husky-install": "husky install"
```

And run it with:

```bash
npm run husky-install
```
Then create your hook with the following command:

```bash
npx husky add .husky/pre-commit "npm run lint-staged"
```
The following file will be automatically generated in the .husky folder at the root of the project:

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"
npm run lint-staged
```
