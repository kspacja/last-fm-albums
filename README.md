# last-fm-albums

## Cookbook

### Webpack config in es6
 1. Install:
   * `@babel/core`,
   * `@babel/register` (compile *.babel.[ext] in fly)
   * `@babel/preset-env` (basic presets -- it could be others)
 2. Rename your webpack config file to format  `foo.babel.js`
 3. Create `.babelrc` file with basic config -- fill presets with `preset-env`

### Config devServer -- hints (they are not pionnier or sth):
 * rembember to put index.html (it will start from it) file to destination folder,
   otherwise devServer will deliver page with list of files. You can do it by:
    - HtmlWebpackPlugin
    - manually

### Hot Module Replacement -- hints:
 * one flag in devServer config: `hot`
 * rembember that you have to manually implement if is custom made replace
 * in most of case a loader (list style-loader) should handle that
 * so if sth not replacing it is most probably your fault xD
