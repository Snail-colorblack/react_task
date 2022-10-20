import React, {useState} from 'react';
import Button from './ui/button/button'
import Input from './ui/input/Input'




const Modal = ({active, setActive, Users, setUsers, user, setUser}) => {
    // Hooks

    // Methdods
    const addNewUser = (e) =>{
        e.preventDefault()
        setUsers([...Users, {...user, id:Date.now()}])
        setUser({name: "", iin: "", payment:"", iban:"", tel:"" , status:"",checked:false})
        setActive(false)
      }
    //   View
    return (
        <div className={active ? "Modal _open" : 'Modal'} onClick={() =>  setActive(false)}>
            <div className="Modal__body" onClick={e =>e.stopPropagation()}>
                <form action="get">
                    <Input className='form__input' id='name' placeholder='Имя сотрудника' value={user.name} onChange = {e => setUser({...user, name: e.target.value})}/>
                    <Input className='form__input' id='iin' placeholder='Иин сотрудника' value={user.iin} onChange = {e => setUser({...user, iin: e.target.value})}/>
                    <Input className='form__input' id='payment' placeholder='Зарплата сотрудника' value={user.payment} onChange = {e => setUser({...user, payment: e.target.value})}/>
                    <Input className='form__input' id='iban' placeholder='IBAN сотрудника' value={user.iban} onChange = {e => setUser({...user, iban: e.target.value})}/>
                    <Input className='form__input' id='tel' placeholder='Номер сотрудника' value={user.tel} onChange = {e => setUser({...user, tel: e.target.value})}/>
                    <Input className='form__input' id='status' placeholder='Статус сотрудника' value={user.status} onChange = {e => setUser({...user, status: e.target.value})}/>
                    <Button onClick={addNewUser} className='add__btn'>Добавить</Button>
                </form>
            </div>
        </div>
    );
}

export default Modal;
