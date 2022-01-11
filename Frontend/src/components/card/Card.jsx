import './card.css'


const Card = ({img, link}) => {
    return (
        <div className='c'>
            <div className='c-browser'>
                <div className='c-circle'></div>
                <div className='c-circle'></div>
                <div className='c-circle'></div>
                
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <img scr={img} alt="" className='c-img'/>
            </a>

          
        </div>
    )
}

export default Card
