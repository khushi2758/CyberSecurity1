import './home.css'
import IMG from '../assets/CEO.png'
function Home()  {
    return (<div className='flex flex-row items-center  h-screen pl-60 '>
      
     <div className='flex-1 shiny-border' > <h1 class="text-5xl font-extrabold bg-gradient-to-r from-purple-900 to-cyan-600 bg-clip-text text-transparent text-clip mb-1.5">Stay Safe Online - </h1>
     <h1 class="text-5xl font-extrabold text-clip pb-7"> Check Any URL <br/>Before You click </h1>
      <h1 class=" text-gray-500 font-extrabol text-clip mt-2">Protect Yourself from Phishing Attacks.  </h1>
      <p className="text-lg text-gray-600 mt-1 mb-3 pb-7">
                    The internet is a vast space filled with opportunities, but it also comes with risks. 
                    Phishing attacks are one of the most common threats, targeting unsuspecting users to steal sensitive information.
                    </p>
     {/* <p className="text-lg text-gray-600 mt-1 pb-7">
                    Our tool empowers you to check any URL before clicking, ensuring your online safety and peace of mind.
                    </p>*/}
      <button class="btns ">

  <span  >Get Start</span>

</button>


</div>
<div className='flex-1'><img src={IMG} alt="ROBO" /></div>
</div>
    )
  }
  
  export default Home