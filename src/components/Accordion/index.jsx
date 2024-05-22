import React from 'react';
import { useState } from 'react';
import Div from '../Div';
const accordionData = [
  {
    question: 'Como contrato os serviços de fretes?',
    answer:
      'Contratar os serviços de fretes da Marbiano Transportes é simples e eficiente. Basta entrar em contato conosco via telefone ou WhatsApp, e nossos atendentes especialistas cuidarão de tudo para você, proporcionando uma experiência livre de preocupações. Oferecemos uma ampla gama de serviços, desde fretes sob demanda até o escoamento completo de safras. Conte conosco para suas necessidades de transporte e logística.',
  },
  {
    question: 'Como são os processos de fretes?',
    answer:
      'Dispomos de frota diversificada, motoristas qualificados e processos seguros, incluindo rastreamento de carga, seguro, telemetria e muito mais. Além disso, contamos com sistemas tecnológicos avançados que nos auxiliam em cada etapa do processo, garantindo que tudo proceda conforme o esperado e resulte na máxima eficiência. Combinando a experiência de nossos profissionais com o suporte da tecnologia, asseguramos que seus fretes sejam realizados de forma eficaz e sem contratempos.',
  },
  {
    question: 'Sou motorista, como me cadastro?',
    answer:
      'Na Marbiano Transportes, tornar-se um de nossos motoristas é simples e seguro. Temos um sistema de cadastro dedicado, projetado para garantir a segurança das informações do motorista. Após o cadastro, nossos atendentes podem direcionar fretes diretamente para você. Uma vez cadastrado em nosso sistema, você também pode acessar a seção "Fretes" em nosso site e se disponibilizar para realizar fretes adicionais. Conte conosco para uma parceria sólida e oportunidades de trabalho consistentes.',
  },
  {
    question: 'Qual a abrangência de atendimento?',
    answer:
      'Na Marbiano Transportes, estamos orgulhosos de oferecer um serviço abrangente em todo o território nacional. Estabelecemos parcerias em todos os estados, colaborando com motoristas e transportadoras locais para garantir o melhor para nossos clientes por meio de nossa extensa rede de parceiros. Com essa ampla cobertura, cuidamos de todos os detalhes e asseguramos a tranquilidade de nossos clientes em cada etapa do transporte. Conte conosco para uma solução de logística confiável e eficiente, onde quer que sua carga precise chegar.',
  },
  {
    question: 'Quais são nossos diferenciais?',
    answer:
      'Nossos diferenciais são fundamentados em valores sólidos: ética, honestidade, compromisso e paixão pela atividade. Esses princípios norteiam cada ação da nossa equipe, garantindo um serviço confiável e transparente. Com mais de 20 anos de experiência, nossa equipe acumulou um vasto conhecimento, capacitando-nos a enfrentar todos os desafios do transporte com confiança e eficiência. Na Marbiano Transportes, você pode contar não apenas com um serviço de qualidade, mas também com uma parceria baseada em integridade e profissionalismo.',
  },
];

export default function Accordion() {
  const [selected, setSelected] = useState(0);
  const handelToggle = index => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <Div className="cs-accordians cs-style1">
      {accordionData.map((item, index) => (
        <Div
          className={`cs-accordian ${selected === index ? 'active' : ''}`}
          key={index}
        >
          <Div
            className="cs-accordian_head"
            onClick={() => handelToggle(index)}
          >
            <h2 className="cs-accordian_title">{item.question}</h2>
            <span className="cs-accordian_toggle cs-accent_color">
              <svg
                width={15}
                height={8}
                viewBox="0 0 15 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
              </svg>
            </span>
          </Div>
          <Div className="cs-accordian_body">
            <Div className="cs-accordian_body_in">{item.answer}</Div>
          </Div>
        </Div>
      ))}
    </Div>
  );
}
