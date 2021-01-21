import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

const UseState = (props) => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Inicial...");

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01"></SectionTitle>

            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn" onClick={() => setCount(count - 1)}>-1</button>
                    <button className="btn" onClick={() => setCount(count + 1)}>+1</button>
                    <button className="btn" onClick={() => setCount(100)}>100</button>
                    <button className="btn" onClick={() => setCount(current => current + 50)}>+50</button>
                </div>
            </div>

            <SectionTitle title="Exercício #02"></SectionTitle>

            <div>
                <span className="text">{name}</span>
                <input type="text" className="input" onChange={(e) => setName(e.target.value)} value={name}/>
            </div>
        </div>
    )
}

export default UseState
