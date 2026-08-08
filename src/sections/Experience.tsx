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
      "Shipped two production full-stack applications — an incident tracking platform and a crisis communications dashboard — using Spring Boot, React, Angular, and Java, serving hundreds of FedEx operations users",
      "Migrated two Spring Boot services from header-based auth to OAuth 2.0 PKCE flow with Okta, including HTTPS/SSL configuration, key store provisioning, and load balancer setup",
      "Engineered dynamic search and pagination for the incident-reporting app using Spring Data JPA, enabling operations users to query past entries and build custom reports without engineering involvement",
      "Integrated Nexus IQ, SonarQube, and Fortify scans into the Jenkins CI/CD pipeline, automating security and static analysis checks to enforce open-source compliance before deploy",
    ],
  },
  {
    company: "Cox Automotive",
    role: "Software Engineer II",
    dates: "Mar 2024 – Present",
    location: "Atlanta, GA",
    bullets: [
      "Owned and operated production Snowflake governance microservices on the Data Platform, serving data and engineering teams across Cox Automotive, using Java, Spring Boot, AWS (Lambda, EventBridge, S3, EKS), Terraform, Docker, and Python",
      "Designed an AI troubleshooting Slack bot in Python on the Strands Agents SDK, using RAG over internal GitHub repositories, wikis, and SharePoint sites with Amazon S3 Vectors for retrieval, integrated with a custom MCP server built in FastAPI on Amazon Bedrock AgentCore that queries CloudWatch logs in real time to accelerate on-call incident triage",
      "Architected an event-driven classification microservice that processes DDL events across roughly 200,000 Snowflake tables, with readiness gating, async orchestration with retry, and override paths for known classifications",
      "Built a real-time data pipeline syncing Snowflake to Monte Carlo for over 1,000 datasets, propagating permissions and metadata within minutes and driving platform-wide data quality monitoring adoption",
      "Redesigned Snowflake temporary and break-glass access, extending supported durations from 4 hours to 2 weeks and adding an independent grant-history audit layer that alerts within minutes on any grant issued outside the approved workflow",
      "Led rollout of Snowflake network-rule enforcement across 2,000 service accounts, requiring approved network rules for connectivity to restrict access by IP and close a class of network-perimeter risks",
    ],
  },
];

const EntryDot = () => (
  <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full border-4 border-base-100 bg-primary" />
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
            <EntryDot />
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
