import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

   
    const github = this.props.data.github;
    const linkedin = this.props.data.ln;
    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header id="home">
        <ParticlesBg type="cobweb" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav" style={{hover:'red'}}>
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                Sobre
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Currículo
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Trabalhos
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contato
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            
            <Fade bottom>
              <h1 className="responsive-headline">Gabriel Schaedler de Abreu</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}.</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <a href={linkedin} target='_blank' className="button btn project-btn">
                  <i className="fa fa-linkedin"></i>LinkedIn
                </a>
                <a href={github} target='_blank' className="button btn github-btn">
                  <i className="fa fa-github"></i>Github
                </a>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
