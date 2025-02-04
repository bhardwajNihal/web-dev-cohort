
// Debouncing is often used in the search bar of popular applications and browsers, 
// Where once the user start typing something, a backend request is sent with those initial letters
// but if the user type some letters more, within a time frame(let say 30ms), then the previous request is cancelled imediately, and a fresh request is sent with the new set of letters

// Simple Debounce logic
    // let timer;      //better to store the global variable using refs, inside the function
    // function backendRequest(){
    //     console.log("request sent to backend");
    // }

    // // though all the request is recieved, the backened is called only once,  and there is only 1 log
    // function debouncedSearch(){
    //     clearTimeout(timer)
    //     timer = setTimeout(() => {
    //         backendRequest()
    //     }, 30);
    // }

    // // request is called multiple time imediately
    // debouncedSearch()
    // debouncedSearch()
    // debouncedSearch()
    // debouncedSearch()
    // debouncedSearch()
    // debouncedSearch()


// useDebounce hook - yet to understand