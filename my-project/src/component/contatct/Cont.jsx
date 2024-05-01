import React from 'react'
import linkedin from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import Navbar from '../homepage/Navbar'
import { useState } from 'react'


const Cont = () => {
    let isMessageValid = false;
    const [messageLength, setMessageLength] = useState(0);
    const [messageValue, setMessageValue] = useState("");

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
      <div className='h-screen  flex items-center justify-center flex-col'>
        <div className='py-[60px] px-[50px] flex h-[50%] w-[75%] items-center justify-center flex-col gap-[20px] bg-yellow-500 rounded-lg'>
          <p className='text-zinc-700 text-6xl font-bold' >
            CONTACT US
          </p>
          
          <form className='w-full flex flex-col gap-[20px]'>
            <textarea onChange={(e)=>{setMessageLength(e.target.value.length); setMessageValue(e.target.value)}} id="message" className=' w-full h-[60px] mb-[10px] rounded-sm text-black' placeholder=' Saran dan Masukkan untuk kami'/>
              <div className="flex  justify-center">
                <button onClick={submitForm} className='bg-white text-zinc-800 h-[40px] px-[10px] hover:bg-zinc-800 hover:text-white rounded-sm '>SUBMIT</button>
              </div>
          </form>

          <p className='text-zinc-700' >
            --------- OR ----------
          </p>

          <div className="flex flex-row grid-cols-3 gap-[50px]">
            <a href="">
              <img src={linkedin} className='h-[40px]'/>
            </a>
            <a href="">
              <img src={facebook} className='h-[40px]'/>
            </a>
            <a href="">
              <img src={twitter} className='h-[40px]'/>
            </a>
            <a href="">
              <img src={instagram} className='h-[40px]'/>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cont
