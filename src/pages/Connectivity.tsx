import { motion } from "framer-motion";
import { Globe, Wifi, Network, Cable, Radio, CheckCircle2 } from "lucide-react";
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
    icon: Globe,
    title: "National Fibre Backbone",
    description: "Over 1,000 km of high-capacity fibre backbone connecting Ghana's major cities and regional capitals, providing the core transport layer for national communications.",
    features: ["High-capacity DWDM transport", "Multi-ring resilient topology", "National coverage", "Scalable bandwidth"],
  },
  {
    icon: Network,
    title: "Metro Fibre",
    description: "Dense metropolitan fibre networks in Accra, Kumasi, and other major cities, delivering last-mile connectivity to enterprise and government locations.",
    features: ["Dense urban coverage", "Redundant ring architecture", "Low latency", "Rapid deployment"],
  },
  {
    icon: Wifi,
    title: "Dedicated Internet Access",
    description: "Symmetric, uncontended internet access with guaranteed bandwidth and SLA-backed uptime for mission-critical operations.",
    features: ["Guaranteed bandwidth", "99.9% SLA uptime", "Symmetric upload/download", "IPv4 and IPv6 support"],
  },
  {
    icon: Cable,
    title: "MPLS",
    description: "Multi-Protocol Label Switching services for secure, high-performance private networking across multiple locations with quality of service guarantees.",
    features: ["QoS guaranteed", "Traffic engineering", "VPN capabilities", "Multi-site connectivity"],
  },
  {
    icon: Cable,
    title: "Dark Fibre",
    description: "Unlit fibre pairs for organisations that require full control over their own optical network infrastructure.",
    features: ["Full control", "Unlimited bandwidth potential", "Long-term leases", "Custom topology"],
  },
  {
    icon: Radio,
    title: "4G Fixed Wireless Access",
    description: "High-speed wireless connectivity for locations where fibre deployment is not immediately feasible, bridging the last-mile gap.",
    features: ["Rapid deployment", "Scalable speeds", "Wide coverage", "Cost-effective"],
  },
];

const Connectivity = () => {
  return (
    <div>
      <PageHero
        title="Connectivity Solutions"
        subtitle="Carrier-grade fibre and wireless connectivity infrastructure spanning Ghana's regions."
        backgroundImage={heroBg}
      />

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Our Network"
            title="End-to-End Connectivity"
            description="From national backbone to last-mile delivery, we provide the infrastructure that keeps Ghana connected."
          />
          <div className="space-y-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                {...fadeInUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-background rounded-xl p-8 md:p-10 border border-border card-elevated"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <service.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-secondary">{service.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Key Features</p>
                    <ul className="space-y-2">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-secondary">
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Connectivity;
