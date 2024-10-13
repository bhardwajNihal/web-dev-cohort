
// 1. 
    // function greet(user){
    //     return "hello" + " "+user;
        
    // }
    // console.log(greet("amit"));

// 2.
    // let myobj = {
    //     name : "nihal",
    //     age : 20,
    //     gender : "male"
    // }

    // function greet(obj){
    //     if(obj.gender == "male"){
    //         if(obj.age>=18){
    //             return "hello Mr"+ " "+obj.name+". Your are Eligible to vote.";
    //         }
    //         else return "hello Mr"+ " "+obj.name+". Your are NOT Eligible to vote.";
    //     }
    //     else{
    //         if(obj.age >=18){
    //             return "hello Mrs"+ " "+obj.name + ". You are eligible to vote.";
    //         }
    //         else{
    //             return "hello Mrs"+ " "+obj.name + ". You are NOT eligible to vote.";
    //         }
    //     }
    // }
    // console.log(greet(myobj));  


// 3. retrieve only even values from an array

    // let arr1 = [1,2,3,4,5,6,7];

    // // let arr2 = arr1.filter(function(ele){
    // //     return ele%2==0;
    // // })

    // // short notation : 
    // let arr2 = arr1.filter((ele) => ele%2==0);

    // console.log(arr2);


// 4. given an array of users, write a function that returns only those above 18;

    // let userList = [
    //     {
    //         name : "mohan",
    //         age : 23,
    //     },
    //     {
    //         name : "raghav",
    //         age : 17,
    //     },
    //     {
    //         name : "priya",
    //         age : 15,
    //     },
    //     {
    //         name : "shikha",
    //         age : 20,
    //     },
    // ]

    // let Voters = userList.filter((ele) => {
    //     if(ele.age >=18) return ele;
    // })

    // console.log(Voters);


// 5. same as above but return males above 18

    // let userList = [
    //         {
    //             name : "mohan",
    //             age : 23,
    //             gender : "male"
    //         },
    //         {
    //             name : "raghav",
    //             age : 17,
    //             gender : "male"
    //         },
    //         {
    //             name : "priya",
    //             age : 15,
    //             gender : "female"
    //         },
    //         {
    //             name : "shikha",
    //             age : 20,
    //             gender : "female"
    //         },
    //     ]

    // let maleVoters = userList.filter((ele) => {
    //     if(ele.age>=18 && ele.gender == "male") return ele;
    // })

    // console.log(maleVoters);
