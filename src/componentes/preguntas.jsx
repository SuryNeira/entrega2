import React from 'react';
import '../estilos/preguntas.scss';
const Preguntas = () => {
  const faqData = [
    {
      question: '¿Cómo puedo realizar una compra segura?',
      answer: 'Para realizar una compra segura, asegúrate de utilizar métodos de pago confiables y verifica siempre la URL del sitio web antes de ingresar información personal.'
    },
    {
      question: '¿Mis datos personales están protegidos?',
      answer: 'Sí, nos tomamos en serio la seguridad de tus datos. Utilizamos encriptación SSL para proteger la información personal y no compartimos tus datos con terceros.'
    },
    {
      question: '¿Cómo puedo realizar un seguimiento de mi pedido?',
      answer: 'Puedes realizar un seguimiento de tu pedido iniciando sesión en tu cuenta y yendo a la sección de historial de pedidos. También recibirás notificaciones por correo electrónico con actualizaciones sobre el estado de tu pedido.'
    },
    {
      question: '¿Hay opciones de devolución?',
      answer: 'Sí, ofrecemos opciones de devolución. Consulta nuestra política de devoluciones para obtener información detallada sobre cómo devolver productos.'
    },
  ];

  return (
    <div className="faq-container">
      <h2>Preguntas Frecuentes</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Preguntas;
