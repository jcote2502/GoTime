import './style.css'
import { services } from '../data/services';
import { ServiceHero } from '../components/frames';
const Services = () => {
    return (
        <>
            <div className='srvc-wrap'>
                {services.map((service, index)=>(
                    <div key={index}>
                        <ServiceHero service={service}/>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Services;