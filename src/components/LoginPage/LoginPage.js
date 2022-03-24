import { useDispatch, useSelector } from 'react-redux'
import { NavLink, } from 'react-router-dom'
import { LOGIN, PASSWORD } from '../../constants/constants'
import { login, password } from '../../redux/actions/actions'
import './styles.css'

const LoginPage = () => {
    const state = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const handlerLogin = (event) => {
        dispatch(login(LOGIN, event.target.value))
        console.log(state.login)
    }

    const handlerPassword = (event) => {
        dispatch(password(PASSWORD, event.target.value))
        console.log(state.password)
    }

    return (
        <form className="form">
                  <h1>Вход</h1>
            <input className='form__input' onChange={handlerLogin} />
            <input className='form__input' onChange={handlerPassword} />
            <NavLink
                className={`form__link ${
                    state.login === 'qwerty' &&
                    state.password === '123'
                    ? '' 
                    : 'form__link--disabled'
                }`}
                to='/profile'
            >
                    Войти
            </NavLink>
        </form>
    )
}

export default LoginPage