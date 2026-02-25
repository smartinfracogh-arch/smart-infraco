import { motion } from "framer-motion";
import { CheckCircle2, Target, Eye, Award, Users, Globe, Server, Radio, Wifi } from "lucide-react";
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

const keyProjects = [
  {
    icon: Server,
    title: "Tier 3 & Tier 2 Data Centers",
    description: "State-of-the-art data centers providing resilient, scalable, and secure hosting solutions to businesses across Ghana, ensuring uninterrupted access to critical systems and applications.",
  },
  {
    icon: Radio,
    title: "Nationwide 5G Network",
    description: "Deployment of 5G technology enabling ultra-fast internet speeds of 200mbps and more, providing robust connectivity across Ghana for businesses and consumers.",
  },
  {
    icon: Globe,
    title: "Eastern Corridor Fibre Network",
    description: "Fiber capacity from Accra through Ho to Bawku with a 100gbps backbone, offering capacity to network operators, private and government institutions.",
  },
  {
    icon: Wifi,
    title: "e-Transform Project",
    description: "Driving digital inclusion through the largest fiber network in the country (over 3,800km), connecting all metropolitan and district capitals with 50-100mbps broadband.",
  },
];

const goals = [
  { title: "Reliability & Security", description: "Industry-leading capabilities on a global scale to deliver the services needed by government, corporate, and telecom clients." },
  { title: "Lower Cost of Communications", description: "Reduced costs help organisations stay within tight telecommunication budgets and annual allocations." },
  { title: "Improved Network Performance", description: "Hardware, software and connectivity in a single, fully integrated system for improved quality and user experience." },
  { title: "Unrivalled Scale & Reach", description: "Partners can leverage our network for high levels of quality management supporting global customers." },
];

const About = () => {
  return (
    <div>
      <PageHero
        title="About Smart Infraco"
        subtitle="A leading provider of innovative technology solutions, specialising in Cloud Services, Data Centre Solutions, Connectivity Solutions, and Cybersecurity Services."
        backgroundImage={heroBg}
      />

      {/* Overview */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Company Overview</span>
              <h2 className="text-3xl font-bold text-foreground mt-2 mb-6">
                End-to-End Infrastructure Solutions
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Smart Infraco is a leading provider of innovative technology solutions, specialising in Cloud Services, Data Centre Solutions, Connectivity Solutions, and Cybersecurity Services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We provide end-to-end infrastructure solutions in storage, security, support, and advice to both government and private entities under a single window to improve the performance of IT infrastructure for business continuity.
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
              <h3 className="text-xl font-bold text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the backbone of Ghana's digital economy, enabling universal access to world-class digital infrastructure that drives national development and positions Ghana as a digital leader in Africa.
              </p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.15 }} className="bg-card rounded-xl p-10 card-elevated border border-border">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Our Goal</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the trusted partner of choice for government institutions, corporate organisations, mobile network operators, and internet service providers across Ghana.
              </p>
            </motion.div>
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
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <project.icon className="w-5 h-5 text-primary" />
                  </div>
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

      {/* Goals */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading label="Our Goals" title="What We Deliver" />
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {goals.map((goal, i) => (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 bg-card rounded-lg p-6 border border-border"
              >
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">{goal.title}</h4>
                  <p className="text-sm text-muted-foreground">{goal.description}</p>
                </div>
              </motion.div>
            ))}
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
                <p className="text-sm font-semibold text-foreground">Name Placeholder</p>
                <p className="text-xs text-muted-foreground mt-1">{role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
