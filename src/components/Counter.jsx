import { useDispatch, useSelector } from "react-redux";
import { actions } from "../features/counter";

const Counter = () => {
    const value = useSelector( state => state.counter)
    const dispatch = useDispatch();

    const increase = () => dispatch(actions.increase());
    const decrease = () => dispatch(actions.decrease());

    return (
        <div>
            Value: {value} <br/>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    )
}

export default Counter;