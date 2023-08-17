import { useState } from "react";
import Header from "./components/Header";
import Discover from "./components/Discover";
import Bottom from "./components/Bottom";
import image1Mobile from "./components/images/image1-mobile.jpg"
import image2Mobile from "./components/images/image2-mobile.jpg"
import image3Mobile from "./components/images/image3-mobile.jpg"

function App() {

  const headerImages = [image1Mobile, image2Mobile, image3Mobile];
  const headers = ['Discover innovative ways to decorate', 'We are available all across the globe', 'Manufactured with the best materials']
  const paragraphs = ["We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.","With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.", "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."]

  let [number, setNumber] = useState(0)
  const [closedNav, setClosedNav] = useState(true);


  const nextSlide = ()=>{
    if(number === headerImages.length-1){
        number =0;
    }
    else{ 
    number ++;
    }
           
    setNumber(number);
    
  }

  const previousSlide = ()=>{
    if(number  === 0){
      number = headerImages.length-1;
    }
    else{
      number--;
    }
       
  setNumber(number) 
  }

  return (
    <div className="App">
      <div className={closedNav ? "" : "h-[100vh] overflow-hidden"}>
        <div className="md:flex md:justify-between md:items-stretch">
          <Header nextSlide={nextSlide} previousSlide={previousSlide} headerImages={headerImages} number={number} closedNav={closedNav} setClosedNav={setClosedNav} />
          <Discover nextSlide={nextSlide} previousSlide={previousSlide} headers={headers} paragraphs={paragraphs} headerImages={headerImages} number={number}/>
        </div>

        <Bottom/>
        
      </div>
      
    </div>
  );
}

export default App;
