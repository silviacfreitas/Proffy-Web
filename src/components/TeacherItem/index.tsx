import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
    <header>
      <img src="https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4" alt="Imagem Diego Fernandes"/>
      <div>
        <strong>Diego Fernandes</strong>
        <span>Química</span>
      </div>
    </header>
    <p>
      Entusiasta das melhores tecnologias de Química avançada
      <br/><br/>
      Apaixonado por explodir coisas em laboratórios e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por suas explosões. 
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$ 70,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp"/>
        Entrar em contato
      </button>
    </footer>
  </article>
  );
}

export default TeacherItem;