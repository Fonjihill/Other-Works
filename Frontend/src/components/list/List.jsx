import "./list.css"
import Card from '../card/Card';
import {image} from "../../data"


const List = () => {
    return (
        <div className="li">
            <div className="li-texts">
                <h1 className="li-title"> My works</h1>
                <p className="li-desc">

                </p>
            </div>

            <div className="li-list">
             {image.map((item) => (
                 <Card key={item.id} img={item.img} link={item.link}/>
             ))}
            </div>

            <div className="li-text">
                <p> For the other projects you can see it on my <a href="https://github.com/Fonjihill?tab=repositories"> GitHub</a> </p>
            </div>
            
        </div>
    )
}

export default List
