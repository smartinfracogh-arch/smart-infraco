import { motion } from "framer-motion";
import { CheckCircle2, Target, Eye, Award, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ghanaMap from "@/assets/ghana-network-map.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

const About = () => {
  return (
    <div>
      <PageHero
        title="About Smart Infraco"
        subtitle="Ghana's national digital infrastructure and connectivity company, building the foundation for a connected future."
        backgroundImage={heroBg}
      />

      {/* Overview */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Company Overview</span>
              <h2 className="text-3xl font-bold text-secondary mt-2 mb-6">
                A National Concession for Digital Infrastructure
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Smart Infraco operates under a national concession to build, operate, and maintain Ghana's critical digital infrastructure. Our mandate covers the development of a nationwide fibre backbone, data centre facilities, and cloud services that underpin the country's digital transformation agenda.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We serve government ministries, departments, and agencies (MDAs), financial institutions, telecom operators, ISPs, and enterprises of all sizes with carrier-grade, secure, and scalable infrastructure solutions.
              </p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ duration: 0.5, delay: 0.2 }}>
              <img src={ghanaMap} alt="Ghana infrastructure map" className="rounded-2xl shadow-2xl w-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div {...fadeInUp} className="bg-card rounded-xl p-10 card-elevated border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the backbone of Ghana's digital economy, enabling universal access to world-class digital infrastructure that drives national development and positions Ghana as a regional technology hub.
              </p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.15 }} className="bg-card rounded-xl p-10 card-elevated border border-border">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deploy, operate, and maintain a resilient national digital infrastructure that provides secure, reliable, and affordable connectivity and hosting services to all sectors of Ghana's economy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <SectionHeading label="Leadership" title="Our Leadership Team" description="Guided by experienced professionals with deep expertise in telecommunications and infrastructure." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Chief Executive Officer", "Chief Technology Officer", "Chief Financial Officer", "Chief Operations Officer"].map((role, i) => (
              <motion.div
                key={role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-background rounded-xl p-8 text-center border border-border"
              >
                <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-muted-foreground" />
                </div>
                <p className="text-sm font-semibold text-secondary">Name Placeholder</p>
                <p className="text-xs text-muted-foreground mt-1">{role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading label="Compliance" title="Certifications & Standards" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {["ISO 27001 Information Security", "Tier III Data Centre Design", "NCA Licensed Operator", "GDPR Compliance Ready", "ISO 9001 Quality Management", "ISO 22301 Business Continuity"].map((cert, i) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3 bg-card rounded-lg p-4 border border-border"
              >
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm text-secondary font-medium">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
