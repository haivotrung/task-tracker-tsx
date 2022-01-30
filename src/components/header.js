import Button from "./Button";

const Header = ({onAdd, showAdd }) => {
    return (
        <header className='header'>
            <h1>Task Tracker</h1>
            <Button color={showAdd ? 'darkred' :'green'}
                text={showAdd ? 'Close' : 'Add'}
                onclick={onAdd} />
        </header>
    )
};


export default Header;