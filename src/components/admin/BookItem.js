const BookItem = ({item,onValueChange}) => {
    const handleChange=(e)=>{
        // console.log(e.target.value)
        item.done=e.target.value
        onValueChange(item)
    }
    return (
        <li>
        <label className="panel-block">
            {item.type} {item.title} <input type="number" value={item.done} onChange={handleChange} />/{item.total}
        </label>
        </li>
    );
};

export default BookItem;