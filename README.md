# demo project for webpack

## tutorial
- https://www.valentinog.com/blog/webpack-tutorial/

## tutorial - switch from gulp
- https://www.valentinog.com/blog/from-gulp-to-webpack-4-tutorial/


## initialize project with basic components
- npm init -y
- npm i webpack --save-dev
- npm i webpack-cli --save-dev
- npm i @babel/core babel-loader @babel/preset-env --save-dev

## change script

"scripts": {
  "build": "webpack"
}

## run project
npm run build

## default entry point
webpack will take /src/index.js as default entry point

## override entry point and output file in package.json
"scripts": {
  "dev": "webpack --mode development ./foo/src/js/index.js --output ./foo/main.js",
  "build": "webpack --mode production ./foo/src/js/index.js --output ./foo/main.js"
}

## babelrc
create configuration file .babelrc

{
    "presets": [
        "@babel/preset-env"
    ]
}

## define webpack configuration file - webpack.config.js

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};

## use loader without using configuration, need to use --module-bind parameter

"scripts": {
    "dev": "webpack --mode development --module-bind js=babel-loader",
    "build": "webpack --mode production --module-bind js=babel-loader"
  }


## install react

npm i react react-dom --save-dev
npm i @babel/preset-react --save-dev

## install html related

npm i html-webpack-plugin html-loader --save-dev
