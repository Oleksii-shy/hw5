import {createStore} from "redux";
import {Provider} from "react-redux";
import Counter from "../counter/Counter";
import Users from "../users/Users";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Posts from "../posts/Posts";
import Comments from "../comments/Comments";

export default function Reducer() {

    const initialState = {
        counterValue: 0,
        users: [],
        posts: [],
        comments: [],
    }
    const reducer = (state = initialState, action) => {
        switch (action.type) {
            case 'INC': {
                return {...state, counterValue: state.counterValue + 1}
            }
            case 'DEC': {
                return {...state, counterValue: state.counterValue - 1}
            }
            case 'RND': {
                return {...state, counterValue: state.counterValue + action.payload}
            }
            // case 'RND': {
            // let num;
            //     return {...state, counterValue: state.counterValue + (num = +prompt('Enter the number'))}
            // }
            case 'RESET': {
                return {...state, counterValue: 0}
            }
            case 'ADD_USERS': {
                return {...state, users: action.payload}
            }
            case 'ADD_POSTS': {
                return {...state, posts: action.payload}
            }
            case 'ADD_COMMENTS': {
                return {...state, comments: action.payload}
            }
            default:
                return state;
        }
    }
    const store = createStore(reducer);


    return (
        <div>
            <Provider store={store}>
                <Counter/>
                <Router>
                    <div>
                        <div><Link to={'/'}>Home</Link></div>
                        <div><Link to={'/users'}>Users</Link></div>
                        <div><Link to={'/posts'}>Posts</Link></div>
                        <div><Link to={'/comments'}>Comments</Link></div>
                        <Switch>
                            <Route path={'/users'} component={Users}/>
                            <Route path={'/posts'} component={Posts}/>
                            <Route path={'/comments'} component={Comments}/>
                        </Switch>
                    </div>
                </Router>
            </Provider>
        </div>
    );
}