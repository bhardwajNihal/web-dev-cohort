
interface paramType{
    params : {userId : string}
}

// way to catch dynamic route 

export default function dashboard({params}:paramType){

    const {userId} = params;
    console.log(userId);
    

    return <div>
        <h2>Hello user {userId}</h2>
    </div>
}