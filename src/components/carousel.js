import './style.css';
import Slider from 'react-slick';
import styled, {keyframes} from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TestimonialHero } from './frames';
export const MyCarousel = (props) => {
    const { data, speed, autoplaySpeed } = props;
    const settings = {
        infinite: true,
        speed: speed,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: autoplaySpeed,
        cssEase: 'linear',
    }
    return (
        <div className='slide-container'>
            <Slider {...settings}>
                {data.map((d) => {
                    return <TestimonialHero d={d} />
                })}
            </Slider>
        </div>
    )
}


export const AutoplayCarousel = (props) => {
    const { data } = props;
    const carouselWidth = `calc(${data.length} * 316px)`;
    const scrollValue = `calc(-316px * ${data.length})`;
    return (
        <div className="carousel-container">
            <CarouselTrack carouselwidth={carouselWidth} scrollvalue={scrollValue}>
                {data.map((item) => {
                    return (
                        <CarouselItem
                            imgUrl={item.logo}
                            imgTitle={item.name}
                        ></CarouselItem>
                    );
                })}
                {data.map((item) => {
                    return (
                        <CarouselItem
                            imgUrl={item.logo}
                            imgTitle={item.name}
                        ></CarouselItem>
                    );
                })}
            </CarouselTrack>
        </div>
    );
}

function CarouselItem({ imgUrl, imgTitle }) {
    return (
        <div className="carousel-card">
            <img src={imgUrl} alt={imgTitle}></img>
        </div>
    );
}

const scrollAnimation = (scrollvalue) => keyframes`
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(${scrollvalue});
    }
`;

const CarouselTrack = styled.div`
    display: flex;
    position: absolute;
    left: 0;
    justify-content: center;
    align-items: center;
    gap: 16px;
    width: ${(props) => props.carouselwidth};
    height: 100%;
    animation: ${(props) => scrollAnimation(props.scrollvalue)} 45s linear infinite;

    &:hover {
        animation-play-state: paused;
    }
`;