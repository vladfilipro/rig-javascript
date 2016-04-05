# rig-javascript
A rig containing javascript utilities

## How to use
1. Install rigs package: `npm install rigs`
2. Install rig-javascript: `npm install rig-javascript`

## Available tasks in rig-javascript
- `rig-javascript__browserify`: A task which uses [browserify](https://www.npmjs.com/package/browserify) to build your javascript code
  - properties:
    - `src`: String, refers to broserify's entry configuration
    - `dest`: String, refers to the output path
    - `debug`: Boolean, refers to browserify's debug property
    - `minify`: Boolean, determines if uglification for the code is enabled
    - `sourcemap`: Boolean, determines if sourcemap files will be created
    - `output`: String, refers to the output filename
    - `transform`: Array, add transformations to browserify

    ```
    {
        taskname: 'rig-javascript__browserify',
        dependency: [],
        src: './helper.js',
        output: 'app.js',
        sourcemap: true,
        dest: './scripts',
        debug: true,
        minify: false,
        transform: [ 'browserify-ngannotate' ]
    }
    ```

- `rig-javascript__jscs`: A task which uses [gulp-jscs](https://www.npmjs.com/package/gulp-jscs) to enforce code standards
  - properties:
    - `src`: String or Array, refers to the input file(s)

    ```
    {
        taskname: 'rig-javascript__jscs',
        src: './**/*.js'
    }
    ```

- `rig-javascript__jshint`: A task which uses [gulp-jshint](https://www.npmjs.com/package/gulp-jshint) to check the javascript code validity
  - properties:
    - `src`: String or Array, refers to the input file(s)

    ```
    {
        taskname: 'rig-javascript__jshint',
        src: './src/**/*.js'
    }
    ```

- `rig-javascript__install-rig`: A task which addds to your project `.jscsrc`, `.jshintignore`, `.jshintrc`, `.npmignore`
  - properties:
    - `src`: String or Array, refers to the destination path (usually `./`)

    ```
    {
        taskname: 'rig-javascript__install-rig',
        src: './'
    }
    ```
