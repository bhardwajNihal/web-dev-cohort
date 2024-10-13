import { useDebugValue, useEffect, useState } from "react"
import { PostComponent } from "./post"
import { FoodComponents } from "./React-arrayMap"

function App() {
  
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

  return (
    //each component has their own state variable, that changes , and components get re-rendered separately
    <div >

        <div>{PostComponents}</div>
        <button onClick={addPosts} style={{position:"fixed", top:100, left:200, padding:10, borderRadius:10}}>Add posts</button>

        {/* <ToggleMessage /> */}
        <Notification />
    </div>
    
  )

}
// components

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
    // useEffect(() => {
    //   return()=>{
    //     if (currentInterval !== null) {
    //       console.log("current interval is not null, now cleanup is needed on component unmount");
          
    //       clearInterval(currentInterval); // Cleanup any active intervals
    //     }
    //   };
    // }, [currentInterval]); // The cleanup function will run when intervalId changes or component unmounts

    return (
      <div>
        <div
          className="notificationCount"
          style={{
            position: "absolute",
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
          style={{ height: 30, width: 38, position: "absolute", top: 105, left: 100 }}
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


export default App
