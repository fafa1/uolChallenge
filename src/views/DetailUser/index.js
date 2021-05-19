import React, { useEffect, useState } from "react";
import { Route, useParams, useLocation } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import "./style.scss";

const DetailUser = (props) => {
  const [data, setData] = useState([]);
  const dat = [];
  const query = useLocation();
  // query.state.data.forEach((element) => {
  //   console.log("element", element);
  // });

  useEffect(() => {
    setData(query.state.data);
  }, []);
  return (
    <>
      <Grid container lg={12} className="container">
        <Grid item lg={12} container direction="row" justify="center">
          <Card style={{ width: "100%" }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {query.state.data[0].name}
                </Typography>
                <Typography
                  className="container__typography"
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  <p>
                    <span>Biografia:</span> {query.state.data[0].bio}
                  </p>
                  <p>
                    <span>Empresa:</span> {query.state.data[0].company}
                  </p>
                  <p>
                    <span>Localização:</span> {query.state.data[0].location}
                  </p>
                  <p>
                    <span>Repositorio público:</span> {query.state.data[0].public_repos}
                  </p>
                  <p>
                    <span>Seguidores:</span> {query.state.data[0].followers}
                  </p>
                  <p>
                    <span>Link:</span> <a href={query.state.data[0].html_url}>Página Github</a>
                  </p>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default DetailUser;
