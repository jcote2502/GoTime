import { AutoplayCarousel } from "../components/carousel";
import { brandsLowPriority, brandsPriority } from "../data/brands";

const Brands = () => {
    const allbrands = brandsPriority.concat(brandsLowPriority);
    return (
        <>
            <div style={{textAlign:'center',color:'white',fontSize:'62px',padding:'50px 100px 0px 100px'}}>We Work With Brands On The Local And National Spectrum</div>
            <div style={{textAlign:'center',color:'white',fontSize:'48px',padding:'25px 150px 0px 150px',fontStyle:'normal'}}>No Brand Is too Small Or Large for our Relationships</div>
            <div style={{ margin:'100px', borderLeft:'2px solid white', borderRight:'2px solid white', height: '400px' }}>
                <AutoplayCarousel data={brandsPriority} />
            </div>
            <div style={{ margin:'100px', borderLeft:'2px solid white', borderRight:'2px solid white', height: '250px'}}>
                <AutoplayCarousel data={brandsLowPriority} />
            </div>
            <div>
                {allbrands.map((brand)=>(
                    <div style={{color:'white',textAlign:'center',fontSize:'40px'}}>{brand.name}</div>
                ))}
            </div>
        </>
    )
}
export default Brands;