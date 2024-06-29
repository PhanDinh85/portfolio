
import bookImg from '../assets/book.png';
import chatImg from '../assets/chat.png';
import manImg from '../assets/man5.png';
import plantImg from '../assets/plant.png';

const project = () => {
  return (
    <>
      <div className='bg-indigo-800 m-20 max-w-full'>
        <div className='grid justify-items-center m-10'>
          <h1 className='text-3xl text-white mt-10'>Project</h1>
        </div>
        <div>
          <div className=' grid grid-cols-2 gap-4 p-5'>
            <div className=' max-w-md mx-auto bg-white rounded-xl shadow-md
          overflow-hidden md:max-w-2xl hover:animate-pulse'>

              <div className='md:flex'>
                <div className='p-8'>
                  <div className=' uppercase tracking-wide text-sm to-indigo-500
                font-semibold'>
                    Book E-Commerce Website
                  </div>
                  <a href='#'>Subheading</a>
                  <p className='mt-2 text-slate-500 '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod officia earum.
                  </p>
                </div>
                <div className=' md:shrink-0 p-5 grid justify-center' >
                  <img src={bookImg} alt="Project1" width={150} height={150} />
                </div>
              </div>

            </div>

            <div className=' max-w-md mx-auto bg-white rounded-xl shadow-md
          overflow-hidden md:max-w-2xl hover:animate-pulse'>

              <div className='md:flex'>
                <div className=' md:shrink-0 p-5 grid justify-center' >
                  <img src={chatImg} alt="Project1" width={150} height={150} />
                </div>
                <div className='p-8'>
                  <div className=' uppercase tracking-wide text-sm to-indigo-500
                font-semibold'>
                    Chat app real-time                  </div>
                  <a href='#'>Subheading</a>
                  <p className='mt-2 text-slate-500 '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod officia earum.
                  </p>
                </div>

              </div>

            </div>
          </div>
          <hr />
          <div className=' grid grid-cols-2 gap-4 p-5'>
            <div className=' max-w-md mx-auto bg-white rounded-xl shadow-md
          overflow-hidden md:max-w-2xl hover:animate-pulse'>

              <div className='md:flex'>
                <div className='p-8'>
                  <div className=' uppercase tracking-wide text-sm to-indigo-500
                font-semibold'>
                    Portfolio Website
                  </div>
                  <a href='#'>Subheading</a>
                  <p className='mt-2 text-slate-500 '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod officia earum.
                  </p>
                </div>
                <div className=' md:shrink-0 p-5 grid justify-center' >
                  <img src={manImg} alt="Project1" width={150} height={150} />
                </div>
              </div>

            </div>

            <div className=' max-w-md mx-auto bg-white rounded-xl shadow-md
          overflow-hidden md:max-w-2xl hover:animate-pulse'>

              <div className='md:flex'>
                <div className=' md:shrink-0 p-5 grid justify-center' >
                  <img src={plantImg} alt="Project1" width={150} height={150} />
                </div>
                <div className='p-8'>
                  <div className=' uppercase tracking-wide text-sm to-indigo-500
                font-semibold'>
                    Green-Planet
                  </div>
                  <a href='#'>Subheading</a>
                  <p className='mt-2 text-slate-500 '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod officia earum.
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </>

  )
}

export default project