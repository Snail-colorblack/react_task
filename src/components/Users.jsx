import React, {useState} from 'react';
import Button from './ui/button/button'

const Users = (data) => {
    // Hooks
    let [disable, setDisable] = useState(true)
    let [values, setValues] = useState({name: data.user.name, iin: data.user.iin, payment:data.user.payment, iban:data.user.iban, tel:data.user.tel, status:data.user.status, checked:false})

    // Methods
    const delUser = () =>{
        data.setUsers(data.Users.filter(index => index.id != data.user.id)) 
    }
    const saveData = (e) =>{
        // console.table(data.user)
        setDisable(true)
        // Да, я в курсе,что это костыль. Я не изменяю данные в data.Users через setUsers() У меня постоянно крашилось с ошибкой non litereble хотя я загуглил решение и сделал по аналогии.
    }

    // {...data.user, checked: e.target.checked} //изменение checked у элемента для удаление всех выбранных
    // View
    return (
        <tr className='Table__body' key={data.user.id}>
            <td className='user__select'><input type="checkbox" id="select__user" name="select__user"/></td>
            <td className='user__name'><textarea placeholder="Имя" type="text" value ={values.name}disabled={disable ? 'disabled' : ''} onChange={e => setValues({...data.users, name: e.target.value})}/></td> 
            <td className='user__iin'><textarea placeholder="Иин" type="text" value={values.iin} disabled={disable ? 'disabled' : ''} onChange={e => setValues({...data.users, iin: e.target.value})}/></td>
            <td className='user__payment'><textarea placeholder="Зарплата" type="text" value={values.payment} disabled={disable ? 'disabled' : ''} onChange={e => setValues({...data.users, payment: e.target.value})}/> </td>
            <td className='user__iban'><textarea placeholder="IBAN" type="text" value={values.iban} disabled={disable ? 'disabled' : ''} onChange={e => setValues({...data.users, iban: e.target.value})}/> </td>
            <td className='user__tel'><textarea placeholder="Телефон" type="text" value={values.tel} disabled={disable ? 'disabled' : ''} onChange={e => setValues({...data.users, tel: e.target.value})}/> </td>
            <td className='user__invite'><Button>Отправить СМС</Button></td>
            <td className='user__status'><textarea placeholder="Статус" type="text" value={values.status} disabled={disable ? 'disabled' : ''} onChange={e => setValues({...data.users, status: e.target.value})}/> </td>
            <td className='user__btns'>
                {disable ? <Button className='edit__btn' onClick={()=>setDisable(false)}>/\</Button> : <Button className='edit__btn' onClick={saveData}>Ok</Button>} 
                <Button className='del__btn' onClick={delUser}>X</Button>
            </td>
        </tr> 
    );
}

export default Users;
