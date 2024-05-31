import './style.css'
export const ProfileHero = (props) => {
    const { person } = props;
    return (
        <div className="pfl-container">
            <img className="pfl-img" src={person.image} alt='profile' />
            <div className="pfl-name">{person.name}</div>
            <div className="pfl-title">{person.title}</div>
        </div>
    )
}

export const ClientHero = (props) => {
    const { client } = props;

    return (
        <>
            <div className="clnt-container">
                <div className='clnt-img-container'>
                    <img className="clnt-img" src={client.image} alt='client' />
                    <div className="clnt-overlay">
                        <div className='clnt-scl-row'>
                            {client.tiktok ?
                                <a style={{ backgroundColor: 'transparent' }} target="_blank" rel='noreferrer' href={client.tiktok}>
                                    <img className='clnt-scl-logo' src={process.env.PUBLIC_URL + '/tiktok.svg'} alt='tiktok' />
                                </a>
                                : null}
                            {client.instagram ?
                                <a style={{ backgroundColor: 'transparent' }} target="_blank" rel='noreferrer' href={client.instagram}>
                                    <img className='clnt-scl-logo' src={process.env.PUBLIC_URL + '/instagram.svg'} alt='instagram' />
                                </a>
                                : null}
                            {client.youtube ?
                                <a style={{ backgroundColor: 'transparent' }} target="_blank" rel='noreferrer' href={client.youtube}>
                                    <img className='clnt-scl-logo' src={process.env.PUBLIC_URL + '/youtube.svg'} alt='youtube' />
                                </a>
                                : null}
                        </div>
                    </div>
                </div>
                <div className='clnt-txt-col'>
                    <div className="clnt-header">{client.name}</div>
                    <div className="clnt-subtext">{client.title}</div>
                </div>
                <hr className='hr-break' />
            </div>
            <div className="clnt-overlay">

            </div>
        </>
    )
}

export const TestimonialHero = (props) => {
    const { d } = props;
    return (
        <div className='tstml-row-container'>
            <img className='tstml-img' src={d.image} alt='coverphoto' />
            <div className='cntnt-col'>
                <div className='cntn-head'>{d.quote}</div>
                <div className='cntn-sub'>{d.name}</div>
                <div className='cntn-sub'>{d.title}</div>
            </div>
        </div>
    )
}

export const BrandHero = (props) => {
    const { d , styles} = props;
    return (
        <>
            <div style={{color:'white'}}>{d.name}</div>
            <img className={styles} src={d.logo} alt='brand' />
        </>
    )
}

export const ServiceHero = (props) => {
    const {service} = props;
    const GoTo = () => {
        window.open(service.link, '_blank');
    }
    return (
        <div onClick={GoTo} className='srvc-container'>
            <img className='srvc-img' src={service.image} alt='service'/>
            <div className='srvc-text-col'>
                <div className='srvc-text'>{service.title}</div>
                <div className='srvc-desc'>{service.desc}</div>
            </div>
        </div>
    )
}

export const NewsHero = (props) =>{
    const {article} = props;

    const GoTo = () => {
        window.open(article.link, '_blank');
    }
    return (
        
        <div onClick={GoTo} className='news-container'>
            
                <img className='news-img' src={article.image} alt='news'/>
            
            <div className='news-caption'>
                {article.title}
                <div className='news-desc'>{article.desc}</div>
            </div>
        </div>
    )
}