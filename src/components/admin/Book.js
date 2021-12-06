import React from "react";
import BookItem from "./BookItem";
import Input from "./Input";

const Book = () => {
    const getKey = () => Math.random().toString(32).substring(2);
    const [items, setItems] = React.useState([
        { key: getKey(), type: "参考書", title: 'Learn JavaScript', done: 0, total: 600 },
        { key: getKey(), type: "参考書", title: 'Learn React', done: 0, total: 600 },
        { key: getKey(), type: "問題集", title: 'Get some good sleep', done: 0, total: 600 },
    ])
    const handleValueChange=(changed)=>{
        const newItems = items.map(item =>{
            if(item.key===changed.key){
                item.done=changed.done
            }
            return item
        })
        setItems(newItems)
    }

    const handleAdd = (obj) =>{
        obj.key=getKey();
        console.log(obj)
        setItems([...items,obj])
    }
    return (
        <div>
            <h2>ほんたち</h2>
            <div className="panel">
                <Input onAdd={handleAdd} />
                <ul>
                    {items.map(item => (
                        <BookItem key={item.key} item={item} onValueChange={handleValueChange} />
                    ))}
                </ul>
                <div className="panel-block">
                    {items.length} items
                </div>
            </div>
        </div>
    );
};

export default Book;