import {BsFacebook, BsTwitter, BsInstagram, BsPinterest} from 'react-icons/bs';
import HeroPicture from '../assets/img_portfolio.png';

const hero = () => {
  return (
    
    <section className=' flex justify-around items-center px-10 py-5 space-x-10
    lg:flex-row ssm:flex-col ssm: space-y-10 text-white' id='aboutme'>
        <div className='lg:w-1/3 ssm:w-fit'>
        <p className='text-4xl mb-5 text-slate-300'>I'm</p>
        <h1 className='text-6xl'>Phan Võ Định</h1>
        <hr />
        <p className='mt-10 text-xl text-slate-200 font-sans'>I'm a Backend Java Developer.</p>
        <p className='text-xl text-slate-200 font-sans'>Love coding and sharing with everyone.</p>
        </div>
        <div className='w-1/3 items-center ssm:w-fit'>
            <img src={HeroPicture} alt="" width={250} height={250}
            className='rounded-full w-full border-8 border-white' />
        </div>
        <div className='w-1/3 ssm:w-fit'>
            <p className='text-4xl mb-4'>About me</p>
            <p className='text-slate-300'>Let's build quality in programming ad design with our services</p>
            <button className='bg-white text-indigo-600 px-10 py-2 my-3 rounded-full
            hover:bg-indigo-800 hover:text-white'>Show more...</button>
            <div className='flex mt-5 space-x-4 cursor-pointer'>
                <BsFacebook size={40} className='border-4 hover:border-indigo-800 rounded-full'/>
                <BsTwitter size={40} className='border-4 hover:border-indigo-800 rounded-full'/>
                <BsInstagram size={40} className='border-4 hover:border-indigo-800 rounded-full'/>
                <BsPinterest size={40} className='border-4 hover:border-indigo-800 rounded-full'/>
            </div>
        </div>
    </section>
    
  )
}

export default hero