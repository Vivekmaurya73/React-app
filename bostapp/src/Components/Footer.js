import React from 'react'

const Footer = () => {
  return (
    <footer className='footer-container '>
      <div class="footer-grid">
       <div className='footer-News'>
          <h3>Newsletter</h3>
          <p>Dolor amet sit justo amet elitr clita ipsum elitr est
          .Lorem ipsum dolor sit amet, consectetur adipiscing elit
           consectetur adipiscing elit.</p>
           <form action="#">
            <input type="email" placeholder='Email' 
            />
            <button>SignUp</button>
           </form>
       </div>

       <div className='footer-service'>
          <h3>Our Services</h3>
          <p> > Ocian Turtle</p>
          <p> > white turtll</p>
          <p> > white turtll</p>
          <p> > white turtll</p>
          <p> > white turtll</p>
       </div>

       <div className='footer-volunteer'>
          <h3>Volunteer</h3>
          <p> > Ocian Turtle</p>
          <p> > white turtll</p>
          <p> > white turtll</p>
          <p> > white turtll</p>
          <p> > white turtll</p>
       </div>
       
    </div>
    </footer>
  )
}

export default Footer