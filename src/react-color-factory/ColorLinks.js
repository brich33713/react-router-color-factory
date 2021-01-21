import react from 'react'
import { Link } from 'react-router-dom';

const ColorLinks = (props) => {
    let colors = []
    props.colors.map(color => colors.push({name: color,link: `/colors/${color}`}))
    return (
        <div>
            {colors.map(color => <p><Link to={color.link}>{color.name}</Link></p>)}
        </div>
    )
}

export default ColorLinks;