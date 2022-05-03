import React, { useEffect, useContext } from "react";
import ProductCard from "components/Product";
import {
  ProductsStateContext,
  ProductsDispatchContext,
  getProducts
} from "contexts/products";
import { CommonStateContext } from "contexts/common";
import landing_image_re from "../../src/assets/img/body/section1/landing_image.png";
import sale_image from "../assets/img/body/section1/sale_image.png";
import shoes_image from "../assets/img/body/section1/shoes_image.png";
import third_image from "../assets/img/body/section1/third_image.png";
import filter from "../assets/img/body/section1/filter.png";
import grid from "../assets/img/body/section1/grid.png";
import nike_img from "../assets/img/body/section2/nike_img.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import loading from "../assets/img/body/section2/loading.png";
import navbar from "../assets/img/body/section1/navbar.png";
import mobile_img from "../assets/img/body/section1/mobile_img.png";
import mobile_pagination from "../assets/img/body/section1/mobile_pagination.png";

// card
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
const theme = createTheme();

theme.typography.body2 = {
  fontSize: "16px",
  fontWeight: 1000,
  fontStyle: "italic",
  paddingTop: "20px",
  paddingLeft: "10px"
};

const CardContentNoPadding = styled(CardContent)(
  `padding: 0;&:last-child {padding-bottom: 0;}`
);

const Home = () => {
  const { products, isLoading, isLoaded } = useContext(ProductsStateContext);
  const { searchKeyword } = useContext(CommonStateContext);
  const dispatch = useContext(ProductsDispatchContext);
  const productsList =
    products &&
    products.filter((product) => {
      return (
        product.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        !searchKeyword
      );
    });
  useEffect(() => {
    getProducts(dispatch);
  }, []);

  if (isLoading) {
    return (
      <div className="products-wrapper">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div>
      <div class="row">
        <img className="hat" src={landing_image_re} alt="landing_image" />
      </div>
      <div>
        <div class="row">
          <div class="column">
            <img className="hat" src={sale_image} alt="Snow" />
          </div>
          <div class="column">
            <img className="hat" src={shoes_image} alt="Forest" />
          </div>
        </div>
      </div>
      <div class="row">
        <img className="hat third_image" src={third_image} alt="third_image" />
      </div>
      <div class="row">
        <img
          className="hat third_mobile_image"
          src={mobile_img}
          alt="third_image"
        />
      </div>
      <div className="navbar">
        <ul>
          <li>
            <a href="#home">SHOP</a>
          </li>
          <li className="nab_about">
            <a href="#news">ABOUT US</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
      <hr className="line"></hr>
      <div>
        <div class="row">
          <img
            className="hat third_mobile_image"
            src={mobile_pagination}
            alt="third_image"
          />
        </div>
      </div>
      <div class="row">
        <div class="column">
          <img className="hat pagination" src={navbar} alt="nsvbar" />
        </div>
      </div>
      <div className="oneline">
        <div className="filterby">Filter By</div>
        <img className="filter" src={filter} />
        <img className="filter" src={grid} />
      </div>
      <div className="grid">
        <Grid container spacing={2}>
          <Grid item xs={1}></Grid>
          <Grid item xs={2.5}>
            <Card sx={{ maxWidth: 267, maxHeight: 409 }}>
              <CardMedia
                component="img"
                alt="nike_img"
                height="267"
                image={nike_img}
              />
              <div>
                <CardContentNoPadding
                  style={{ paddingLeft: "16px", paddingTop: "16px" }}
                >
                  <Typography gutterBottom variant="h7" component="div">
                    NIKE
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Sportswear Swoosh Men's Semi-Brushed Back Fleece Sweater S,
                    M, L, XL, 2XL
                  </Typography>
                </CardContentNoPadding>
              </div>
              <CardActions>
                <Grid container spacing={2}>
                  <Grid item xs={8}>
                    <ThemeProvider theme={theme}>
                      <Typography variant="body2">£47.99</Typography>
                    </ThemeProvider>
                  </Grid>
                  <Grid item xs={4}>
                    <Button size="small">
                      <Typography
                        variant="h4"
                        style={{
                          color: "black",
                          padding: 0,
                          margin: 0,
                          fontWeight: "100"
                        }}
                      >
                        +
                      </Typography>
                    </Button>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={2.5}>
            <Card sx={{ maxWidth: 267, maxHeight: 409 }}>
              <CardMedia
                component="img"
                alt="nike_img"
                height="267"
                image={nike_img}
              />
              <div>
                <CardContentNoPadding
                  style={{ paddingLeft: "16px", paddingTop: "16px" }}
                >
                  <Typography gutterBottom variant="h7" component="div">
                    NIKE
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Sportswear Swoosh Men's Semi-Brushed Back Fleece Sweater S,
                    M, L, XL, 2XL
                  </Typography>
                </CardContentNoPadding>
              </div>
              <CardActions>
                <Grid container spacing={2}>
                  <Grid item xs={8}>
                    <ThemeProvider theme={theme}>
                      <Typography variant="body2">£47.99</Typography>
                    </ThemeProvider>
                  </Grid>
                  <Grid item xs={4}>
                    <Button size="small">
                      <Typography
                        variant="h4"
                        style={{
                          color: "black",
                          padding: 0,
                          margin: 0,
                          fontWeight: "100"
                        }}
                      >
                        +
                      </Typography>
                    </Button>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={2.5}>
            <Card sx={{ maxWidth: 267, maxHeight: 409 }}>
              <CardMedia
                component="img"
                alt="nike_img"
                height="267"
                image={nike_img}
              />
              <div>
                <CardContentNoPadding
                  style={{ paddingLeft: "16px", paddingTop: "16px" }}
                >
                  <Typography gutterBottom variant="h7" component="div">
                    NIKE
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Sportswear Swoosh Men's Semi-Brushed Back Fleece Sweater S,
                    M, L, XL, 2XL
                  </Typography>
                </CardContentNoPadding>
              </div>
              <CardActions>
                <Grid container spacing={2}>
                  <Grid item xs={8}>
                    <ThemeProvider theme={theme}>
                      <Typography variant="body2">£47.99</Typography>
                    </ThemeProvider>
                  </Grid>
                  <Grid item xs={4}>
                    <Button size="small">
                      <Typography
                        variant="h4"
                        style={{
                          color: "black",
                          padding: 0,
                          margin: 0,
                          fontWeight: "100"
                        }}
                      >
                        +
                      </Typography>
                    </Button>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={2.5}>
            <Card sx={{ maxWidth: 267, maxHeight: 409 }}>
              <CardMedia
                component="img"
                alt="nike_img"
                height="267"
                image={nike_img}
              />
              <div>
                <CardContentNoPadding
                  style={{ paddingLeft: "16px", paddingTop: "16px" }}
                >
                  <Typography gutterBottom variant="h7" component="div">
                    NIKE
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Sportswear Swoosh Men's Semi-Brushed Back Fleece Sweater S,
                    M, L, XL, 2XL
                  </Typography>
                </CardContentNoPadding>
              </div>
              <CardActions>
                <Grid container spacing={2}>
                  <Grid item xs={8}>
                    <ThemeProvider theme={theme}>
                      <Typography variant="body2">£47.99</Typography>
                    </ThemeProvider>
                  </Grid>
                  <Grid item xs={4}>
                    <Button size="small">
                      <Typography
                        variant="h4"
                        style={{
                          color: "black",
                          padding: 0,
                          margin: 0,
                          fontWeight: "100"
                        }}
                      >
                        +
                      </Typography>
                    </Button>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </div>
      <div className="grid_phone">
        <Grid container spacing={2}>
          <Grid item xs={1}></Grid>
          <Grid item xs={5}>
            <Card sx={{ maxWidth: 267, maxHeight: 409 }}>
              <CardMedia
                component="img"
                alt="nike_img"
                height="267"
                image={nike_img}
              />
              <div>
                <CardContentNoPadding
                  style={{ paddingLeft: "16px", paddingTop: "16px" }}
                >
                  <Typography gutterBottom variant="h7" component="div">
                    NIKE
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Sportswear Swoosh Men's Semi-Brushed Back Fleece Sweater S,
                    M, L, XL, 2XL
                  </Typography>
                </CardContentNoPadding>
              </div>
              <CardActions>
                <Grid container spacing={2}>
                  <Grid item xs={8}>
                    <ThemeProvider theme={theme}>
                      <Typography variant="body2">£47.99</Typography>
                    </ThemeProvider>
                  </Grid>
                  <Grid item xs={4}>
                    <Button size="small">
                      <Typography
                        variant="h4"
                        style={{
                          color: "black",
                          padding: 0,
                          margin: 0,
                          fontWeight: "100"
                        }}
                      >
                        +
                      </Typography>
                    </Button>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={5}>
            <Card sx={{ maxWidth: 267, maxHeight: 409 }}>
              <CardMedia
                component="img"
                alt="nike_img"
                height="267"
                image={nike_img}
              />
              <div>
                <CardContentNoPadding
                  style={{ paddingLeft: "16px", paddingTop: "16px" }}
                >
                  <Typography gutterBottom variant="h7" component="div">
                    NIKE
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Sportswear Swoosh Men's Semi-Brushed Back Fleece Sweater S,
                    M, L, XL, 2XL
                  </Typography>
                </CardContentNoPadding>
              </div>
              <CardActions>
                <Grid container spacing={2}>
                  <Grid item xs={8}>
                    <ThemeProvider theme={theme}>
                      <Typography variant="body2">£47.99</Typography>
                    </ThemeProvider>
                  </Grid>
                  <Grid item xs={4}>
                    <Button size="small">
                      <Typography
                        variant="h4"
                        style={{
                          color: "black",
                          padding: 0,
                          margin: 0,
                          fontWeight: "100"
                        }}
                      >
                        +
                      </Typography>
                    </Button>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </div>
      <img className="loading_img" src={loading}></img>
    </div>
  );
};

export default Home;
