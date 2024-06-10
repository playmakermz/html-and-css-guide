/* RandomUserList.js */
import React,{ useState, useEffect,} from 'react';
import axios from 'axios'
//import users from './users.json' // Ambil data JSON manually




function App() {
	const [userList, setUserList] = useState([]) // Menyimpan data JSON
  const [formInput, setFormInput] = useState('') // Menyimpan data form
  const [formEx, setFormEx] = useState(false) // Menampilkan form atau tdk
  const [itemId, setItemId] = useState(null) // menyimpan id
  /* Menagmbil API online
	useEffect(() => {
		fetch('https://random-data-api.com/api/v2/users?size=5')
			.then(response => response.json())
			.then(data => setUserList(data));
	}, []);
  */

  // Data Api akan diambil sekali
  useEffect(() => { // Ambil API secara sementara.
    axios  // axios adalah bentuk dari "Promise".
      .get('users.json')
      .then((response) => {
        setUserList(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])


  // ============= Update Form ===========
  function Formm(){
    return(
      <form onSubmit={(event) => {HandleUpdate(event)}}>
        <h2>Update Form Arrive</h2>
        <input value={formInput} type='text' onChange={(event) => {HandleChange(event)}}/>

        <input type='submit' value='Update'/>
      </form>
    )
  }

  // ============= HandleChange ============
  function HandleChange(event){
    setFormInput(event.target.value)
  }

  // ========= HandleForm ===========
  function HandleForm(input){ // Bertugas untuk menerima data id
    if(formEx === false){ // Memunculkan form
      setFormEx(true)
    }
    else{
      setFormEx(false)
    }

    setItemId(input) // Simpan data kedalam "ItemId", agar fungsi HandleForm tidak dijalankan dua kali
  }

  // ============ Handle Update ===========
  function HandleUpdate(event){
    console.log(`input handel: ${itemId}`)
    event.preventDefault()
    let abc = userList.map((item) => {
      if (item.id === itemId) {
        return {...item, username: formInput }
      }
      else{
        return item
      }
    })
    setFormInput('')
    setItemId(null)
    setFormEx(false)
    setUserList(abc)
  }

// ============== HandleDelete =================
  function HandleDelete(input){
    let abc = userList.filter((item) => {
      return item.id !== input
    })

    setUserList(abc)
  }

  // ======== Main Return App() ===============
	return (
		<div className='appContainer'>
      <div className='appSubtitute'>

<h2>Random User List</h2>

{formEx? Formm() : ''}

<ul>

{userList.map(user => (
      <li key={user.id}>
          <p>
              UserName  :
              {user.username}
          </p>
          <p>
              Name  :
              {user.first_name}
              {user.last_name}
          </p>
          <p>
              Email  :
              {user.email}
          </p>
          {/* Add more user data fields as needed */}
  <p>
  Skill:
  {user.employment.key_skill}
  </p>
  <button onClick={() => {HandleForm(user.id)}}>User Name Update</button>
  <br />
  <button onClick={() => {HandleDelete(user.id)}}>Delete</button>
  <br/>
  <br/>
      </li>
  ))}

</ul>

</div>
    </div>
	);
}

export default App;
