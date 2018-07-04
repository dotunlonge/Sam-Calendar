import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";

import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";

import Paper from "@material-ui/core/Paper";

const actionsStyles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing.unit * 2.5
  }
});

class TablePaginationActions extends React.Component {
  handleFirstPageButtonClick = event => {
    this.props.onChangePage(event, 0);
  };

  handleBackButtonClick = event => {
    this.props.onChangePage(event, this.props.page - 1);
  };

  handleNextButtonClick = event => {
    this.props.onChangePage(event, this.props.page + 1);
  };

  handleLastPageButtonClick = event => {
    this.props.onChangePage(
      event,
      Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1)
    );
  };

  render() {
    const { classes, count, page, rowsPerPage, theme } = this.props;

    return (
      <div className={classes.root}>
        <IconButton
          onClick={this.handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="First Page"
        >
          {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={this.handleBackButtonClick}
          disabled={page === 0}
          aria-label="Previous Page"
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
        </IconButton>
        <IconButton
          onClick={this.handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Next Page"
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </IconButton>
        <IconButton
          onClick={this.handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Last Page"
        >
          {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }
}

TablePaginationActions.propTypes = {
  classes: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  theme: PropTypes.object.isRequired
};

const TablePaginationActionsWrapped = withStyles(actionsStyles, {
  withTheme: true
})(TablePaginationActions);

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3
  },
  table: {
    minWidth: 500
  },
  tableWrapper: {
    overflowX: "auto"
  }
});

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

class CustomPaginationActionsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.selected,
      page: 0,
      rowsPerPage: 5
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setState({
        data: nextProps.selected
      });
    }
  }

  render() {
    const { classes, height, eventToggled, width } = this.props,
      { data, rowsPerPage, page } = this.state,
      emptyRows =
        rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage),
      list = {
        listStyleType: "none",
        padding: ".3em",
        fontSize: "1em",
        minHeight: "4em",
        padding: "1em 0 0",
        position: "relative",
        textAlign: "center"
      };

    return (
      <Paper
        className={classes.root}
        id="event-wrapper"
        style={{
          marginTop: height / 3.5,
          float: "left",
          margin: 0,
          width: "55%",
          minWidth: width,
          borderRadius: 0,
          boxShadow: "none"
        }}
      >
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <CustomTableCell>Date</CustomTableCell>
                <CustomTableCell numeric>Events</CustomTableCell>
                <CustomTableCell numeric>Time Of Event</CustomTableCell>
                <CustomTableCell numeric>Event Description</CustomTableCell>
                <CustomTableCell numeric />
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={data.id}>
                <TableCell component="th" scope="row">
                  {data.date}
                </TableCell>
                <TableCell numeric>
                  {data.events.map((e, i) => {
                    return (
                      <li style={list} key={i}>
                        {e.title}
                      </li>
                    );
                  })}
                </TableCell>

                <TableCell numeric>
                  {data.events.map((e, i) => {
                    return (
                      <li style={list} key={i}>
                        {e.time}
                      </li>
                    );
                  })}
                </TableCell>
                <TableCell numeric>
                  {data.events.map((e, i) => {
                    return (
                      <li style={list} key={i}>
                        <p
                          style={{
                            display: "inline-block",
                            paddingBottom: "1em",
                            margin: 0,
                            width: "70%",
                            textAlign: "left"
                          }}
                        >
                          {e.description}
                        </p>
                        <button
                          key={i}
                          onClick={() => eventToggled(e)}
                          className="event-button"
                          style={{
                            borderRadius: "3em",
                            height: "3em",
                            width: "3em",
                            margin: "0 1em",
                            cursor: "pointer",
                            background:
                              e.toggled === true ? "#e3385a" : "#559fff",
                            color: "white",
                            border: 0,
                            position: "absolute"
                          }}
                        >
                          {e.toggled === true ? "on" : "off"}
                        </button>
                      </li>
                    );
                  })}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </Paper>
    );
  }
}

CustomPaginationActionsTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomPaginationActionsTable);
