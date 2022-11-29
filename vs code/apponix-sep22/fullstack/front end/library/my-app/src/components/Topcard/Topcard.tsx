
import { Card, Container } from "react-bootstrap"
import img from '../../image/about.jpg'
interface ITopcard{
    img:string
}
export const Topcard: React.FC<ITopcard> = (props) =>{
    return<>
    <Container>
    <Card className="bg-dark text-white" >
      <Card.Img height={'50%'} width={'50%'} src={img} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title><h1>About <br />
          hi i am santhosh <br />
          welcome to my About page.
          </h1></Card.Title>
        <Card.Text>
            
          
        </Card.Text>
        <Card.Text>Thank you</Card.Text>
      </Card.ImgOverlay>
    </Card>
      
    </Container>
    
    </>
}