import React from 'react';

class Edit extends React.Component{
    constructor(props){
        super(props);
        this.id=React.createRef();
    }

    render(){
        return(<>
            <input ref={this.id} type='text'/>
            <button onClick={ () => {
                if(!this.id.current.value) return;
                this.props.edit(this.props.id, this.id.current.value);
                this.id.current.value='';
                this.props.onChange();
                }} type='button' className='button'>Edit</button>     
        </>);
    }
}

export default Edit;