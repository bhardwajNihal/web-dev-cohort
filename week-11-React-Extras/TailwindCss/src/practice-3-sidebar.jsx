import MenuIcon from '@mui/icons-material/Menu';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export function SidebarComponent(){

    return <div className="Parent h-svh w-full p-4 bg-gray-100">
        
        <div className="navbar flex justify-between items-center p-4">
            <div className="logo text-2xl font-medium w-40 h-12 flex justify-center items-center rounded-lg bg-blue-500 text-white">Webinar<span className="text-cyan-600">.gg</span></div>
            <div className="menuIcon"><MenuIcon style={{ fontSize: 35}}/></div>
        </div>
        <div className="heroSection">
        <div className="userCard h-72 w-full mt-4 mb-8 bg-white border border-gray-700 rounded-xl flex flex-col gap-3 justify-center items-center">
                <div className="userImage h-32 w-32 bg-red-400 rounded-xl object-cover overflow-hidden"><img src="https://img.freepik.com/premium-photo/beautiful-elegant-female-indian-model-traditional-ethnic_69698-312.jpg" className='h-full w-full' alt="" /></div>
                <div className="details flex flex-col gap-2 text-center flex-wrap">
                <div className="email">prabhleenlovesme3000@gmail.com</div>
                <div className="phone">+91-1234999956</div>
                <div className="location">Delhi, India</div>
                </div>
            </div>
            <div className="greetings">
                <p className='text-lg my-2'>Monday, 14 October</p>
                <h2 className='text-2xl font-medium my-2'>Good morning, Phabhleen 👋</h2>
            </div>
            <div className="Tasksection h-auto w-full border bg-white border-gray-500 p-2 rounded">
                <div className="heading flex bg-gray-100 p-1 rounded-lg">
                <CalendarTodayIcon style={{ fontSize: 20, color: 'gray' }} />
                <h2 className='ml-2 mr-8'>Monday, 14 October 2024</h2>
                <ArrowBackIcon style={{ fontSize: 20, color: 'gray'}} />  {/* Left Arrow */}
                <ArrowForwardIcon style={{ fontSize: 20, color: 'gray' }} /> {/* Right Arrow */}
                </div>
                <div className="task flex border-b border-gray-500 p-2">
                    <div className="time border-r border-gray-400 flex justify-center items-center pr-2" >11:30 AM</div>
                    <div className="taskname pl-2">
                        <div className="top">live</div>
                        <div className="bottom font-semibold">Ux Webinar</div>
                    </div>
                </div>
                <div className="task flex border-b border-gray-500 p-2">
                    <div className="time border-r border-gray-400 flex justify-center items-center pr-2" >11:30 AM</div>
                    <div className="taskname pl-2">
                        <div className="top">live</div>
                        <div className="bottom font-semibold">Ux Webinar</div>
                    </div>
                </div>
                <div className="task flex border-b border-gray-500 p-2">
                    <div className="time border-r border-gray-400 flex justify-center items-center pr-2" >11:30 AM</div>
                    <div className="taskname pl-2">
                        <div className="top">live</div>
                        <div className="bottom font-semibold">Ux Webinar</div>
                    </div>
                </div>
                <div className="task flex border-b border-gray-500 p-2">
                    <div className="time border-r border-gray-400 flex justify-center items-center pr-2" >11:30 AM</div>
                    <div className="taskname pl-2">
                        <div className="top">live</div>
                        <div className="bottom font-semibold">Ux Webinar</div>
                    </div>
                </div>

            </div>
        </div>

    </div>
}