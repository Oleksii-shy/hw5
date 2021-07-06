export default function Comment({item: {id, email, body}}) {
    return (
        <div>
            {id}. <b>{email}</b>
            <p><i>{body}</i></p>
        </div>
    );
}