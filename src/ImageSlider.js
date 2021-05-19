import React, { Component } from "react";
import Slider from "react-slick";




class ImageSlider extends Component {
    render(){
    const settings = {
      dots:true,
      infinite:true,
      speed:500,
      slidesToShow:1,
      slidesToScroll:1,
      horizontal:true,
     
    };
      return (
        <div className="sliderpage">
        <Slider {...settings}>

          <div className="card-image">
          <h2 className="inspire">  My Inspirations</h2><br></br>
          <h2>Sundar Pichai</h2>
          <img className="inspired" src="https://tse4.mm.bing.net/th?id=OIP.HFjBgL4L8B4MX-HlpgR0hAHaHa&pid=Api&P=0&w=300&h=300"  ></img>
       <p className="para">   "A person who is happy is not because everything is right in his life, he is happy because his attitude towards everything in his life is right"</p>
  
              </div>
              
              <div className="card-image">
              <h2 className="inspire">  My Inspirations</h2><br></br>
<h2>Albert Einstein</h2>
                <img className="inspired" src="https://www.surfnetkids.com/resources/wp-content/uploads/2018/03/albert-einstein.jpg"></img>
           <p className="para">   "We cannot solve our problems with the same thinking we used when we created them"</p>

              </div>
             
        </Slider>
        </div>
      );
    }
  }
  
  
    export default ImageSlider;
    