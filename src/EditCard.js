import React ,{useState} from 'react';


function EditCard(){
    const [title,setTitle]= useState("find nemo")
    const [author,setAuthor]= useState("smith")
    const [year,setYear]= useState("1997")
    const [page,setPage]= useState("5")
    const onSubmit = (event)=>{
        event.preventDefault()
        console.log({title,author,year,page})
    }
    return (
        <div>

        <form onSubmit={onSubmit}>
       
             <input
                type="text" 
                value={title}
                onChange={(event)=>{
                setTitle(event.target.value)
                }} 
                />
                
             <input
                type="text" 
                value={author}
                onChange={(event)=>{
                    setAuthor(event.target.value)
                    }}
                />
             <input
                type="text" 
                value={year}
                onChange={(event)=>{
                    setYear(event.target.value)
                    }}
                />
             <input
                type="text"
                value={page}
                onChange={(event)=>{
                    setPage(event.target.value)
                    }} 
                />
             <button> Save </button>

            </form>

        </div>
    )
};
export default EditCard;