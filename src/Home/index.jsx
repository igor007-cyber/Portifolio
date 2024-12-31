import React, { useEffect, useRef, useState } from 'react';
import './style.css';
import videoFile from '../assets/eu.mp4'; // Caminho do vídeo
import FotoFile from '../assets/igor.png';
import Doces from '../assets/doces.png';
import Job from '../assets/job.png';
import Trabalho from '../assets/trabalho.png';

function Home() {
  const containerRef = useRef(null);
  const [visibleImages, setVisibleImages] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.dataset.index;
          if (entry.isIntersecting) {
            setVisibleImages((prev) => [...new Set([...prev, index])]);
          } else {
            setVisibleImages((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      {
        root: null,
        threshold: 0.1, // Imagem visível em 10%
      }
    );

    const images = containerRef.current.querySelectorAll('.trabalho img');
    images.forEach((image) => observer.observe(image));

    return () => observer.disconnect();
  }, []);

  const images = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/80px-JavaScript-logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/80px-React-icon.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/80px-Python.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/80px-Git_icon.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/80px-Octicons-mark-github.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/80px-ChatGPT_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/80px-Node.js_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/80px-HTML5_Badge.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/80px-CSS3_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/80px-Typescript_logo_2020.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Kali-dragon-icon.svg/80px-Kali-dragon-icon.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/80px-Visual_Studio_Code_1.35_icon.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/Virtualbox_logo.png",
    "https://static-00.iconduck.com/assets.00/apps-insomnia-icon-2048x2048-2mq9u7v5.png",
  ];

  return (
    <>
      <header className="header">
        {/* Vídeo de fundo */}
        <div className="video-background">
          <video autoPlay loop muted playsInline>
            <source src={videoFile} type="video/mp4" />
          </video>
        </div>

        {/* Menu */}
        <nav className="menu">
          <ul>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#projetos">Linguagens de Programação</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>

        <h3 className="typing-effect">Seja bem-vindo ao meu site 😁</h3>
      </header>

      {/* Corpo */}
      <main className="corpo">
        <section className="linguagens">
          <h2 className="titulo-prommaming"><i>Linguagens de Programação que eu utilizo</i></h2>
          <div className="trabalho" ref={containerRef}>
            {images.map((src, index) => (
              <img
                key={index}
                data-index={index}
                src={src}
                alt={`Imagem ${index + 1}`}
                className={visibleImages.includes(index.toString()) ? 'visible' : ''}
              />
            ))}
          </div>
        </section>

        <section className="sobreMim">
          
          <div className='FotoEu'>
            <img src={FotoFile} alt="eu" />
          </div>

          <div className='TextoSobreMim'>
            <h1>Sobre Mim:</h1>
            <p>
              Sou um desenvolvedor web e mobile apaixonado por tecnologia, inovação e o 
              poder da inteligência artificial. Minha missão é transformar ideias em 
              soluções digitais funcionais, intuitivas e de alto impacto.

              Com experiência em desenvolvimento web, aplicativos móveis e integrações 
              com inteligência artificial, utilizo tecnologias avançadas para criar 
              projetos personalizados que atendam às necessidades dos meus clientes.
            </p>
          </div>

        </section>

        <section className='Produtos'>
            <h1>Trabalhos que eu faço</h1>
            <div className='imgTrabalho'>
              <img src={Trabalho} alt="Trabalho" />
              <img src={Job} alt="Job" />
              <img src={Doces} alt="Doces" />
            </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="rodape">
        <div className='redesSociais'>
          <a href="https://www.instagram.com/cyber_gigor/" target='_blank'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/80px-Instagram_icon.png" alt="instragram" /></a>
          <a href="https://api.whatsapp.com/send?phone=5585997245715" target='_blank'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/90px-WhatsApp.svg.png" alt="Whatsapp" /></a>
        </div>
        <p>© 2024 Igor Ramalho. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}

export default Home;
