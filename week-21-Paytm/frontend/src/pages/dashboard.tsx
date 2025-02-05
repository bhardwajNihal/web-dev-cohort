import axios from "axios"
import { BACKEND_URL } from "../constants"
import { useEffect, useState } from "react"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"

export function Dashboard() {
    const [currentUserId, setCurrentUserId] = useState()
    const [currentUsername, setCurrentUsername] = useState()
    const [currentbalance, setCurrentBalance] = useState()
    const [allUsers, setAllusers] = useState([])
    const [isSending, setIsSending] = useState(false)
    const [currentBeneficiary, setCurrentBeneficiary] = useState("")
    const [filter, setFilter] = useState("")
    const [sendLoader, setSendLoader] = useState(false)

    const amountRef = useRef();
    const navigate = useNavigate();

    // fetching user-data
    async function fetchUserData() {

        const response = await axios.get(BACKEND_URL + "/api/v1/user/data", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        // console.log(response.data.userId);
        setCurrentUsername(response.data.fullname)
        setCurrentUserId(response.data.userId)
    }


    //fetching user-balance
    async function fetchUserBalance() {
        const response = await axios.get(BACKEND_URL + "/api/v1/account/balance", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        // console.log(response.data);
        setCurrentBalance(response.data.Balance)
    }

    //fetcing all users
    async function fetchAllUsers() {
        const response = await axios.get(BACKEND_URL + `/api/v1/user/bulk?filter=${filter}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        const users = response.data.users;
        const filteredusers = users.filter(user => user.userId != currentUserId)        // make sure current user doesn't see himself in the list of users to send money
        setAllusers(filteredusers)
    }

    //Send money
    async function sendMoney() {
        setSendLoader(true)
        try{const response = await axios.post(BACKEND_URL + "/api/v1/account/transfer", {
            toAccount: currentBeneficiary,
            amount: amountRef.current?.value
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        setIsSending(curr => !curr)
        setSendLoader(false)
        fetchUserBalance()
        alert(response.data.message)
    }catch(error){
        alert(error.response.data.message);   
        setSendLoader(false)
    }
    }


    useEffect(() => {
        fetchUserData();
        fetchUserBalance();
    }, [])

    useEffect(() => {
        if (currentUserId) {          //makes sure, fetchAllUsers is called only once the currentUserId is defined
            fetchAllUsers()
            // console.log(currentUserId);   
        }
    }, [currentUserId])


    // function to capitalize names 
    function capitalizeWord(word: string) {
        if (!word) return word; // Check if word is empty
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    function capitalizeSentence(sentence: string) {
        if (!sentence) return "";
        return sentence
            .split(' ')  // Split sentence into words
            .map(word => capitalizeWord(word))  // Capitalize each word
            .join(' ');  // Join words back into a sentence
    }




    return <div className="parent h-screen w-full px-10 bg-white relative">
        {/*Navbar  */}
        <div className="navbar flex justify-between items-center h-14 border-b border-gray-500">
            <div className="logo text-xl font-bold">jusPAY</div>
            <div className="flex gap-2 items-center">
                <div className="greeting"><span className="text-gray-600">hello, </span>{capitalizeSentence(currentUsername)}</div>
                <div className="avatar bg-gray-300 rounded-full h-8 w-8 flex justify-center items-center text-gray-500">{currentUsername?.charAt(0).toUpperCase()}</div>
            </div>
        </div>

        {/* Balance */}
        <div className="balance text-lg border-b border-gray-500 h-12 w-full sm:w-fit font-mono font-medium flex justify-start items-center mt-2">Your balance : <span className="pl-2 pr-1">$</span><span className="text-2xl">{currentbalance}</span></div>


        {/* Users */}
        <div className="users w-full h-2/3 mt-8">

            <h2 className="font-semibold text-lg mb-2">Users</h2>
            <input className="w-full h-8 border border-gray-400 rounded pl-2" type="text" placeholder="Search users..." />

            {/*users-list  */}
            <div className="mt-2 pt-2 overflow-hidden overflow-y-auto h-[320px]">
                {allUsers.map((user, index) => <div key={index} className="user w-full h-12 bg-gray-100 rounded px-2 flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                        <div className="avatar bg-gray-300 rounded-full h-8 w-8 flex justify-center items-center text-gray-500">{user.fullname?.charAt(0).toUpperCase()}</div>
                        <div className="name">{capitalizeSentence(user.fullname)}</div>
                        <div className="name text-sm text-gray-400 hidden md:block">{user.email}</div>
                    </div>
                    <button className="bg-black text-white rounded text-xs h-8 w-24"
                        onClick={() => {
                            setIsSending(curr => !curr);
                            setCurrentBeneficiary(user.email)
                        }}
                    >Send Money</button>
                </div>)}
            </div>

        </div>

        {/* overlay */}
        {isSending && <div className="overlay h-screen w-full bg-black opacity-60 absolute top-0 left-0 z-20"
            onClick={() => setIsSending(curr => !curr)}
        ></div>}

        {/*Send-modal  */}
        {isSending && <div className="Send-modal h-36 w-72 flex flex-col gap-2 bg-white absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] z-50 rounded p-4">
            <button className="absolute top-0 right-0 px-2 rounded text-xl cursor-pointer hover:bg-gray-200" onClick={() => setIsSending(curr => !curr)}>x</button>
            <h2>To : <span>{currentBeneficiary}</span></h2>
            <input
                className="w-full border border-gray-400 rounded" type="number" placeholder="Enter Amount"
                ref={amountRef}
            />
            <button
                className="bg-black text-white p-1 px-4 rounded mt-2"
                onClick={sendMoney}
            >{(sendLoader) ? "Sending..." : "Send"}</button>
        </div>}


    {/* logout */}
    <button 
    className="bg-black text-white p-1 px-2 rounded absolute bottom-0 left-0 m-4 z-10"
    onClick={async() => {
        localStorage.removeItem("token");
        navigate("/");
        await new Promise(r => setTimeout(r,500))
        alert("You logged out successfully!")
    }}
    >Logout</button>
    </div>
}   