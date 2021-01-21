import react, { useState } from 'react'
import { Link, Route } from 'react-router-dom'
import AddColor from './AddColor'
import ColorLinks from './ColorLinks'

const Colors = (props) => {
    const [colorSet,addColor] = useState(props.colors)
    const [view,ChangeView] = useState(true)

    const [input,changeInput] = useState()
    
    function handleChange(e){
        changeInput(e.target.value)
    }
    
    function handleClick(e){
        e.preventDefault()
        ChangeView(!view)
        if(!view){
            addColor(colorSet => [input,...colorSet])
        }
    }
    
    return(
        <div>
            <h1>Welcome to the color factory.</h1>
            {view && 
                <div>
                    <h1><Link exact to="/colors/new" onClick={handleClick}>Add a color</Link></h1>
                    <ColorLinks colors={colorSet} />
                </div>
            }
            {!view && <AddColor handleClick={handleClick} handleChange={handleChange} />}
        </div>
    )
}

Colors.defaultProps = {colors: ["red","green","blue"]}

export default Colors;

