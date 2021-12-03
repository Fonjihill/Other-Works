import './contact.css'
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'

import { useRef } from 'react'


const Contact = () => {

    const formRef = useRef()

    const handleSubmit = (e) =>{
        e.preventDefault();
        
    }
    return (
        <div className="con">
            <div className="con-bg"></div>
            <div className='con-wrapper'>
                <div className="con-left">
                    <h1 className='con-title'> DM me and let's talk about your project</h1>
                    <div className='con-info'>
                        <div className='con-info-item'>
                            <img
                            src={Phone}
                            alt=""
                            className='con-icon'
                            />
                            +33 666025044 
                        </div>
                        <div className='con-info-item'>
                            <img
                            src={Email}
                            alt=""
                            className='con-icon'
                            />
                             terencehilln@gmail.com
                        </div>
                        <div className='con-info-item'>
                            <img
                            src={Address}
                            alt=""
                            className='con-icon'
                            />
                            225 Avenue Franklin Roosevelt, 69500 Bron, Lyon
                        </div>
                    </div>
                </div>
                <div className='con-right'>
                    <p>

                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder='Name' name='user_name'></input>
                        <input type="text" placeholder='Subject' name='user_subject'></input>
                        <input type="text" placeholder='Email' name='user_email'></input>
                        <textarea rows="5" placeholder='Message' name='message'/>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default Contact
