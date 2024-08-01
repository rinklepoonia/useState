 import React, { useState } from 'react'

// function Winning() {
//     const [click, setclick] = useState(false)

//     return (
//         <>
//             {click ? "yes" : "no"}
//             <button onClick={() => setclick(!click)}>click</button>
//         </>
//     )
// }

// function Winning() {
//     const [color, setColor] = useState("blue");
//     return (
//         <>
//             {color}
//             <button onClick={() => setColor("red")} >click</button>
//         </>
//     )
// }

// function Winning() {
//     const [set, setChange] = useState("yes")
//     return (
//         <>
//             <h1>my answer {set}</h1>
//             <button onClick={()=> setChange ("no")} >click</button>
//         </>
//     )
// }

function Winning() {
    const [name, setname] = useState("rinkle")
    return (
        <>
            <h1>my name {name}</h1>
            <button onClick={() => setname("sujata")
            } >chngname</button>
        </>
    )
}
export default Winning
// The first value, color, is our current state.
// The second value, setColor, is the function that is used to update our state.