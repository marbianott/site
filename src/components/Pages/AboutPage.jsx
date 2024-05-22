import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import PageHeading from '../PageHeading';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import TeamSlider from '../Slider/TeamSlider';
import Spacing from '../Spacing';


export default function AboutPage() {
  pageTitle('About');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="Sobre nós"
        bgSrc="images/about_hero_bg.jpeg"
        pageLinkText="Sobre nós"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading
              title="Conduzindo sua confiança com excelência"
              subtitle="Marbiano Transportes"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
              Empresa especializada em transporte rodoviário de produtos diversos, liderada por Marcos Alcantara de Rezende e Fabiano Jose Pires, com mais de duas décadas de experiência. Atendemos em todo o centro-oeste, garantindo solidez e eficiência. Cumprimos rigorosamente todas as legislações pertinentes e priorizamos o treinamento contínuo de nossa equipe em segurança, meio ambiente e atendimento personalizado. Sua carga em mãos confiáveis, sempre.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-xl-2">
            <img
              src="/images/about_img_1.jpeg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-7">
            <img
              src="/images/about_img_2.jpeg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-5">
            <img
              src="/images/about_img_3.jpeg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="75" md="55" />
      {/* End About Section */}

     

      {/* Start Why Choose Section */}
      <Spacing lg="100" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <img
                  src="/images/about_img_4.jpeg"
                  alt="About"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <SectionHeading
              title="Conexões que impulsionam o futuro"
              subtitle="Diretoria Marbiano"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
              Na Marbiano Transportes, a sociedade formada por Marcos Alcantara de Rezende e Fabiano Jose Pires representa mais do que uma parceria comercial. Combinando mais de duas décadas de experiência no setor de transporte e logística, eles trazem um compromisso incomparável com a excelência e a satisfação do cliente.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
              Nossa rede de parcerias com líderes empresariais, produtores e especialistas em logística impulsiona nossa capacidade de oferecer sempre o melhor aos nossos clientes. Movimentamos conexões e colaborações estratégicas para garantir resultados excepcionais em cada entrega.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
        </Div>
      </Div>
      {/* End Why Choose Section */}

      {/* Start Team Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Profissionais da <br/> Marbiano Transportes"
          subtitle="Conheça os"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div>
      {/* End Team Section */}

    
      <Spacing lg="150" md="80" />
      
    </>
  );
}
