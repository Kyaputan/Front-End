import React, { useState } from 'react';
import FormField from '../components/FormField';


const Contact = () => {
    const [Email, setEmail] = useState('');
    const [Text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('อีเมล:', Email);
        console.log('ข้อความ:', Text);
    };

    const cancel = (e) => {
        e.preventDefault(); // กันไม่ให้ reload
        setEmail('');
        setText('');
      };

    return (
        <div className='container-fluid px-5 my-5'>

            <form onSubmit={handleSubmit}>
                <FormField
                    label="Email address"
                    id="Email"
                    type="Email"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <FormField
                    label="Text"
                    id="Text"
                    type="textarea"
                    value={Text}
                    onChange={(e) => setText(e.target.value)}
                    
                />
                <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
                <button className="btn btn-danger me-md-2" type="button" onClick={cancel}>ยกเลิก</button>
                <button type="submit" className="btn btn-success">ส่ง</button>
                </div>
            </form>

        </div>
    );
};

export default Contact;