// Item todos, mereka yang akan menampilkan item satu demi satu
// pada pembelajaran ini adalah Todos.js

function Todos({todos, toggleCo, todoDelete,}) {

  function staUp(todo){
    if (todo.completed === true) {
      return { textDecoration: 'line-through' }
    } else {
      return { textDecoration: 'none' }
    }
}

    return (
        <div>
          {todos.map((todo) => {
            let itemSp = (
                <div className="inCh">

                <input type="checkbox"  className=""
                onChange={() => toggleCo(todo.id) }
                />
            <p key={todo.id} style={staUp(todo)}>{todo.name}</p>

              <button onClick={() => todoDelete(todo.id)}>X</button>
              {/* ================= function baru ===============*/}

          </div>
          )
            return itemSp
            })}
        </div>
      )
}

export default Todos
