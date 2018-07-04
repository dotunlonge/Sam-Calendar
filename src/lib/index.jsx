import React, { Component } from "react";
import InfiniteCalendar, {
  Calendar,
  withMultipleDates
} from "react-infinite-calendar";
import "react-infinite-calendar/styles.css";
import moment from "moment";
import "./style.css";
import Event from "./event.jsx";

const MultipleDatesCalendar = withMultipleDates(Calendar);

class MySuperCoolComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEventsView: false,
      defaultSelected: this.props.events.map(e => {
        return new Date(e.date);
      }),
      selected: {
        date: "",
        events: []
      }
    };
  }

  format(d) {
    return moment(d, "YYYY-MM-DD");
  }

  timeFormat(d) {
    return moment(d, "HH:mm:ss");
  }

  isSame(a, b) {
    return moment(this.format(a)).isSame(this.format(b));
  }

  determineColor = (date, events) => {
    //detect how many events occur on a particular date
    let count = events.filter(e => {
      return this.isSame(e.date, date);
    }).length;

    // detect if all the events on the particular date are toggled true
    let areToggledTrue = events.filter(e => {
      if (this.isSame(e.date, date)) {
        return e.toggled === true;
      }
    }).length;

    //detect if there is a mix of true and false states
    let areToggledFalse = events.filter(e => {
      if (this.isSame(e.date, date)) {
        return e.toggled === false;
      }
    }).length;

    //determine color to return
    if (areToggledTrue === count) {
      return "#e3385a";
    } else if (areToggledFalse > 0 && areToggledTrue > 0) {
      return "linear-gradient( 90deg, #e3385a, #e3385a 50%, #ffffff00 0%, #ffffff00 0%, #559fff 50% )";
    } else {
      return "#559fff";
    }
  };

  doNothing = (date, selected) => {
    return selected;
  };

  handleSelect = date => {
    this.setState({
      showEventsView: true,
      selected: {
        date: moment(date).format("YYYY-MM-DD"),
        events: this.props.events
          .filter(e => {
            return this.isSame(e.date, date);
          })
          .map((e, i) => {
            return {
              raw: e,
              id: i,
              toggled: e.toggled,
              title: e.title,
              time: moment(e.date).format("HH:mm:ss"),
              description: e.description
            };
          })
      }
    });
  };

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setState({
        defaultSelected: nextProps.events.map(e => {
          return new Date(e.date);
        })
      });
    }
  }
  render() {
    const { determineColor, doNothing, handleSelect } = this,
      { events, eventToggled, height, width } = this.props,
      { selected, defaultSelected, showEventsView } = this.state;

    return [
      <div key={1} style={{ float: "left" }}>
        <InfiniteCalendar
          width={width}
          height={height}
          Component={MultipleDatesCalendar}
          onSelect={handleSelect}
          interpolateSelection={doNothing}
          selected={defaultSelected}
          theme={{
            selectionColor: date => {
              return determineColor(date, events);
            }
          }}
        />
      </div>,
      <div
        key={2}
        style={{
          marginTop: height / 2,
          float: "left",
          width: "55%",
          minWidth: width
        }}
      >
        {showEventsView === true && (
          <Event
            height={height}
            selected={selected}
            width={width}
            eventToggled={eventToggled}
          />
        )}
      </div>
    ];
  }
}

export default MySuperCoolComponent;
