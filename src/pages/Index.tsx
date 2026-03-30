import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe, Server, Cloud, Shield, Zap, Clock, Building2, Landmark,
  Wifi, HardDrive, Database, Monitor, ArrowRight, CheckCircle2,
  Calendar, Newspaper, Award, Radio, Lock
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import ghanaMap from "@/assets/ghana-network-map.jpg";
import { useState, useEffect, useCallback } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

const stats = [
  { value: "3,800+", label: "KM Fibre Network", icon: Globe },
  { value: "250+", label: "Organisations Served", icon: Building2 },
  { value: "Tier III", label: "Data Centre – Accra", icon: Server },
  { value: "5G", label: "Nationwide Network", icon: Radio },
];

const whatWeDo = [
  { icon: Monitor, label: "Digital & Technology Services" },
  { icon: Wifi, label: "Managed Network & IT Infra" },
  { icon: Globe, label: "Reliable Professional Services" },
  { icon: Zap, label: "Plug and Play Infrastructure" },
  { icon: Cloud, label: "Cloud Infra & GPON Investments" },
  { icon: Building2, label: "Technology Partnerships" },
];

const services = [
  { icon: Globe, title: "Connectivity Solutions", description: "Dark Fibre, Ethernet, MPLS, 5G, and nationwide fibre access across all regional and district capitals.", href: "/connectivity" },
  { icon: Server, title: "Data Centre Solutions", description: "VPS, Rack Colocation, Storage as a Service, Managed IT Infrastructure in Tier III & II facilities.", href: "/data-centres" },
  { icon: Cloud, title: "Cloud Solutions", description: "IT Infrastructure Transformation, Disaster Recovery, Multi-Cloud & Hybrid Cloud Adoption.", href: "/cloud-services" },
  { icon: Shield, title: "Cybersecurity Solutions", description: "Threat Detection, Security Monitoring, Data Protection, Incident Response & Compliance Consulting.", href: "/cybersecurity" },
];

const keyProjects = [
  { title: "Tier 3 & Tier 2 Data Centers", description: "State-of-the-art data centers providing resilient, scalable, and secure hosting solutions across Ghana." },
  { title: "Nationwide 5G Network", description: "Ultra-fast internet speeds of 200mbps+ with robust connectivity empowering businesses and consumers." },
  { title: "Eastern Corridor Fibre Network", description: "Fiber capacity from Accra through Ho to Bawku with 100gbps backbone serving operators and institutions." },
  { title: "e-Transform Project", description: "Connectivity across all metropolitan and district capitals through 3,800+ km fibre network at 50-100mbps." },
];

const whyUs = [
  { icon: Award, title: "Expertise", description: "Decades of experience in ICT and network solutions." },
  { icon: Shield, title: "Security & Compliance", description: "Adherence to industry-leading security standards." },
  { icon: Zap, title: "Scalability", description: "Solutions designed for growth and adaptability." },
  { icon: Clock, title: "24/7 Support", description: "Dedicated support for mission-critical operations." },
];

const customers = [
  "MTN", "AT Ghana", "Devtraco", "Ghana Immigration", "Ghana Airports", "Ghana Armed Forces", "Ministry of Foreign Affairs",
];

const partners = [
  "NGIC", "ASCEND", "NITA", "NOKIA",
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
                End-to-end infrastructure solutions in storage, security, support, and connectivity for government and private entities under a single window.
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

      {/* What We Do */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="What We Do"
            title="Comprehensive Digital Solutions"
            description="Smart Infraco provides end-to-end infrastructure solutions to improve IT performance for business continuity."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeDo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card rounded-xl p-6 border border-border card-elevated flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground">{item.label}</span>
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
                Leading Provider of Innovative Technology Solutions
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Smart Infraco is a leading provider of innovative technology solutions, specialising in Cloud Services, Data Centre Solutions, Connectivity Solutions, and Cybersecurity Services.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We provide end-to-end infrastructure solutions in storage, security, support, and advice to both government and private entities under a single window to improve the performance of IT infrastructure for business continuity.
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
            label="Our Major Services"
            title="Core Service Areas"
            description="Comprehensive digital infrastructure solutions for Ghana's government and enterprise needs."
          />
          <div className="grid sm:grid-cols-2 gap-6">
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

      {/* Ghana 2030 Digital Agenda */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Ghana's 2030 Digital Agenda"
            title="Delivering on the National Vision"
            description="Ghana's 2030 Digital Agenda envisions a fully digitized economy, fostering socioeconomic growth through universal access to high-speed, affordable connectivity."
          />
          <div className="grid sm:grid-cols-2 gap-6">
            {keyProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-background rounded-xl p-8 border border-border card-elevated"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Why Smart Infraco"
            title="Why Choose Us?"
            description="Trusted by over 250 public and private organizations in Ghana."
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

      {/* Major Customers */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Major Customers"
            title="Trusted by Leading Organisations"
            description="Our diverse customer base includes government institutions, large enterprises, educational organisations, and startups."
          />
          <div className="flex flex-wrap justify-center gap-4">
            {customers.map((customer, i) => (
              <motion.div
                key={customer}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="flex items-center justify-center bg-background border border-border rounded-xl px-8 py-5 min-w-[160px]"
              >
                <span className="text-sm font-semibold text-muted-foreground tracking-wide">{customer}</span>
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
