Demo - https://dotunlonge.github.io/Sam-Calendar/

# Usage
Install the script with 
`yarn add sam-calendar or
npm install sam-calendar
`

Example Initiationaliztion


	import React from "react";
	import { render } from "react-dom";	
	import MyComponent from "sam-calendar";
	
	class Demo extends React.Component {
	  constructor(props) {
	    super(props);
	    this.state = {
	      data: [
	        {
	          title: "rotten-firefox-54",
	          date: "2018-07-08T07:00:00.000Z",
	          toggled: false,
	          description:
	            "hot-fly-95 rude-ladybug-55 moody-skunk-73 smooth-turtle-61 popular-yak-26 cowardly-dodo-11 short-cheetah-60"
	        },
	        {
	          title: "angry-sheep-15",
	          date: "2018-07-23T07:00:00.000Z",
	          toggled: false,
	          description:
	            "chilly-husky-24 good-cougar-40 heavy-grasshopper-93 tough-bullfrog-63 quiet-treefrog-81 thin-cat-83 soft-dragon-51"
	        }
	      ]
	    };
	  }
	
	  handleToggle = event => {
	    this.setState(p => {
	      let index;
	
	      p.data.map((e, i) => {
	        if (e === event.raw) {
	          return (index = i);
	        }
	      });
	
	      p.data[index].toggled = !p.data[index].toggled;
	      event.toggled = !event.toggled;
	
	      return {
	        data: p.data
	      };
	    });
	  };
	
	  render() {
	    const { data } = this.state;
	
	    return (
	      <div>
	        <h1>Example Of Component</h1>
	        <MyComponent
	          events={data}
	          eventToggled={this.handleToggle}
	          height={400}
	          width={500}
	        />
	      </div>
	    );
	  }
	}
	
	render(<Demo />, document.getElementById("app"));



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
