import React, {useState} from 'react'
// Components
import Header from './components/header'
import Table from './components/table'
import Modal from './components/modal'
// Style
import './style/style.css'
// UI-components


function App() {
 // Hooks
 let [ModalActive, setModalActive] = useState(false)
 const [Users, setUsers] = useState([
   {"id": 0, "name": "Имя Фамилия Отчество", "iin": "000000000000", "payment":"100000", "iban":"000000000000", "tel":"+7 (777)777 7 77" , "status":"", checked:false},
   {"id": 1, "name": "Имя Фамилия Отчество", "iin": "010101010101", "payment":"110000", "iban":"101010101010", "tel":"+7 (707) 787 87 78" , "status":"", checked:false},
   {"id": 2, "name": "Имя Фамилия Отчество", "iin": "111111111111", "payment":"20000", "iban":"111111111111", "tel":"+7 (707) 888 88 78" , "status":"", checked:false}
 ]);
//  Я не стал делать через axios. Принцип работы почти такой-же, но нагрузка больше.
 const [user, setUser] = useState({name: "", iin: "", payment:"", iban:"", tel:"" , status:"", checked:false})

  // Methods
  
  // View
  return (
    <div className="App">
      <Header setActive={setModalActive} Users={Users} setUsers={setUsers}/>
      <Table Users={Users} setUsers={setUsers}/>
      <Modal active={ModalActive} setActive={setModalActive} Users={Users} setUsers={setUsers} user={user} setUser={setUser}/>
    </div>
  );
}

export default App;
