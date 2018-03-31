import React from "react";
import { Form } from "semantic-ui-react";
const DownloadForm = props => (
  <Form>
    <Form.Group grouped>
      {props.data.map(item => (
        <Form.Checkbox
        
          key={item.name}
          label={item.name}
          name={props.name}
          value={item.value}
          defaultChecked
        />
      ))}
    </Form.Group>
  </Form>
);

export default DownloadForm;
