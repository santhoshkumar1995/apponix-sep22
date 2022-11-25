
import Grid from "@mui/material/Grid/Grid"
import { Mycarousel } from "../../components/my card/carocel/Mycarousel"
import { Mycard } from "../../components/my card/my card/Mycard"
import { MyNavbar } from "../../components/my card/mynavebar/api/MyNavebar"

import img1 from '../../image/img4.jpg'
import img2 from '../../image/img5.jpg'
import img3 from '../../image/img.6.jpg'
import { Container } from "@mui/material"
export const Home = () => {
  return <>
    <Container>


      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="stretch"
      ><MyNavbar /></Grid>

      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="stretch"
      ><Mycarousel /></Grid>
      <br />
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Mycard img={img1} />
        <Mycard img={img2} />
        <Mycard img={img3} />



      </Grid>










    </Container>

  </>
}