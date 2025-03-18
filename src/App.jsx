import { useState } from "react";
import logo from "./assets/logo.png";
import instagramLogo from "./assets/instagram.png";
import FacebookLogo from "./assets/facebook.png";
import LinkedInLogo from "./assets/linked-in.png";
import phoneIcon from "./assets/phone-icon.svg";
import emailLogo from "./assets/email-logo.svg";
import service_one from "./assets/service-1.png";
import service_two from "./assets/service-2.png";
import service_three from "./assets/service-3.png";
import form_image from "./assets/contact-us-img.jpg";
import footerImage1 from "./assets/footer-img-1.png";
import footerImage2 from "./assets/footer-img-2.png";
import footerImage3 from "./assets/footer-img-3.png";
import footerImage4 from "./assets/footer-img-4.png";
import headerGif from "./assets/header-gif.webp";
import menuIcon from "./assets/menu.png";
import closeIcon from "./assets/close.png";
import whatsAppIcon from "./assets/whatsapp.png";
import instaLogo from "./assets/instagram-2.png";
import polygon from "./assets/polygon-3.png";

import "./App.css";
import "./Responsive.css";

function App() {
  const [dropDownActive, setDropDownActive] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(null); // Para feedback de envio

  const navLinks = [
    { name: "Home", href: "#header" },
    { name: "Sobre Nós", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Projetos", href: "#projetos" },
    { name: "Contato", href: "#contato" },
  ];

  const footerImages = [
    { image: footerImage1 },
    { image: footerImage2 },
    { image: footerImage3 },
    { image: footerImage4 },
  ];

  const services = [
    {
      name: "Design",
      text: "Criamos qualquer tipo de design para sua empresa, incluindo sites e sistemas, com um visual marcante e funcional para atrair mais clientes",
      image: service_one,
    },
    {
      name: "Programação",
      text: "Desenvolvemos qualquer tipo de site, sistema ou aplicativo para a sua empresa com métodos padronizados pelo mercado de software, preços competitivos que cabem na sua gestão!",
      image: service_two,
    },
    {
      name: "Logo",
      text: "Criamos logotipos exclusivos e profissionais para sua empresa, com um design marcante que atrai clientes e fortalece sua marca!",
      image: service_three,
    },
  ];

  const socials = [
    { name: "Facebook", logo: FacebookLogo, link: "" },
    {
      name: "Instagram",
      logo: instagramLogo,
      link: "https://www.instagram.com/melotech.consulting",
    },
    { name: "Linked-In", logo: LinkedInLogo, link: "" },
  ];

  // Função para lidar com mudanças nos inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Função para enviar o e-mail via API local
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus(null);

    try {
      const response = await fetch(
        "https://melotechwebsitebackend.vercel.app/api/email/send-contact-us",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), // Envia os dados do formulário
        }
      );

      const data = await response.json();

      if (response.ok) {
        setFormStatus({
          type: "success",
          message: data.message || "Mensagem enviada com sucesso!",
        });
        // Limpa o formulário após sucesso
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setFormStatus({
          type: "error",
          message: data.error || "Erro ao enviar mensagem. Tente novamente.",
        });
      }
    } catch (error) {
      setFormStatus({
        type: "error",
        message:
          "Erro ao conectar com o servidor. Verifique se a API está rodando.",
      });
      console.error("Erro ao enviar e-mail:", error);
    }
  };

  return (
    <>
      <div className="app">
        {/* Fixed Navbar */}
        <nav className="navbar">
          <div className="navbar-top-container">
            <div className="navbar-top-container_social">
              <ul>
                {socials.map((socialLinkButton) => (
                  <li key={socialLinkButton.name}>
                    <a
                      href={socialLinkButton.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={socialLinkButton.logo}
                        alt={socialLinkButton.name}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="navbar-top-container_email"></div>
          </div>
          <div className="navbar-container">
            <div className="navbar-logo">
              <img src={logo} alt="Melotech Logo" />
              <h1 className="melotech-navbar">MELOTECH</h1>
            </div>
            <ul className="navbar-links">
              {navLinks.map((navLink) => (
                <li key={navLink.name}>
                  <a href={navLink.href}>{navLink.name}</a>
                </li>
              ))}
            </ul>
            <button
              style={{ opacity: !dropDownActive ? 1 : 0 }}
              onClick={() => setDropDownActive(!dropDownActive)}
              className="navbar-menu-btn"
            >
              <img src={menuIcon} alt="menuIcon" height="20px" width="20px" />
            </button>
            <div
              style={{
                transform: dropDownActive
                  ? "translateY(0)"
                  : "translateY(-100%)",
              }}
              className="dropdown-menu"
            >
              <ul>
                {navLinks.map((navLink) => (
                  <li key={navLink.name}>
                    <a href={navLink.href}>{navLink.name}</a>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setDropDownActive(false)}
                className="close-dropdown-btn"
              >
                <img
                  src={closeIcon}
                  height="20px"
                  width="20px"
                  alt="closeIcon"
                />
              </button>
            </div>
            <div className="navbar-callToAction">
              <img src={phoneIcon} alt="Phone Icon" />
              <div>
                <span>ENTRE EM CONTATO</span>
                <p>51 99895-1079</p>
              </div>
            </div>
          </div>
        </nav>

        {/* Header */}
        <header id="header" className="header">
          <div className="header-content-background" />
          <div className="header-content">
            <div className="header-content-text">
              <h1 className="header-content-title">
                Faça parte dessa nova experiência
              </h1>
              <p>A Solução completa em software e design para a sua empresa</p>
            </div>
          </div>
          <div className="header-hero-img-container"></div>
        </header>

        {/* Main Content */}
        <main className="main-content">
          {/* About Us Section */}
          <section id="sobre" className="about-us">
            <div className="about-us_content">
              <div className="about-us_image">
                <div className="abouts-us_image_two">
                  <div className="h-[10px] w-1/2 bg-blue-500 absolute top-0 left-0" />
                  <div className="w-[10px] h-1/2 bg-blue-500 absolute top-0 left-0" />
                  <div className="h-[12px] w-[90%] bg-blue-500 absolute top-[-20px] left-[-20px]" />
                  <div className="w-[12px] h-[90%] bg-blue-500 absolute top-[-20px] left-[-20px]" />
                </div>
                <div className="about-us_image_email">
                  <img
                    src={emailLogo}
                    alt="email"
                    className="h-[30px] w-[30px]"
                  />
                  <span>melotechconsulting@gmail.com</span>
                </div>
              </div>
              <div className="about-us_text">
                <h1 className="about-us_text-title">Sobre Nós</h1>
                <p>
                  Somos uma empresa de tecnologia especializada em criar
                  soluções digitais inovadoras. Nosso foco é no desenvolvimento
                  de sites, criação de logos e aplicativos personalizados,
                  sempre buscando atender às necessidades de nossos clientes com
                  qualidade, eficiência e design moderno. Transformamos ideias
                  em experiências digitais únicas para ajudar sua marca a se
                  destacar no mundo online.
                </p>
                <h2>
                  Modernize seus processos internos e seu gerenciamento com
                  sistemas rápidos e intuitivos!
                </h2>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="servicos" className="services">
            <div className="services-content">
              <h1>Nossos Serviços</h1>
              <div className="services-grid">
                {services.map((service) => (
                  <div key={service.name} className="service-card">
                    <div className="service-card_image">
                      <img
                        className="service-img w-full"
                        src={service.image}
                        alt={`${service.name} image`}
                      />
                      <div className="service-card_service-name">
                        <h1>{service.name}</h1>
                      </div>
                    </div>
                    <div className="service-card_text-content">
                      <p>{service.text}</p>
                    </div>
                    <a
                      href="https://wa.me/5551998951079?text=Ol%C3%A1"
                      target="_blank"
                    >
                      <button className="service-card_start-btn">
                        <span>COMEÇAR</span>
                      </button>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section id="contato" className="contact-form-section">
            <div className="contact-form-content">
              <div className="contact-form_image">
                <img
                  src={form_image}
                  alt="form image"
                  className="contact-form_image-img"
                />
              </div>
              <div className="form-container">
                <div className="form-text-animated flex items-center gap-4">
                  <div className="polygon-animation flex">
                    {[1, 2, 3].map((icon) => (
                      <img src={polygon} alt="polygon" />
                    ))}
                  </div>
                  <h1 className="contact-form-text">
                    Sinta-se à vontade para nos escrever
                  </h1>
                  <div className="polygon-animation flex transform rotate-180">
                    {[1, 2, 3].map((icon) => (
                      <img src={polygon} alt="polygon" />
                    ))}
                  </div>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Seu Nome</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Seu Nome"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Endereço De Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Endereço De Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Telefone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Telefone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">Assunto</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Assunto"
                        value={formData.subject}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Escreva uma mensagem</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Escreva uma mensagem"
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-button">
                    Enviar Uma Mensagem
                  </button>

                  {/* Feedback do envio */}
                  {formStatus && (
                    <p
                      style={{
                        color: formStatus.type === "success" ? "green" : "red",
                        marginTop: "10px",
                      }}
                    >
                      {formStatus.message}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-logo">
            <div className="flex items-center text-white">
              <img src={logo} alt="Melotech Logo" />
              <h1 className="footer-company-title">MELOTECH</h1>
            </div>
            <div className="footer-social_icons"></div>
          </div>

          <div className="footer-grid">
            <div className="footer-social_links">
              <ul>
                {socials.map((social) => (
                  <li key={social.name}>
                    <a
                      target="_blank"
                      href={social.link}
                      rel="noopener noreferrer"
                    >
                      <img src={social.logo} alt={`${social.name} logo`} />
                      <p>{social.name}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-images">
              {footerImages.map((footerImage, index) => (
                <img
                  key={index}
                  src={footerImage.image}
                  className="h-[100px] w-[100px]"
                  alt={`Footer image ${index + 1}`}
                />
              ))}
            </div>
            <div className="footer-contact">
              <h1 className="meeting">Marque sua reunião!</h1>
              <ul>
                <li className="footer-contact-list">
                  <a>
                    <img
                      src={phoneIcon}
                      className="h-[24px] w-[24px]"
                      alt="Phone Icon"
                    />
                    <strong>51 9989851079</strong>
                  </a>
                  <a href="mailto:melotech.consulting@gmail.com">
                    <img
                      src={emailLogo}
                      className="h-[24px] w-[24px]"
                      alt="Email Icon"
                    />
                    <strong>melotech.consulting@gmail.com</strong>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        <div className="suspense-whats-btn-container">
          <button className="suspense-btn">
            <a
              target="_blank"
              href="https://wa.me/5551998951079?text=Ol%C3%A1"
              rel="noopener noreferrer"
            >
              <img
                src={whatsAppIcon}
                height="40px"
                width="40px"
                alt="WhatsApp Icon"
              />
            </a>
          </button>
          <button className="suspense-btn">
            <a
              target="_blank"
              href="https://www.instagram.com/melotech.consulting"
              rel="noopener noreferrer"
            >
              <img
                src={instaLogo}
                height="40px"
                width="40px"
                alt="Instagram Icon"
              />
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
