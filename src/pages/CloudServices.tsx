import { motion } from "framer-motion";
import { Cloud, Server, HardDrive, Database, Monitor, Shield, CheckCircle2, RefreshCw } from "lucide-react";
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
    title: "IT Infrastructure Transformation",
    description: "Modernize your IT infrastructure by migrating to cloud-based systems, improving efficiency, scalability, and cost-effectiveness with virtualization, automation, and integration.",
    features: ["Cloud migration", "Virtualization", "Automation", "Cost optimization"],
  },
  {
    icon: Shield,
    title: "Disaster Recovery Solution",
    description: "Ensure business continuity with automated backups, failover systems, and rapid recovery protocols. Minimize downtime and data loss during unexpected disruptions.",
    features: ["Automated backups", "Failover systems", "Rapid recovery", "Business continuity"],
  },
  {
    icon: Server,
    title: "Multi-Cloud & Hybrid Cloud",
    description: "Seamlessly adopt multi-cloud and hybrid cloud environments. Leverage the best of public and private clouds, optimizing performance, cost, and flexibility.",
    features: ["Multi-cloud orchestration", "Hybrid integration", "Cost optimization", "Flexible workloads"],
  },
  {
    icon: RefreshCw,
    title: "Modernizing Application Infrastructure",
    description: "Re-architect legacy systems for the cloud, enabling better scalability, performance, and integration with modern cloud platforms for enhanced user experiences.",
    features: ["Legacy modernization", "Cloud-native apps", "Scalable architecture", "Enhanced UX"],
  },
  {
    icon: Monitor,
    title: "Hybrid Readiness & Integration",
    description: "Prepare your business for hybrid cloud with seamless connectivity between on-premises and cloud environments. Tools and strategies for data synchronization and security.",
    features: ["On-prem to cloud", "Data synchronization", "Security integration", "Workload management"],
  },
  {
    icon: HardDrive,
    title: "Archive, Backup & Remote Backup",
    description: "Cloud-based archiving and backup services with secure, long-term data storage and remote backup options. Encryption and redundancy ensure data is protected and accessible.",
    features: ["Long-term archiving", "Remote backup", "Encryption", "Redundancy"],
  },
];

const CloudServices = () => {
  return (
    <div>
      <PageHero
        title="Cloud Solutions"
        subtitle="Scalable IT infrastructure transformation, disaster recovery, and multi-cloud adoption services."
        backgroundImage={cloudBg}
      />

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Services"
            title="Comprehensive Cloud Solutions"
            description="From infrastructure transformation to fully managed hybrid cloud environments, we deliver the services enterprises need."
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

export default CloudServices;
