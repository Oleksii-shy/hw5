import {useEffect} from "react";
import {getUsers} from "../services/API";
import User from "../user/User";
import {useDispatch, useSelector} from "react-redux";

export default function Users() {
    const users = useSelector(({users}) => users);
    const dispatch = useDispatch();
    useEffect(() => {
        getUsers().then(value => dispatch({type: 'ADD_USERS', payload: value.data}))
    }, []);
    return (
        <div>
            {users.map(value => <User key={value.id} item={value}/>)}
        </div>
    );
}