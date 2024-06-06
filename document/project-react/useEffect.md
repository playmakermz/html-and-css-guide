# useEffect 

## React Hook?

mereka adalah fitur baru yang ditambahkan pada React 16.8 ke atas, dimana dengan 'React Hooks' kita bisa mengunakan 'state' dan fitura lain pada React, tanpa perlu menulis suautu class. Dengan "React hooks" kita bisa membuat component dengan lebih mudah dan effisien. 

Ref: https://react.dev/reference/react/hooks

## React useEffect?

mereka adalah fungsi hook dimana dengan bantuan 'useEffect', kita bisa melaksanakan tugas side effect didalam fungsi. 

Side effect disini adalah sebuah operasi yang tidak memerlukan rendering component, seperti pemangilan API, time, dan lain-lain. 

### Contoh useEffect (Jalankan effect, setiap kali terjadi render)
dimana pada contoh ini akan dilakukan rendering "useEffect" setiap kali terjadi proses render. 

```JS
function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I have rendered {count} times!</h1>;
}
```

### contoh useEffect (Dijalankan hanya sekali)

```JS
function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []); // <==== Indikator, 

  return <h1>I have rendered {count} times!</h1>;
}
```

- `[]` - 'useEffect' akan melakukan pengecekan terhadap perubahan pada `array`, jika terdapat perubahan maka jalankan 'useEffect'

### contoh useEffect (Dijalankan disaat tertentu)
**Event Listener**

```Js
import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState

  useEffect(() => {
        setCalculation(count * 2)
  }, [count]); // <==== Indikator, 

  return (
  <div>
    <p> Count: {count} </p>
    <p> Calculation: {calculation} </p>
    <button onClick={() => setCount((c) => c + 1)}>+</button>
  </div>
  )
}

```

Pada code diatas, `useEffect` akan dijalankan disaat kita melakukan perubahan data pada `count`.

Ref: https://www.w3schools.com/react/showreact.asp?filename=demo2_react_useeffect_settimeout3

Contoh ini adalah bentuk dari "Event Listener" dimana ini akan menerima dan memproses bagaimana seorang user melakukan interaksi.

## Data fetching

Event Listener dapat digunakan untuk membantu kita melakukan pengambilan data. Seperti mengambil dari API dan melakukan update kepada state berdasarkan data yang diambil. 

```Js
/* RandomUserList.js */
import React,
{
	useState,
	useEffect
} from 'react';

function RandomUserList() {
	const [userList, setUserList] = useState([]);

	useEffect(() => {
		fetch('https://random-data-api.com/api/v2/users?size=5')
			.then(response => response.json())
			.then(data => setUserList(data));
	}, []);

	return (
		<div>
			<h2>Random User List</h2>
			<ul>
				{userList.map(user => (
					<li key={user.id}>
						<p>
							Name:
							{user.first_name}
							{user.last_name}
						</p>
						<p>
							Email:
							{user.email}
						</p>
						{/* Add more user data fields as needed */}
					</li>
				))}
			</ul>
		</div>
	);
}

export default RandomUserList;
```
- `fetch` - digunakan untuk mengambil data dari alamat yang diberikan.
- `then[0]` - digunakan untuk mengambil data, dan melakukan proses ke json
- `then[1]` - digunakan untuk menyimpan data json tersebut kedalam state

ref: https://www.geeksforgeeks.org/fetching-data-from-an-api-with-useeffect-and-usestate-hook/

***
# API 
***

## melakukan penambilan API, local atau online 

```Js 
/* RandomUserList.js */
import React,{ useState, useEffect} from 'react';

import users from './users.json' // Ambil data JSON manually


function App() {
	const [userList, setUserList] = useState(users);

  /* Menagmbil API online
	useEffect(() => {
		fetch('https://random-data-api.com/api/v2/users?size=5')
			.then(response => response.json())
			.then(data => setUserList(data));
	}, []);
  */

	return (
		<div>
			<h2>Random User List</h2>
			<ul>
				{userList.map(user => (
					<li key={user.id}>
						<p>
							Name:
							{user.first_name}
							{user.last_name}
						</p>
						<p>
							Email:
							{user.email}
						</p>
						{/* Add more user data fields as needed */}
            <p>
              Skill:  
              {user.employment.key_skill}
            </p>
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;

```

- Untuk menyimpan data json, kita bisa akses link API, lalu click `save as` Dimana kita akan menyimpan file "json" tersebut didalam 'src'. 

## axios 

didalam proses pembuatan app yang membutuhkan app, disini kita memerlukan sebuah tool untuk menerima data, dan memiliki cara untuk melakukan testing kepada sumber API original sedikit saja. 

oleh karena itu, kita akan menyimpan file JSON local untuk media pembelajaran.

[Apa itu axios?](../../document/project-react/Api-Axios.md)

```Js
/* RandomUserList.js */
import React,{ useState, useEffect, } from 'react';
import axios from 'axios'

//import users from './users.json' // Ambil data JSON manually


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
			<h2>Random User List</h2>
			<ul>
				{userList.map(user => (
					<li key={user.id}>
						<p>
							Name:
							{user.first_name}
							{user.last_name}
						</p>
						<p>
							Email:
							{user.email}
						</p>
						{/* Add more user data fields as needed */}
            <p>
              Skill:  
              {user.employment.key_skill}
            </p>
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;

```
- simpan file JSON, didalam `public` folder

ref: 
- https://akhtarvahid.medium.com/how-to-access-fetch-the-local-json-file-to-react-5ce07c43731d 
- https://stackoverflow.com/questions/54224164/trouble-getting-local-json-data-with-axios

