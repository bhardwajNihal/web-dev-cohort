
React in more depth, some intermediate concepts like:
1. Single page applications
2. Routes in react
3. using link, and navigate, 
4. useRef hook, and its various usecases
5. Timer component with start and stop functionality
6. different approaches towards setting up a timer component, and why useRef provides the most optimal approach
     
    there can be 3 approaches to store the value of the setinterval, in order to clear it.
        1. simply initializing a variable 
            // let intervalId = null     --->  // but its value is not persisted accross rerenders, so it value is set to null on every re-render, thus the condition to clear it is never met

        2. using useState to store it value    --> but this approach is redundant as the component is nowhere rendered onto the page, so no need to re-render, as it makes the project less optimal
            // let [intervalId , setIntervalId] = useState(null)

        3. using useRef,    ---> the best approach, the value is persisted behind the scene, without re-renders
