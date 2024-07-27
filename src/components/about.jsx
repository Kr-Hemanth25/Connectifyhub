import React, { useEffect } from 'react';
// import backgroundImage from '../assets/19198668.jpg';

const About = () => {
  console.log("this about")
  useEffect(()=>
  {
    document.body.overflow='visible'

  },[])
  return (
    <div className='relative top-[10%] text-[100%] text-blue-500 flex flex-col gap-8 ml-[20%] mr-[20%] pt-[5%] pb-[25%] capitalize shadow-black sm:text-[150%] sm:pb-[5%]'>
      <div>Welcome to ConnectifyHub, where we've revolutionized the way you manage your contacts. Our platform is built with simplicity and efficiency in mind, ensuring that your contact management experience is seamless and stress-free.</div>
      <div>With ConnectifyHub, you can wave goodbye to the days of fumbling through endless lists of contacts. Our intuitive interface makes navigation a breeze, allowing you to find the information you need with just a few clicks.</div>
      <div>Security is paramount at ConnectifyHub. We understand the importance of keeping your contact information safe, which is why we employ advanced encryption techniques to safeguard your data. You can rest easy knowing that your privacy is our top priority.</div>
      <div>Organizing your contacts has never been easier. Whether you prefer to categorize them into groups or add custom tags for quick reference, ConnectifyHub provides you with the tools you need to stay organized and efficient.</div>
      <div>What sets ConnectifyHub apart is its seamless integration across all your devices. Whether you're using your desktop, tablet, or smartphone, you'll find that Connectify works flawlessly, ensuring that your contacts are always accessible, no matter where you are.</div>
      <div>Finding the contact you need is a breeze with Connectify's instant search feature. Simply type in a name or keyword, and ConnectifyHub will quickly locate the contact you're looking for, saving you valuable time and effort.</div>
      <div>Join the ConnectifyHub community today and experience the simplicity of effective contact management. Say hello to seamless communication with ConnectifyHub.</div>
    </div>
  );
}

export default About;
