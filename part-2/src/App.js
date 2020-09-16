import React, { Component, Fragment } from 'react';
import { connect} from "react-redux";
import "./App.scss";

class App extends Component {
  render() {
    const {logo, logoImg, home: {title, subTitle, content}, contents, contentSection, footer} = this.props;
    const conts = contents.map(cont => cont.content1);
    const cont1 = contentSection.map(cont1 =>cont1.section);
    
    return (

      <Fragment>
       <header className ="header">
         <h1 className = "header__h1">{logo}</h1>
       <img className = "header__img" src =  {logoImg} alt="logoImg" />
       </header>
       <main className = "main">
       <div className = "main__homeContent">
        <h2>{title}</h2>
        <h4>{subTitle}</h4>
        <p>{content}</p>
        </div>
        <section className = "main__section">
        <h1>Main </h1>
          <p>{conts}</p>
          <h4><li>{cont1}</li></h4>
        </section>
       </main>
       <footer className = "footer">
        <h1><a href ="">{footer}</a></h1>
       </footer>
      </Fragment>
     
    );
  }
}

const mapStateToProps = (state) => {
  return {
    logo: state.logo,
    logoImg: state.logoImg,
    home: state.home[0],
    contents: state.contents,
    contentSection: state.contents[0].contentSection,
    footer: state.contact.contactme
  }
}
export default connect(mapStateToProps, null)(App);
