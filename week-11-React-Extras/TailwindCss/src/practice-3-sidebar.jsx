import MenuIcon from '@mui/icons-material/Menu';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CameraAltIcon from '@mui/icons-material/CameraAlt';


export function SidebarComponent() {

    return <div className="Parent w-full p-4 sm:p-8 relative">

        <div className="navbar flex justify-between items-center p-4">
            <div className="logo text-2xl font-medium w-40 h-12 flex justify-center items-center rounded-lg bg-blue-500 text-white">Webinar<span className="text-cyan-600">.gg</span></div>
            <div className="menuIcon"><MenuIcon style={{ fontSize: 35 }} /></div>
        </div>
        <div className="heroSection">
            <div className="userCard h-72 w-full mt-4 mb-8 bg-white border border-gray-700 rounded-xl flex flex-col gap-3 justify-center items-center
                        sm:flex-row sm:gap-12
                        md:flex-col md:h-80 md:w-64">
                <div className="userImage h-32 w-32 bg-red-400 rounded-xl overflow-hidden
                                sm:h-56 sm:w-48
                                md:h-32 md:w-32"><img src="https://img.freepik.com/premium-photo/beautiful-elegant-female-indian-model-traditional-ethnic_69698-312.jpg" className='h-full w-full object-cover' alt="" /></div>
                <div className="details flex flex-col gap-2 text-center flex-wrap sm:text-start sm:gap-4 md:text-center md:gap-2">
                    <div className="email">prabhleen1234@gmail.com</div>
                    <div className="phone">+91-1234999956</div>
                    <div className="location">Delhi, India</div>
                </div>
            </div>

            <div className="options bg-white h-72 w-96 border border-gray-400 rounded-lg right-12 top-36 absolute p-4 md:flex flex-wrap md:justify-evenly items-center hidden md:block md:gap-4 xl:top-56 xl:right-10 xl:w-80">
                <div className="option1 flex flex-col justify-center items-center">
                    <div className="icon bg-cyan-200 h-24 w-24 flex justify-center items-center rounded-lg"><CalendarTodayIcon style={{ fontSize: 30, color: 'gray', margin: "4" }} /></div>
                    <div className="name text-sm">Schedule a Webinar</div>
                </div>
                <div className="option1 flex flex-col justify-center items-center">
                    <div className="icon bg-cyan-200 h-24 w-24 flex justify-center items-center rounded-lg text-5xl text-gray-500">+</div>
                    <div className="name text-sm">Join a Webinar</div>
                </div>
                <div className="option1 flex flex-col justify-center items-center">
                    <div className="icon bg-cyan-200 h-24 w-24 flex justify-center items-center rounded-lg"><CameraAltIcon style={{ fontSize: 40, color: 'gray' }} /></div>
                    <div className="name text-sm">Open Recording</div>
                </div>

                
            </div>

            <div className="greetings xl:w-2/5 xl:absolute xl:top-32 xl:right-96">
                <p className='text-lg my-2 xl:text-xl'>Monday, 14 October</p>
                <h2 className='text-2xl font-medium my-2 xl:text-4xl'>Good morning, Phabhleen 👋</h2>
            </div>
            <div className="Tasksection mb-8 h-auto w-full border bg-white border-gray-500 p-2 rounded 
                            xl:w-2/5 xl:absolute xl:top-64 xl:right-96 xl:mr-4">
                <div className="heading flex bg-gray-100 p-1 rounded-lg xl:p-3">
                    <CalendarTodayIcon style={{ fontSize: 20, color: 'gray', margin: "4" }} />
                    <h2 className='w-5/6 mx-4 xl:text-xl'>Monday, 14 October 2024</h2>
                    <ArrowBackIcon style={{ fontSize: 20, color: 'gray' }} />  {/* Left Arrow */}
                    <ArrowForwardIcon style={{ fontSize: 20, color: 'gray' }} /> {/* Right Arrow */}
                </div>
                <div className="task flex border-b border-gray-500 p-2 xl:p-4">
                    <div className="time border-r border-gray-400 flex justify-center items-center pr-2 xl:pr-4 xl:text-xl" >11:30 AM</div>
                    <div className="taskname pl-2 xl:pl-4">
                        <div className="top xl:text-xl">live</div>
                        <div className="bottom font-semibold xl:text-xl xl:font-bold">Ux Webinar</div>
                    </div>
                </div>
                <div className="task flex border-b border-gray-500 p-2 xl:p-4">
                    <div className="time border-r border-gray-400 flex justify-center items-center pr-2 xl:pr-4 xl:text-xl" >11:30 AM</div>
                    <div className="taskname pl-2 xl:pl-4">
                        <div className="top xl:text-xl">live</div>
                        <div className="bottom font-semibold xl:text-xl xl:font-bold">Ux Webinar</div>
                    </div>
                </div>
                <div className="task flex border-b border-gray-500 p-2 xl:p-4">
                    <div className="time border-r border-gray-400 flex justify-center items-center pr-2 xl:pr-4 xl:text-xl" >11:30 AM</div>
                    <div className="taskname pl-2 xl:pl-4">
                        <div className="top xl:text-xl">live</div>
                        <div className="bottom font-semibold xl:text-xl xl:font-bold">Ux Webinar</div>
                    </div>
                </div>
                <div className="task flex border-b border-gray-500 p-2 xl:p-4">
                    <div className="time border-r border-gray-400 flex justify-center items-center pr-2 xl:pr-4 xl:text-xl" >11:30 AM</div>
                    <div className="taskname pl-2 xl:pl-4">
                        <div className="top xl:text-xl">live</div>
                        <div className="bottom font-semibold xl:text-xl xl:font-bold">Ux Webinar</div>
                    </div>
                </div>
                <div className="task flex border-b border-gray-500 p-2 xl:p-4">
                    <div className="time border-r border-gray-400 flex justify-center items-center pr-2 xl:pr-4 xl:text-xl" >11:30 AM</div>
                    <div className="taskname pl-2 xl:pl-4">
                        <div className="top xl:text-xl">live</div>
                        <div className="bottom font-semibold xl:text-xl xl:font-bold">Ux Webinar</div>
                    </div>
                </div>


            </div>
        </div>

    </div>
}