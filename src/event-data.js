import React from 'react'

export default function eventObject(){

    const onClick = (ev) =>{
        let cal = ev.target.innerText
        let result = eval(cal) //eval ตรวจสอบค่า
        alert(`${cal} = ${result}`)
    }
    return(
    <div>
        <button onClick={(ev) =>onClick(ev)}> 5 * 40 </button>
    </div>
    )
}