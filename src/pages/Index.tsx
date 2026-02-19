import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Globe, Server, Cloud, Shield, Zap, Clock, Building2, Landmark,
  Wifi, HardDrive, Database, Monitor, ArrowRight, CheckCircle2,
  Calendar, Newspaper, Award
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

const sectors = [
  { icon: Landmark, label: "For Public Sector", description: "Government MDAs and public institutions", href: "/industries" },
  { icon: Building2, label: "For Large Enterprises", description: "Financial services and corporates", href: "/industries" },
  { icon: Wifi, label: "For SMEs & Startups", description: "Affordable scalable solutions", href: "/industries" },
  { icon: Globe, label: "For Partners & ISPs", description: "Wholesale and partner services", href: "/industries" },
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

const newsItems = [
  { title: "Smart Infraco Expands National Fibre Backbone to Northern Ghana", date: "February 10, 2026", category: "Infrastructure" },
  { title: "Tier III Data Centre in Accra Achieves 99.99% Uptime in 2025", date: "January 28, 2026", category: "Data Centres" },
  { title: "Smart Infraco Partners with Government on Digital Ghana Initiative", date: "January 15, 2026", category: "Government" },
];

const certifications = [
  "ISO/IEC 27001:2022",
  "Uptime Institute Tier III",
  "Ghana Data Protection Compliant",
  "PCI DSS Compliant",
];

const partners = [
  "Huawei", "Cisco", "Microsoft", "Oracle", "Dell Technologies", "VMware",
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})`, scale: 1.1 }}
          animate={{ scale: [1.1, 1.15, 1.1], x: [0, -20, 0], y: [0, -10, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Powering Ghana's{" "}
                <span className="text-gradient">Digital Backbone</span>
              </h1>
              <p className="text-lg text-foreground/60 mb-8 leading-relaxed max-w-xl">
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

      {/* Sectors Served (Galaxy Backbone style) */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Who We Serve"
            title="We Serve Different Sectors"
            description="Tailored infrastructure solutions for every segment of Ghana's economy."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sector, i) => (
              <motion.div
                key={sector.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link to={sector.href} className="block group">
                  <div className="bg-card rounded-xl p-8 card-elevated h-full border border-border text-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <sector.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-2">{sector.label}</h3>
                    <p className="text-sm text-muted-foreground">{sector.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">About Smart Infraco</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
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
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-foreground/50">{stat.label}</div>
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
                    <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
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
                <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsfeed */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Latest Updates"
            title="Newsfeed"
            description="Stay informed about our latest developments and milestones."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {newsItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link to="/media" className="block group">
                  <div className="bg-card rounded-xl border border-border card-elevated overflow-hidden">
                    <div className="h-1.5 bg-gradient-to-r from-primary to-accent" />
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                          {item.category}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {item.date}
                        </span>
                      </div>
                      <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/media">
              <Button variant="outline" size="lg">
                View All News
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Awards & Certifications */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Trust & Compliance"
            title="Awards & Certifications"
          />
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="flex items-center gap-3 bg-background border border-border rounded-xl px-6 py-4"
              >
                <Award className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium text-foreground">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Ecosystem"
            title="Our Partners"
          />
          <div className="flex flex-wrap justify-center gap-6">
            {partners.map((partner, i) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="flex items-center justify-center bg-card border border-border rounded-xl px-8 py-5 min-w-[160px]"
              >
                <span className="text-sm font-semibold text-muted-foreground tracking-wide">{partner}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-section-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-foreground/50 mb-8 max-w-xl mx-auto">
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
