export default function Post({item: {id, title, body}}) {
    return (
        <div>
            {id}. {title}
            <p><i>{body}</i></p>
        </div>
    );
}