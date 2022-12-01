import React from 'react';
import { AiFillEdit, AiOutlineClose } from "react-icons/ai";
import Edit from './Edit';

class Note extends React.Component{
    constructor(props){
        super(props);
        this.state={
            click: false,
        }
        this.change=this.change.bind(this);
    }

    change(){
        this.setState({
            click: !this.state.click,
        })
    }

    render(){
            return(
                <div className='addNote'>
                    <div className='note_item'>
                        <p>
                            {this.props.note.info}
                            
                        </p>
                        <div>
                            <AiFillEdit onClick={() => this.change()} className="icon"/>
                            <AiOutlineClose className='icon' onClick={()=>this.props.onDelete(this.props.note.id)}/>
                        </div>
                        
                    </div>
                {this.state.click && <Edit id={this.props.note.id} onChange={this.change} edit={this.props.edit}/>}
                </div> 
            );
              
    }
}

export default Note;