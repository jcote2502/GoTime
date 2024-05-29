import './style.css'
const Footer = () => {
    return (
        <div className='footer-container'>
            {/* row */}
            {/* <div className='footer-row'> */}
                <img className='ftr-logo' src={process.env.PUBLIC_URL + '/logotran.png'} alt="logo" />
                <h2 className='ftr-text'>juan@gotimeagency.org</h2>
                <div className='ftr-ct-row'>
                    <img className='scl-logo' src={process.env.PUBLIC_URL + '/instagram.svg'} alt="logo" />
                    <img className='scl-logo' src={process.env.PUBLIC_URL + '/linkedin.svg'} alt="logo" />
                </div>
            {/* </div> */}
            <h3 className='ftr-text'>© 2024 GoTime LLC</h3>
            <h3 className='ftr-text'>Website Designed by <a target="_blank" rel='noreferrer' href='https://justincote.netlify.app/'>Justin Cote</a> </h3>
        </div>
    )
}

export default Footer;