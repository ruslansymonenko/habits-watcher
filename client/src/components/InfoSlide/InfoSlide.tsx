import { InfoSlideStyled, InfoSlideImg, InfoSlideTitle, InfoSlideText } from './styled';

type InfoSlideProps = {
  title: string;
  text: string;
  img: string;
};

const InfoSlide = ({ title, text, img }: InfoSlideProps) => {
  return (
    <InfoSlideStyled>
      <InfoSlideImg
        src={img}
        alt="slider image"
        loading="lazy"
      />
      <InfoSlideTitle>{title}</InfoSlideTitle>
      <InfoSlideText>{text}</InfoSlideText>
    </InfoSlideStyled>
  );
};

export default InfoSlide;
