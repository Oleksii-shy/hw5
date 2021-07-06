import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getComments} from "../services/API";
import Comment from "../comment/Comment";

export default function Comments() {
    const comments = useSelector(({comments}) => comments);
    const dispatch = useDispatch();

    useEffect(() => {
        getComments().then(value => dispatch({type: 'ADD_COMMENTS', payload: value.data}))
    }, []);
    return (
        <div>
            {comments.map(value => <Comment key={value.id} item={value}/>)}
        </div>
    );
}