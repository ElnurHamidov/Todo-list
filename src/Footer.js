import React from 'react';
import { BsFacebook,  BsWhatsapp, BsInstagram } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub,} from 'react-icons/ai';

class Footer extends React.Component{


    render(){
        return(
            <div className='footer'>
            <footer className="text-center text-white" style={{backgroundColor: '#f1f1f1'}}>
          <div className="container pt-4">
          <section className="mb-4">
            <a
                target="_blank" rel="noopener noreferrer"
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://www.facebook.com/elnur.gamidov.54"
                role="button"
                data-mdb-ripple-color="dark"
                ><i className="fab fa-facebook-f"><BsFacebook /></i
              ></a>
              <a
                target="_blank" rel="noopener noreferrer"
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href=" https://wa.me/+994708221706"
                role="button"
                data-mdb-ripple-color="dark"
                ><i className="fab fa-twitter"><BsWhatsapp /></i
              ></a>
              <a
                target="_blank" rel="noopener noreferrer"
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://www.instagram.com/gamidovelnur"
                role="button"
                data-mdb-ripple-color="dark"
                ><i className="fab fa-instagram">< BsInstagram/></i
              ></a>
              <a
                target="_blank" rel="noopener noreferrer"
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="linkedin.com/in/elnur-hamidov-685737216"
                role="button"
                data-mdb-ripple-color="dark"
                ><i className="fab fa-linkedin"><AiFillLinkedin /></i
              ></a>
              <a
                target="_blank" rel="noopener noreferrer"
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://github.com/ElnurHamidov"
                role="button"
                data-mdb-ripple-color="dark"
                ><i className="fab fa-github"><AiFillGithub /></i
              ></a>
            </section>
          </div>
          <div className="text-center text-dark p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
              <p>My Contacts</p>
          </div>
</footer>
            </div>
        );
    }
}

export default Footer;