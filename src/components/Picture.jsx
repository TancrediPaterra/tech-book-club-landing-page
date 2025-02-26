import styled from 'styled-components';

//tale componente si aspeta un percorso dell'immagine pari a `assets/images/image/NOME/desktop.wepp`
const Picture = ({ nome, className }) => {
  return (
    // <PictureWrapper className={className}>
    //   <source media="(min-width: 1024px)" srcSet={`assets/images/image-${nome}-desktop.webp`} />
    //   <source media="(min-width: 768px)" srcSet={`assets/images/image-${nome}-tablet.webp`} />
    //   <img src={`assets/images/image-${nome}-mobile.webp`} alt={nome} />
    // </PictureWrapper>
    <PictureWrapper className={className}>
    <img src={`assets/images/image-${nome}-desktop.webp`} alt={nome} />
  </PictureWrapper>
  );
};

export default Picture;

const PictureWrapper = styled.picture`

  & > img {
    max-height: 100%;
  }
`;
