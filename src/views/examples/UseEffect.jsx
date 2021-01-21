import React, { useState, useEffect } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

function calcFatorial(num) {
    const n = parseInt(num);

    if(n < 0) return -1;
    if(n === 0) return 1;
    return calcFatorial(n - 1) * n
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);
    const [status, setStatus] = useState("Par");
    const [valor, setValor] = useState("Par");

    useEffect(function() {
        setFatorial(calcFatorial(number));
    }, [number])

    useEffect(function() {
        if(fatorial > 10000) document.title = "Eita!!!";
    }, [fatorial])

    useEffect(function() {
        setStatus(valor)
    }, [valor])

    const style = {
        width: "200px"
    }

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01"></SectionTitle>

            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial === -1 ? "Não existe!" : fatorial}</span>
                </div>

                <input type="number" className="input" onChange={(e) => setNumber(e.target.value)} value={number} />
            </div>

            {/*<SectionTitle title="Exercício #02"></SectionTitle>

            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text green">{status}</span>
                </div>

                <select style={style} id="selecao">
                    <option>Par</option>
                    <option>Impar</option>
                </select>

                <button onClick={function() {
                    var selected = document.getElementById("selecao").selectedIndex;
                    var valor;
                    
                    if(selected === 0) valor = "Par";
                    if(selected === 1) valor = "Impar";
{selected == 0 && <div><div>}
                    //console.log(valor);

                    setValor(valor);
                }}
                >Clique aqui!</button>
            </div>*/}

            <SectionTitle title="Exercício #03"></SectionTitle>

            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text green">{status}</span>
                </div>

                <select style={style} onChange={e => setValor(e.target.value)}>
                    <option>Par</option>
                    <option>Impar</option>
                </select>
            </div>
        </div>
    )
}

export default UseEffect
