import { useState } from "react"

export function FoodComponents(){
    //initial state as array of elements
    const [food, setFood] = useState(["apple", "orange", "banana", "guava"])

    function addFood(){
        const newFood = document.getElementById("input-food").value
        setFood(food => [...food, newFood])
        document.getElementById("input-food").value = ""
    }
    function removeFood(index){
        setFood(food.filter((_,i)=> {
            return i !== index
        }))
    }

    return <div>
        <h2>List of foods: </h2>
        <ul>
            {/* mapping the array elements into the components */}
        {food.map((food,index) =>
            <li key={index} onClick={() => {removeFood(index)}}>{index} {food}</li>
        )}
        </ul>
        <input type="text" id="input-food" placeholder=" enter food item..."/>
        <button onClick={addFood}>Add Food</button>
    </div>

}