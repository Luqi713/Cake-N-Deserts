import React from 'react'

function Hero() {
  return (
    <section className='main-home'>
        <div className="main-text">
            <h5>Cake's Collection</h5>
            <h1>Delecious Cakes <br/> For Every Kind Of Events!</h1>
            <p>Order Your Cake Now.</p>
            <a href="/" className='main-btn'>Order Now <i className='bx bx-right-arrow-alt'></i></a>
        </div>
        <div className="down-arrow">
            <a href="#trending" className="down"><i className='bx bx-down-arrow-alt'></i></a>
            </div>
    </section>
  )
}

export default Hero
