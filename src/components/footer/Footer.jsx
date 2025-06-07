import React, { useState } from 'react';
import { Config } from '../../Config';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    privacy: false
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      return 'Wszystkie pola są wymagane';
    }
    if (!formData.privacy) {
      return 'Musisz wyrazić zgodę na przetwarzanie danych';
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      return 'Proszę podać poprawny adres e-mail';
    }
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      setSuccess(false);
      return;
    }

    try {
      const response = await fetch(`${Config.base.url}/server/mailer`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setError('');
        setFormData({ name: '', email: '', phone: '', message: '', privacy: false });
      } else {
        setError('Coś poszło nie tak, spróbuj ponownie.');
        setSuccess(false);
      }
    } catch (error) {
      setError('Błąd połączenia z serwerem. Spróbuj ponownie później.');
      setSuccess(false);
    }
  };

  return (
    <div className="bg-zinc-900 text-zinc-200 p-8 lg:p-16" id="kontakt">
      <div className="container mx-auto grid grid-cols-12 px-6">
        {/* Lewa Sekcja - Dane Firmowe */}
        <div className="mb-12 lg:mb-0 col-span-12 md:col-span-6">
          <h1 className="text-5xl font-light mb-8 text-zinc-300 font-poppins">Kontakt</h1>
          {/* Dane Firmowe */}
          <div className="mb-8">
            <h2 className="text-lg text-mainColor mb-2 font-poppins">DANE FIRMOWE</h2>
            <p className="leading-relaxed font-montserrat">
              ul. J. Babińskiego 71B,<br />
              30-394 Kraków<br />
              NIP 6762684566<br />
              KRS 0001147815<br />
              REGON 540597942
            </p>
          </div>

          <div>
            <h2 className="text-lg text-mainColor mb-2 font-poppins">ADRES BIURA SPRZEDAŻY</h2>
            <p className="leading-relaxed font-montserrat">
              ul. J. Babińskiego 71B,<br />
              30-394 Kraków<br />
              TEL: {Config.contact.phoneFormated}<br />
              EMAIL: <a href="mailto:biuro@zakatekszymonowica.pl" className="text-mainColor">biuro@zakatekszymonowica.pl</a>
            </p>
          </div>

          {/* Ikony Mediów Społecznościowych */}
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-zinc-300 hover:text-mainColor">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="#" className="text-zinc-300 hover:text-mainColor">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </div>
        </div>

        {/* Prawa Sekcja - Formularz Kontaktowy */}
        <div className="col-span-12 md:col-span-6">
          <h2 className="text-3xl font-light mb-6 text-zinc-300 font-poppins">Napisz do nas</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {success && <p className="text-green-500">Formularz został wysłany!</p>}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Imię i nazwisko"
              className="font-montserrat w-full p-3 bg-zinc-800 border border-zinc-700 text-zinc-300 rounded focus:outline-none focus:border-mainColor"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-mail"
              className="font-montserrat w-full p-3 bg-zinc-800 border border-zinc-700 text-zinc-300 rounded focus:outline-none focus:border-mainColor"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Telefon"
              className="font-montserrat w-full p-3 bg-zinc-800 border border-zinc-700 text-zinc-300 rounded focus:outline-none focus:border-mainColor"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Wiadomość"
              rows="5"
              className="font-montserrat w-full p-3 bg-zinc-800 border border-zinc-700 text-zinc-300 rounded focus:outline-none focus:border-mainColor"
            ></textarea>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="privacy"
                name="privacy"
                checked={formData.privacy}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="privacy" className="text-sm text-zinc-400 font-montserrat">
                Wyrażam zgodę na przetwarzanie moich danych osobowych oraz potwierdzam, że zapoznałem się z treścią <a href="#" className="text-mainColor">Polityki prywatności</a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full md:w-auto bg-mainColor text-white px-6 py-3 rounded hover:bg-mainColor transition font-poppins"
            >
              Wyślij wiadomość →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
