import './Hero.css'
import arrow from '../../assets/arrow.png'
import pause from '../../assets/pause.png'
import play from '../../assets/play.png'


const hero = ({heroCount, setHeroCount,playStatus, setPlaystatus,herodata}) => {
  return (
    <div className='hero'>
      <div className="herotext">
        <p>{herodata.text1}</p>
        <p>{herodata.text2}</p>
      </div>
      <div className='heroexplore'>
        <p>Explore the features</p>
        <img  src={arrow} alt="" /> 
      </div>
      <div className='heroplay'>
        <ul className="herodots">
          <li onClick={()=>{setHeroCount(0)}} className={heroCount===0?"herodot orange":"herodot"}></li>
          <li onClick={()=>{setHeroCount(1)}} className={heroCount===1?"herodot orange":"herodot"}></li>
          <li onClick={()=>{setHeroCount(2)}} className={heroCount===2?"herodot orange":"herodot"}></li>
        </ul>
        <div className='heroplay'>
          <img onClick={()=>setPlaystatus(!playStatus)} src={playStatus?pause:play} alt="" />
          <p>See the video</p>
        </div>
      </div>
    </div>
  )
}

export default hero
