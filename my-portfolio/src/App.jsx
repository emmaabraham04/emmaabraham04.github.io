import { useState, useEffect } from "react";

const c = {
  pink: "#ff69b4",
  pinkLight: "#ffb3d1",
  pinkDim: "rgba(255,105,180,0.15)",
  pinkBorder: "rgba(255,105,180,0.3)",
  navy: "#0a0f2e",
  navyMid: "#1a2a5e",
  navyCard: "rgba(255,255,255,0.04)",
  navyBorder: "#1e2d6b",
  cream: "#f0e6f0",
};

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#involvement", label: "Campus Involvement" },
  { href: "#awards", label: "Awards" },
  { href: "#projects", label: "Projects" },
];

const LANGUAGES = ["C", "C++", "Java", "JavaScript", "Python", "Dart", "HTML / CSS"];

const TOOLS = [
  "Netdisco", "Cisco Catalyst Center", "Splunk", "Slack", "Cherwell",
  "ServiceNow", "WordPress", "Squarespace", "Wix", "Git / GitHub",
  "Palmetto Cluster / HPC", "Postman", "Wireshark", "AWS Cloud Services",
  "Jupyter", "Pandas", "Scikit-learn", "Visual Studio Code",
  "Microsoft Office", "SQL / DBMS",
];

const SOFT_SKILLS = [
  "Leadership", "Event Planning", "Team Management", "Communication",
  "Problem Solving", "Networking", "Conflict Resolution",
  "Adaptability", "Attention to Detail", "Organization",
];

function NavItem({ href, active, children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "block", padding: "6px 12px", textDecoration: "none", fontSize: "0.88em",
        borderRadius: "4px", borderLeft: `2px solid ${active || hovered ? c.pink : "transparent"}`,
        color: active ? c.pink : hovered ? c.pinkLight : c.cream,
        paddingLeft: active || hovered ? "18px" : "12px",
        fontWeight: active ? "bold" : "normal", transition: "all 0.25s",
        background: active ? c.pinkDim : "transparent",
      }}
    >
      {children}
    </a>
  );
}

function ExternalLink({ href, children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ color: hovered ? c.pinkLight : c.pink, textDecoration: "none", fontSize: "0.88em", transition: "color 0.25s" }}
    >
      ↗ {children}
    </a>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} style={{ marginBottom: "56px" }}>
      <h2 style={{ fontSize: "1.5em", color: c.cream, borderBottom: `2px solid ${c.pink}`, paddingBottom: "8px", marginBottom: "28px", letterSpacing: "0.03em" }}>
        {title}
      </h2>
      {children}
    </section>
  );
}

function Divider() {
  return <hr style={{ border: "none", borderTop: `1px solid ${c.navyBorder}`, margin: "40px 0" }} />;
}

function Card({ children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{
        background: c.navyCard, border: `1px solid ${hovered ? c.pink : c.navyBorder}`,
        borderRadius: "8px", padding: "22px 24px", marginBottom: "18px", transition: "border-color 0.3s",
      }}
    >
      {children}
    </div>
  );
}

function JobHeader({ title, org, dates }) {
  return (
    <>
      <p style={{ margin: "0 0 3px", fontWeight: "bold", fontSize: "1.05em", color: c.pink }}>{title}</p>
      <p style={{ margin: "0 0 3px", color: c.pinkLight, fontSize: "0.88em" }}>{org}</p>
      <p style={{ margin: "0 0 12px", color: c.pink, fontSize: "0.8em", fontStyle: "italic", opacity: 0.75 }}>{dates}</p>
    </>
  );
}

function BulletList({ items }) {
  return (
    <ul style={{ margin: "6px 0 10px 16px", padding: 0, lineHeight: 1.75, fontSize: "0.91em", color: c.cream, opacity: 0.9 }}>
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  );
}

function Tags({ items }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "4px" }}>
      {items.map((item) => (
        <span key={item} style={{ background: c.pinkDim, border: `1px solid ${c.pinkBorder}`, color: c.pink, borderRadius: "20px", padding: "2px 11px", fontSize: "0.78em" }}>
          {item}
        </span>
      ))}
    </div>
  );
}

function SkillGroup({ title, items }) {
  return (
    <div style={{ marginBottom: "24px" }}>
      <p style={{ margin: "0 0 8px", fontSize: "0.72em", color: c.pink, textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: "bold" }}>
        {title}
      </p>
      <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
        {items.map((item) => (
          <li key={item} style={{ fontSize: "0.82em", padding: "4px 0", color: c.cream, opacity: 0.85, borderBottom: `1px solid rgba(255,105,180,0.08)`, lineHeight: 1.4 }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }); },
      { threshold: 0.25 }
    );
    ["about", "experience", "involvement", "awards", "projects"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: `linear-gradient(135deg, ${c.navy} 0%, ${c.navyMid} 100%)`, color: c.cream, fontFamily: '"Georgia", serif', fontSize: "15px" }}>

      {/* LEFT SIDEBAR */}
      <aside style={{ position: "fixed", top: 0, left: 0, width: "230px", height: "100vh", padding: "44px 24px", display: "flex", flexDirection: "column", gap: "22px", borderRight: `1px solid ${c.navyBorder}`, overflowY: "auto", background: "rgba(10,15,46,0.98)", zIndex: 10 }}>
        <img
          src="my-portfolio/public/Best.jpg"
          alt="Emma Abraham"
          style={{ width: "110px", height: "110px", borderRadius: "50%", objectFit: "cover", display: "block", margin: "0 auto", border: `3px solid ${c.pink}`, boxShadow: "0 0 24px rgba(255,105,180,0.35)" }}
        />
        <div style={{ textAlign: "center" }}>
          <p style={{ margin: "0 0 6px", fontWeight: "bold", fontSize: "1.15em", color: c.cream }}>Emma Abraham</p>
          <p style={{ margin: 0, color: c.pink, fontSize: "0.82em", lineHeight: 1.6 }}>
            B.S. Computer Science<br />Cybersecurity & AI Minor<br />
            <span style={{ color: c.pinkLight }}>Clemson University</span>
          </p>
        </div>
        <nav style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          {NAV_LINKS.map(({ href, label }) => (
            <NavItem key={href} href={href} active={activeSection === href.slice(1)}>{label}</NavItem>
          ))}
        </nav>
        <div style={{ borderTop: `1px solid ${c.navyBorder}`, paddingTop: "18px", display: "flex", flexDirection: "column", gap: "5px" }}>
          <ExternalLink href="https://www.linkedin.com/in/emma-a-abraham/">LinkedIn</ExternalLink>
          <ExternalLink href="https://github.com/emmaabraham04">GitHub</ExternalLink>
          <ExternalLink href="mailto:emmaabraham2004@gmail.com">Email</ExternalLink>
          <ExternalLink href="my-portfolio/public/EmmaAbrahamResume.pdf">Resume</ExternalLink>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main style={{ marginLeft: "230px", marginRight: "220px", padding: "56px 48px 80px" }}>

        <Section id="about" title="About Me">
          <p style={{ lineHeight: 1.85, fontSize: "1.02em" }}>
            I'm a senior undergraduate student at Clemson University, pursuing a B.S. in Computer Science
            with a minor in Cybersecurity and Artificial Intelligence. I'm passionate about web development,
            network operations, and using technology to solve real-world problems.
          </p>
        </Section>

        <Divider />

        <Section id="experience" title="Experience">
          <Card>
            <JobHeader title="Network Operations Intern" org="Network Operations Center" dates="August 2025 – Present" />
            <BulletList items={[
              "Improved the NOC website's readability, navigation, and accessibility using JavaScript, Python, HTML, and CSS, making it easier for 20 NOC staff to quickly access critical resources.",
              "Collaborated with a 3-intern team and 20 NOC staff, utilizing tools and APIs such as Netdisco, Cisco Catalyst Center, and Splunk to enhance monitoring, streamline troubleshooting, and deliver more efficient network solutions.",
            ]} />
            <Tags items={["JavaScript", "Python", "HTML", "Splunk", "Cisco"]} />
          </Card>
          <Card>
            <JobHeader title="Student Assistant V" org="Clemson University – CCIT" dates="June 2024 – Present" />
            <BulletList items={[
              "Provide IT customer support via phone call, chat, email, or in person.",
              "Make quick decisions for the best course of action regarding each issue.",
              "Follow procedures to maximize efficiency between the Help Desk and other areas of CCIT.",
            ]} />
            <Tags items={["Slack", "Cherwell Service Management", "Problem Analysis"]} />
          </Card>
          <Card>
            <JobHeader title="Brand Ambassador" org="American Eagle Outfitters, Inc." dates="June 2021 – June 2024" />
            <BulletList items={[
              "Approached strangers and interacted in natural conversation with the goal of developing brand loyalty.",
              "Designed, filled, and arranged eye-catching product floorsets to increase sales.",
              "Communicated product information with confidence.",
            ]} />
            <Tags items={["Sales", "Communication"]} />
          </Card>
        </Section>

        <Divider />

        <Section id="involvement" title="Campus Involvement">
          <Card>
            <p style={{ margin: "0 0 16px", fontWeight: "bold", fontSize: "1.05em", color: c.pink }}>Clemson Association for Information Systems (AIS)</p>
            {[
              { role: "President", dates: "March 2024 – Present", bullets: ["Plan and host events with companies to help members network and gain industry experience."] },
              { role: "Vice President", dates: "September 2023 – March 2024", bullets: ["Assist the president and other officers in completing their duties."] },
              { role: "Marketing Coordinator", dates: "September 2022 – March 2024", bullets: ["Promote events on social media. Reach potential members and provide an ease of communication."] },
            ].map(({ role, dates, bullets }) => (
              <div key={role} style={{ marginBottom: "16px", paddingLeft: "12px", borderLeft: `2px solid ${c.pinkBorder}` }}>
                <p style={{ margin: "0 0 2px", color: c.pinkLight, fontSize: "0.9em", fontWeight: "bold" }}>{role}</p>
                <p style={{ margin: "0 0 6px", color: c.pink, fontSize: "0.8em", fontStyle: "italic", opacity: 0.8 }}>{dates}</p>
                <BulletList items={bullets} />
              </div>
            ))}
            <Tags items={["Event Planning", "Leadership", "Team Management", "Networking", "Graphic Design"]} />
          </Card>
          <Card>
            <JobHeader title="Clemson Forge" org="Chair of Professional Development" dates="June 2024 – Present" />
            <BulletList items={[
              "Assist in professional development aspects, help organize development events, and provide useful links.",
              "Help the President get speakers for events.",
            ]} />
            <Tags items={["Communication", "Organization"]} />
          </Card>
        </Section>

        <Divider />

        <Section id="awards" title="Awards & Achievements">
          <Card>
            {[{ award: "President's List", period: "Fall 2023" }, { award: "President's List", period: "Spring 2024" }].map(({ award, period }, i, arr) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 0", borderBottom: i < arr.length - 1 ? `1px solid ${c.navyBorder}` : "none" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: c.pink, flexShrink: 0 }} />
                <span style={{ fontWeight: "bold" }}>{award}</span>
                <span style={{ color: c.pink, fontSize: "0.88em", marginLeft: "auto" }}>{period}</span>
              </div>
            ))}
          </Card>
        </Section>

        <Divider />

        <Section id="projects" title="Projects">
          <Card>
            <p style={{ margin: "0 0 8px", fontWeight: "bold", fontSize: "1.05em" }}>
              <a href="https://www.solacecharities.org/" target="_blank" rel="noopener noreferrer" style={{ color: c.pink, textDecoration: "none" }}>Solace Charities Website ↗</a>
            </p>
            <p style={{ lineHeight: 1.7, fontSize: "0.93em", margin: "0 0 12px" }}>
              Currently redesigning the US website for Solace Charities — an organization dedicated to supporting
              sick and underprivileged children and their families in Kerala, India. They provide housing, travel,
              and financial support for these families.
            </p>
            <Tags items={["Markdown", "Squarespace"]} />
          </Card>
          <Card>
            <p style={{ margin: "0 0 8px", fontWeight: "bold", fontSize: "1.05em" }}>
              <a href="https://www.lumosfit.com/" target="_blank" rel="noopener noreferrer" style={{ color: c.pink, textDecoration: "none" }}>Lumosfit Website ↗</a>
            </p>
            <p style={{ lineHeight: 1.7, fontSize: "0.93em", margin: "0 0 12px" }}>
              Created the website for Lumosfit, a healthcare startup dedicated to "Accelerating Diabetes Prevention."
              Recommended by a contact from Solace Charities, this project provided valuable professional experience.
            </p>
            <Tags items={["HTML", "WordPress", "Web Design"]} />
          </Card>
          <Card>
            <p style={{ margin: "0 0 8px", fontWeight: "bold", fontSize: "1.05em" }}>
              <a href="https://cuais3.wixsite.com/clemsonais" target="_blank" rel="noopener noreferrer" style={{ color: c.pink, textDecoration: "none" }}>Clemson AIS Website ↗</a>
            </p>
            <p style={{ lineHeight: 1.7, fontSize: "0.93em", margin: "0 0 12px" }}>
              As President, created the first-ever website for Clemson Association for Information Systems —
              the first website I ever built. Planning to remaster it and migrate to GitHub in the future.
            </p>
            <Tags items={["Web Design", "Wix"]} />
          </Card>
        </Section>

        <footer style={{ marginTop: "60px", paddingTop: "24px", borderTop: `1px solid ${c.navyBorder}`, textAlign: "center", fontSize: "0.8em", color: c.pink, opacity: 0.7 }}>
          Updated 03-03-2026 by Emma Abraham · Clemson, SC
        </footer>
      </main>

      {/* RIGHT SKILLS SIDEBAR */}
      <aside style={{ position: "fixed", top: 0, right: 0, width: "200px", height: "100vh", padding: "44px 20px", overflowY: "auto", borderLeft: `1px solid ${c.navyBorder}`, background: "rgba(10,15,46,0.98)", zIndex: 10 }}>
        <p style={{ margin: "0 0 20px", fontWeight: "bold", fontSize: "1em", color: c.pink, textTransform: "uppercase", letterSpacing: "0.1em" }}>Skills</p>
        <SkillGroup title="Languages" items={LANGUAGES} />
        <SkillGroup title="Tools" items={TOOLS} />
        <SkillGroup title="Soft Skills" items={SOFT_SKILLS} />
      </aside>

      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: ${c.navy}; }
        ::-webkit-scrollbar-thumb { background: ${c.navyBorder}; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: ${c.pink}; }
        @media (max-width: 900px) {
          aside { display: none !important; }
          main { margin-left: 0 !important; margin-right: 0 !important; padding: 28px 20px 60px !important; }
        }
      `}</style>
    </div>
  );
}