import React from 'react';
import Note from './Note';


class Notes extends React.Component{

    render(){
        return(
            <>
            <div className='container'>
                {this.props.notes.map( (e) => <Note edit={this.props.edit} onDelete={this.props.onDelete} key={e.id} note={e}/>)}
            </div>
            
            </>
        );
    }
}

export default Notes;