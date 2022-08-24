// Write your code here
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <div testid="planets" className="container">
      <h1 className="heading">PLANETS</h1>
      <Slider>
        {planetsList.map(EachPlanet => (
          <PlanetItem planetDetails={EachPlanet} key={EachPlanet.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
