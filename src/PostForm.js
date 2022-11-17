import React, { useState } from "react";

function PostForm(){
    const url =""
    const [data, setData] = useState({
        link:"",
        title:"",
        group:"",
        description:""
    })

    function submit(e){
        e.preventDefault();
    }

    function handle(e){
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }

    return(
        <div>
            <form onSubmit={(e)=>submit(e)}>
                <input onChange={(e)=>handle(e)} id="link" value={data.link} placeholder="link" type="text"></input>
                <input onChange={(e)=>handle(e)} id="title" value={data.title} placeholder="title" type="text"></input>
                <input onChange={(e)=>handle(e)} id="group" value={data.group} placeholder="group" type="text"></input>
                <input onChange={(e)=>handle(e)} id="description" value={data.description} placeholder="description" type ="text"></input>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default PostForm;