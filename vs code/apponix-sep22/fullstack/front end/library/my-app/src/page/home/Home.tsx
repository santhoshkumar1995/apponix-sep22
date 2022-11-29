
import Grid from "@mui/material/Grid/Grid"
import { Container } from "@mui/material"
import { Mycard } from "../../components/my card/Mycard"

import img1 from '../../image/img4.jpg'
import img2 from '../../image/img5.jpg'
import img3 from '../../image/img.6.jpg'
import { Mycarousel } from "../../components/carocel/Mycarousel"


export const Home = () => {
  return <>
    <Container>
      <br />
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
