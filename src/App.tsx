import React from 'react';
import './App.css';


function App() {
    let users = [
        {name: 'Sasha', age: 32},
        {name: 'Dima', age: 35}
    ]
    // console.log(users)
    let myUser = {name: 'Misha', age: 19}
    let newUsers = [...users, myUser]
    // console.log(newUsers)

    let updateUsers = users.map(el => el.name === 'Dima' ? {...el, age: 40} : el)

    // console.log(updateUsers)


    return (
        <div className="App">

        </div>
    );
}

export default App;
