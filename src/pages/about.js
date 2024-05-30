import './style.css'
import { ProfileHero } from '../components/frames';
import { team } from '../data/about';

const About = () => {

    return (
        <>
            <div className="header-container">
                <div className='abt-header-title'>About Us</div>
                <div className='abt-header-sub'>Investing in Your Personal Brand so Others Can Too !</div>
            </div>
            <div className='company-container'>
                <div className='company-title'>
                    Be Transformational Not Transactional
                </div>
                <div className='simple-row'>
                    <div className='desc-container'>
                        <div className='desc-text'>
                            Go Time LLC, serves as a talent agency dedicated to empowering athletes, influencers, and media personalities to leverage their NIL(Name, Image, Likeness) potential beyond financial gains. From identifying one's personal brand to facilitating business and marketing partnerships, we create transformational opportunities for our clientele. Ultimately, authenticity and dependability guide our daily business activities. Recognizing time as our utmost asset, let's collaborate and build a memorable brand together!
                        </div>
                        <div className='desc-text'>
                            In just a short time period, our clients have inked deals with hundreds of brands, ranging in size from State College hallmarks such as Jerpa Jeans to nationally recognized brands like Samsung and Firehouse Subs.
                        </div>
                        <div className='desc-text'>
                           Our mission is simple: equipping our clients with the necessary tools to maximize their potential in building a long lasting brand.
                        </div>
                    </div>
                    <video controls className='video-frame'>
                        <source src={process.env.PUBLIC_URL + '/gotimellc.mp4'} type="video/mp4" />
                        Your Browser Does Not Support the Video Tag
                    </video>
                </div>
            </div>
            <div className='group'>
                <div className='ceo-container'>
                    <div className='simple-row'>
                        <div className='simple-column'>
                            <div className='ceo-title'>Meet Our CEO</div>
                            <div className='ceo-name'>Juan Faura</div>
                            <div className='ceo-text'>
                                As a 22-year-old entrepreneur, Juan has invaluable work experience from Wasserman, Limitless NIL, and Jerpa. Having served on both the talent and brand side of various activations, he has a great understanding of how to fulfill each party's desires. From working in boutique environments to larger-scale agencies, he has understood the importance of building transformational relationships across all levels. Juan leverages his extensive network of brands, media outlets, and businesses to the strategic benefits of his clients.
                            </div>
                            <div className='ceo-text'>
                                Juan was recently featured on the Bold Journey Newsletter. To Read More
                                <a target="_blank" rel='noreferrer' href='https://boldjourney.com/news/meet-juan-faura/'> Click Here</a>
                            </div>
                        </div>
                    </div>
                    <div className='scl-buttons'>
                        <a target="_blank" rel='noreferrer' href='https://www.instagram.com/jfaura10/'><img className='scl-logo' src={process.env.PUBLIC_URL + '/instagram.svg'} alt='instagram' /></a>
                        <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/juan-faura/'><img className='scl-logo' src={process.env.PUBLIC_URL + '/linkedin.svg'} alt='linkedin' /></a>
                    </div>
                    <img className='ceo-img' src={process.env.PUBLIC_URL + '/company/ceoprofile.jpg'} alt='ceo' />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '25px' }}>
                    <hr style={{ width: '80%' }} />
                </div>
                <div className='ceo-title' style={{ textAlign: 'center', paddingTop: '50px' }} >Meet The Team</div>
                <div className='team-container'>
                    {team.map((person) => (
                        <ProfileHero person={person} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default About;