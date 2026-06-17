import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакти — TouristUA",
  description: "Зв'яжіться з нами — контактна інформація порталу TouristUA",
};

export default function ContactsPage() {
  return (
    <>
      <div className="page-hero">
        <h1>Контакти</h1>
        <p>Зв&apos;яжіться з нами — ми завжди раді допомогти</p>
      </div>

      <section className="section">
        {/* Контактна інформація */}
        <div className="contact-info">
          <div className="contact-info-item">
            <div className="contact-info-icon">📍</div>
            <div>
              <strong>Адреса:</strong> м. Київ, вул. Хрещатик, 1, Україна
            </div>
          </div>
          <div className="contact-info-item">
            <div className="contact-info-icon">📧</div>
            <div>
              <strong>Email:</strong> info@touristua.com
            </div>
          </div>
          <div className="contact-info-item">
            <div className="contact-info-icon">📞</div>
            <div>
              <strong>Телефон:</strong> +380 (44) 123-45-67
            </div>
          </div>
          <div className="contact-info-item">
            <div className="contact-info-icon">🕐</div>
            <div>
              <strong>Графік роботи:</strong> Пн–Пт: 9:00–18:00
            </div>
          </div>
        </div>

        {/* Форма + Карта */}
        <div className="contacts-grid">
          {/* Форма зворотного зв'язку */}
          <div>
            <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>
              Напишіть нам
            </h2>
            <form className="contact-form">
              <div>
                <label htmlFor="name">Ваше ім&apos;я</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Введіть ваше ім'я"
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Введіть ваш email"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject">Тема</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Тема повідомлення"
                />
              </div>
              <div>
                <label htmlFor="message">Повідомлення</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Напишіть ваше повідомлення..."
                  required
                />
              </div>
              <button type="submit">Надіслати повідомлення</button>
            </form>
          </div>

          {/* Google Maps */}
          <div>
            <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>
              Ми на карті
            </h2>
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.6774522894983!2d30.52073697664756!3d50.44967578792757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce56b2456d3b%3A0xd062ae171b57e947!2z0KXRgNC10YnQsNGC0LjQuiwg0JrQuNGX0LIsINCj0LrRgNCw0ZfQvdCw!5e0!3m2!1suk!2suk!4v1700000000000!5m2!1suk!2suk"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Карта розташування офісу"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
