import { motion } from "framer-motion";
import { Globe, Server, Cloud, Shield, Wifi, Database, Monitor, Lock } from "lucide-react";

const tiles = [
  {
    icon: Globe,
    label: "Connectivity\nSolutions",
    gradient: "from-brand-blue/90 to-brand-blue/50",
  },
  {
    icon: Server,
    label: "Data Centre\nSolutions",
    gradient: "from-primary/80 to-primary/40",
  },
  {
    icon: Cloud,
    label: "Cloud\nServices",
    gradient: "from-brand-blue/70 to-primary/50",
  },
  {
    icon: Shield,
    label: "Cybersecurity",
    gradient: "from-primary/70 to-brand-blue/50",
  },
  {
    icon: Wifi,
    label: "5G\nNetwork",
    gradient: "from-brand-blue/80 to-brand-blue/30",
  },
  {
    icon: Database,
    label: "Storage\n& Backup",
    gradient: "from-primary/60 to-brand-blue/50",
  },
  {
    icon: Monitor,
    label: "Managed IT\nInfrastructure",
    gradient: "from-brand-blue/90 to-primary/40",
  },
  {
    icon: Lock,
    label: "Network\nSecurity",
    gradient: "from-primary/50 to-brand-blue/60",
  },
];

const HeroServiceMosaic = () => {
  return (
    <div className="relative w-full h-[560px]" style={{ perspective: "1200px" }}>
      <div
        className="absolute inset-0 grid grid-cols-4 grid-rows-2 gap-4"
        style={{ transform: "rotate(-8deg) scale(1.15)", transformOrigin: "center center" }}
      >
        {tiles.map((tile, i) => (
          <motion.div
            key={tile.label}
            className={`rounded-2xl overflow-hidden bg-gradient-to-br ${tile.gradient} border border-border/30 group cursor-pointer shadow-lg`}
            initial={{ opacity: 0, y: 120 + i * 15 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.08,
              zIndex: 20,
              transition: { duration: 0.3 },
            }}
            transition={{
              duration: 0.7,
              delay: 0.15 + i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="absolute inset-0 bg-background/20 group-hover:bg-background/5 transition-colors duration-300" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 text-center gap-2">
              <tile.icon className="w-9 h-9 text-foreground/90 group-hover:text-primary transition-colors duration-300" />
              <span className="text-xs sm:text-sm font-bold text-foreground leading-tight whitespace-pre-line drop-shadow-md">
                {tile.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HeroServiceMosaic;
