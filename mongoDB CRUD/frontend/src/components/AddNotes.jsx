import axios from "axios"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
const AddNotes = () => {
const {register, reset, handleSubmit} = useForm()
const [list, setlist] = useState(null)
const submitHandler =async (data)=>{
console.log(data)
const trimmedData = {
    title : data.title.trim(),
    content : data.content.trim()
}
 await addData(trimmedData)
 getData()
reset()
}
const getData =async ()=>{
 await axios.get("http://localhost:3000/notes")
   .then((result) => {
       console.log(result.data)
       setlist(result.data)
    
   }).catch((err) => {
    console.log(err)
   });

}
const addData =async (data)=>{
 await axios.post("http://localhost:3000/notes",data)

}
const render = list?.map((e,index)=>
 
        <li key={index}> { e.title?.length>0 ? e.title : "no title here"}- {e.content?.length>0 ? e.content : "no content here "} </li>
    
)
useEffect(()=>{
    getData()
},[])



  return (
    <>
     <form action="" className=' w-fit  flex  items-baseline-last gap-5 p-10'>
       <div  className=' w-full h-full flex flex-col items-center gap-5'>
         <input className='px-4 py-2 border-2 border-black' 
          type="text"
          {...register('title')}
          placeholder="enter your title here"
          />
        <input className='px-4 py-2 border-2 border-black'
          type="text"
            {...register('content')}
            placeholder="enter your description here "

          />
       </div>
        <button className='px-4 py-2 border-2' onClick={handleSubmit(submitHandler)}   >Add</button>
     </form>
     <ol>
{render}
     </ol>
    </>
  )
}

export default AddNotes
