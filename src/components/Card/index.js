import React from "react";
import { Link, Route } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import "./style.scss";

const CardBox = ({ data }) => {
  return (
    <>
      <Grid container lg={12} className="container">
        {data.map((value, index) => {
          return (
            <Grid
              key={index}
              style={{ marginBottom: "20px", justifyContent: "center" }}
              container
              lg={3}
              md={3}
              sm={3}
            >
              <Card className="container__card">
                <CardActionArea>
                  {value.avatar_url && <img style={{ height: 390 }} src={value.avatar_url}></img>}
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {value.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {value.bio}
                      {value.description}
                      <br />
                      <a href={value.clone_url}>{value.clone_url}</a>
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    <Link to={{ pathname: `/detail/`, state: { data: data } }}>
                      <Button size="small" color="primary">
                        Detalhe
                      </Button>
                    </Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default CardBox;
