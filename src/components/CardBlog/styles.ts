import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;

  .rec.rec-carousel {
    position: relative;
  }

  .rec.rec-slider-container {
    position: relative;
    margin: 0;
  }

  /* square buttons */
  .rec.rec-arrow.rec-arrow-right {
    border-radius: 0;
  }

  /* round buttons on hover */
  .rec.rec-arrow:hover {
    border-radius: 50%;
  }
  /* hide disabled buttons */
  .rec.rec-arrow:disabled {
    visibility: hidden;
    display: none;
  }
  /* disable default outline on focused items */
  /* add custom outline on focused items */
  .rec-carousel-item:focus {
    outline: none;
    box-shadow: inset 0 0 1px 1px lightgrey;
  }

  .rec {
    transition: opacity 0.2s;
  }

  .rec.rec-carousel-item-hidden.rec-carousel-item-prev {
    opacity: 0.5;
  }
  .rec.rec-carousel-item-hidden.rec-carousel-item-next {
    opacity: 0.5;
  }
`;

export const CardItem = styled.div`
  max-width: 348px;
  background: transparent;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (max-width: 1680px) {
    min-height: 450px;
  }
  @media (max-width: 1305px) {
    min-height: 400px;
  }
`;

export const Img = styled.div`
  img {
    width: 348px;
    width: 100%;
    height: 100%;
  }
`;

export const Description = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1.5rem;
  height: 100%;

  h2 {
    font-family: var(--text-title);
    color: var(--black);
    font-weight: bold;
    font-size: 1.3rem;
    line-height: 1.8rem;
    margin-top: 1.8rem;
    margin-bottom: 1rem;
  }
  a {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;

    img {
      height: 52px;
      width: 52px;
      border-radius: 50%;
      margin-right: 1rem;
    }
  }

  @media (max-width: 1305px) {
    justify-content: space-between;

    h2 {
      font-size: 1.3rem;
      line-height: 1.4rem;
      margin-top: 1.5rem;
    }

    a {
      margin-bottom: 1rem;
      img {
        height: 52px;
        width: 52px;
        border-radius: 50%;
        margin-bottom: 1rem;
      }
    }
  }
`;
