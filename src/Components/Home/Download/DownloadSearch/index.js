import React, { Component } from "react";
import { Search } from "semantic-ui-react";
import axios from "axios";
export default class DownloadSearch extends Component {
  state = {
    isLoading: false
  };
  onClickSearch = async () => {};
  render() {
    return <Search fluid />;
  }
}
