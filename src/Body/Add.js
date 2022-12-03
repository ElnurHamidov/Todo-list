import React from 'react';

class Add extends React.Component{
    constructor(props){
        super(props);
        this.id=React.createRef();
    }

    render(){
        return(
            <>
            <div className="addNote">
                <div className='container'>
                    <input type="text" ref={this.id}/>
                    <button  onClick={() => {
                        if(!this.id.current.value) return;
                        this.props.addNote({info: this.id.current.value});
                        this.id.current.value='';
                    }} type="button" className="button"> + </button>
                    <button type='button' className='button-clear button' onClick={() => this.props.deleteNotes()}> Clear All</button>
                </div>
            </div>
            </>
        );
    }
}

export default Add;