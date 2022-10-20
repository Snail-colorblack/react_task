import React from 'react';
import User from './Users'


const Table = ({Users, setUsers}) => {
    return (
        <div>
        <table className='Table'>
            <tr className='Table__header'>
                <th></th>
                <th>ФИО</th>
                <th>ИИН</th>
                <th>Зарплата</th>
                <th>IBAN</th>
                <th>Номер телефона</th>
                <th>Рассылка приглашений</th>
                <th>Статус</th>
                <th></th> 
            </tr>
            {Users.map(user => 
                <User user={user} key={user.id} Users={Users} setUsers={setUsers}/>    
            )}
        </table>
        </div>
    );
}

export default Table;
