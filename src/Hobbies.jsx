import Hobby from './Hobby.jsx'

// Higher-order component
function Hobbies({hobbies}) {
    return (
    <div>
        {hobbies.map((hobby, index) => (<Hobby key={index} hobby={hobby} />))}
    </div>
    )
}
  
export default Hobbies
