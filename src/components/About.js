import React, { Component } from "react";
import Bailey from '../pictures/bailey.jpg'
import "../App.css";

export default class About extends Component {
  render() {
    return (
      <div className='aboutpage'>
        <h1 className="hometitle">Hi, I'm Bailey!</h1>
        <img src={Bailey} height={300} width={425} alt='' className='baileypic'/>
        <p className="aboutme">
          I’ve been doing videography for 2 years and I absolutely love it! This
          job kind of fell into my lap after some friends asked me to film their
          weddings even though I had no experience (bless their hearts) and my
          business just took off from there. I’ve started doing more photography
          recently as well which has been a fun addition! I film weddings,
          births, missionary homecomings, birthday parties, family lifestyle
          videos, business promo videos and so much more! 
          </p>
          <p className='aboutme2'>I married my
          cute husband Tanner in March of 2017. We love playing music together,
          watching The Office + Parks and Rec, playing video games, playing
          sports and traveling! Some of my favorite places I’ve been are South
          Africa, New Orleans, Maui, Thailand, and New York. I’m 22 years old.
          I’m a Root Beer fanatic. My favorite color is white. I love summer
          time. My favorite food is any kind of vegetable. I have 7 siblings. I
          have a pet tarantula. I love my job!!! Well that’s ME, now I would
          love to get to know YOU and film your life events! So go to the ‘book
          now’ page and let’s make some magic!{" "}
        </p>
    
      </div>
    );
  }
}
