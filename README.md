# Modified Infinite Calendar

This is a forked npm version of the infinite calendar from https://github.com/clauderic/react-infinite-calendar,
It's been modified to have an event view that displays event data for a particular day from a datasource on clicking a date on the calendar.

## How it is structured

The source code has two separate parts – the library and the documentation (demo) page. Both are written in ES6 and JSX, and therefore have to be transpiled by Babel but in different ways.

## How was it modified

A forked version of the actual infinite calendar in the form of an NPM component had a single line of code modified to allow for a specification to occur . i.e. having a vertically color split date in terms of the calendar.

the specific modification can be seen here:
https://github.com/DotunLonge/react-infinite-calendar/commit/6dd888abd3d0b1102fd2038f0038ea6ade6b46d7 and
https://github.com/DotunLonge/react-infinite-calendar/commit/fcc9dcbcbe77eee630bdd1b51c42c6b8784a7d18

after this, i commenced building my own npm module utilizing my forked version of the react-inifinite-calendar as a child component.
this is done by adding it to my package.json file.

### Component library transpilation

The library source code, which is located in `src/lib`, is transpiled with Babel but is _not_ bundled with Webpack. Bundling is completely unnecessary, since the developer who will in the end use your library for their application will bundle their entire codebase, which includes your library. More importantly, if your library has any dependencies, bundling them together with your code would be a disaster since it could cause duplication and therefore larger final bundle size. The components still have to be transpiled since many developers have Webpack configured to not transpile their node_modules folder. Some may not be using JSX or ES6 at all, and would therefore be unable to transpile your component.

### Demo app transpilation

The demo app source code lives inside the `src/docs` folder. It is transpiled, bundled and minified by Webpack and Babel into the `docs` folder in the root directory (by running `npm run docs:prod`). This is a completely normal react app with minimal configuration that imports the component library. It has two purposes: 1. To have a way of inspecting your components while you develop the library, and 2. As a demo to showcase to people who try to figure out what your library does.

The reason that the folder doesn't have a logical name like `demo` is that GitHub Pages requires it to be called `docs` for some reason...

### Separate CSS file

Your other option is to create a css file inside the `src/lib` folder. It will be automatically copied to the generated `lib` folder. Then you have to ask your users to import it into their app with something like `import "../node_modules/[NAME_OF_YOUR_LIBRARY]/lib/styles.css";` or to manually copy it. Your css class names might be global for the developers entire app so make the class names are unique.

Keep in mind that it is a bad idea to import the css directly into your component file. This requires the webpack style-loader to work, so any user of your package that does not use this loader will be screwed.
