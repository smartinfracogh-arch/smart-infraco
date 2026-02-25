import { motion } from "framer-motion";
import { Shield, Eye, Lock, Globe, Cloud, Search, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

const services = [
  {
    icon: Shield,
    title: "Threat Detection & Prevention",
    description: "Advanced tools to proactively detect and prevent cyber threats, including malware, ransomware, and phishing attacks. Real-time threat intelligence and automated mitigation to safeguard your systems.",
    features: ["Real-time threat intelligence", "Automated mitigation", "Malware protection", "Phishing prevention"],
  },
  {
    icon: Eye,
    title: "Security Monitoring & Incident Response",
    description: "24/7 security monitoring backed by our Network Operating Center ensures rapid detection of suspicious activity. Swift incident response minimizing the impact of breaches.",
    features: ["24/7 SOC monitoring", "Rapid detection", "Incident response", "Quick recovery"],
  },
  {
    icon: Lock,
    title: "Data Protection & Compliance",
    description: "Protect sensitive data and comply with regulations like GDPR and local data protection laws. Encryption, access controls, and audit trails ensure data remains secure and compliant.",
    features: ["GDPR compliance", "Encryption", "Access controls", "Audit trails"],
  },
  {
    icon: Globe,
    title: "Network Security",
    description: "Robust security measures including firewalls, intrusion detection systems (IDS), and secure VPNs, ensuring safe data transmission across your organization.",
    features: ["Next-gen firewalls", "IDS/IPS", "Secure VPNs", "Network segmentation"],
  },
  {
    icon: Cloud,
    title: "Cloud & Application Security",
    description: "Specialized solutions including vulnerability assessments, secure API integrations, and runtime protection, ensuring your digital assets are safe from threats.",
    features: ["Vulnerability assessments", "Secure APIs", "Runtime protection", "Cloud posture management"],
  },
  {
    icon: Search,
    title: "Risk Assessment & Security Consulting",
    description: "Comprehensive risk assessments to identify vulnerabilities. Tailored security consulting to develop strategies that mitigate risks and strengthen your cybersecurity posture.",
    features: ["Risk assessment", "Vulnerability scanning", "Strategy development", "Security roadmap"],
  },
];

const Cybersecurity = () => {
  return (
    <div>
      <PageHero
        title="Cybersecurity Solutions"
        subtitle="Threat Detection, Security Monitoring, Data Protection, Incident Response, and Compliance Consulting."
        backgroundImage={heroBg}
      />

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Services"
            title="Comprehensive Cybersecurity"
            description="Protecting your digital assets with enterprise-grade security solutions."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                {...fadeInUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-background rounded-xl p-8 border border-border card-elevated"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{service.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                <ul className="grid grid-cols-2 gap-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cybersecurity;
