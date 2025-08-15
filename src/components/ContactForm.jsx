import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { PROFILE } from '../data';
import './ContactForm.css';

const ContactForm = () => {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const validate = () => {
    const e = {};
    if (!values.name.trim()) e.name = "Votre nom est requis.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = "Email invalide.";
    if (values.message.trim().length < 10) e.message = "Message trop court (10 caractères min).";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onChange = (ev) => setValues({ ...values, [ev.target.name]: ev.target.value });

  const onSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent("Nouveau message de " + values.name)}&body=${encodeURIComponent(values.message + "\n\n— " + values.email)}`;
    }, 400);
  };

  return (
    <form onSubmit={onSubmit} className="contact-form">
      <div className="form-grid">
        <div>
          <label className="form-label">Nom</label>
          <input
            name="name"
            value={values.name}
            onChange={onChange}
            className="form-input"
            placeholder="Votre nom"
          />
          {errors.name && <p className="form-error">{errors.name}</p>}
        </div>
        <div>
          <label className="form-label">Email</label>
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={onChange}
            className="form-input"
            placeholder="vous@exemple.com"
          />
          {errors.email && <p className="form-error">{errors.email}</p>}
        </div>
      </div>
      <div>
        <label className="form-label">Message</label>
        <textarea
          name="message"
          value={values.message}
          onChange={onChange}
          rows={6}
          className="form-textarea"
          placeholder="Décrivez votre projet (secteur, pages souhaitées, objectifs, délai)…"
        />
        {errors.message && <p className="form-error">{errors.message}</p>}
      </div>
      <div className="form-actions">
        <button
          type="submit"
          disabled={status === "sending"}
          className="submit-button"
        >
          <Send size={16} /> {status === "sending" ? "Envoi..." : "Envoyer"}
        </button>
        {status === "sent" && <span className="sent-message">Message préparé dans votre client mail.</span>}
      </div>
    </form>
  );
};

export default ContactForm;
