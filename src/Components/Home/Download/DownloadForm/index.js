import React from "react";
import { Form } from "semantic-ui-react";
const DownloadForm = props => (
  <Form>
    <Form.Group grouped>
      {props.data.map(item => (
        <Form.Checkbox
          style={{ fontSize: "1.3vw" }}
          key={item.name}
          label={item.name}
          name={item.identifier}
          value={item.value}
          onChange={props.handler(item.identifier)}
          defaultChecked
        />
      ))}
    </Form.Group>
  </Form>
);

export default DownloadForm;
