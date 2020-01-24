import React from 'react'
import {

    Carousel, Container

} from 'react-bootstrap'
import { Redirect } from 'react-router-dom';
class Home extends React.Component {

constructor(){
  super()
  this.state = {
     color: "#9ebd4b",

  }

}
render(){

  return(

<Container style={{background: this.state.color}}>
   <Carousel>
        <Carousel.Item>
          <img
          height = "500px"
            className="d-block w-100"
            src="https://res.cloudinary.com/sagacity/image/upload/c_crop,h_3846,w_5421,x_216,y_69/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/peli-peli-kitchen_w40psz.jpg
            "
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
        
          height = "500px"
            className="d-block w-100"
            src="https://images.squarespace-cdn.com/content/v1/56c623a907eaa033562424bb/1472517836831-BIRMO2D0TYQGHOVN1Q16/ke17ZwdGBToddI8pDm48kFA9zd0KVW7B7zvvizl8CJYUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcKOEUgBUYQ7_rAKz3ua5P61LnR90rif4Svt5YafJynk1sUzUoF4VrfKQlp04kF3vD/wholefoodsAD1.jpg?format=2500w"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height = "500px"
            className="d-block w-100"
            src="https://images.squarespace-cdn.com/content/v1/56c623a907eaa033562424bb/1472517858737-LYMD4V1RORWVVGDO995L/ke17ZwdGBToddI8pDm48kFA9zd0KVW7B7zvvizl8CJYUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcKOEUgBUYQ7_rAKz3ua5P61LnR90rif4Svt5YafJynk1sUzUoF4VrfKQlp04kF3vD/WF+ad.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Container>
  )
}
}

export default Home