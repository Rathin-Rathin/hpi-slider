import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import img1 from '../../assets/30.jpg';
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/3.jpg';
import img4 from '../../assets/4.jpg';
import img5 from '../../assets/5.jpg';
import img6 from '../../assets/6.jpg';
import img7 from '../../assets/7.jpg';
import img8 from '../../assets/8.jpg';
import img9 from '../../assets/9.jpg';
import img10 from '../../assets/10.jpg';
import img11 from '../../assets/11.jpg';
import img12 from '../../assets/12.jpg';
import img13 from '../../assets/13.jpg';
import img14 from '../../assets/14.jpg';
import img15 from '../../assets/15.jpg';
import img16 from '../../assets/16.jpg';
import img17 from '../../assets/17.jpg';
import img18 from '../../assets/18.jpg';
import img19 from '../../assets/19.jpg';
import img20 from '../../assets/20.jpg';
import img21 from '../../assets/21.jpg';
import img22 from '../../assets/22.jpg';
import img23 from '../../assets/23.jpg';
import img24 from '../../assets/24.jpg';
import img25 from '../../assets/25.jpg';
import img26 from '../../assets/26.jpg';
import img27 from '../../assets/27.jpg';
import img28 from '../../assets/28.jpg';
import img29 from '../../assets/29.jpg';
import img30 from '../../assets/1.jpg';
const Slider = () => {
    return (
        <div className='w-full h-[100%]'>
            <HeroSlider
                height={'80vh'}
                autoplay
                controller={{
                    initialSlide: 1,
                    slidingDuration: 500,
                    slidingDelay: 100,
                    onSliding: (nextSlide) =>
                        console.debug("onSliding(nextSlide): ", nextSlide),
                    onBeforeSliding: (previousSlide, nextSlide) =>
                        console.debug(
                            "onBeforeSliding(previousSlide, nextSlide): ",
                            previousSlide,
                            nextSlide
                        ),
                    onAfterSliding: (nextSlide) =>
                        console.debug("onAfterSliding(nextSlide): ", nextSlide)
                }}
            >
                <Overlay>
                  <div className="sliderBg rounded-lg w-full h-full bg-opacity-50"></div>
                </Overlay>
                <Slide
                    style={{borderRadius:'10px'}}
                    background={{
                        backgroundImageSrc: img1
                    }}
                />
                <Slide
                    style={{borderRadius:'10px'}}
                    background={{
                        backgroundImageSrc: img2
                    }}
                />
                <Slide
                    style={{borderRadius:'10px'}}
                    background={{
                        backgroundImageSrc: img3
                    }}
                />
                <Slide
                    style={{borderRadius:'10px'}}
                    background={{
                        backgroundImageSrc: img4
                    }}
                />
                <Slide
                    style={{borderRadius:'10px'}}
                    background={{
                        backgroundImageSrc: img5
                    }}
                />
                <Slide
                    style={{borderRadius:'10px'}}
                    background={{
                        backgroundImageSrc: img6
                    }}
                />
                <Slide
                    style={{borderRadius:'10px'}}
                    background={{
                        backgroundImageSrc: img7
                    }}
                />
                <Slide
                    style={{borderRadius:'10px'}}
                    background={{
                        backgroundImageSrc: img8
                    }}
                />
                <Slide
                    style={{borderRadius:'10px'}}
                    background={{
                        backgroundImageSrc: img9
                    }}
                />
                <Slide
                    style={{borderRadius:'10px'}}
                    background={{
                        backgroundImageSrc: img10
                    }}
                />
                <Slide
                    style={{borderRadius:'10px'}}
                    background={{
                        backgroundImageSrc: img11
                    }}
                />
                <Slide
                    style={{borderRadius:'10px'}}
                    background={{
                        backgroundImageSrc: img12
                    }}
                />
                <Slide
                    style={{borderRadius:'10px'}}
                    background={{
                        backgroundImageSrc: img13
                    }}
                />
                <Slide
                    style={{borderRadius:'10px'}}
                    background={{
                        backgroundImageSrc: img14
                    }}
                />
                <Slide
                    style={{borderRadius:'10px'}}
                    background={{
                        backgroundImageSrc: img15
                    }}
                />
                <Slide
                    style={{borderRadius:'10px'}}
                    background={{
                        backgroundImageSrc: img16
                    }}
                />
                <Slide
                    style={{borderRadius:'10px'}}
                    background={{
                        backgroundImageSrc: img17
                    }}
                />
                <Slide
                    style={{borderRadius:'10px'}}
                    background={{
                        backgroundImageSrc: img18
                    }}
                />
                <Slide
                    style={{borderRadius:'10px'}}
                    background={{
                        backgroundImageSrc: img1
                    }}
                />
                <Slide
                    style={{borderRadius:'10px'}}
                    background={{
                        backgroundImageSrc: img19
                    }}
                />
                <Slide
                    style={{borderRadius:'10px'}}
                    background={{
                        backgroundImageSrc: img20
                    }}
                />
                <Slide
                    style={{borderRadius:'10px'}}
                    background={{
                        backgroundImageSrc: img21
                    }}
                />
                <Slide
                    style={{borderRadius:'10px'}}
                    background={{
                        backgroundImageSrc: img22
                    }}
                />
                <Slide
                    style={{borderRadius:'10px'}}
                    background={{
                        backgroundImageSrc: img23
                    }}
                />
                <Slide
                    style={{borderRadius:'10px'}}
                    background={{
                        backgroundImageSrc: img24
                    }}
                />
                <Slide
                    style={{borderRadius:'10px'}}
                    background={{
                        backgroundImageSrc: img25
                    }}
                />
                <Slide
                    style={{borderRadius:'10px'}}
                    background={{
                        backgroundImageSrc: img26
                    }}
                />
                <Slide
                    style={{borderRadius:'10px'}}
                    background={{
                        backgroundImageSrc: img27
                    }}
                />
                <Slide
                    style={{borderRadius:'10px'}}
                    background={{
                        backgroundImageSrc: img28
                    }}
                />
                <Slide
                    style={{borderRadius:'10px'}}
                    background={{
                        backgroundImageSrc: img29
                    }}
                />
                <Slide
                    style={{borderRadius:'10px'}}
                    background={{
                        backgroundImageSrc: img30
                    }}
                />

                <MenuNav />
            </HeroSlider>
        </div>
    );
};

export default Slider;