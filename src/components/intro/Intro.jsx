import './intro.css';
import terenceh from "../../img/terenceh.png"

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h2 className="i-name">Fonji Terence</h2>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">UX/UI Designer</div>
                            <div className="i-title-item">Content Creator</div>
                            <div className="i-title-item">Youtuber</div>
                        </div>
                    </div>
                    <div className="i-desc">
                        I design and develop services for customers of all size, specializing in creating stylish, modern websites, UX/UI Design, Flyers and more other else.
                    
                    </div>
                </div>
            
            
            </div>
            <div className="i-right">
            <div className="i-bg">
            
            </div>
                <img src={terenceh} alt="" className="i-img" />
            
            </div>
        </div>
    )
}

export default Intro
