// Presentational component
function Hobby({hobby}) {
    return (
    <div>
        <h2>{hobby.name}</h2>
        <p>{hobby.description}</p>
    </div>
    )
}

export default Hobby
