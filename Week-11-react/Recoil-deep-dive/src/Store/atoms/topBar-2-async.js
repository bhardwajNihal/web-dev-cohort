// 2nd approach towards defining the topbar

import { atom, selector } from "recoil";

export const navbarAtom = atom({
    key: 'navbar',

// naive approach
    // default: {
    //     network : 5, 
    //     jobs : 0,
    //     messages : 95,
    //     notifications : 105
    // }

// recommended for the async tasks like fetch requests
// default can be a selector that can carry out async tasks
    default : selector({
        key: 'navRequests',
        get: async() => {
            //fetch requests

            // return res.data
        }
    })


})

export const navbarTotal = selector({
    key : 'navbarTotal',
    get : ({get}) => {
        const navbar = get(navbarAtom);
        return navbar.network + navbar.jobs + navbar.messages + navbar.notifications
    }
})