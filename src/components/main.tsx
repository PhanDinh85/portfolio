import Nav from './nav';
import Hero from './hero';
import Footer from './footer';
import Project from './project';
import Testimonial from './testimonial';

const main = () => {
    return (
        <div className=' bg-indigo-500'>
            <Nav/>
            <Hero/>
            <Project/>
            <Testimonial/>
            <Footer/>
        </div>

    )
}

export default main