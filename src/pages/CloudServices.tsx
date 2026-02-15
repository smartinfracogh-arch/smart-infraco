import { motion } from "framer-motion";
import { Cloud, Server, HardDrive, Database, Monitor, Shield, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import cloudBg from "@/assets/cloud-bg.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

const services = [
  {
    icon: Cloud,
    title: "Hybrid Cloud",
    description: "Seamlessly integrate on-premises infrastructure with cloud resources. Our hybrid cloud solutions provide the flexibility to run workloads where they perform best while maintaining security and compliance.",
    features: ["Multi-cloud orchestration", "Seamless migration", "Unified management", "Cost optimisation"],
  },
  {
    icon: Server,
    title: "Virtual Private Servers",
    description: "High-performance VPS instances hosted in our local data centres, offering low-latency compute with full root access and scalable resources.",
    features: ["Local hosting", "Full root access", "Scalable resources", "SSD storage"],
  },
  {
    icon: HardDrive,
    title: "Backup as a Service (BaaS)",
    description: "Automated, encrypted backup solutions that protect your critical data with local and geo-redundant copies for business continuity.",
    features: ["Automated scheduling", "Encrypted storage", "Rapid recovery", "Geo-redundancy"],
  },
  {
    icon: Database,
    title: "Storage as a Service (STaaS)",
    description: "Scalable, secure object and block storage services for enterprises needing flexible data storage without capital expenditure.",
    features: ["Object & block storage", "Pay-as-you-grow", "Enterprise encryption", "API access"],
  },
  {
    icon: Monitor,
    title: "Monitoring as a Service (MaaS)",
    description: "Comprehensive infrastructure monitoring with real-time dashboards, intelligent alerting, and proactive incident management.",
    features: ["Real-time dashboards", "Intelligent alerting", "SLA reporting", "Proactive response"],
  },
  {
    icon: Shield,
    title: "Managed IT Infrastructure",
    description: "End-to-end management of your IT infrastructure including network operations, security management, and capacity planning.",
    features: ["NOC operations", "Security management", "Capacity planning", "Vendor management"],
  },
];

const CloudServices = () => {
  return (
    <div>
      <PageHero
        title="Cloud & Managed Services"
        subtitle="Enterprise-grade cloud infrastructure and managed IT services, hosted locally in Ghana."
        backgroundImage={cloudBg}
      />

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Services"
            title="Comprehensive Cloud Solutions"
            description="From hybrid cloud to fully managed infrastructure, we deliver the services enterprises need to modernise securely."
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
                  <h3 className="text-lg font-bold text-secondary">{service.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                <ul className="grid grid-cols-2 gap-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-secondary">
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

export default CloudServices;
