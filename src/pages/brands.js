import { AutoplayCarousel } from "../components/carousel";
import { brandsLowPriority, brandsPriority } from "../data/brands";

const Brands = () => {
    return (
        <>
            <div style={{textAlign:'center',color:'white',fontSize:'62px',padding:'50px 100px 0px 100px'}}>We Work With Brands On The Local And National Spectrum</div>
            <div style={{ margin:'100px', borderLeft:'2px solid white', borderRight:'2px solid white', height: '400px' }}>
                <AutoplayCarousel data={brandsPriority} />
            </div>
            <div style={{ margin:'100px', borderLeft:'2px solid white', borderRight:'2px solid white', height: '250px'}}>
                <AutoplayCarousel data={brandsLowPriority} />
            </div>
        </>
    )
}
export default Brands;