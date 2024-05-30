import './style.css'
import { useNavigate } from 'react-router-dom';
import { pillars, satisfaction, testimionials } from '../data/home';
import { MyCarousel } from '../components/carousel'
const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='intro-container'>
                <div className='overlay' onClick={() => { navigate('/video') }}>
                </div>
                <img onClick={() => { navigate('/video') }} className='home-cv-image' src={process.env.PUBLIC_URL + '/coverPhoto.JPEG'} alt="logo" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', marginBottom: '40px' }}>
                <div className='large-text' style={{ alignSelf: 'center', textAlign: 'center', width: '80%' }}>Empowering Individuals to Leverage their Personal Brand Beyond Financial Gains</div>

            </div>
            {/* Pillars */}
            <div className='plrs-container'>
                {pillars.map((pillar) => {
                    const nav = (path) => {
                        navigate(path);
                    }
                    return (
                        <div className='plrs-rect'>

                            <div className='plr-title'>{pillar.title}</div>
                            {pillar.icon}
                            <div className='plr-descr'>{pillar.desc}</div>
                            <button className='plr-button' onClick={() => nav(pillar.link)}>Learn More</button>

                            {/* <div className='plrs-overlay' /> */}
                        </div>
                    )
                })}
            </div>

            {/* Satisfaction + Testimionials */}
            <div className='stsf-container'>
                <div className='stsf-header'>Go Time By The Numbers</div>
                <div className='stsf-row'>
                    {satisfaction.map((item) => {
                        return (
                            <div className='stsf-col'>
                                <div className='stsf-stat'>{item.stat}</div>
                                <div className='stsf-title'>{item.title}</div>
                            </div>
                        )
                    })}
                </div>
                <div className='stsf-header'>Testimonials</div>
                <MyCarousel data={testimionials} speed={700} autoplaySpeed={8000} type='testimonial' />
            </div>
            {/* News */}
            <div>

            </div>
            {/* Contact */}
            <div>

            </div>
        </>
    )
}

export default Home;