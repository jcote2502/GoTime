import news from "../data/news";
import { NewsHero } from "../components/frames";
const News = () => {
    const GoTo = () => {
        const link = 'https://secure.smore.com/n/q574n-go-time-april-24-newsletter?ref=email';
        window.open(link, '_blank');
    }
    return(
        <>
            <div style={{margin:'50px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <div className="newsletter-container">
                <div onClick={GoTo} className="newsletter-overlay"/>
                <img className="newsletter-image"  src={process.env.PUBLIC_URL + "/news/newsletter.png"} alt="newsletter"/>
                </div>
                <div className="newsletter-text">June Newsletter Releases Monday. Click above to keep up.</div>
            </div>
            <div style={{backgroundColor:'white'}}>
            <div className="news-head">Go Time In The Media</div>
            <div className="srvc-wrap">
                {news.map((article, index)=>(
                    <div style={{backgroundColor:'white'}} key={index}>
                        <NewsHero article={article} />
                    </div>
                ))}
            </div>
            </div>
        </>
    )
}
export default News;