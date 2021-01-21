import react from 'react'
import { useParams, Link } from 'react-router-dom';
import './Color.css'

const Color = () => {
    const {color} = useParams()
    console.log(color)
    return(
        <div className="Color" style={{backgroundColor:color}}>
            <button><Link to="/colors">Return</Link></button>
        </div>
    )
}

export default Color;