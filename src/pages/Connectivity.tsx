import { motion } from "framer-motion";
import { Globe, Wifi, Network, Cable, Radio, CheckCircle2, Signal } from "lucide-react";
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
    icon: Cable,
    title: "Dark Fibre Connectivity",
    description: "Leverage our extensive 3,000 km fibre network, including the Eastern Corridor route from Accra to Bawku, for high-capacity and secure fibre optic solutions. Ideal for long-haul data transmission with full control over bandwidth and scalability for telecom operators and enterprises.",
    features: ["3,000 km fibre network", "Eastern Corridor route", "Full bandwidth control", "Telecom & enterprise grade"],
  },
  {
    icon: Network,
    title: "Ethernet Connectivity",
    description: "Reliable, high-speed connectivity with low latency, supporting business-critical applications. With flexible bandwidth options, we ensure seamless communication for organizations across Ghana's regional and district capitals.",
    features: ["Low latency", "Flexible bandwidth", "Business-critical support", "Regional coverage"],
  },
  {
    icon: Globe,
    title: "PoP Colocation",
    description: "Point of Presence (PoP) colocation service offers strategic network access points for ISPs and enterprises, reducing latency and improving connectivity. Housed in our secure facilities ensuring efficient data exchange and network performance.",
    features: ["Strategic access points", "Reduced latency", "Secure facilities", "ISP & enterprise ready"],
  },
  {
    icon: Network,
    title: "MPLS Connectivity",
    description: "Multi-Protocol Label Switching delivers secure, scalable, and prioritized data routing across our nationwide network. Quality of service (QoS) for voice, video, and data, ideal for businesses with multiple locations.",
    features: ["QoS guaranteed", "Secure routing", "Multi-site connectivity", "Voice, video & data"],
  },
  {
    icon: Wifi,
    title: "Internet Connectivity",
    description: "High-speed, reliable internet access across Ghana covering all regional and district capitals. With 4G/5G support and robust fibre infrastructure, empowering businesses, government institutions, and communities.",
    features: ["4G/5G support", "All regional capitals", "Fibre backbone", "Uninterrupted connectivity"],
  },
  {
    icon: Radio,
    title: "5G Network",
    description: "Ultra-fast internet speeds of 200mbps and more with robust connectivity across Ghana. Empowering businesses and consumers with the tools they need for success in the digital economy.",
    features: ["200mbps+ speeds", "Nationwide coverage", "Low latency", "Future-ready"],
  },
  {
    icon: Signal,
    title: "Wide Area Network (WAN)",
    description: "Secure and scalable enterprise-wide networking. We implement software-defined WAN (SD-WAN) and traditional WAN solutions to connect multiple business locations with optimised performance.",
    features: ["SD-WAN support", "Multi-site connection", "Optimised performance", "Scalable"],
  },
  {
    icon: Network,
    title: "LAN Reconstruction",
    description: "Optimisation and enhancement of LAN infrastructure. We modernise network architectures with structured cabling, VLAN segmentation, and performance-boosting technologies.",
    features: ["Structured cabling", "VLAN segmentation", "Performance tuning", "Modern architecture"],
  },
];

const Connectivity = () => {
  return (
    <div>
      <PageHero
        title="Connectivity Solutions"
        subtitle="Dark Fibre, Ethernet, MPLS, 5G, and nationwide fibre access across all regional and district capitals."
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
                      <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Key Features</p>
                    <ul className="space-y-2">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-foreground">
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
