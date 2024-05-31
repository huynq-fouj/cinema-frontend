import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick.custom.scss";
import BannerItem from "./BannerItem";
import img5 from "../../../../assets/banner/dao-pho.jpg"
import img4 from "../../../../assets/banner/my-hero-academia.jpg";
import img1 from "../../../../assets/banner/kongxgodzilla2.jpg";
import img3 from "../../../../assets/banner/ghosthunter.jpg"

export default function Banner() {

    const config: Settings = {
        dots: true,
        //lazyLoad: "ondemand", //"ondemand" | "progressive" | "anticipated"
        autoplay: true,
        infinite: true,
        speed: 800,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <div className="m-0 slider-cpntainer">
            <Slider {...config}>
                <BannerItem img={img5}/>
                <BannerItem img={img4}/>
                <BannerItem img={img1}/>
                <BannerItem img={img3}/>
            </Slider>
        </div>
    )
}