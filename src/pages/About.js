import React from 'react';
import Pages_Elements from '../components/Pages_Elements/Pages_Elements';
import './About.css';
const About = () => {
    return (
        <div className='about_page'>
            <Pages_Elements page_title={'About Us'} page_content={'Dedicated Professionals Since 1997!'}/>
            <div className="about_container">
                <h3>Simpler. Smarter. Faster.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laudantium deleniti sunt, aut neque at quasi voluptatum nam alias debitis quidem ducimus hic excepturi quas enim rem,<br /> suscipit laborum tenetur. Enim non delectus optio doloremque soluta voluptates, explicabo sunt possimus deserunt culpa sapiente,<br /> beatae dolore quas fugiat reiciendis. Consequuntur, perferendis!</p>
            </div>
            <div className="new_section_container">
                <ul>
                    <li>
                        <div className="icons">
                            <i className='bx bxs-lemon'></i>
                        </div>
                        <span>
                            <h3>This Is The View!</h3>
                            <p>Lorem ipsum dolor sit amet consectetur,<br /> adipisicing elit. Commodi perferendis,<br /> neque provident quam at et.</p>
                        </span>
                    </li>
                    <li>
                        <div className="icons">
                            <i className='bx bxs-bar-chart-alt-2'></i>
                        </div>
                        <span>
                            <h3>This Is The View!</h3>
                            <p>Lorem ipsum dolor sit amet consectetur,<br /> adipisicing elit. Commodi perferendis,<br /> neque provident quam at et.</p>
                        </span>
                    </li>
                    <li>
                        <div className="icons">
                            <i className='bx bx-search-alt-2' ></i>
                        </div>
                        <span>
                            <h3>This Is The View!</h3>
                            <p>Lorem ipsum dolor sit amet consectetur,<br /> adipisicing elit. Commodi perferendis,<br /> neque provident quam at et.</p>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default About;
