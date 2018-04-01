import React from "react";
import { Form } from "semantic-ui-react";
const DownloadForm = props => (
  <Form size="massive" key="massive">
    <Form.Group grouped>
      {props.data.map(item => (
        <Form.Checkbox
          key={item.name}
          label={item.name}
          name={item.identifier}
          value={item.value}
          onChange={props.handler(item.identifier)}
          defaultChecked
          style={{ fontSize: "1.2em", margin: "0.5em" }}
        />
      ))}
    </Form.Group>
  </Form>
);

export default DownloadForm;
