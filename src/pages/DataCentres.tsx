import { motion } from "framer-motion";
import { Shield, Zap, Thermometer, Flame, Lock, Eye, Server, HardDrive, Globe, Monitor, Database, CheckCircle2 } from "lucide-react";
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

const services = [
  {
    icon: Server,
    title: "Virtual Private Server",
    description: "Scalable, secure, and cost-effective computing resources with dedicated CPU, RAM, and storage. Host applications, websites, or databases with high performance and full administrative control.",
  },
  {
    icon: HardDrive,
    title: "Rack Colocation Services",
    description: "Securely house your servers in our Tier 3 and Tier 2 data centers with redundant power, cooling, and 24/7 monitoring for uptime, disaster recovery, and physical security.",
  },
  {
    icon: Shield,
    title: "Security Services",
    description: "Comprehensive data center security including biometric access control, CCTV surveillance, and fire suppression systems to protect equipment and data.",
  },
  {
    icon: Monitor,
    title: "Monitoring as a Service",
    description: "Real-time monitoring ensuring optimal performance and uptime with 24/7 oversight from our Network Operating Center, proactively identifying and resolving issues.",
  },
  {
    icon: Globe,
    title: "Domain Registration",
    description: "Hassle-free domain registration service. We handle the entire process, ensuring your domain is secure, registered, and ready to support your website or email services.",
  },
  {
    icon: Database,
    title: "Storage as a Service",
    description: "Scalable cloud storage with flexible plans and high availability supporting data archiving, backups, and large-scale storage needs for businesses of all sizes.",
  },
  {
    icon: HardDrive,
    title: "Backup as a Service",
    description: "Automated, secure backup solutions with scheduled backups, offsite storage, and quick recovery options to ensure business continuity.",
  },
  {
    icon: Globe,
    title: "Web Hosting Service",
    description: "Reliable web hosting with high-speed servers, 99.9% uptime, and robust security. Shared, dedicated, and managed hosting options available.",
  },
  {
    icon: Monitor,
    title: "IT Infrastructure Managed Services",
    description: "Full management of servers, networks, and storage with focus on performance, security, and scalability. Certified team handles maintenance, updates, and troubleshooting.",
  },
];

const features = [
  { icon: Zap, title: "Redundant Power", description: "Multiple utility feeds, UPS systems, and diesel generators ensure uninterrupted power supply." },
  { icon: Thermometer, title: "Precision Cooling", description: "Advanced cooling systems maintain optimal operating temperatures with N+1 redundancy." },
  { icon: Flame, title: "Fire Suppression", description: "VESDA early detection and clean-agent fire suppression systems protect critical assets." },
  { icon: Lock, title: "Physical Security", description: "Biometric access control, CCTV surveillance, and 24/7 security personnel." },
  { icon: Eye, title: "24/7 NOC Monitoring", description: "Real-time infrastructure monitoring, alerting, and incident response from our NOC." },
];

const DataCentres = () => {
  return (
    <div>
      <PageHero
        title="Data Centre Solutions"
        subtitle="VPS, Rack Colocation, Storage as a Service, and Managed IT Infrastructure in Tier III & Tier II facilities."
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
                  <span className="text-lg font-bold text-foreground">{fac.location}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">{fac.description}</p>
                <ul className="space-y-2">
                  {fac.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground">
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

      {/* Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Services"
            title="Data Centre Services"
            description="Comprehensive hosting, storage, and management solutions for your critical infrastructure."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card rounded-xl p-6 border border-border card-elevated"
              >
                <service.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-base font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Features */}
      <section className="py-20 bg-section-dark">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Infrastructure"
            title="Built for High Availability"
            description="Every aspect of our data centres is designed for resilience, security, and performance."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
                <h3 className="text-base font-semibold text-foreground mb-2">{feat.title}</h3>
                <p className="text-sm text-muted-foreground">{feat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataCentres;
