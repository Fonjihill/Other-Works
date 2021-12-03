import "./list.css"
import Card from '../card/Card';


const List = () => {
    return (
        <div className="li">
            <div className="li-texts">
                <h1 className="li-title"> My works</h1>
                <p className="li-desc">

                </p>
            </div>

            <div className="li-list">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            
        </div>
    )
}

export default List
