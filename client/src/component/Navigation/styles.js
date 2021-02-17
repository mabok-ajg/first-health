const drawerWidth = 200;

const styles = (theme) => ({
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background: "",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: 200,
      flexShrink: 0,
    },
  },
});

export default styles;
