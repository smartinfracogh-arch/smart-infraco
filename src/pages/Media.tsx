import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Newspaper, Play, Calendar, ArrowRight, ExternalLink
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

const newsItems = [
  {
    title: "Smart Infraco Expands National Fibre Backbone to Northern Ghana",
    date: "February 10, 2026",
    excerpt: "Smart Infraco has completed the extension of its national fibre backbone to three additional regions in Northern Ghana, bringing high-speed connectivity to over 200 new institutions.",
    category: "Infrastructure",
  },
  {
    title: "Tier III Data Centre in Accra Achieves 99.99% Uptime in 2025",
    date: "January 28, 2026",
    excerpt: "Our flagship data centre facility in Accra has exceeded its uptime targets, delivering 99.99% availability across all colocation and cloud services throughout 2025.",
    category: "Data Centres",
  },
  {
    title: "Smart Infraco Partners with Government on Digital Ghana Initiative",
    date: "January 15, 2026",
    excerpt: "A new partnership with the Ministry of Communications and Digitalisation will see Smart Infraco provide backbone infrastructure for the next phase of Digital Ghana.",
    category: "Government",
  },
  {
    title: "New Cloud Infrastructure Services Launched for SMEs",
    date: "December 20, 2025",
    excerpt: "Smart Infraco introduces affordable cloud infrastructure packages designed specifically for small and medium enterprises, with local data hosting guarantees.",
    category: "Cloud Services",
  },
  {
    title: "Smart Infraco Achieves ISO 27001 Recertification",
    date: "December 5, 2025",
    excerpt: "Our information security management system has been successfully recertified to ISO/IEC 27001:2022, reinforcing our commitment to data protection and security.",
    category: "Compliance",
  },
  {
    title: "Metro Fibre Network Expansion in Kumasi Completed",
    date: "November 18, 2025",
    excerpt: "The Kumasi metro fibre network expansion project has been completed, increasing coverage to 95% of the city's business districts.",
    category: "Connectivity",
  },
];

const videos = [
  {
    title: "Smart Infraco: Powering Ghana's Digital Future",
    description: "An overview of our national infrastructure and the role we play in Ghana's digital transformation.",
    duration: "4:32",
    thumbnail: "corporate-overview",
  },
  {
    title: "Inside Our Tier III Data Centre – Accra",
    description: "A virtual tour of our world-class Tier III data centre facility in Accra, showcasing our security and redundancy features.",
    duration: "6:15",
    thumbnail: "data-centre-tour",
  },
  {
    title: "National Fibre Backbone: Connecting Ghana",
    description: "Discover how our 1,000+ km fibre backbone is connecting cities, institutions, and communities across Ghana.",
    duration: "3:48",
    thumbnail: "fibre-backbone",
  },
  {
    title: "Cloud Solutions for Government & Enterprise",
    description: "Learn how our cloud infrastructure services are enabling digital government and enterprise transformation.",
    duration: "5:20",
    thumbnail: "cloud-solutions",
  },
];

const Media = () => {
  return (
    <div>
      <PageHero
        title="Media"
        subtitle="Stay updated with the latest news, developments, and insights from Smart Infraco."
      />

      {/* News */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Latest Updates"
            title="News"
            description="Read about our latest projects, partnerships, and milestones."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card rounded-xl border border-border card-elevated overflow-hidden group"
              >
                <div className="h-2 bg-gradient-to-r from-primary to-accent" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-secondary mb-2 group-hover:text-primary transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>
                  <button className="mt-4 text-sm font-medium text-primary hover:text-accent transition-colors flex items-center gap-1">
                    Read More
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Watch"
            title="Videos"
            description="Explore our video library for virtual tours, project highlights, and corporate updates."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {videos.map((video, i) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-background rounded-xl border border-border card-elevated overflow-hidden group cursor-pointer"
              >
                <div className="relative aspect-video bg-secondary/10 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 to-primary/40" />
                  <div className="relative z-10 w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:bg-primary transition-colors group-hover:scale-110 transform duration-300">
                    <Play className="w-7 h-7 text-primary-foreground ml-1" />
                  </div>
                  <span className="absolute bottom-3 right-3 z-10 text-xs font-medium text-primary-foreground bg-secondary/80 px-2 py-1 rounded">
                    {video.duration}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-base font-semibold text-secondary mb-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </motion.div>
            ))}
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
              Stay Connected
            </h2>
            <p className="text-secondary-foreground/60 mb-8 max-w-xl mx-auto">
              Follow us for the latest updates on Ghana's digital infrastructure development.
            </p>
            <Link to="/contact">
              <Button variant="accent" size="xl">
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Media;
