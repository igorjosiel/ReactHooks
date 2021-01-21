import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle';
import UseCallbackButton from '../examples/UseCallbackButton';

const UseCallback = (props) => {
    const [count, setCount] = useState(0);

    const inc = useCallback(function (delta) {
        setCount(current => current + delta);
    }, [setCount]);

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />

            <div className="UseCallback">
                <span className="text">{count}</span>

                <UseCallbackButton inc={inc}></UseCallbackButton>
            </div>
        </div>
    )
}

export default UseCallback
