import React from "react";
import muskanprofile from './images/muskanprofile.jfif'; // gives image path

function First(){
    return(
      <div className="homepage"> 
        <div className="picture">
              <img className="muskan" src={muskanprofile} alt="avatar"></img>
<h1>Muskan Bansal</h1>
<p>Helping You Get Your Message Online</p>

<a href="#">

    <button type="button" className="btn btn-dark btn-lg" name="button"> 
      Get In Touch</button></a>

        </div>

        <section id="features">
            <h1 className="heading">Skillset</h1>
      <div class="row">
          

        <div class=" feature-box col-lg-4">
            <nav className="icons"><i class="fa fa-file-code-o"></i></nav>
          <h2 className="skills"> Frontend Development</h2>
        </div>
        <div class=" feature-box col-lg-4">
            <nav  className="icons"><i class="fa fa-adjust"></i></nav>
          <h2 className="skills">  UI/UX Designing</h2>
        
        </div>
        <div class=" feature-box col-lg-4">
            <nav  className="icons"><i class="fa fa-laptop"></i></nav>
          <h2 className="skills">  Programming Skills</h2>
         
        </div>
      </div>
    </section>










        </div>
    )
}

export default First;