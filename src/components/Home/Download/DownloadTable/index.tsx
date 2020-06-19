import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import { Button, Grid, Image } from "semantic-ui-react";
import DownloadForm from "../DownloadForm";
import { DataType } from "../../../../data";

interface DownloadTableProps {
  frameworkLogo: string;
  frameworkName: "react" | "angular" | "vue";
  downloadHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  changeHandler: (
    identifier: string
  ) => (event: React.FormEvent<HTMLInputElement>) => void;
  data: DataType;
}

const DownloadTable = (props: DownloadTableProps) => {
  const {
    frameworkLogo,
    frameworkName,
    downloadHandler,
    changeHandler,
    data,
  } = props;
  return (
    <ScrollableAnchor id={"selection"}>
      <div>
        <Grid stackable>
          <Grid.Row centered>
            <Image src={frameworkLogo} size="medium" />
          </Grid.Row>
          <Grid.Row columns={16} textAlign="left">
            <Grid.Column width={2} />
            <Grid.Column width={3}>
              <DownloadForm data={data.common} handler={changeHandler} />
            </Grid.Column>
            <Grid.Column width={3}>
              <DownloadForm data={data.cask} handler={changeHandler} />
            </Grid.Column>
            <Grid.Column width={3}>
              <DownloadForm
                data={data[frameworkName]}
                handler={changeHandler}
              />
              <DownloadForm data={data.npm} handler={changeHandler} />
            </Grid.Column>
            <Grid.Column width={3}>
              <DownloadForm data={data.vs_extension} handler={changeHandler} />
            </Grid.Column>
            <Grid.Column width={2} />
          </Grid.Row>
          <Grid.Row centered columns={5}>
            <Button
              primary
              size="massive"
              style={{ margin: "1em" }}
              onClick={downloadHandler}
            >
              Download
            </Button>
          </Grid.Row>
        </Grid>
      </div>
    </ScrollableAnchor>
  );
};
export default DownloadTable;
