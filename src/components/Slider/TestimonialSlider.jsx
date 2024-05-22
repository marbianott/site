import React, { useState } from 'react';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';
import Testimonial from '../Testimonial';
import Div from '../Div';
import Spacing from '../Spacing';
const testimonialData = [
  {
    testimonialThumb: '/images/testimonial_4.jpeg',
    testimonialText:
      'Tratamento excelente e respeito. Sou bastante grato ao pessoal da Marbiano por todo profissionalismo, são bastante pontuais e honestos em seus compromissos!',
    avatarName: 'Ayton Gomes',
    avatarDesignation: 'Caminhoneiro/frota',
    ratings: '4',
  },
  {
    testimonialThumb: '/images/testimonial_1.jpeg',
    testimonialText:
      'Estamos em parceria com a Marbiano Transportes desde seu começo. É minha referência principal para escoamento de minha produção. Conto com seus serviços para garantir segurança em todo processo!',
    avatarName: 'José Ferraz',
    avatarDesignation: 'Produtor de soja',
    ratings: '5',
  },
  {
    testimonialThumb: '/images/testimonial_2.jpeg',
    testimonialText:
      'Receber fertilizantes para minha plantação é sempre confiável quando escolhemos a Marbiano Transportes, eu sempre a recomendo à outros amigos! podem confiar!',
    avatarName: 'Alexandre Mattos',
    avatarDesignation: 'Empresário/Fertilizantes',
    ratings: '4.5',
  },
  {
    testimonialThumb: '/images/testimonial_3.jpeg',
    testimonialText:
      'Não é difícil comparar, escolhemos a Marbiano Transportes facilmente pois ela se destaca muito entre as demais empresas de transporte, nossa parceria já dura mais deu uma década!',
    avatarName: 'Matheus Pereira',
    avatarDesignation: 'Produtor de milho',
    ratings: '3.5',
  },
];

export default function TestimonialSlider() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  return (
    <>
      <Div className="cs-gradient_bg_1 cs-shape_wrap_3 cs-parallax">
        <Spacing lg="130" md="80" />
        <Div className="cs-shape_3 cs-to_up">
          <img src="/images/shape_1.svg" alt="Shape" />
        </Div>
        <Div className="container">
          <Div className="cs-testimonial_slider">
            <Div className="cs-testimonial_slider_left">
              <Slider
                asNavFor={nav1}
                ref={slider2 => setNav2(slider2)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
                centerMode={true}
                centerPadding="0px"
                arrows={false}
              >
                {testimonialData.map((item, index) => (
                  <Div className="slider-nav_item" key={index}>
                    <Div className="cs-rotate_img">
                      <Div className="cs-rotate_img_in">
                        <img src={item.testimonialThumb} alt="Thumb" />
                      </Div>
                    </Div>
                  </Div>
                ))}
              </Slider>
            </Div>
            <Div className="cs-testimonial_slider_right">
              <Slider
                asNavFor={nav2}
                ref={slider1 => setNav1(slider1)}
                prevArrow={<SlickArrowLeft />}
                nextArrow={<SlickArrowRight />}
                className="cs-arrow_style1"
              >
                {testimonialData.map((item, index) => (
                  <Div key={index}>
                    <Testimonial
                      testimonialText={item.testimonialText}
                      avatarName={item.avatarName}
                      avatarDesignation={item.avatarDesignation}
                      ratings={item.ratings}
                    />
                  </Div>
                ))}
              </Slider>
            </Div>
          </Div>
        </Div>
        <Spacing lg="130" md="80" />
      </Div>
    </>
  );
}
