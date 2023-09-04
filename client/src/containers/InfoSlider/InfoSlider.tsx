import React, { useState } from 'react';

import InfoSlide from '../../components/InfoSlide/InfoSlide';

import { InfoSliderStyled, InfoSliderContainer, InfoSliderDots, InfoSliderDot } from './style';

import slideImg1 from '../../assets/images/info-slider-images/slider-img-1.png';
import slideImg2 from '../../assets/images/info-slider-images/slider-img-2.png';
import slideImg3 from '../../assets/images/info-slider-images/slider-img-3.png';

type Slide = {
  id: number;
  title: string;
  text: string;
  pathToImg: string;
};

const InfoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      title: 'Introducing Habits Watcher',
      text: 'Track, build, and transform your life with our powerful habit-tracking app. Start today!',
      pathToImg: slideImg1,
    },
    {
      id: 2,
      title: 'Achieve Your Goals',
      text: 'Habits Watcher helps you stay committed, form new habits, and achieve your personal milestones.',
      pathToImg: slideImg2,
    },
    {
      id: 3,
      title: 'Insightful Habit Statistics',
      text: 'Gain valuable insights into your habits with detailed statistics and charts in Habits Watcher.',
      pathToImg: slideImg3,
    },
  ];

  const handleChangeSLide = (index: number): void => {
    setCurrentSlide(index);
  };

  return (
    <InfoSliderStyled>
      <InfoSliderContainer $translation={currentSlide * 100 * -1}>
        {slides.map(slide => (
          <InfoSlide
            key={slide.id}
            title={slide.title}
            text={slide.text}
            img={slide.pathToImg}
          />
        ))}
      </InfoSliderContainer>
      <InfoSliderDots>
        {slides.map((slide, index) => (
          <InfoSliderDot
            key={slide.id}
            onClick={() => handleChangeSLide(index)}
            $isActive={index === currentSlide ? true : false}
          />
        ))}
      </InfoSliderDots>
    </InfoSliderStyled>
  );
};

export default InfoSlider;
