import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

const chemRoles = [
  {
    company: "Danimer Scientific",
    role: "Process Engineer",
    dates: "Jul 2020 – Jul 2021",
    location: "Bainbridge, GA",
    bullets: [
      "Designed and executed projects improving workplace safety, product quality, and process efficiency",
      "Ran scale-up and scale-down experiments for commercial processes and assisted in fermentation and downstream processing operations",
    ],
  },
  {
    company: "Takeda",
    role: "Production Engineer",
    dates: "Aug 2021 – Feb 2022",
    location: "Social Circle, GA",
    bullets: [
      "Diagnosed and resolved production issues for purification processes using DeltaV, EBM, and SQL to reduce user interventions and track batch data trends",
    ],
  },
];

const softwareEntries = [
  {
    company: "FedEx Services",
    role: "Full Stack Developer II",
    dates: "Feb 2022 – Mar 2024",
    location: "Remote",
    bullets: [
      "Led development of two full-stack applications — an incident tracking platform and a server dashboard — using Spring Boot, React, and Angular",
      "Migrated authentication from header-based auth to OAuth 2.0 PKCE flow using Okta, configuring HTTPS, SSL certificates, and new load balancers",
      "Optimized CSS build pipeline achieving a 300% reduction in compile time and 75% reduction in file size",
    ],
  },
  {
    company: "Cox Automotive",
    role: "Software Engineer II",
    dates: "Mar 2024 – Present",
    location: "Atlanta, GA",
    bullets: [
      "Built and maintained Snowflake automation and governance microservices on the Data Platform using Spring Boot, AWS, Terraform, and Python",
      "Created an AI troubleshooting Slack bot using RAG over an indexed knowledge base, integrated with a custom MCP server via Amazon Bedrock AgentCore for real-time CloudWatch log querying",
      "Led development of a temporary Snowflake role access workflow with break-glass controls, duration-based approvals, and end-to-end auditing",
    ],
  },
];

const EntryDot = ({ }: { muted?: boolean }) => (
  <div className="absolute -left-[39px] top-1 w-4 h-4 rounded-full border-4 border-base-100 bg-primary" />
);

const Experience = () => {
  const [chemOpen, setChemOpen] = useState(false);

  return (
    <section className="w-full py-16" id="experience">
      <div className="flex flex-col items-center px-4">
        <div className="relative w-full max-w-4xl mt-4 pl-8 ml-4 border-l-2 border-primary flex flex-col gap-12">
          <motion.h1
            className="text-3xl sm:text-4xl font-bold text-base-content"
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            Experience
          </motion.h1>

          {/* Chemical engineering - collapsible */}
          <motion.div className="relative" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <EntryDot muted />
            <button
              className="flex items-center gap-2 text-left w-full group"
              onClick={() => setChemOpen(o => !o)}
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-base-content/50 group-hover:text-base-content/70 transition-colors">Chemical Engineer</h2>
                <p className="text-base text-base-content/40">Jul 2020 – Feb 2022 · Danimer Scientific, Takeda</p>
              </div>
              <span className={`ml-2 text-base-content/40 text-xl transition-transform duration-300 ${chemOpen ? 'rotate-90' : ''}`}>›</span>
            </button>

            <AnimatePresence>
              {chemOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="mt-6 pl-4 border-l-2 border-base-content/20 flex flex-col gap-8">
                    {chemRoles.map((entry) => (
                      <div key={entry.company}>
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                          <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-base-content/60">{entry.company}</h3>
                            <p className="text-base sm:text-lg text-base-content/40">{entry.role}</p>
                          </div>
                          <p className="text-sm text-base-content/40 whitespace-nowrap">{entry.dates} · {entry.location}</p>
                        </div>
                        <ul className="list-disc list-outside pl-5 flex flex-col gap-2">
                          {entry.bullets.map((bullet, i) => (
                            <li key={i} className="text-base text-base-content/50">{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Software entries */}
          {softwareEntries.map((entry) => (
            <motion.div
              key={entry.company}
              className="relative"
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              <EntryDot />
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-base-content">{entry.company}</h2>
                  <p className="text-lg sm:text-xl text-primary">{entry.role}</p>
                </div>
                <p className="text-base text-base-content/60 whitespace-nowrap">{entry.dates} · {entry.location}</p>
              </div>
              <ul className="list-disc list-outside pl-5 flex flex-col gap-2">
                {entry.bullets.map((bullet, i) => (
                  <li key={i} className="text-base sm:text-lg text-base-content/80">{bullet}</li>
                ))}
              </ul>
            </motion.div>
          ))}

        </div>
        <motion.div className="mt-12" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <a className="btn btn-primary btn-lg" href="./assets/resume.pdf" download="alex-williamson-resume.pdf">Download Resume</a>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
