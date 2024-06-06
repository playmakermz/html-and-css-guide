/* RandomUserList.js */
import React,{ useState, useEffect, createContext } from 'react';
import axios from 'axios'
import ItemList from './ItemList'; // dengan context
import ItemLogo from './ItemLogo'; // tanpa context

//import users from './users.json' // Ambil data JSON manually

export let daftarUser = createContext()

function Logo(){
	return(
		<>
		<h1>Official Website</h1>
		</>
	)
}

function App() {
	const [userList, setUserList] = useState([]);
  /* Menagmbil API online
	useEffect(() => {
		fetch('https://random-data-api.com/api/v2/users?size=5')
			.then(response => response.json())
			.then(data => setUserList(data));
	}, []);
  */

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

	return (
		<div>

			<ItemLogo Logo={Logo}/>
			<h2>Random User List</h2>

			<ul>

<daftarUser.Provider value={{userList, setUserList}}> {/*<========== Dengan Context ============= */}
<ItemList/>
</daftarUser.Provider>
				

			</ul>

		</div>
	);
}

export default App;
