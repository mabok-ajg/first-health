const styles = theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        background: '#b2dfdb'//'linear-gradient(to right, #64dd17, #76ff03,#f1f8e9, #76ff03, #f1f8e9, #76ff03, #ccff90 )',
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    titleBar: {
        color: 'white',
        fontVariant: 'small-caps',
        fontSize: '30px',
        

    }
});

export default styles;
