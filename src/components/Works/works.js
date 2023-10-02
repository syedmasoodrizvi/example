import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/implementation-tic-tac-toe.png';
import Portfolio2 from '../../assets/2048-game.png';
import Portfolio3 from '../../assets/snake.png';
import Portfolio4 from '../../assets/116789828-4b65a380-aaca-11eb-8831-09b66819923a.jpg';
import Portfolio5 from '../../assets/e-commerce-website.png';
import Portfolio6 from '../../assets//VW-Landing-Page.jpg';

const Works = () => {
    return (
    <section id="works">
        <h2 className='worksTitle'>My Projects</h2>
        <span className='worksDesc'>I take pride in paying attention to the smallest details and make sure that
        my work is pixel perfect.  I am excited to bring my skills and experience to help business achieve their goals 
        and create a strong online presence.</span>
        <div className='worksImgs'>
            <img src={Portfolio1} alt='Portfolio1' className='worksImg'/>
            <img src={Portfolio2} alt='Portfolio2' className='worksImg'/>
            <img src={Portfolio3} alt='Portfolio3' className='worksImg'/>
            <img src={Portfolio4} alt='Portfolio4' className='worksImg'/>
            <img src={Portfolio5} alt='Portfolio5' className='worksImg'/>
            <img src={Portfolio6} alt='Portfolio6' className='worksImg'/>
        </div>
        <button className='workBtn'>See More</button>
    </section>
    )
}

export default Works;