import React, { useEffect } from 'react'
import linkedin from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import bgContact from '../../assets/1714802517086.jpg'
import bgContactSmall from '../../assets/17148025170861.jpg'
import Navbar from '../homepage/Navbar'
import { useState } from 'react'


const Cont = () => {
    let isMessageValid = false;
    const [messageLength, setMessageLength] = useState(0);
    const [messageValue, setMessageValue] = useState("");
    const [backgroundImage, setBackgroundImage] = useState(window.innerWidth >= 768 ? bgContact : bgContactSmall);

    useEffect(() => {
        const handleResize = () => {
            setBackgroundImage(window.innerWidth >= 768 ? bgContact : bgContactSmall);
        };
        window.addEventListener('resize', handleResize);
  
    }, []);
    
    
    function submitForm() {
        isMessageValid = messageLength >= 20 && messageLength <= 540;
        if (isMessageValid == true) {
            executeMailTo();
        } else {
            alert("The message hasn't met the required input length! (20-540 Characters)");
        }
    }

    function executeMailTo(){
        const link = `https://mail.google.com/mail/?view=cm&fs=1&to=nugrohonugroho14@gmail.com&su=${"anonymon"}&body=${messageValue}`;
        console.log(link);
        window.open(link);
    }

  return (
    <>
      <Navbar/>
      <div className='h-fit  flex items-center justify-top flex-col bg-no-repeat bg-cover py-[30px] gap-[40px]' style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className='py-[30px] md:py-[60px] px-[50px] flex h-fit md:w-[50%] w-[75%] items-center justify-center flex-col gap-[20px] bg-yellow-500 rounded-xl'>
          <p className='text-zinc-700 text-4xl md:text-6xl font-bold md:mb-[50px] text-center'>
            CONTACT US
          </p>
          
          <form className='w-full flex flex-col gap-[20px]'>
            <textarea onChange={(e)=>{setMessageLength(e.target.value.length); setMessageValue(e.target.value)}} id="message" className=' w-full h-[60px] mb-[10px] rounded-sm text-black' placeholder=' Saran dan Masukkan untuk kami'/>
              <div className="flex  justify-center">
                <button onClick={submitForm} className='bg-white text-zinc-800 h-[40px] px-[10px] hover:bg-zinc-800 hover:text-white rounded-lg '>SUBMIT</button>
              </div>
          </form>

          </div>
          <div className='py-[20px] px-[50px] flex h-fit md:w-[50%] w-[75%] items-center justify-center flex-col gap-[20px] bg-yellow-500 rounded-xl'>
            <p className='text-zinc-700 text-4xl md:text-6xl font-bold mb-[20px] text-center'>
              Contact Person
            </p>
            
            <div className="flex flex-col grid-cols-3 gap-[20px] w-full">
              <div className=" flex justify-between ">
                <p className='text-start'>Nuzul</p>
                <p className='text-end'> 089712</p>
              </div>
              <div className=" flex justify-between ">
                <p className='text-start'>Nuzul</p>
                <p className='text-end'> 089712</p>
              </div>
              
          </div>
        </div>
        <div className="py-[20px] px-[50px] flex h-fit w-[75%] md:w-[50%] items-center justify-center flex-col gap-[20px] bg-yellow-500 rounded-xl">
            <p className='text-zinc-700 text-4xl md:text-6xl font-bold mb-[20px] text-center'>
              Social Media
            </p>
            <div className="flex flex-row grid-cols-3 gap-[20px] md:gap-[50px]">
              <a href="">
                <img src={linkedin} className='md:h-[40px] h-[30px]'/>
              </a>
              <a href="">
                <img src={facebook} className='md:h-[40px] h-[30px]'/>
              </a>
              <a href="">
                <img src={twitter} className='md:h-[40px] h-[30px]'/>
              </a>
              <a href="">
                <img src={instagram} className='md:h-[40px] h-[30px]'/>
              </a>
            </div>   
        </div>
      </div>
    </>
  )
}

export default Cont
