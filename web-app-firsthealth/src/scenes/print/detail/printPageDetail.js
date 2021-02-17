import React, { Component } from "react";
import {
  Button,
  TextField,
  CircularProgress,
  Card,
  CardContent,
  Typography,
  MenuItem,
  InputLabel,
  Select,
  FormControl,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Page from "../../../component/Page";
import { save, findById } from "../../../actions/customers";
import styles from "./styles.js";
import GetAppIcon from "@material-ui/icons/GetApp";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { connect } from "react-redux";
import Backdrop from "@material-ui/core/Backdrop";

class printPageDetail extends Component {
  constructor(props) {
    super(props);

    const { match } = this.props;

    this.state = {
      form: {
        id: match.params.id,
      },
      error: false,
    };
  }

  componentDidMount() {
    const { form } = this.state;
    if (form.id) {
      this.props.findById(form.id);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { saveData, saveError, data, error, history } = this.props;
    console.log(data);
    if (prevProps.data !== data) {
      this.setState({ form: data.cust });
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
    console.log(this.state.form);
  };

  render() {
    const { classes, loading, saveError } = this.props;
    const { form, error } = this.state;
    const errorData = saveError?.data || {};

    return (
      <Page error={error}>
        <Card className={classes.Card}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              variant="h5"
              component="h3"
            >
              Detail Form
            </Typography>
          </CardContent>
          {!loading ? (
            <form noValidate autoComplete="off" onSubmit={this.onSubmit}>
              {form.id && (
                <div className={classes.formId}>
                  <TextField
                    id="id"
                    name="id"
                    label="Id"
                    value={form.id}
                    InputProps={{ readOnly: true }}
                  />
                </div>
              )}
              <div className={classes.formField}>
                <TextField
                  id="nama"
                  name="nama"
                  label="Nama"
                  type="text"
                  error={errorData.name}
                  value={form.nama}
                  helperText={errorData.nama ? errorData.nama[0] : null}
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
                  error={errorData.alamat}
                  value={form.alamat}
                  helperText={errorData.alamat ? errorData.alamat[0] : null}
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
                  error={errorData.umur}
                  value={form.umur}
                  helperText={errorData.umur ? errorData.umur[0] : null}
                  onChange={this.onChange}
                />

                <TextField
                  id="no_hp"
                  name="no_hp"
                  label="No.Hp"
                  type="text"
                  error={errorData.no_hp}
                  value={form.no_hp}
                  helperText={errorData.no_hp ? errorData.no_hp[0] : null}
                  onChange={this.onChange.bind(this)}
                  className={classes.formHandphone}
                />

                <TextField
                  id="jenis_sample"
                  name="jenis_sample"
                  label="Jenis Sample"
                  type="text"
                  error={errorData.jenis_sample}
                  value={form.jenis_sample}
                  helperText={errorData.jenis_sample ? errorData.jenis_sample[0] : null}
                  onChange={this.onChange.bind(this)}
                  className={classes.formSample}
                />
              </div>
              <div className={classes.formField}>
                <FormControl className={classes.formControl}>
                  <InputLabel value={form.jenis_kelamin} id="jenis_kelamin">
                    Jenis Kelamin
                  </InputLabel>
                  <Select
                    labelId="jenis_kelamin"
                    id="jenis_kelamin"
                    name="jenis_kelamin"
                    value={form.jenis_kelamin}
                    onChange={this.onChange}
                    helperText={
                      errorData.jenis_kelamin
                        ? errorData.jenis_kelamin[0]
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
                  error={errorData.suhu}
                  value={form.suhu}
                  helperText={errorData.suhu ? errorData.suhu[0] : null}
                  onChange={this.onChange}
                  className={classes.formSuhu}
                />
              </div>
              <div className={classes.formField}></div>
            </form>
          ) : (
            <Backdrop
              className={classes.backdrop}
              open={true}
              onClick={loading}
            >
              <CircularProgress color="inherit" className={classes.loading} />
            </Backdrop>
          )}
        </Card>
        <Button
          className={classes.formButton}
          variant="contained"
          color="primary"
          type="submit"
          startIcon={<GetAppIcon />}
          disabled={loading}
          onClick={this.onSubmit}
        >
          Save
        </Button>
        {/* <Button className={classes.backButton} variant="contained" color="inherit" href="/items"
                startIcon={<ArrowBackIcon />}>
                Back
            </Button> */}
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
  connect(mapStateToProps, mapDispatchToProps)(printPageDetail)
);
