import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, Rocket, Heart } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = {
      content: `📩 **New Project Inquiry**
👤 **Name:** ${formData.name}
📧 **Email:** ${formData.email}
📱 **Phone:** ${formData.phone}
💬 **Message:** ${formData.message}`
    };

    try {
      const response = await fetch("https://discord.com/api/webhooks/1494405472739135671/TsdAyMt_-_Gl_jSx5fc9Z94cvfnG0saBKyVUXa5ElTrEQ9prPYffkuMDlv2a9TkoAP8-", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert("Error sending message");
      }
    } catch (error) {
      alert("Error sending message");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-48 bg-black px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-gold-primary font-black uppercase tracking-[0.6em] text-xs mb-8 block">
              Inquiries
            </span>
            <h2 className="text-6xl md:text-9xl font-serif font-black text-white mb-10 tracking-tighter leading-none">
              Ready for <br />
              <span className="text-gradient">Ascension?</span>
            </h2>
            <p className="text-text-grey text-2xl font-light leading-relaxed mb-16 max-w-md">
              Step into the future of digital excellence. Let's create something that transcends time.
            </p>

            <div className="space-y-10 mb-20">
              <ContactLink 
                icon={<Mail className="text-gold-primary" />} 
                label="Digital Mail" 
                value="kabirverseworld@gmail.com" 
                href="mailto:kabirverseworld@gmail.com?subject=Contact%20Request&body=Hello%20I%20want%20to%20contact%20you"
              />
              <ContactLink 
                icon={<Phone className="text-gold-light" />} 
                label="Direct Line" 
                value="+91-9003516669" 
                href="tel:+919003516669"
              />
            </div>

            <div className="flex space-x-8">
              {/* WhatsApp Icon */}
              <SocialIcon 
                href="https://wa.me/919003516669"
                icon={<MessageCircle size={28} />} 
              />
              {/* Instagram Icon (Custom SVG) */}
              <SocialIcon 
                href="https://www.instagram.com/kabirverse.io/"
                icon={
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                } 
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="luxury-gold-border p-14 md:p-20 rounded-[5rem] shadow-2xl bg-black/50 backdrop-blur-3xl"
          >
            <form className="space-y-12" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <label className="text-gold-primary uppercase tracking-[0.5em] text-[10px] font-black">Identity</label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gold-primary/5 border border-gold-primary/10 rounded-[2.5rem] px-10 py-7 text-white focus:outline-none focus:border-gold-primary/50 transition-all font-medium placeholder:text-zinc-700"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-6">
                  <label className="text-gold-primary uppercase tracking-[0.5em] text-[10px] font-black">Coordinates</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gold-primary/5 border border-gold-primary/10 rounded-[2.5rem] px-10 py-7 text-white focus:outline-none focus:border-gold-primary/50 transition-all font-medium placeholder:text-zinc-700"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                <label className="text-gold-primary uppercase tracking-[0.5em] text-[10px] font-black">Direct Line (Phone)</label>
                <input 
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-gold-primary/5 border border-gold-primary/10 rounded-[2.5rem] px-10 py-7 text-white focus:outline-none focus:border-gold-primary/50 transition-all font-medium placeholder:text-zinc-700"
                  placeholder="Your Phone Number"
                />
              </div>

              <div className="space-y-6">
                <label className="text-gold-primary uppercase tracking-[0.5em] text-[10px] font-black">Transmission</label>
                <textarea 
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-gold-primary/5 border border-gold-primary/10 rounded-[3rem] p-10 text-white focus:outline-none focus:border-gold-primary/50 transition-all resize-none font-medium placeholder:text-zinc-700"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-8 rounded-[3rem] bg-gradient-to-r from-gold-dark via-gold-primary to-gold-dark text-black font-black uppercase tracking-[0.5em] text-[10px] flex items-center justify-center space-x-4 shadow-[0_0_50px_rgba(212,175,55,0.4)] hover:shadow-[0_0_70px_rgba(212,175,55,0.6)] transition-all duration-700 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? "Sending..." : "Join on Discord"}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 11.721 11.721 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactLink = ({ icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) => {
  const content = (
    <>
      <div className="p-6 rounded-[2.5rem] bg-gold-primary/5 group-hover:bg-gold-primary/15 transition-all duration-500 border border-gold-primary/10 group-hover:border-gold-primary/30">
        {icon}
      </div>
      <div>
        <p className="text-gold-primary text-[10px] font-black uppercase tracking-[0.5em] mb-2">{label}</p>
        <p className="text-white text-2xl font-serif font-bold group-hover:text-gold-primary transition-colors">{value}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <motion.a 
        href={href} 
        whileHover={{ x: 10 }}
        className="flex items-center space-x-8 group cursor-pointer no-underline relative z-10 w-fit"
      >
        {content}
      </motion.a>
    );
  }

  return (
    <div className="flex items-center space-x-8 group cursor-pointer relative z-10 w-fit">
      {content}
    </div>
  );
};

const SocialIcon = ({ icon, href }: { icon: any; href?: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -8, scale: 1.1 }}
    className="w-20 h-20 rounded-[2.5rem] bg-gold-primary/5 border border-gold-primary/10 flex items-center justify-center text-gold-primary hover:text-white hover:bg-gold-primary transition-all duration-500 cursor-pointer shadow-xl"
  >
    {icon}
  </motion.a>
);

const Footer = () => {
  return (
    <footer className="py-32 bg-black border-t border-gold-primary/10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
        <div className="flex items-center space-x-4">
          <Rocket className="text-gold-primary" size={40} />
          <span className="text-3xl font-cinzel font-black tracking-[0.2em] text-white uppercase">
            Kabir<span className="text-gold-primary">Verse</span>
          </span>
        </div>

        <div className="flex items-center gap-3 text-text-grey text-[10px] font-bold uppercase tracking-[0.5em]">
          <span>© {new Date().getFullYear()} Crafted with</span>
          <Heart size={16} className="text-gold-primary fill-gold-primary" />
          <span>by the KabirVerse Elite</span>
        </div>

        <div className="flex gap-12 text-gold-primary text-[10px] font-black uppercase tracking-[0.5em]">
          <a href="#" className="hover:text-white transition-all">Privacy</a>
          <a href="#" className="hover:text-white transition-all">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export { Contact, Footer };
