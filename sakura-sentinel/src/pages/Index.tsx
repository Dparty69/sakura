import { ParticleBackground } from "@/components/ParticleBackground";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { NavBar } from "@/components/NavBar";
import { ServiceCard } from "@/components/ServiceCard";

export default function Index() {
  const navigate = useNavigate();

  const services = [
    {
      title: "Cyber Threat Intelligence",
      description: "Proactieve bescherming tegen cyberdreigingen met real-time monitoring en analyse.",
      details: ["24/7 monitoring", "Threat hunting", "Incident response"]
    },
    {
      title: "Netwerkbeveiliging",
      description: "Uitgebreide netwerkbeveiligingsoplossingen voor uw bedrijf.",
      details: ["Firewall beheer", "VPN oplossingen", "Netwerk monitoring"]
    },
    {
      title: "End-to-End File-Share",
      description: "Veilig bestanden delen met end-to-end encryptie.",
      details: ["Versleutelde overdracht", "Veilige opslag", "Toegangscontrole"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sakura-50">
      <NavBar />
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative container mx-auto px-4 pt-32 pb-16 text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-6 text-gradient"
        >
          Welkom bij Sakura no Kaika
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-charcoal-100 max-w-2xl mx-auto mb-8"
        >
          Uw betrouwbare partner in cybersecurity oplossingen. Wij bieden geavanceerde 
          bescherming voor uw digitale assets met innovatieve technologieën.
        </motion.p>
        <Button 
          onClick={() => navigate('/file-share')} 
          className="bg-sakura-200 hover:bg-sakura-300 text-white px-8 py-6 text-lg"
        >
          Begin met Delen
        </Button>
      </section>

      {/* Services Section */}
      <section className="relative container mx-auto px-4 py-16 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-gradient"
        >
          Onze Diensten
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              details={service.details}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="relative container mx-auto px-4 py-16 z-10">
        <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-6 text-gradient"
          >
            Over Ons
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-charcoal-100 text-center"
          >
            Sakura no Kaika is een toonaangevend cybersecuritybedrijf dat zich richt op 
            het beschermen van digitale landschappen van bedrijven over de hele wereld. 
            Met onze innovatieve oplossingen en expertise zorgen we voor een veilige 
            digitale toekomst.
          </motion.p>
        </div>
      </section>
    </div>
  );
}