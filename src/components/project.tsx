
import bookImg from '../assets/book.png';
import chatImg from '../assets/chat.png';
import manImg from '../assets/man5.png';
import plantImg from '../assets/plant.png';

const project = () => {
  return (
    <>
      <div className='bg-indigo-800 m-20 max-w-full' id='projects'>
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
                  <a href='#'>Spring boot, Angular, MySQL</a>
                  <p className='mt-2 text-slate-500 '>
                    Book E-commerce Website: An online bookstore built with Spring Boot, Angular, and MySQL.
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
                  <a href='#'>ReactJS & Firebase</a>
                  <p className='mt-2 text-slate-500 '>
                    Chat App Real-Time: A real-time chat application using ReactJS and Firebase.
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
                  <a href='#'>ReactJS & TailwindCss</a>
                  <p className='mt-2 text-slate-500 '>
                    Portfolio Website: A personal portfolio site created with ReactJS and TailwindCSS.
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
                    Donate Planting Tree Website
                  </div>
                  <a href='#'>Spring boot, ReactJS, MySQL</a>
                  <p className='mt-2 text-slate-500 '>
                    Donate Planting Tree Website: A platform for tree donations developed with Spring Boot, ReactJS, and MySQL..
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