import {useSelector, useDispatch} from "react-redux";
import './Counter.css';

export default function Counter() {
    const counter = useSelector(({counterValue}) => counterValue);
    const dispatch = useDispatch();

    return (
        <div className={'main'}>
            <div className={'numb'}><h1>{counter}</h1></div>
            <div className={'btn'}>
                <button onClick={() => {
                    dispatch({type: 'INC'});
                }
                }>INC
                </button>
                <button onClick={() => {
                    dispatch({type: 'DEC'});
                }
                }>DEC
                </button>
                <button onClick={() => {
                    dispatch({type: 'RND', payload: +prompt('Enter the number')})
                }}>RND
                </button>
                <button onClick={() => {
                    dispatch({type: 'RESET'})
                }
                }>RES
                </button>
            </div>
        </div>
    );
}