import { ReactEventHandler } from "react";
import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = ({ onAdd, showAdd }: { onAdd: ReactEventHandler<HTMLButtonElement>, showAdd: boolean }) => {
    const location = useLocation();

    return (
        <header className='header'>
            <h1>Task Tracker</h1>
            {location.pathname === '/' && (
                <Button
                    color={showAdd ? 'red' : 'green'}
                    text={showAdd ? 'Close' : 'Add'}
                    onclick={onAdd}
                />
            )}
        </header>
    )
};

export default Header;