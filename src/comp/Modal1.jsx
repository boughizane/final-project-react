import React from 'react'

const Modal1= ({setshow,el}) => {
  return (
    <div className='modal'>
        <div className='box_modal'>
            <button  className='x' onClick={()=>setshow(false)}>X</button>
            
            <h2>{el.batteryname}</h2>
            <img src={el.batteryimg}/>
            <a href={el.batterylink}>Battery</a>
            <img src={el.airfilter}/>
            <a href={el.airfilterlink}>Airfilter</a>
            <img src={el.lights}/>
            <a href={el.lightlink}>Light</a>
            <img src={el.Fuse} />
            <a href={el.fuselink}>Fuse</a>
            <img src={el.oil} />
            <a href={el.oilink}>Oil</a>
            <img src={el.aircond} />
            <a href={el.aircondlink}>Air condotional</a>
            <img src={el.brake} />
            <a href={el.brakelink}>Brake</a>
            <img src={el.sites} />
            <a href={el.siteslink}>Sites</a>
            <img src={el.speedommeter} />
            <a href={el.sppedlink}>Speedometer</a>
            <img src={el.wiperblade}/>
            <a href={el.wiperbladelink}>Wiperblade</a>
            <img src={el.tire}/>
            <a href={el.tirelink}>TIRE</a>
        </div>
      
    </div>
  )
}

export default Modal1