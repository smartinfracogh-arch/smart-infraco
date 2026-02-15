import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Globe, Server, Cloud, Shield, Zap, Clock, Building2, Landmark,
  Wifi, HardDrive, Database, Monitor, ArrowRight, CheckCircle2
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import ghanaMap from "@/assets/ghana-network-map.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

const stats = [
  { value: "1,000+", label: "KM National Backbone", icon: Globe },
  { value: "1,500+", label: "Institutions Served", icon: Building2 },
  { value: "Tier III", label: "Data Centre – Accra", icon: Server },
  { value: "Tier II", label: "Data Centre – Kumasi", icon: Database },
];

const services = [
  { icon: Globe, title: "Fibre Connectivity", description: "National backbone and metro fibre across Ghana with carrier-grade reliability.", href: "/connectivity" },
  { icon: Wifi, title: "Dedicated Internet", description: "High-speed, symmetric internet access with guaranteed uptime SLAs.", href: "/connectivity" },
  { icon: Server, title: "Data Centres", description: "Tier III (Accra) and Tier II (Kumasi) facilities with full redundancy.", href: "/data-centres" },
  { icon: Cloud, title: "Cloud Infrastructure", description: "Hybrid cloud, VPS, and enterprise-grade cloud solutions.", href: "/cloud-services" },
  { icon: HardDrive, title: "Backup & Storage", description: "BaaS and STaaS solutions for business continuity.", href: "/cloud-services" },
  { icon: Monitor, title: "Managed IT Services", description: "End-to-end infrastructure monitoring and management.", href: "/cloud-services" },
];

const whyUs = [
  { icon: Shield, title: "Enterprise Security", description: "Multi-layered physical and cyber security across all infrastructure." },
  { icon: Globe, title: "National Reach", description: "Infrastructure spanning Ghana's major cities and regions." },
  { icon: Zap, title: "Carrier-Grade Reliability", description: "Redundant systems ensuring 99.99% uptime guarantee." },
  { icon: Clock, title: "24/7 NOC", description: "Round-the-clock Network Operations Centre monitoring." },
];

const industries = [
  { icon: Landmark, label: "Government" },
  { icon: Building2, label: "Financial Services" },
  { icon: Wifi, label: "Telecom & ISPs" },
  { icon: Zap, label: "Large Enterprises" },
  { icon: Globe, label: "SMEs & Startups" },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/60" />
        <div className="relative z-10 container mx-auto px-4 py-32">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-6">
                Ghana's Digital Infrastructure Partner
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight mb-6">
                Powering Ghana's{" "}
                <span className="text-gradient">Digital Backbone</span>
              </h1>
              <p className="text-lg text-secondary-foreground/70 mb-8 leading-relaxed max-w-xl">
                Secure. Scalable. National Infrastructure for Government & Enterprise. Future-ready connectivity and cloud solutions across Ghana.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/connectivity">
                  <Button variant="hero" size="xl">
                    Explore Our Solutions
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="heroOutline" size="xl">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">About Smart Infraco</span>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-2 mb-6">
                Ghana's National Digital Infrastructure Company
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Smart Infraco is Ghana's leading digital infrastructure and connectivity company, delivering carrier-grade fibre, data centre, and cloud solutions to government, enterprise, and service providers nationwide.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With a national fibre backbone spanning over 1,000 kilometres and world-class data centres in Accra and Kumasi, we provide the foundation for Ghana's digital transformation.
              </p>
              <Link to="/about">
                <Button variant="outline" size="lg">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <img src={ghanaMap} alt="Ghana network infrastructure map" className="rounded-2xl shadow-2xl w-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-section-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-secondary-foreground/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Our Solutions"
            title="Core Services"
            description="End-to-end digital infrastructure solutions designed for Ghana's government and enterprise needs."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link to={service.href} className="block group">
                  <div className="bg-card rounded-xl p-8 card-elevated h-full border border-border">
                    <service.icon className="w-10 h-10 text-primary mb-4 group-hover:text-accent transition-colors" />
                    <h3 className="text-lg font-semibold text-secondary mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Why Smart Infraco"
            title="Built for Reliability & Scale"
            description="Trusted by government agencies and enterprises across Ghana."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-secondary mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Industries"
            title="Serving Every Sector"
            description="From government to startups, we power Ghana's digital economy."
          />
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
              >
                <Link to="/industries" className="flex items-center gap-3 bg-card border border-border rounded-xl px-6 py-4 card-elevated">
                  <ind.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-secondary">{ind.label}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-section-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-secondary-foreground/60 mb-8 max-w-xl mx-auto">
              Partner with Ghana's leading digital infrastructure company for secure, scalable, and future-ready solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button variant="accent" size="xl">
                  Get in Touch
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/connectivity">
                <Button variant="heroOutline" size="xl">
                  View Solutions
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
