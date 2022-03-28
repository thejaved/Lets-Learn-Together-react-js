import React from 'react';
import './Pages_Elements.css'
const Pages_Elements = ({page_title,page_content}) => {
    return (
        <div className='Pages_Elements'>
            <h2>{page_title}</h2>
            <p>{page_content}</p>
        </div>
    )
}
export default Pages_Elements;
