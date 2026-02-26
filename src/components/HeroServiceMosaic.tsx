import { motion } from "framer-motion";
import { Globe, Server, Cloud, Shield, Wifi, Database, Monitor, Lock } from "lucide-react";

const services = [
  { icon: Globe, label: "Connectivity Solutions", color: "from-brand-blue/80 to-brand-blue/40", span: "col-span-1 row-span-1" },
  { icon: Server, label: "Data Centre Solutions", color: "from-primary/80 to-primary/40", span: "col-span-1 row-span-2" },
  { icon: Cloud, label: "Cloud Services", color: "from-brand-blue/70 to-primary/50", span: "col-span-1 row-span-1" },
  { icon: Shield, label: "Cybersecurity", color: "from-primary/70 to-brand-blue/40", span: "col-span-1 row-span-1" },
  { icon: Wifi, label: "5G Network", color: "from-brand-blue/60 to-primary/60", span: "col-span-1 row-span-1" },
  { icon: Database, label: "Storage & Backup", color: "from-primary/60 to-brand-blue/50", span: "col-span-1 row-span-1" },
  { icon: Monitor, label: "Managed IT", color: "from-brand-blue/80 to-primary/30", span: "col-span-1 row-span-1" },
  { icon: Lock, label: "Network Security", color: "from-primary/50 to-brand-blue/60", span: "col-span-1 row-span-1" },
];

const HeroServiceMosaic = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-4 gap-2.5 h-[520px] w-full">
      {services.map((service, i) => (
        <motion.div
          key={service.label}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
          className={`${service.span} relative rounded-xl overflow-hidden bg-gradient-to-br ${service.color} border border-border/40 group cursor-pointer`}
        >
          <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-colors duration-300" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 text-center">
            <service.icon className="w-8 h-8 text-foreground mb-2 group-hover:text-primary transition-colors" />
            <span className="text-xs sm:text-sm font-semibold text-foreground leading-tight">
              {service.label}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default HeroServiceMosaic;
