import { Container, Grid } from "@mui/material";
import { MyNavbar } from "../../components/mynavebar/api/MyNavebar";
import background from '../../image/back ground images/b1.jpg'

interface ILayout{
    children: any;
    
}
export const Layout:React.FC<ILayout>=(props)=>{
    return <div style={{ backgroundImage: `url(${background})` }}>
  
    <Container>
    <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="stretch"
      ><MyNavbar /></Grid>
    </Container>
    {props.children}
    
    
    </div>

}
