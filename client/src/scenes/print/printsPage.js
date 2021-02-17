import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Page from "../../component/Page";
import styles from "./styles.js";
import { deleteById, findAll } from "../../actions/customers";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import MUIDataTable from "mui-datatables";
import { CircularProgress } from "@material-ui/core";
import { Cached as ReloadIcon } from "@material-ui/icons";
import Backdrop from "@material-ui/core/Backdrop";

class PrintsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: null,
    };
  }

  componentDidMount() {
    this.reload();
  }

  reload() {
    this.props.findAll();
  }

  componentDidUpdate(prevProps, prevState) {
    const { deleteData, deleteError, data, error } = this.props;
    
    if (prevProps.data !== data) {
      this.setState({ data: data});
      
    } else if (prevProps.deleteData !== deleteData){
      this.reload();
    } else if (deleteError && prevProps.deleteError != deleteError) {
      this.setState({ error: deleteError });
    } else if (error && prevProps.error != error) {
      this.setState({ error: error });
    }
  }

  onReload = () => {
    this.reload();
  };

  onRowsDelete = (rowsDeleted) => {
    const { data } = this.props;
    const e = data[rowsDeleted.data[0].index];
    console.log(e.id);
    this.props.deleteById(e.id);

    return false;
  };

  onRowClick = (rowData) => {
    this.props.history.push(`/customers/${rowData[0]}`);
  };

  onChangePage = (currentPage) => {
    const { params } = this.state;
    this.setState({ params: { ...params, page: currentPage } });
  };

  onChangeRowsPerPage = (numberOfRows) => {
    const { params } = this.state;
    this.setState({ params: { ...params, size: numberOfRows } });
  };

  onSearchChange = (searchText) => {
    const { params } = this.state;
    this.setState({ params: { ...params, search: { name: searchText } } });
  };

  onColumnSortChange = (changedColumn, direction) => {
    const { params } = this.state;
    const sort = direction === "descending" ? "desc" : "asc";
    this.setState({ params: { ...params, sort } });
  };

  render() {
    const { classes, loading } = this.props;
    const { data, error } = this.state;
    

    const columns = [
      {
        name: "id",
        label: "ID",
      },
      {
        name: "nama",
        label: "Nama",
      },
      {
        name: "umur",
        label: "Umur",
      },
      {
        name: "jenis_kelamin",
        label: "Jenis Kelamin",
      },
      {
        name: "alamat",
        label: "Alamat",
      },
      {
        name: "no_hp",
        label: "No. Hp",
      },
      {
        name: "suhu",
        label: "Suhu",
      },
      {
        name: "jenis_sample",
        label: "Jenis Sample",
      },
    ];
    const options = {
      serverSide: true,
      selecttableRows: "multiple",
      filter: false,
      onRowClick: this.onRowClick,
      onRowsDelete: this.onRowsDelete,
      onChangePage: this.onChangePage,
      onChangeRowsPerPage: this.onChangeRowsPerPage,
      onSearchChange: this.onSearchChange,
      onColumnSortChange: this.onColumnSortChange,

      textLabels: {
        body: {
          noMatch: loading ? (
            <Backdrop
              className={classes.backdrop}
              open={true}
              //onClick={loading}
            >
              <CircularProgress color="inherit" thickness={5} className={classes.loading}/>
            </Backdrop>
          ) : (
            "Maaf, Tidak ada data ditemukan"
          ),
        },
      },
    };
    return (
      <Page error={error}>
        <MUIDataTable
          title={"Customer List"}
          data={!loading ? data : []}
          columns={columns}
          options={options}
        />
        <div className={classes.buttonContainer}>
          <Button
            variant="contained"
            color="primary"
            onClick={this.onReload}
            startIcon={<ReloadIcon />}
            disabled={loading}
          >
            Reload
          </Button>
        </div>
      </Page>
    );
  }
}

const mapStateToProps = (state) => ({
  deleteData: state.deleteCustById.data,
  deleteError: state.deleteCustById.error,
  data: state.findCusts.data,
  loading: state.findCusts.loading || state.deleteCustById.loading,
  error: state.findCusts.error || state.deleteCustById.error,
});

const mapDispatchToProps = {
  deleteById,
  findAll,
};

export default withStyles(styles, { withTheme: true })(
  connect(mapStateToProps, mapDispatchToProps)(PrintsPage)
);
