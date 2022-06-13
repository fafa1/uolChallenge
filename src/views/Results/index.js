import React, { useCallback, useRef, useState } from "react";
import Search from "../../components/Search";
import CardBox from "../../components/Card";
import axios from "axios";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import swal from "sweetalert";

const Results = () => {
  const ref = useRef("");
  const [login, setLogin] = useState("");
  const [dataRepos, setDataRespos] = useState([]);

  const onSubmitSearch = useCallback(async () => {
    try {
      const name = ref.current.value;
      if (name) {
        const result = (await axios.get(`https://api.github.com/users/${name}`))?.data;
        setDataRespos([result]);
        console.log(result);
        setLogin(result.login);
      } else {
        setDataRespos([]);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  const getReposUser = async () => {
    try {
      if (login) {
        const result = await axios.get(`https://api.github.com/users/${login}/repos`);
        if (result.status === 200) {
          setDataRespos(result.data);
          setLogin("");
        }
      }
    } catch (error) {
      swal("Error!", "Error na operação", "error", {
        button: "OK",
      });
      console.error(error);
    }
  };

  return (
    <>
      <Search ref={ref} handleSearch={onSubmitSearch} />
      <br />
      <Grid container item lg={12}>
        <Grid item lg={12} container direction="row" justify="center">
          <div style={{ display: "flex", marginBottom: 20 }}>
            <Button
              onClick={getReposUser}
              style={{ marginRight: 5 }}
              variant="contained"
              color="primary"
            >
              Repos
            </Button>
            {/* <Button variant="contained" color="primary">
              Starred
            </Button> */}
          </div>
        </Grid>
      </Grid>

      <CardBox data={dataRepos} />
    </>
  );
};

export default Results;
