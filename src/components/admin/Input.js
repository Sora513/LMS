import React from "react";

const Input = ({ onAdd }) => {
    const [title, setTitle] = React.useState('');
    const [type, setType] = React.useState('');
    const [done, setDone] = React.useState('');
    const [total, setTotal] = React.useState('');
    const handleSubmit = (e) => {
        e.preventDefault()
        if(type&&title&&done&&total)
        onAdd({
            type: type,
            title: title,
            done: done,
            total: total
        })
        for (var i = 0; i < e.target.length; i++) {
            e.target[i].value = ""
        }
        setTitle(null)
        setType(null)
        setDone(null)
        setTotal(null)
    }
    const handleTypeChange = e => {
        setType(e.target.value)
    }
    const handleTitleChange = e => {
        setTitle(e.target.value)
    }
    const handleDoneChange = e => {
        setDone(e.target.value)
    }
    const handleTotalChange = e => {
        setTotal(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <select value={type} onChange={handleTypeChange}>
                    <option value="参考書">参考書</option>
                    <option value="問題集">問題集</option>
                    <option value="作るもの">作るもの</option>
                </select>
                <input type="text" placeholder="Title" value={title} onChange={handleTitleChange}></input>
                <input type="number" placeholder="Done" value={done} onChange={handleDoneChange}></input>/<input type="number" placeholder="Total" value={total} onChange={handleTotalChange}></input>
                <button type="submit" >Submit</button>
            </form>
        </div>
    );
};

export default Input;