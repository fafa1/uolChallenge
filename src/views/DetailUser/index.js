import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import "./style.scss";

const DetailUser = (props) => {
  const [data, setData] = useState([]);
  const query = useLocation();

  useEffect(() => {
    setData(query.state.data[0]);
    return () => setData([]);
  }, [query.state.data]);

  return (
    <>
      <Grid container item lg={12} className="container">
        <Grid item lg={12} container direction="row" justify="center">
          <Card style={{ width: "100%" }}>
            <CardActionArea component="div">
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {data.name}
                </Typography>
                <Typography className="container__typography" color="textSecondary" component="div">
                  <p>
                    <span>Biografia:</span> {data.bio}
                  </p>
                  <p>
                    <span>Empresa:</span> {data.company}
                  </p>
                  <p>
                    <span>Localização:</span> {data.location}
                  </p>
                  <p>
                    <span>Repositorio público:</span> {data.public_repos}
                  </p>
                  <p>
                    <span>Seguidores:</span> {data.followers}
                  </p>
                  <p>
                    <span>Link:</span> <a href={data.html_url}>Página Github</a>
                  </p>
                </Typography>
                <br />
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Button variant="contained" color="primary">
                    Voltar
                  </Button>
                </Link>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default DetailUser;
