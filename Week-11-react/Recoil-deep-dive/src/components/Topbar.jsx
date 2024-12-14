import { useRecoilState, useRecoilValue } from "recoil"
import { navbarAtom, navbarTotal } from "../Store/atoms/topBar-2-async"
import { useEffect } from "react";

export function Topbar(){


    // const networkCount = useRecoilValue(networkAtom)
    // const jobCount = useRecoilValue(jobsAtom)
    // const [messageCount, setMessageCount] = useRecoilState(messageAtom)         //unlike useSetRecoilState this hook give access to both the value of the atom and its setter
    // const notificationCount = useRecoilValue(notificationAtom)
    // const topbarTotal = useRecoilValue(TopbarTotal)


// asynce operations

    const [navbarItems, setNavbarItems] = useRecoilState(navbarAtom);
    const navTotal = useRecoilValue(navbarTotal)

    useEffect(() => {                           // but not the recommended approach  ==> async requests should be handled inside the atoms themselves
        //some fetch request
        //get back the data
        //storing it in the recoil state
    },[])


    return <div>
        <button style={{padding:6, margin:2}}>Network ({(navbarItems.network>100) ? "99+" : navbarItems.network})</button>
        <button style={{padding:6, margin:2}}>Jobs ({navbarItems.jobs})</button>
        <button style={{padding:6, margin:2}}>Messages ({(navbarItems.messages>100) ? "99+" : navbarItems.messages})</button>
        <button style={{padding:6, margin:2}}>Notifications({(navbarItems.notifications>100) ? "99+" : navbarItems.notifications})</button>

        <button style={{padding:8,   margin:3}}>Total ({navTotal})</button>

        <button style={{padding:6, margin:2}} onClick={()=> setNavbarItems((prev) => ({...prev, messages: prev.messages + 1}))}>me</button>
        <button style={{padding:6, margin:2}} onClick={()=> setNavbarItems((prev) => ({...prev, messages: prev.messages - 1}))}>you</button>
    </div>
}