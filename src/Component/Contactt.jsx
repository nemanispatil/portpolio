import React from 'react';
import './Contactt.css';
function Contactt() {
  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwA2b7UCkX8xoAXKX0gZxX2Cxx3cfrRqYkMmjssWqYfigWzHxfCq8xoBBQORf_-BLuMuQ/exec';
    
    try {
      const response = await fetch(scriptURL, { method: 'POST', body: formData });
      if (response.ok) {
        alert("Thanks for contacting us! We'll get back to you soon.");
        e.target.reset();
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <>
         <h1>Hire Me</h1>
    <form method="post" autoComplete="off" name="google-sheet" onSubmit={handleSubmit}>
      <input type="text" name="Name" placeholder="Your Name *" required />
      <input type="text" name="Email" placeholder="Your Email *" required />
      <input type="number" name="Phone" placeholder="Your Contact Number *" required />
      <input type="submit" name="submit" value="Submit" />
    </form>
    <div className='line'></div>
    </>
  );
}

export default Contactt;
