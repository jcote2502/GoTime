import news from "../data/news";
import { NewsHero } from "../components/frames";
const News = () => {
    return(
        <>
            <div className="news-head">Go Time In The Media</div>
            <div className="srvc-wrap">
                {news.map((article, index)=>(
                    <div key={index}>
                        <NewsHero article={article} />
                    </div>
                ))}
            </div>
            {/* NewsLetter */}
            {/* <div style={{backgroundColor:'white', height:'250px'}}>

            </div> */}
        </>
    )
}
export default News;