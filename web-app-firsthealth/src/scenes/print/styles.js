const styles = theme => ({
    root: {
        display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    buttonContainer: {
        padding: theme.spacing(3),
        display: 'flex',
        justifyContent: 'flex-end'
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#64dd17',
      },
      loading: {
        color: '#b2dfdb',
      },

});

export default styles;
