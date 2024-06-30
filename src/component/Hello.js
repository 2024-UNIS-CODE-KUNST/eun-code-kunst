import World from "./World";
import styles from "./Hello.module.css";

// const Hello = function(){
//     <p>Hello</p>;
// }

// export default Hello;

// const Hello = () => {
//     <p>Hello</p>;
// }

// export default Hello;

function showName(){
    console.log("Mike");
}

function showAge(age){
    console.log(age);
}

function showText(e){
    console.log(e.target.value);
}

export default function Hello(){ 
    return (
        <div>
             <h1> Hello</h1>
            <button onClick = {showName}>Show name</button>
            <button 
                onClick = {() => {
                    showAge(30);
                }}>Show age
            </button>
            <input 
                type = "text"
                onChange = {e => {
                    console.log(e.target.value);
                }}/>
        </div>
    );
}