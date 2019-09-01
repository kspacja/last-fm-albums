# last-fm-albums

## Cookbook

### Webpack config in es6
 1. Install:
   * `@babel/core`,
   * `@babel/register` (compiles *.babel.[ext] in fly)
   * `@babel/preset-env` (basic presets -- it could be others)
 2. Rename your webpack config file to format  `foo.babel.js`
 3. Create `.babelrc` file with basic config -- fill presets with `preset-env`

### Config devServer -- hints (they are not pionnier or sth):
 * rembember to put index.html (it will start from it) file to destination folder,
   otherwise devServer will deliver page with list of files. You can do it by:
    - `HtmlWebpackPlugin`
    - manually

### Hot Module Replacement -- hints:
 * one flag in devServer config: `hot`
 * rembember that you have to manually implement if it is custom made replace
 * in most of case a loader (ex. `style-loader`) should handle that
 * so if sth is not replacing, it is most probably your fault xD

### Linting and formatting:
 #### Most important diffrance:
 * `prettier` -- to FORMATTING code
 * `eslint` -- to AVOID BUGS and BAD PRACTIES

 #### Most imporant steps:
 1. Install:
   * `eslint`
   * `eslint-config-prettier`
   * `eslint-plugin-prettier`
   * `prettier` (exact version)
 2. Create eslint (most basic) config:
```json
  "env": { // enviroment config to have global variables to use
    "browser": true,
    "node": true
  },
  "parserOptions": {
    "ecmaVersion": 6, // self-explained name
    "sourceType": "module" // import, export handling
  },
  "extends": ["eslint:recommended", "plugin:prettier/recommended"]
            // eslint:recommend as example, remember to put plugin:prettier/recommended as last element
```
  Putting `plugin:prettier/recommended` to `extends` gives two things:
   - `prettier` would be run at the moment of running `eslint`
   - disabling eventual conflitcs `eslint` between `prettier`

## General hints:
### Git:
 * use `git push --force-with-lease` instead of `--force` in case of changing name of commit after first push
