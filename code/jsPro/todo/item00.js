// Item00 akan menjadi bagian alternative dari App.js. semua perubahan ada disini
// pada pembelajaran dia adalah App.js dan TodoItem.js
import React, { useState } from 'react'
import Item01 from './item01'

function Item00() {
    let [todos, setTodos] = useState([
        {id: 1, name:'appel', completed:false},
        {id: 2, name:'manggo', completed:false},
        {id: 3, name:'banana', completed:false},
]) // ini adalah state update 'setTodos'

    let [title, setTitle] = useState('')

    function toggleCo(todoId) { // efek interaktive
        let abc = todos.map((todo) => {
            if (todo.id === todoId){
                todo.completed = !todo.completed
                alert(todo.name)
            }
            return todo
        })
        setTodos(abc)
    }

    function todoDelete(todoId){ // menghapus element spesifik
        let abc = todos.filter((todoMt) => {
            return todoMt.id !== todoId
        })
        setTodos(abc)
        // todoId menerima parameter dari onclick, dan todoIt adalah pemangilan berkala dari filter
        // filter sama seperti map, dimana dia juga melakukan loop. untuk memastikan semua telah sesuai
        // https://www.digitalocean.com/community/tutorials/js-filter-array-method
    }

    function handleChange(event){ // menerima perubahan sync dari form
        setTitle(event.target.value) // Mengambil nilai dari form real time
        // kita buktikan dengan alert(title)
        }

        function addItem(todoTitle)  { // Fungsi untuk membuat object baru dan memasukan kedalam array todos
            if (todoTitle === '') {
              return ''
            }

            const newTodo = {
              id: todos.length + 1, // mereujuk ke state todos
              name: todoTitle,
              completed: false,
            }

            const updatedTodos = todos.concat(newTodo)
            setTodos(updatedTodos) // merujuk kepada set setting
          }

        function handleSubmit(event){ // melakukan penyimpanan data
            event.preventDefault() // memastikan bahwasanya fitur browser tidak menginterfensi code
            addItem(title) // fungsi setter, dan state
            setTitle('')
        }


return (
<div>

    <form onSubmit={(evet) => {handleSubmit(evet)}}>
                    <h1>Ini adalah formulir (Form: True)</h1>

                    <input
                    title='Email'
                    value={title}
                    onChange={(event) => {handleChange(event)}} // menyimpan input realtime
                    />


                    <input type='submit' value='kirim'/>
                </form>

   <Item01 todos={todos} toggleCo={toggleCo} todoDelete={todoDelete}/>

    </div>
)
}

export default Item00
