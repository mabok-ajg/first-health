const styles = theme => ({
    formField: {
        padding: theme.spacing(2.5),
    },
    formButton: {
        float : 'left'
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#64dd17',
    },
    formAge: {
        margin: theme.spacing(1)
    },
    formHandphone: {
        marginLeft: theme.spacing(5)
    },
    formAddress: {
        padding: theme.spacing(2.5),
    },
    formSuhu: {
        marginLeft: theme.spacing(5)
    },
    
    Card: {
        marginBottom: 15,
        paddingBottom: '3.5%'
        //maxWidth: 700
    },
    formControl: {
        width: 200
    },
    formSample: {
        marginLeft: theme.spacing(5)
    }

});

export default styles;
