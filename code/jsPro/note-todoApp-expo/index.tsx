import React, { useState } from 'react'
import { View, Text } from 'react-native'
import Home from './components/Home'
import AddNote from './screens/addNote'
import EditNote from './screens/editNote'
import { styles } from './components/Style'



// ====================== New function =====================
function CurrentPageWidget ({ currentPage, noteList, setCurrentPage, setNoteList, addNote, handleDelete, }){
  switch (currentPage) {
    case 'home': // memasukan state "noteList" dan setState "setCurrentPage"
      return (
        <Home
          noteList={noteList}
          setCurrentPage={setCurrentPage}
          handleDelete={handleDelete}
        />
      )
    case 'add': // ubah component pada halaman
      return <AddNote noteList={noteList} setNoteList={setNoteList} setCurrentPage={setCurrentPage} addNote={addNote}/>
    case 'edit': // ubah component pada halaman
      return <EditNote />
    default: // kembali ke component awal saat 'home'
      return <Home />
  }
}


function App(){
  const [currentPage, setCurrentPage] = useState('home') // New state

  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: 'Note pertama',
      desc:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },
  ])

  function addNote(title, desc){
    setNoteList([...noteList,{id: self.crypto.randomUUID(), title:title, desc:desc}])
  }

  function handleDelete(items){ // cari tau id item, dan hapus item
    let abc = noteList.filter((item) => {
      return item.id !== items.id
      // item.id - adalah berasal dari id buah.map() "state asli"
      // items.id - adalah berasal dari id yang ingin dihapus user.
  })
  setNoteList(abc)
  }

  return(
    <View style={styles.zero}>
      
      <View style={styles.main}>

      <CurrentPageWidget
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      noteList={noteList}
      setNoteList={setNoteList}
      addNote={addNote}
      handleDelete={handleDelete}
    />
    
</View>

    </View>
  )
}



export default App;