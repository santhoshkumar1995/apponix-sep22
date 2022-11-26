

import { Carousel } from 'react-bootstrap'
import img1 from '../../image/img1.jpg'
import img2 from '../../image/img2.jpg'
import img3 from '../../image/img3.jpg'

interface IMycarousel { }
export const Mycarousel: React.FC<IMycarousel> = (props) => {
    return <>
        <Carousel>
            <Carousel.Item>
                <img  height='400px' width='100%'
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img  height='400px' width='100%'
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img  height='400px' width='100%'
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                />

                <Carousel.Caption>


                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>


    </>
}