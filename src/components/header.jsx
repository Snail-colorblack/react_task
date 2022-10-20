import React from 'react';
import Button from './ui/button/button'


const Header = ({setActive}) => {
    // Methods
    // const delUsers = ()=>{

    // }

    return (
        <div className='Header'>
            <input className='search__input' type="search" name="search" id="search" placeholder='Поиск сотрудника'/>
            <div className="header__btns">
                <Button className='del__btn' onClick={()=>alert('Error (Не изменяется state в Users.jsx)')} >Удалить сотрудника</Button>
                <Button className='add__btn' onClick={() =>  setActive(true)}>+ Добавить сотрудника</Button>
            </div>
        </div>
    );
}

export default Header;
