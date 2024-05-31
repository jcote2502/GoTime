import './style.css'
const Footer = () => {
    return (
        <div className='footer-container'>
            {/* row */}
            {/* <div className='footer-row'> */}
            <img className='ftr-logo' src={process.env.PUBLIC_URL + '/logotran.png'} alt="logo" />
            <a className='ftr-text' href={`mailto:${'juan@gotimeagency.org'}`}>juan@gotimeagency.org</a>
            <div className='ftr-ct-row'>
                <a target="_blank" rel='noreferrer' href='https://www.instagram.com/go.time.llc/'><img className='scl-logo' src={process.env.PUBLIC_URL + '/instagram.svg'} alt='instagram' /></a>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/company/go-time-llc/'><img className='scl-logo' src={process.env.PUBLIC_URL + '/linkedin.svg'} alt='linkedin' /></a>
            </div>
            {/* </div> */}
            <h3 className='ftr-text'>© 2024 GoTime LLC</h3>
            <h3 className='ftr-text'>Website Designed by <a target="_blank" rel='noreferrer' href='https://justincote.netlify.app/'>Justin Cote</a> </h3>
        </div>
    )
}

export default Footer;