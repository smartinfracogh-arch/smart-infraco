import { motion } from "framer-motion";
import { Globe, Server, Cloud, Shield, Wifi, Database, Monitor, Lock } from "lucide-react";

const tiles = [
  {
    icon: Globe,
    label: "Connectivity\nSolutions",
    gradient: "from-brand-blue/90 to-brand-blue/50",
    style: { top: "0%", left: "0%", width: "44%", height: "38%" },
    rotate: -8,
  },
  {
    icon: Server,
    label: "Data Centre\nSolutions",
    gradient: "from-primary/80 to-primary/40",
    style: { top: "-4%", left: "38%", width: "38%", height: "34%" },
    rotate: -8,
  },
  {
    icon: Cloud,
    label: "Cloud\nServices",
    gradient: "from-brand-blue/70 to-primary/50",
    style: { top: "-2%", left: "70%", width: "34%", height: "42%" },
    rotate: -8,
  },
  {
    icon: Shield,
    label: "Cybersecurity",
    gradient: "from-primary/70 to-brand-blue/50",
    style: { top: "30%", left: "-2%", width: "40%", height: "34%" },
    rotate: -8,
  },
  {
    icon: Wifi,
    label: "5G\nNetwork",
    gradient: "from-brand-blue/80 to-brand-blue/30",
    style: { top: "26%", left: "32%", width: "36%", height: "38%" },
    rotate: -8,
  },
  {
    icon: Database,
    label: "Storage\n& Backup",
    gradient: "from-primary/60 to-brand-blue/50",
    style: { top: "34%", left: "62%", width: "42%", height: "36%" },
    rotate: -8,
  },
  {
    icon: Monitor,
    label: "Managed IT\nInfrastructure",
    gradient: "from-brand-blue/90 to-primary/40",
    style: { top: "58%", left: "4%", width: "38%", height: "36%" },
    rotate: -8,
  },
  {
    icon: Lock,
    label: "Network\nSecurity",
    gradient: "from-primary/50 to-brand-blue/60",
    style: { top: "60%", left: "36%", width: "34%", height: "34%" },
    rotate: -8,
  },
];

const HeroServiceMosaic = () => {
  return (
    <div className="relative w-full h-[560px]" style={{ perspective: "1000px" }}>
      {tiles.map((tile, i) => (
        <motion.div
          key={tile.label}
          className={`absolute rounded-2xl overflow-hidden bg-gradient-to-br ${tile.gradient} border border-border/30 group cursor-pointer shadow-lg`}
          style={{
            ...tile.style,
            rotate: `${tile.rotate}deg`,
            zIndex: i,
          }}
          initial={{ opacity: 0, y: 60, rotate: tile.rotate - 5 }}
          animate={{ opacity: 1, y: 0, rotate: tile.rotate }}
          whileHover={{
            scale: 1.08,
            zIndex: 20,
            rotate: 0,
            transition: { duration: 0.3 },
          }}
          transition={{
            duration: 0.6,
            delay: 0.2 + i * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="absolute inset-0 bg-background/20 group-hover:bg-background/5 transition-colors duration-300" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 text-center gap-2">
            <tile.icon className="w-8 h-8 text-foreground/90 group-hover:text-primary transition-colors duration-300" />
            <span className="text-xs sm:text-sm font-bold text-foreground leading-tight whitespace-pre-line drop-shadow-md">
              {tile.label}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default HeroServiceMosaic;
