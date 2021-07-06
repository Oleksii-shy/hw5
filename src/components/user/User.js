export default function User({item: {id, name}}) {
    return (
        <div>
            {id}. {name}
        </div>
    );
}