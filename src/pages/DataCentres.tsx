import { motion } from "framer-motion";
import { Shield, Zap, Thermometer, Flame, Lock, Eye, Server, Link as LinkIcon, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import datacentreBg from "@/assets/datacentre-bg.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

const facilities = [
  {
    tier: "Tier III",
    location: "Accra",
    description: "Our flagship data centre in Accra delivers concurrently maintainable infrastructure with N+1 redundancy across all critical systems, ensuring maximum uptime for mission-critical workloads.",
    features: ["Concurrently maintainable", "N+1 redundancy", "2N power distribution", "Multiple utility feeds"],
  },
  {
    tier: "Tier II",
    location: "Kumasi",
    description: "Our Kumasi facility provides redundant capacity components for power and cooling, serving Ghana's second-largest metropolitan area with reliable hosting and colocation services.",
    features: ["Redundant components", "Single distribution path", "UPS & generator backup", "Regional hub"],
  },
];

const features = [
  { icon: Zap, title: "Redundant Power", description: "Multiple utility feeds, UPS systems, and diesel generators ensure uninterrupted power supply." },
  { icon: Thermometer, title: "Precision Cooling", description: "Advanced cooling systems maintain optimal operating temperatures with N+1 redundancy." },
  { icon: Flame, title: "Fire Suppression", description: "VESDA early detection and clean-agent fire suppression systems protect critical assets." },
  { icon: Lock, title: "Physical Security", description: "Multi-layer access control, CCTV surveillance, and 24/7 security personnel." },
  { icon: Eye, title: "24/7 Monitoring", description: "NOC with real-time infrastructure monitoring, alerting, and incident response." },
  { icon: LinkIcon, title: "Interconnection", description: "Cross-connect services and carrier-neutral meet-me rooms for peering and transit." },
];

const DataCentres = () => {
  return (
    <div>
      <PageHero
        title="Data Centre Services"
        subtitle="World-class colocation and hosting facilities designed for maximum availability and security."
        backgroundImage={datacentreBg}
      />

      {/* Facilities */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <SectionHeading label="Our Facilities" title="Data Centre Locations" />
          <div className="grid md:grid-cols-2 gap-8">
            {facilities.map((fac, i) => (
              <motion.div
                key={fac.tier}
                {...fadeInUp}
                transition={{ delay: i * 0.15 }}
                className="bg-background rounded-xl p-8 border border-border card-elevated"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-bold">{fac.tier}</div>
                  <span className="text-lg font-bold text-secondary">{fac.location}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">{fac.description}</p>
                <ul className="space-y-2">
                  {fac.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-secondary">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Infrastructure"
            title="Built for High Availability"
            description="Every aspect of our data centres is designed for resilience, security, and performance."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <feat.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-base font-semibold text-secondary mb-2">{feat.title}</h3>
                <p className="text-sm text-muted-foreground">{feat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-section-dark">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading
            light
            label="Colocation"
            title="Colocation & Hosting Services"
            description="From single rack units to private suites, we offer flexible hosting options for every requirement."
          />
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {["Rack Space", "Private Suites", "Interconnection"].map((svc, i) => (
              <motion.div
                key={svc}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-xl p-6"
              >
                <Server className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="text-sm font-semibold text-secondary-foreground">{svc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataCentres;
