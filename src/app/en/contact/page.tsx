// page.tsx (Server Component by default)

import ContactForm from '../../components/ContactForm';

export default function Page() {
  return (
    <div className='contact-page-div'>
      <h1>Contact Us</h1>
      <div className='contact-page-div-inner'>
        <ContactForm />
        <div className='contact-information'>
           <h3>Contact Information</h3>
           <a href="mailto:info@nineteenproduction.se">info@nineteenproduction.se</a>
           <a href="tel:+46760090613">076 009 06 13</a>
           <span>Norr Mälarstrand 32,<br/>112 20 Stockholm, Sweden</span>
           <h3>Opening Hours</h3>
           <p>Monday to Friday: 09:00 - 17:00</p>
        </div>
      </div>
    </div>
  );
}