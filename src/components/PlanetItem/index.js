// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {description, imageUrl, name} = planetDetails
  return (
    <div className="planetContainer">
      <img className="image" src={imageUrl} alt={`planet ${name}`} />
      <h1 className="planetName">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}
export default PlanetItem
