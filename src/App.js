import './App.css';
import React from 'react';
import Header from './Header/Header';
import Add from './Body/Add';
import Notes from './Body/Notes';
import Footer from './Footer';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      notes: [],
    }
    this.addNote=this.addNote.bind(this);
    this.deleteNote=this.deleteNote.bind(this);
    this.deleteAll=this.deleteAll.bind(this);
    this.editNote=this.editNote.bind(this);
  }

    addNote(e){
    let obj=e;
    obj.id=this.state.notes.length + 1;
    let arr=this.state.notes.slice();
    arr.push(obj);
    this.setState({
      notes: arr,
    });
    console.log(this.state.notes);
};

    deleteNote(id){
      let arr=this.state.notes.filter((e) => e.id!==id);
      this.setState({
        notes: arr,
      });
    }

    deleteAll(){
      this.setState({
        notes: [],
      })
    }

    editNote(id, obj){
      let arr=this.state.notes.map((e, i) =>{
        if(i+1 !==id) {
          return e;}
          else{
            return {id, info: obj}
          }
      });
      this.setState({
        notes: arr,
      })
    }

  render(){
  return (
    <div className='wrapper'>
    <Header />
    <div className="main">
      <Add deleteNotes={this.deleteAll} addNote={this.addNote}/>
      <Notes onDelete={this.deleteNote} notes={this.state.notes} edit={this.editNote}/>
    </div>
    <Footer />
    </div>
  );

  
 }
}

export default App;
