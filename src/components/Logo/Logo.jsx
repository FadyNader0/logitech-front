import logo from '../../assets/images/logo.png'
export default function Logo() {
    return (
        <div className="logo-img w-fit m-auto">
            <img src={logo} alt="Logo" width={'35px'} height={'35px'} />
        </div>
    );
}