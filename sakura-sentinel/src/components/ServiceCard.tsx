import { motion } from "framer-motion";
import { LucideIcon, Shield, Network, AlertCircle, FileKey, GraduationCap, Lock, FileText } from "lucide-react";

interface ServiceCardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  index: number;
  details?: string[];
}

const iconMap: Record<string, LucideIcon> = {
  "Cyber Threat Intelligence": Shield,
  "Netwerkbeveiliging": Network,
  "Incidentrespons": AlertCircle,
  "Risicobeheer": FileKey,
  "Training": GraduationCap,
  "Wachtwoord Manager": Lock,
  "End-to-End File-Share": FileText
};

export const ServiceCard = ({ icon, title, description, index, details }: ServiceCardProps) => {
  const IconComponent = icon || iconMap[title] || Shield;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card hover-scale rounded-xl p-6"
    >
      <div className="h-12 w-12 rounded-lg bg-sakura-50 flex items-center justify-center mb-4">
        <IconComponent className="h-6 w-6 text-sakura-200" />
      </div>
      <h3 className="heading-md mb-2">{title}</h3>
      <p className="text-charcoal-100 mb-4">{description}</p>
      {details && details.length > 0 && (
        <ul className="list-disc list-inside text-sm text-charcoal-100 space-y-1">
          {details.map((detail, i) => (
            <li key={i}>{detail}</li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};