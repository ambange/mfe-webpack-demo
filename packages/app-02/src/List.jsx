import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function ItemsList({data}) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {data.map((item) =>
        <React.Fragment key={item.id} >
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={item.title} src={item.img} />
          </ListItemAvatar>
          <ListItemText
            primary={item.title}
            secondary={
              <React.Fragment>
                {item.content.slice(0, 50) + '...'}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        </React.Fragment>
      )}
    </List>
  );
}
