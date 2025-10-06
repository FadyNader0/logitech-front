import './NavInAnotherPage.css'
import Logo from "../Logo/Logo";
import { AiOutlineMenuFold } from "react-icons/ai"; 
import {useSelector, useDispatch } from 'react-redux'
import { toggleOpenClose } from '../../features/NavBar/Open&Close';

export default function NavInAnotherPage() {
    const dispatch = useDispatch();
    const messagesState = useSelector(state => state.NumberMessages.isNew);

    return (
        <div className="navbar-another flex justify-between items-center">
            <div className="brand flex items-center">
                <Logo />
            </div>
            <div className="barnd-name">
                <h1 className='text-2xl'>Logitech</h1>
            </div>
            <div className="open-nav">
                <AiOutlineMenuFold className="text-2xl" onClick={() => dispatch(toggleOpenClose())}/>
                {messagesState === true && <span className="notification-badge"></span>}
            </div>
        </div>
    );
}
