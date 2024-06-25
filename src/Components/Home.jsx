import React, { useState } from 'react'
import styled from 'styled-components'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Pic from "../image/hp-player-crop.webp"
import Elf from "../image/2222.png"
import Int from "../image/3.png"
import Go from "../image/4.png"
import Ro from "../image/5.png"
import Gar from "../image/6.png"
import Bl from "../image/7.png"
import St from "../image/8.png"
import Gy from "../image/9.png"
import Ch from "../image/10.png"
import PopupForm from './PopupForm'



function Home() {
    const [isFormVisible, setFormVisible] = useState(false);

    const handleConnectWithSalesClick = () => {
        setFormVisible(true);
      };
    
      const closeForm = () => {
        setFormVisible(false);
      };
     
     
  return (
    <DIV>
      <header>
        <div className='left'>
            <nav>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQBKue3owXLOUYDTmh8_Ceha4J0YH2Jq1aXA&s" height="50px"/>
                <p>How it Works</p>
                <p>Product</p>
                <p>Solutions </p>
                <p>Customers</p>
                <p>Success</p>
                <p>Partners</p>
                <p>Resources</p>
                <p>Company</p>

            </nav>
            <ToastContainer style={{margin :'auto'}} />
        </div>
        <div className='right'>
            <select name="" id=""  style={{backgroundColor : 'silver' , padding :"5px" , borderRadius :"7px" , marginRight :'20px'}}>
           
                <option value="us"> 🌎US</option>
                <option value="in" > 🌎IN</option>
                <option value="uae"> 🌎UAE</option>
            </select>
            <button id='login'>Login</button>
            <button id='get_start'>Get Started</button>
        </div>
      </header>
    
      <div className='main'>
        <div className='text_con'>
            <h1>There's never been a better time to be a better marker.<span>TM</span></h1>
            <p>Data is flowing and channels are growing. Customers are demanding the world, while AI already transfroming it. Manage it all with the right <span>customer engagement platform.</span></p>
            <div className='btns'>
                <button>Get Started</button>
                <button>Watch Video</button>
            </div>
        </div>
        <div className='image_con'>
            <img src={Pic} alt="" />
        </div>
      </div>
      

      <div className='banner' style={{marginBottom :"0px" , paddingBottom :"0px"}}>
        <h3>MADE TO SCALE WITH COMPANIES OF ALL SIZES</h3>
        <div className='icon_con'>
            <div className='icons'>
                <img src={Elf} alt="" />
                <img src={Int} alt="" />
                <img src={Go} alt="" />
                <img src={Ro} alt="" />
                <img src={Gar} alt="" />
                <img src={Bl} alt="" />
                <img src={St} alt="" />
                <img src={Gy} alt="" />
                <img src={Ch} alt="" />

                <img src={Elf} alt="" />
                <img src={Int} alt="" />
                <img src={Go} alt="" />
                <img src={Ro} alt="" />
                <img src={Gar} alt="" />
                <img src={Bl} alt="" />
                <img src={St} alt="" />
                <img src={Gy} alt="" />
                <img src={Ch} alt="" />
            </div>
            
        </div>
        <button className='connect' onClick={handleConnectWithSalesClick} style={{padding :"18px", marginRight :'35px' , marginTop : "-400px", }}>
            Connect With Sales
        </button>
      </div>
      

      {isFormVisible && <PopupForm closeForm={closeForm} />}

    </DIV>
  )
}

export default Home;


const DIV = styled.div`
  header {
    width: 80%;
    background-color: white;
    border-radius: 50px;
    margin: 2rem auto; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem; 
  }

  nav {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem; 
    font-weight: bolder;
  }

  p {
    font-size: 0.75rem; 
  }

  nav > span {
    font-family: Cedarville Cursive;
    font-size: 1.5rem; 
  }

  select {
    margin-right: 0.5rem; 
    background-color: whitesmoke;
  }

  #login {
    margin-right: 0.5rem; 
    background: none;
    border: none;
    font-weight: bold;
    cursor: pointer;
  }

  #get_start {
    margin-right: 0.5rem; 
    border-radius: 50px;
    border: none;
    padding: 0.75rem 1rem; 
    background-color: #4E0BE0;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }

  .main {
    display: flex;
    width: 80%;
    margin: 2rem auto; 
    color: white;
    min-height: 55vh;
  }

  .text_con {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 1rem; 
    padding-top: 2rem; 
  }

  .text_con > h1 {
    font-size: 3rem;
  }

  .text_con > h1 > span {
    font-size: 0.5rem; 
    position: relative;
    top: -0.5rem; 
  }

  .text_con > p {
    font-size: 1rem; 
    color: #e7dede;
    margin-top: -1rem; 
  }

  .text_con > p > span {
    color: white;
    font-weight: bold;
  }

  .image_con {
    width: 50%;
  }

  .image_con > img {
    width: 100%;
    max-width: 550px;
    border-radius: 5px;
    height: auto; 
  }

  .btns {
    display: flex;
    gap: 1rem; 
  }

  .btns > button:nth-child(1) {
    border-radius: 50px;
    border: none;
    padding: 0.75rem 1rem; 
    background-color: white;
    color: #8136CF;
    font-weight: bold;
    cursor: pointer;
  }

  .btns > button:nth-child(2) {
    border: none;
    background: transparent;
    padding: 0.75rem 1rem; 
    color: white;
    font-weight: bold;
    cursor: pointer;
  }

  .banner {
    background-color: white;
    border-radius: 70px 70px 0 0;
    text-align: center;
    margin: 2rem auto; 
    padding-top: 1rem; 
    height: auto;
    min-height: 223px;
  }

  .banner > h3 {
    color: gray;
    margin-bottom: 2rem; 
  }

  .icon_con {
    width: 80%;
    margin: auto;
    display: flex;
    overflow: hidden;
  }

  .icons {
    display: flex;
    gap: 0 2rem; 
    animation: slide 18s linear infinite;
  }

  @keyframes slide {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .connect {
    position: relative;
    top: -2rem; 
    left: 50%; 
    transform: translateX(-50%); 
    width: auto;
    max-width: 250px;
    border-radius: 50px;
    border: none;
    padding: 0.75rem 1rem; 
    background-color: #4E0BE0;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }
`;
