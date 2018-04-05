import React, { Component } from "react";
import { Search } from "semantic-ui-react";
import axios from "axios";
export default class DownloadSearch extends Component {
  state = {
    isLoading: false
  };
  handleResultSelect = (e, { result }) =>
    this.setState({ value: result.title });

  onClickSearch = async () => {};
  render() {
    return <Search size="massive" fluid />;
  }
}
