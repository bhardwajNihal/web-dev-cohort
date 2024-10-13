import { useDebugValue, useEffect, useState, useTransition } from "react"
import { PostComponent } from "./post"
import { FoodComponents } from "./React-arrayMap"

function App() {
  
  

  return (
    //each component has their own state variable, that changes , and components get re-rendered separately
    <div >

        {/* < Posts/> */}
        {/* <Notification /> */}

        {/* <ToggleMessage /> */}
          
        {/* <Count /> */}

        <Navbar />
    </div>
    
  )

}
// components

function Posts(){
  const Initialposts = [
    {
      name: "Nihal Bhardwaj",
      followerCount: "2000 followers",
      time: "5m ago",
      image: "https://tse1.mm.bing.net/th?id=OIP.CXIzjyEMYXMFhj1Mt9UFcAHaE9&pid=Api&P=0&h=180",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad dicta ab mollitia aspernatur dolore commodi quo soluta necessitatibus suscipit ea.",
    },
    
    {
      name: "Ayush Verma",
      followerCount: "promoted",
      image: "https://tse1.mm.bing.net/th?id=OIP.CXIzjyEMYXMFhj1Mt9UFcAHaE9&pid=Api&P=0&h=180",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad dicta ab mollitia aspernatur dolore commodi quo soluta necessitatibus suscipit ea.",
    },
  ]

  const [postcontent, SetPost] = useState(Initialposts)

  function addPosts(){
    const newPost = {
        name: "Vivek",
        followerCount: "1000 followers",
        time: "10m ago",
        image: "https://tse1.mm.bing.net/th?id=OIP.CXIzjyEMYXMFhj1Mt9UFcAHaE9&pid=Api&P=0&h=180",
        description: "Lpernatur dolore commodi quo soluta necessitatibus suscipit ea.",
      }
    SetPost(postcontent => [...postcontent, newPost])
  }

  const PostComponents = postcontent.map(post => <PostComponent
    name={post.name}
    followerCount={post.followerCount}
    time={post.time}
    image={post.image}
    description={post.description} /> )

    return <div>
      <div>{PostComponents}</div>
      <button onClick={addPosts} style={{position:"fixed", top:100, left:200, padding:10, borderRadius:10}}>Add posts</button>
    </div>
}


function ToggleMessage(){

  // usestate
  let [isVisible, changeVisibility] = useState(true)

  function toggle(){
    changeVisibility(!isVisible)
  }

  return <div>
  <button onClick={toggle}>toggle</button>
  {isVisible && <h1>this is message is conditaionally rendered</h1>}    
  </div>                                                                // Conditional rendering
}


// Notification Component:

  function Notification() {
    const [currentNotificationCount, setNotificationCount] = useState(0);
    const [currentInterval, setCurrentInterval] = useState(null); // state to store current interval

    // Function to start notifications
    function increaseNotificationCount() {
      // Avoid setting multiple intervals
      if (currentInterval === null) {             // if the setinterval is not invoked
        console.log("interval was not active and now has been invoked");
        
        const interval = setInterval(() => {
          setNotificationCount((currentNotificationCount) => currentNotificationCount + 1);
        }, 200);
        setCurrentInterval(interval); // Save the interval to state
      }
    }

    // Function to stop notifications
    function stopNotification() {
      if (currentInterval !==null) {
        console.log("setInterval was active, and now has been stopped");
        
        clearInterval(currentInterval); // Clear the interval
        setCurrentInterval(null); // Reset the currentInterval state
      }
    }

    // Cleanup the interval on component unmount
    useEffect(() => {
      return()=>{
        if (currentInterval !== null) {
          console.log("current interval is not null, now cleanup is needed on component unmount");
          
          clearInterval(currentInterval); // Cleanup any active intervals
        }
      };
    }, [currentInterval]); // The cleanup function will run when intervalId changes or component unmounts

    return (
      <div>
        <div
          className="notificationCount"
          style={{
            position: "fixed",
            top: 103,
            left: 117,
            zIndex: 10,
            backgroundColor: "red", 
            paddingLeft: 4,
            paddingRight: 4,
            borderRadius: 30, 
            color: "white",
          }}
        >
          {currentNotificationCount}
        </div>
        <img
          style={{ height: 30, width: 38, position: "fixed", top: 105, left: 100 }}
          src="https://flyclipart.com/thumb2/bell-icon-png-and-vector-for-free-download-545512.png"
          alt="Notification bell"
        />
        <button onClick={increaseNotificationCount} style={{ padding: 5 }}>
          START sending Notification
        </button>
        <button onClick={stopNotification} style={{ padding: 5 }}>
          STOP sending Notification
        </button>
      </div>
    );
  }

// Dependency Array:
  function Count(){
    
    const [count1, setcount1] = useState(0)
    const [count2, setcount2] = useState(0)

    useEffect(()=>{
      setInterval(() => {
        setcount1(count1 => count1 + 1)
      }, 1000);
    },[])

    useEffect(()=>{
      setInterval(() => {
        setcount2(count2 => count2 + 1)
      }, 5000);
    },[])

// Dependency array takes that component as an argument, which triggers an action on being re-rendered
    useEffect(()=>{
      console.log("page reloaded!!!");    
    },[])                     // empty array depicts that any action is performed only once when the component is mounted or when the page reloads


    useEffect(()=>{
      console.log("count 1 changed");     //gets logged everytime count1 get re-rendered
    },[count1])

    useEffect(()=>{
      console.log("count 2 changed");       //gets logged everytime count2 get re-rendered
    },[count2])

    useEffect(()=>{
      console.log("one of the count changed this time!!!!");       //gets logged everytime either of count get re-rendered
    },[count1,count2])

    return <div>
      <h3>count1 : {count1}</h3>
      <h3>count2 : {count2}</h3>
    </div>
  }

//Navbar component:
function Navbar(){
  const[currentTab, setCurrentTab] = useState()
  const[responseData, SetResponseData] = useState()
  const[IsLoading, setLoader] = useState()

  function changeTab(id){
    setCurrentTab(id)
  }  
// Thus we can run side effects whenever a particular element is clicked like - API request, some js logic, etc 
  useEffect(()=>{
    if(currentTab){
      console.log("request send to the backend when clicked", currentTab);
    }

    setLoader(true)
  fetch(`https://jsonplaceholder.typicode.com/todos/${currentTab}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      SetResponseData(data.title) 
    })
    .then(() => setLoader(false))

  },[currentTab])

  return <div>
  <div style={{display:"flex", gap:5}}>
   <button onClick={() => changeTab(1)} style={{padding:8, color : currentTab==1 ? "red" : "black"}}>Feeds</button>
    <button onClick={() => changeTab(2)} style={{padding:8 ,color : currentTab==2 ? "red" : "black"}} >Notifications</button>
    <button onClick={() => changeTab(3)} style={{padding:8,color : currentTab==3 ? "red" : "black"}}>Messages</button>
    <button onClick={() => changeTab(4)} style={{padding:8,color : currentTab==4 ? "red" : "black"}}>Jobs</button>
  </div>
  {currentTab &&<div style={{width:500,backgroundColor:"#ddd", margin:10}}><h2>title :{(IsLoading) ? "loading..." : responseData} </h2></div>}
  </div>
}
  

export default App
