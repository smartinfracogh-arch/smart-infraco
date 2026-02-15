import { motion } from "framer-motion";
import { Landmark, Building2, Wifi, Zap, Globe, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import heroBg from "@/assets/hero-bg.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

const industries = [
  {
    icon: Landmark,
    title: "Government",
    description: "Supporting Ghana's digital governance agenda with secure, reliable infrastructure for ministries, departments, and agencies.",
    needs: ["e-Government platforms", "Secure inter-agency connectivity", "National data hosting", "Citizen service delivery"],
  },
  {
    icon: Building2,
    title: "Financial Services",
    description: "Enabling banks, insurance companies, and fintech platforms with low-latency, high-availability infrastructure that meets regulatory requirements.",
    needs: ["Low-latency trading", "Regulatory compliance hosting", "Disaster recovery", "Secure interconnection"],
  },
  {
    icon: Wifi,
    title: "Telecom & ISPs",
    description: "Providing backbone, metro fibre, and data centre services to telecom operators and internet service providers across Ghana.",
    needs: ["Wholesale bandwidth", "Colocation & peering", "Dark fibre leasing", "Network extension"],
  },
  {
    icon: Globe,
    title: "SMEs & Startups",
    description: "Affordable, scalable cloud and connectivity solutions designed to help small and medium enterprises compete in the digital economy.",
    needs: ["Cloud hosting", "Web hosting & domains", "Scalable bandwidth", "Managed IT support"],
  },
  {
    icon: Zap,
    title: "Large Enterprises",
    description: "Tailored infrastructure solutions for large organisations requiring dedicated capacity, private networks, and enterprise-grade SLAs.",
    needs: ["MPLS private networks", "Dedicated internet access", "Private cloud", "24/7 managed services"],
  },
];

const Industries = () => {
  return (
    <div>
      <PageHero
        title="Industries We Serve"
        subtitle="Tailored digital infrastructure solutions for every sector of Ghana's economy."
        backgroundImage={heroBg}
      />

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.title}
                {...fadeInUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-background rounded-xl p-8 md:p-10 border border-border card-elevated"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <ind.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-secondary">{ind.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{ind.description}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Key Needs</p>
                    <ul className="space-y-2">
                      {ind.needs.map((n) => (
                        <li key={n} className="flex items-center gap-2 text-sm text-secondary">
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                          {n}
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

export default Industries;
