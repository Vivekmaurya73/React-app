import React from 'react'
import Card from './Card';

const Cardapp = () => {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };
  return (
    <div className='cardapp'>
    
   
      <Card
        title="Beautiful Landscape"
        image="/images/ca.6.jpg"
        description=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        buttonText="click Me"
        onclick={handleButtonClick}
        />
       <Card
        title="City Skyline"
        image="/images/ca.4.jpg"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,."
        buttonText="click Me"
        onclick={handleButtonClick}

      />
      <Card
        title="close work with services"
        image="/images/ca.5.jpg"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,t."
        buttonText="click Me"
        onclick={handleButtonClick}

      />
       <Card
        title="Pro Guided tours only"
        image="/images/ca.7.jpg"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,."
        buttonText="click Me"
        onclick={handleButtonClick}
      />
       <Card
        title="Protecting animal area"
        image="/images/ca.8.jpg"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,t."
        buttonText="click Me"
        onclick={handleButtonClick}
      

      />
      
    </div>
  )
}

export default Cardapp