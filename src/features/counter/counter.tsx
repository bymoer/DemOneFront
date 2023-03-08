import React from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { decrement, increment } from './counterSlice';

export const Counter = () => {
    // The `state` arg is correctly typed as `RootState` already
    const count = useAppSelector(state => state.counter.value)
    const dispatch = useAppDispatch()

    return(
        <>
            <h3>This is the Counter Compoohnent</h3>
            <p>{ count }</p>
            <button onClick={() => dispatch(increment())}>Please Add Some</button>
            <button onClick={() => dispatch(decrement())}>Please Take Some</button>
        </>
    )
}