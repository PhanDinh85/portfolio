import springboot from "../assets/springboot2.png";
import reactjs from "../assets/reactjs.png";
import taiilwind from "../assets/tailwind.png";
import postgres from "../assets/postgres.png";





const testimonial = () => {
  return (

    <div className=" bg-indigo-800 m-20 ssm:flex-col lg:flex-row" id="technology">
      <div className="grid justify-items-center text-white w-auto">
        <h1 className="text-3xl text-white mt-5 ">Skill</h1>
      </div>
      <div className=' grid grid-cols-4 gap-2'>
        <div className=" relative rounded-xl overflow-auto 
      p-8 hover:animate-pulse">
          <div className="overflow-hidden relative max-w-md mx-auto
         bg-white shadow-lg ring-1 ring-black/5 rounded-xl 
         flex items-center gap-6 dark:bg-slate-800">
            <img src={springboot} className=" absolute -left-6 w-28 h-28 rounded-full shadow-lg" alt="" />

            <div className="min-w-0 py-5 pl-28 pr-5">
              <div className="text-slate-900 font-medium text-sm sm:text-base
            truncate dark:text-slate-200 uppercase">Spring Boot</div>
              {/* <div className="text-slate-500 font-medium text-sm sm:text-base 
            leading-tight truncate dark:text-slate-400">
                Assistant Manager
              </div> */}
            </div>
          </div>
        </div>
        <div className=" relative rounded-xl overflow-auto 
      p-8 hover:animate-pulse">
          <div className="overflow-hidden relative max-w-md mx-auto
         bg-white shadow-lg ring-1 ring-black/5 rounded-xl 
         flex items-center gap-6 dark:bg-slate-800">
            <img src={reactjs} className=" absolute -left-6 w-28 h-28 rounded-full shadow-lg" alt="" />

            <div className="min-w-0 py-5 pl-28 pr-5">
              <div className="text-slate-900 font-medium text-sm sm:text-base
            truncate dark:text-slate-200 uppercase">React</div>
              {/* <div className="text-slate-500 font-medium text-sm sm:text-base 
            leading-tight truncate dark:text-slate-400">
                Assistant Manager
              </div> */}
            </div>
          </div>
        </div>
        <div className=" relative rounded-xl overflow-auto 
      p-8 hover:animate-pulse">
          <div className="overflow-hidden relative max-w-md mx-auto
         bg-white shadow-lg ring-1 ring-black/5 rounded-xl 
         flex items-center gap-6 dark:bg-slate-800">
            <img src={taiilwind} className=" absolute -left-6 w-28 h-28 rounded-full shadow-lg" alt="" />

            <div className="min-w-0 py-5 pl-28 pr-5">
              <div className="text-slate-900 font-medium text-sm sm:text-base
            truncate dark:text-slate-200 uppercase">tailwind css</div>
              {/* <div className="text-slate-500 font-medium text-sm sm:text-base 
            leading-tight truncate dark:text-slate-400">
                Assistant Manager
              </div> */}
            </div>
          </div>
        </div>
        <div className=" relative rounded-xl overflow-auto 
      p-8 hover:animate-pulse">
          <div className="overflow-hidden relative max-w-md mx-auto
         bg-white shadow-lg ring-1 ring-black/5 rounded-xl 
         flex items-center gap-6 dark:bg-slate-800">
            <img src={postgres} className=" absolute -left-6 w-28 h-28 rounded-full shadow-lg" alt="" />

            <div className="min-w-0 py-5 pl-28 pr-5">
              <div className="text-slate-900 font-medium text-sm sm:text-base
            truncate dark:text-slate-200 uppercase">Postgres</div>
              {/* <div className="text-slate-500 font-medium text-sm sm:text-base 
            leading-tight truncate dark:text-slate-400">
                Assistant Manager
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default testimonial