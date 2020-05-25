import Page from "./Page";
import React from "react";
import {createMuiTheme, ThemeProvider} from "@material-ui/core";
import {green, purple} from "@material-ui/core/colors";
import SingleLineGridList from "./GridList";
import Typography from "@material-ui/core/Typography";
import Button from "app_02/Button";


const theme = createMuiTheme({
    palette: {
        primary: green,
        secondary: purple,
    },
});

const App = () => (
    <ThemeProvider theme={theme}>
        <Page title="Application 1">
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet neque at justo posuere, malesuada tristique nisl ultrices. Aenean maximus justo a velit vulputate, iaculis euismod dolor feugiat. Nam venenatis congue orci, eget placerat lacus tincidunt eu. Nulla facilisi. Sed euismod sapien in nisl pulvinar efficitur. Morbi id nibh in massa finibus auctor eget nec tellus. Duis at sagittis nisi. Nullam convallis posuere nibh, pellentesque malesuada dui blandit sed. Nulla pellentesque consectetur eros id feugiat.
                In id vestibulum augue, nec porta erat. Duis feugiat est nec fringilla finibus. Mauris sed enim bibendum, pharetra ligula eget, vehicula dui. Aliquam euismod lacinia orci at rutrum. Pellentesque tellus libero, eleifend eu interdum eget, vehicula ac eros. Nulla luctus dignissim nulla sit amet aliquet. Pellentesque eros odio, maximus vitae finibus ac, euismod id tortor. Aliquam euismod fringilla orci, finibus aliquam erat aliquet quis. Vivamus consectetur arcu ut justo condimentum cursus. Nulla aliquet neque ac gravida vehicula. Duis molestie odio sed ex vehicula interdum. Aliquam quis leo volutpat justo vehicula mollis.
            </Typography>
            <Button bgColor='green'>Read more...</Button>
            <SingleLineGridList />
        </Page>
    </ThemeProvider>
);

export default App;
