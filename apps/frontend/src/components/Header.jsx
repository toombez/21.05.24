import { Link } from "react-router-dom";

function Header() {
    return (
        <header
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <div
                style={{
                    aspectRatio: 1,
                    width: 64,
                    borderRadius: '100%',
                    background: 'red'
                }}
            />

            <Link to="/">
                Главная
            </Link>
        </header>
    )
}

export default Header
