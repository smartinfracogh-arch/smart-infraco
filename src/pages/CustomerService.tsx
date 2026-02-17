import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Headphones, FileText, Clock, Phone, Mail, MessageSquare,
  ArrowRight, CheckCircle2, Shield, Zap
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

const supportChannels = [
  {
    icon: Phone,
    title: "Call Service Desk",
    description: "Speak directly with our technical support team for immediate assistance.",
    detail: "+233 (0) 302 000 000",
    cta: "Call Now",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us a detailed description of your issue and we'll respond promptly.",
    detail: "servicedesk@smartinfraco.com",
    cta: "Send Email",
  },
  {
    icon: MessageSquare,
    title: "Raise a Ticket",
    description: "Create a support ticket for tracked issue resolution and status updates.",
    detail: "Average response: < 2 hours",
    cta: "Create Ticket",
  },
];

const slaFeatures = [
  "99.99% network uptime guarantee",
  "24/7/365 Network Operations Centre monitoring",
  "Dedicated account management for enterprise clients",
  "Proactive fault detection and resolution",
  "Escalation procedures with defined response times",
  "Regular service performance reports",
];

const CustomerService = () => {
  return (
    <div>
      <PageHero
        title="Customer Service"
        subtitle="We are committed to delivering exceptional service and support to all our clients across Ghana."
      />

      {/* Support Channels */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Get Help"
            title="Report an Issue"
            description="Choose your preferred support channel. Our technical team is available 24/7 to assist you."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {supportChannels.map((channel, i) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card rounded-xl p-8 border border-border card-elevated text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <channel.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-2">{channel.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{channel.description}</p>
                <p className="text-sm font-medium text-primary mb-4">{channel.detail}</p>
                <Button variant="outline" size="sm">
                  {channel.cta}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Request a Quote */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Tailored Solutions</span>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-2 mb-6">
                Request a Quote
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We have an array of services tailored to meet your specific needs — whether you're in the public sector, a small or medium enterprise, a large enterprise, or a service provider partner.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our team of experts will work with you to design a bespoke infrastructure solution that meets your requirements and budget.
              </p>
              <Link to="/contact">
                <Button variant="default" size="lg">
                  Request a Quote
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ duration: 0.5, delay: 0.2 }}>
              <div className="bg-background rounded-xl p-8 border border-border">
                <h3 className="text-lg font-semibold text-secondary mb-6">What We'll Need From You</h3>
                <ul className="space-y-4">
                  {[
                    "Organisation name and sector",
                    "Type of service(s) required",
                    "Number of locations / sites",
                    "Bandwidth or capacity requirements",
                    "Preferred contract duration",
                    "Any specific compliance requirements",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SLA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Service Level Agreements"
            title="Our Commitment to You"
            description="We back our infrastructure with industry-leading SLAs and round-the-clock support."
          />
          <div className="max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4">
              {slaFeatures.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border"
                >
                  <Shield className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-section-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-secondary-foreground/60 mb-8 max-w-xl mx-auto">
              Our Network Operations Centre operates 24/7 to ensure your infrastructure is always running at peak performance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button variant="accent" size="xl">
                  Contact Us Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CustomerService;
