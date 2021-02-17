import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Typography,
  Button,
  TextField,
  CircularProgress,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import Page from "../../component/Page";
import styles from "./styles.js";
import GetAppIcon from "@material-ui/icons/GetApp";
import Backdrop from "@material-ui/core/Backdrop";
import { save, findById } from "../../actions/customers";
import { connect } from "react-redux";

class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        nama: null,
        alamat: null,
        umur: null,
        no_hp: null,
        suhu: null,
        jenis_kelamin: null,
        jenis_sample: null,
      },
      error: false,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { saveData, saveError, data, error, history } = this.props;
    
    if (prevProps.data !== data) {
      this.setState({ form: data });
    } else if (error && prevProps.saveError !== saveError) {
      this.setState({ error: saveError });
    } else if (prevProps.error !== error) {
      this.setState({ error: error });
    } else if (saveData && prevProps.saveData !== saveData) {
      history.goBack();
    }
  }

  onChange = (event) => {
    const { name, value } = event.target;
    const { form } = this.state;
    this.setState({ form: { ...form, [name]: value } });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.save(this.state.form);
  };

  render() {
    const { classes, loading, saveError } = this.props;
    const { form, error } = this.state;
    const errorData = saveError ?.response || {};
    console.log(saveError);


    return (
      <Page error={error}>
        {!loading ? (
          <form noValidate autoComplete="off" onSubmit={this.onSubmit}>
            {form.id && (
              <div className={classes.formField}>
                <TextField
                  id="id"
                  name="id"
                  label="Id"
                  value={form.id}
                  fullWidth
                  InputProps={{ readOnly: true }}
                />
              </div>
            )}
            <Card className={classes.Card}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  variant="h5"
                  component="h3"
                >
                  Register Form
                </Typography>
              </CardContent>
              <div className={classes.formField}>
                <TextField
                  id="nama"
                  name="nama"
                  label="Nama"
                  type="text"
                  error = {errorData.data}
                  value={form.nama}
                  helperText={errorData.data ? ("Nama tidak boleh kosong") : null}
                  onChange={this.onChange}
                  fullWidth
                />
              </div>
              <div className={classes.formAddress}>
                <TextField
                  id="alamat"
                  name="alamat"
                  label="Alamat"
                  type="text"
                  error ={errorData.data}
                  value={form.alamat}
                  helperText= {errorData.data ? ('Almata tidak boleh kosong') : null}
                  onChange={this.onChange}
                  fullWidth
                />
              </div>
              <div className={classes.formField}>
                <TextField
                  id="umur"
                  name="umur"
                  label="Umur"
                  type="number"
                  error={errorData.data}
                  value={form.umur}
                  helperText={errorData.data ? ("Umur tidak boleh kosong") : null}
                  onChange={this.onChange}
                />

                <TextField
                  id="no_hp"
                  name="no_hp"
                  label="No.Hp"
                  type="text"
                  error={errorData.data}
                  value={form.no_hp}
                  helperText={errorData.data ? ("No Hp tidak boleh kosong") : null}
                  onChange={this.onChange}
                  className={classes.formHandphone}
                />

                <TextField
                  id="jenis_sample"
                  name="jenis_sample"
                  label="Jenis Sample"
                  type="text"
                  error={errorData.data}
                  value={form.jenis_sample}
                  helperText={errorData.data ? ("Jenis sample tidak boleh kosong") : null}
                  onChange={this.onChange}
                  className={classes.formSample}
                />
              </div>
              <div className={classes.formField}>
                <FormControl className={classes.formControl}>
                  <InputLabel id="jenis_kelamin">Jenis Kelamin</InputLabel>
                  <Select
                    //labelId="jenis_kelamin"
                    id="jenis_kelamin"
                    name="jenis_kelamin"
                    value={form.jenis_kelamin}
                    onChange={this.onChange}
                    error={errorData.data}
                    helperText={
                      errorData.data 
                        ? ("Jenis Kelamin tidak boleh kosong")
                        : null
                    }
                  >
                    <MenuItem value={"Laki-laki"}>Laki-laki</MenuItem>
                    <MenuItem value={"Perempuan"}>Perempuan</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  id="suhu"
                  name="suhu"
                  label="Suhu"
                  type="number"
                  error={errorData.data}
                  value={form.suhu}
                  helperText={errorData.data ? ("Suhu tidak boleh kosong") : null}
                  onChange={this.onChange}
                  className={classes.formSuhu}
                />
              </div>
            </Card>

            <div>
              <Button
                className={classes.formButton}
                variant="contained"
                color="primary"
                type="submit"
                startIcon={<GetAppIcon />}
                disabled={loading}
              >
                Save
              </Button>
            </div>
          </form>
        ) : (
          <Backdrop
            className={classes.backdrop}
            open={true}
            onSubmit={this.onSubmit}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        )}
      </Page>
    );
  }
}

const mapStateToProps = (state) => ({
  saveData: state.saveCust.data,
  saveError: state.saveCust.error,
  data: state.findCustById.data,
  loading: state.findCustById.loading || state.saveCust.loading,
  error: state.findCustById.error,
});

const mapDispatchToProps = {
  save,
  findById,
};

export default withStyles(styles, { withTheme: true })(
  connect(mapStateToProps, mapDispatchToProps)(RegisterPage)
);
