import React, { useState } from "react";


const BoxGen = () => {

    // let [color, setColor] = useState("");

    const [boxList, setBoxList] = useState([])
    const [boxColor, setBoxColor] = useState({
        boxColor: ""
    })


    const updatingState = (e)=>{
        setBoxColor({
            ...boxColor,
            [e.target.name]:e.target.value
        })

    }

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log(boxColor);
        setBoxList([
            ...boxList,
            boxColor
        ])

    }



    return (
        <>
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor="">Color:</label>
                <input type="text" className="form-control" onChange={updatingState}  name="boxColor" placeholder=""/>
                <input type="submit" value="ADD" className="btn btn-success" />
            </div>
        </form>
        {boxList.map(box=>{
            return <div className="flex">
                <div style={{
                    backgroundColor:box.boxColor,
                    height:"100px",
                    width:"100px",
                    margin: "5px"
                    }}>
                
                </div>
            </div>
        })}
        </>
    )
}
export default BoxGen