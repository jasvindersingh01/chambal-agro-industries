export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 bg-green-900 text-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-4xl font-bold mb-6">
            Contact Us
          </h2>

          <p className="text-green-100 mb-8 leading-relaxed">
            Get in touch with us for agricultural machinery enquiries, pricing,
            availability, and support. We are here to help farmers and agro
            businesses with reliable equipment and honest guidance.
          </p>

          <div className="space-y-4 text-green-100">
            <p>
              <strong className="text-white">📍 Address:</strong><br />
              319(E, G-1, Rd Number 6, Indraprastha Industrial Area,<br />
              Kota, Rajasthan 324005
            </p>

            <p>
              <strong className="text-white">📞 Phone:</strong><br />
              <a
                href="tel:9829037317"
                className="hover:underline"
              >
                +91 9829037317
              </a>
            </p>

            <p>
              <strong className="text-white">✉️ Email:</strong><br />
              <a
                href="mailto:info@chambalagroindustries.com"
                className="hover:underline"
              >
                info@chambalagroindustries.com
              </a>
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="tel:9829037317"
              className="bg-white text-green-900 px-6 py-3 rounded-md font-semibold hover:bg-green-100 transition"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919829037317"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-green-900 transition"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.2791367561103!2d75.86499857520904!3d25.126252077756753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f8508dc040f63%3A0x5b030eb1ba060df3!2sChambal%20Agro%20Industries%20%2C%20Kota!5e0!3m2!1sen!2sin!4v1765883705129!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Chambal Agro Industries Location"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
