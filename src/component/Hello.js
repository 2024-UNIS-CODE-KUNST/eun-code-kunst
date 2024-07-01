import { useState } from "react";

// Study: state, useState

export default function Hello(){ 
   // let name = "Mike";
    const [name, setName] = useState("Mike"); // 구조 분해 할당


    function changeName(){
        const newName = name === "Mike" ? "Jane" : "Mike"; 
        console.log(name);
        // document.getElementById("name").innerText = name;
        setName(newName);
    }

    return (
        <div>
           <h1>state</h1>
           <h2 id = "name">{name}</h2>
           <button onClick={changeName}>change</button>
        </div>
    );
}