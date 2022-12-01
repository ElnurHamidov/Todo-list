import React from 'react';

class Header extends React.Component{


    render(){
        return(
        
            <div className="header">
                <div className='container'>
                    <p style={{fontWeight: 'bold', fontSize: '20px'}}>To-Do List</p>
                </div>
            </div>
        
        );
    }
}

export default Header;