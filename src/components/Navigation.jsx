const Navigation = ({ items, setItems, selected, setSelected }) => {
    
    const deleteItem = () => {
        if (selected.length > 0) {
            const newItems = items.filter((item,index) => !selected?.includes(index));
            setItems(newItems);
            setSelected([])
        }
    };

    return (
        <div className="row">
            <div className="d-flex align-items-center justify-content-between">
                <h6>
                    <input checked={selected.length > 0 ? true : false} type="checkbox" className="me-2 outline-none" /> {selected.length} selected files
                </h6>

                <button onClick={deleteItem} className="btn btn-link text-decoration-none text-danger text-bold">
                    Delete files
                </button>
            </div>
        </div>
    );
}

export default Navigation;