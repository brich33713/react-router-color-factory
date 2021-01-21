import react, { useState } from 'react'

const AddColor = ({handleClick,handleChange})=>{
    
    return(
       <div>
           <form>
               <label htmlFor="new-color">Color: </label>
               <input type="text" id="new-color" onChange={handleChange}/>
               <button onClick={handleClick}>Add Color</button>
           </form>
       </div> 
    )
}

export default AddColor;