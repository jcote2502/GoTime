import { AutoplayCarousel } from "../components/carousel";
import { brandsLowPriority, brandsPriority } from "../data/brands";

const Brands = () => {
    return (
        <>
            <div className="brand-title">We Work With Brands On The Local And National Spectrum</div>
            <div className="brand-carousel-L">
                <AutoplayCarousel data={brandsPriority} />
            </div>
            <div className="brand-carousel-S">
                <AutoplayCarousel data={brandsLowPriority}/>
            </div>
        </>
    )
}
export default Brands;