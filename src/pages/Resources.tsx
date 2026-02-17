import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Download, FileText, HelpCircle, ChevronDown, ArrowRight, Shield, BookOpen
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const downloads = [
  {
    title: "Third Party Information Security Policy",
    description: "Guidelines and requirements for third-party vendors accessing Smart Infraco infrastructure.",
    type: "PDF",
    size: "1.2 MB",
  },
  {
    title: "Service Level Agreement Template",
    description: "Standard SLA framework for Smart Infraco connectivity and data centre services.",
    type: "PDF",
    size: "890 KB",
  },
  {
    title: "Data Centre Specifications – Accra (Tier III)",
    description: "Technical specifications, floor plans, and facility capabilities for our Accra data centre.",
    type: "PDF",
    size: "2.4 MB",
  },
  {
    title: "Data Centre Specifications – Kumasi (Tier II)",
    description: "Technical specifications and facility capabilities for our Kumasi data centre.",
    type: "PDF",
    size: "1.8 MB",
  },
  {
    title: "Network Coverage Map",
    description: "Detailed map of our national fibre backbone and metro fibre coverage areas.",
    type: "PDF",
    size: "3.1 MB",
  },
  {
    title: "Code of Practice for International Data Access",
    description: "Policies governing international connectivity and data transit through our infrastructure.",
    type: "PDF",
    size: "650 KB",
  },
];

const faqs = [
  {
    question: "What areas does Smart Infraco's fibre network cover?",
    answer: "Our national fibre backbone spans over 1,000 kilometres, connecting major cities and regions across Ghana including Accra, Kumasi, Tamale, Takoradi, and Cape Coast. We continue to expand our metro fibre networks within these urban centres.",
  },
  {
    question: "What is the difference between your Tier III and Tier II data centres?",
    answer: "Our Tier III data centre in Accra offers concurrently maintainable infrastructure with 99.982% uptime, meaning maintenance can be performed without downtime. Our Tier II data centre in Kumasi provides redundant capacity components with 99.749% uptime. Both facilities feature robust security, redundant power, and cooling systems.",
  },
  {
    question: "How do I report a service outage or issue?",
    answer: "You can report issues through our 24/7 Service Desk by calling +233 (0) 302 000 000, emailing servicedesk@smartinfraco.com, or raising a ticket through our Customer Service portal. Our NOC team monitors all infrastructure continuously and responds to critical issues within 15 minutes.",
  },
  {
    question: "Do you offer managed services for government agencies?",
    answer: "Yes, we provide comprehensive managed IT infrastructure services tailored for government Ministries, Departments, and Agencies (MDAs). This includes network management, monitoring as a service (MaaS), backup as a service (BaaS), and end-to-end infrastructure management.",
  },
  {
    question: "What cloud solutions do you provide?",
    answer: "We offer hybrid cloud infrastructure, virtual private servers (VPS), storage as a service (STaaS), backup as a service (BaaS), and managed cloud hosting. Our cloud services are hosted from our Tier III data centre in Accra, ensuring data sovereignty within Ghana.",
  },
  {
    question: "Can I get a dedicated internet connection for my business?",
    answer: "Yes, we provide dedicated internet access (DIA) with symmetric bandwidth, guaranteed SLAs, and 24/7 support. We offer speeds ranging from 10 Mbps to 10 Gbps depending on your requirements. Contact our sales team for a tailored quote.",
  },
  {
    question: "How do I request a quote for services?",
    answer: "You can request a quote by visiting our Contact page or Customer Service section. Provide details about your organisation, required services, number of locations, and bandwidth needs. Our team will prepare a tailored proposal within 48 hours.",
  },
  {
    question: "What certifications does Smart Infraco hold?",
    answer: "Smart Infraco maintains ISO 27001 certification for information security management, and our data centres are designed and operated to Uptime Institute Tier standards. We also comply with Ghana's Data Protection Act and relevant industry regulations.",
  },
];

const Resources = () => {
  return (
    <div>
      <PageHero
        title="Resources"
        subtitle="Access documentation, policies, and frequently asked questions about our services and infrastructure."
      />

      {/* Downloads */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Documentation"
            title="Downloads"
            description="Access our technical documentation, policies, and service specifications."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloads.map((doc, i) => (
              <motion.div
                key={doc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card rounded-xl p-6 border border-border card-elevated"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-secondary mb-1 leading-tight">{doc.title}</h3>
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{doc.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{doc.type} · {doc.size}</span>
                      <Button variant="ghost" size="sm" className="h-8 px-3 text-primary">
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Help Centre"
            title="Frequently Asked Questions"
            description="Find answers to common questions about our services, infrastructure, and support."
          />
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <AccordionItem value={`faq-${i}`} className="bg-background rounded-xl border border-border px-6">
                    <AccordionTrigger className="text-sm font-medium text-secondary hover:text-primary text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-section-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-secondary-foreground/60 mb-8 max-w-xl mx-auto">
              Our support team is ready to help with any questions about our services and infrastructure.
            </p>
            <Link to="/customer-service">
              <Button variant="accent" size="xl">
                Contact Support
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
