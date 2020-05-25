import {createMuiTheme, ThemeProvider, Typography} from "@material-ui/core";

import Dialog from "./Dialog";
import React from "react";
import {purple} from "@material-ui/core/colors";
import Button from "./Button";
import ItemsList from "./List";
import {tileData} from './images-config';
import Grid from "@material-ui/core/Grid";

const Page = React.lazy(() => import("app_01/Page"));

export const theme = createMuiTheme({
  palette: {primary: purple}
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={null}>
        <Page title="Application 2">
          <Grid container spacing={3}>
            <Grid item xs={4}>
          <ItemsList data={tileData} />
            </Grid>
            <Grid item xs={8}>
            <Typography variant="h6">{tileData[0].title}</Typography>
            <img width={150} src={tileData[0].img}/>
            <Typography paragraph> {tileData[0].content}</Typography>
            <Dialog buttonText='Learn More' content={tileData[0].content}/>
            <Button>Buy one here!</Button>
            </Grid>
          </Grid>
        </Page>
      </React.Suspense>
    </ThemeProvider>
  );
}

export default App;
