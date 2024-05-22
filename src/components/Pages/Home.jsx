import React, { useEffect } from 'react';
import Card from '../Card';
import FunFact from '../FunFact';
import Hero from '../Hero';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import Cta from '../Cta';
import LogoList from '../LogoList';
import MovingText from '../MovingText';
import TestimonialSlider from '../Slider/TestimonialSlider';
import VideoModal from '../VideoModal';
import TimelineSlider from '../Slider/TimelineSlider';
import { pageTitle } from '../../helper';
// Hero Social Links
const heroSocialLinks = [
  {
    name: 'Instagram',
    links: 'https://www.instagram.com/marbianotransportescatalao/',
  },
  {
    name: 'Facebook',
    links: 'https://www.facebook.com/marbianotransportes',
  },
];

// FunFact Data
const funfaceData = [
  {
    title: 'Frota de veículos',
    factNumber: '500',
  },
  {
    title: 'Parceiros cadastrados',
    factNumber: '370',
  },
  {
    title: 'Toneladas diárias',
    factNumber: '600',
  },
  {
    title: 'Km diários',
    factNumber: '10.000',
  },
];


export default function Home() {
  pageTitle('Home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Start Hero Section */}
      <Hero
        title="Eficiência em, <br/>cada quilômetro"
        subtitle="Conectando negócios e impulsionando o sucesso com nossa expertise logística, onde cada entrega é uma jornada de confiança e compromisso."
        btnText="Fale conosco"
        btnLink="/contact"
        scrollDownId="#service"
        socialLinksHeading="Siga-nos"
        heroSocialLinks={heroSocialLinks}
        bgImageUrl="/images/hero_bg.jpeg"
      />
      {/* End Hero Section */}

      {/* Start FunFact Section */}
      <div className="container">
        <FunFact
          variant="cs-type1"
          title="O melhor vai mais longe!"
          subtitle="Possuímos amplas ferramentas que nos auxiliam para maior controle e segurança: monitoramento da frota em tempo real, rastreamento de carga, equipe logística, gerenciamento de risco, telemetria, entre outros."
          data={funfaceData}
        />
      </div>
      {/* End FunFact Section */}

      {/* Start Service Section */}
      <Spacing lg="150" md="80" />
      <Div id="service">
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Nossa frota e serviços"
                subtitle="Conheça mais"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-8">
              <Div className="row">
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Carreta baú"
                    link="/service/nossos-servicos"
                    src="/images/service_1.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Carreta sider"
                    link="/service/nossos-servicos"
                    src="/images/service_2.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Carreta basculante"
                    link="/service/nossos-servicos"
                    src="/images/service_3.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Carreta carga-seca"
                    link="/service/nossos-servicos"
                    src="/images/service_4.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Service Section */}

     

      {/* Start Awards Section */}
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_2">
        <Div className="cs-shape_2">
          <Div />
        </Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Nossas qualidades"
                subtitle="Confira"
                variant="cs-style1"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <TimelineSlider />
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Awards Section */}

      {/* Start Video Block Section */}
      <Spacing lg="130" md="70" />
      <Div className="container">
        <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
        Mais de 20 anos de experiência em transporte confiável e eficiente. Sua segurança e satisfação são nossa prioridade.
        </h2>
        <Spacing lg="70" md="70" />
        <VideoModal
          videoSrc="https://www.youtube.com/watch?v=TnhzRNZh4es"
          bgUrl="/images/video_bg.jpeg"
        />
      </Div>
      {/* End Video Block Section */}

      
      <TestimonialSlider />
      {/* End Testimonial Section */}

      

      {/* Start MovingText Section */}
      <Spacing lg="125" md="70" />
      <MovingText text="Qualidade em transportes, aqui tem!" />
      <Spacing lg="105" md="70" />
      {/* End MovingText Section */}

      {/* Start LogoList Section */}
      <Div className="container">
        <LogoList />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End LogoList Section */}

      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="Segurança e tranquilicada <br />em cada viagem!"
          btnText="Sobre nós"
          btnLink="/about"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
