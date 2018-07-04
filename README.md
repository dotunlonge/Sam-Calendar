Demo - https://dotunlonge.github.io/Sam-Calendar/

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
