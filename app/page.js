import Nav from "../components/Nav";
import Effects from "../components/Effects";
import RoleRotator from "../components/RoleRotator";
import CopyButton from "../components/CopyButton";
import SkillLogo from "../components/SkillLogo";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  DownloadIcon,
  ExternalIcon,
  ArrowRightIcon,
  AwardIcon,
} from "../components/Icons";
import {
  profile,
  stats,
  about,
  skills,
  experience,
  education,
  projects,
  certifications,
} from "../data/portfolio";

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="section-head reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {subtitle && <p className="section-sub">{subtitle}</p>}
    </div>
  );
}

function Timeline({ title, items }) {
  return (
    <div>
      <h3 className="col-title reveal">{title}</h3>
      <ol className="timeline">
        {items.map((item, i) => (
          <li
            key={`${item.role || item.degree}-${item.period}`}
            className="timeline-item reveal"
            style={{ "--d": i }}
          >
            <span className="timeline-dot" aria-hidden />
            {item.period && <p className="timeline-period">{item.period}</p>}
            <h4>{item.role || item.degree}</h4>
            <p className="timeline-org">{item.org}</p>
            {item.points?.length > 0 && (
              <ul className="bullets">
                {item.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Home() {
  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const hasBackground = experience.length > 0 || education.length > 0;
  const roles = profile.roles?.length ? profile.roles : [profile.role];

  const links = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    hasBackground && { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ].filter(Boolean);

  const socials = [
    profile.github && { href: profile.github, label: "GitHub", Icon: GitHubIcon },
    profile.linkedin && { href: profile.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
    profile.email && { href: `mailto:${profile.email}`, label: "Email", Icon: MailIcon },
  ].filter(Boolean);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Effects />
      <Nav cv={profile.cv} links={links} />

      <main id="main">
        {/* ───────────── HERO ───────────── */}
        <section id="top" className="hero">
          <div className="hero-bg" aria-hidden />
          <div className="container hero-grid">
            <div className="hero-text">
              {profile.available && (
                <p className="status anim" style={{ "--d": 0 }}>
                  <span className="status-dot" aria-hidden />
                  {profile.availability}
                </p>
              )}
              <p className="hello anim" style={{ "--d": 1 }}>
                Hello, I&apos;m
              </p>
              <h1 className="anim" style={{ "--d": 2 }}>
                {profile.name}
              </h1>
              <p className="hero-role anim" style={{ "--d": 3 }}>
                <RoleRotator roles={roles} />
              </p>
              <p className="hero-intro anim" style={{ "--d": 4 }}>
                {profile.intro}
              </p>

              <div className="hero-actions anim" style={{ "--d": 5 }}>
                <a className="btn btn-primary" href="#projects">
                  View my work <ArrowRightIcon width={16} height={16} />
                </a>
                {profile.cv ? (
                  <a className="btn btn-outline" href={profile.cv} download>
                    <DownloadIcon width={16} height={16} /> Download CV
                  </a>
                ) : (
                  <a className="btn btn-outline" href="#contact">
                    Get in touch
                  </a>
                )}
              </div>

              <div className="hero-meta anim" style={{ "--d": 6 }}>
                {profile.location && (
                  <span className="meta-item">
                    <PinIcon width={17} height={17} className="c-pin" /> {profile.location}
                  </span>
                )}
                <span className="socials">
                  {socials.map(({ href, label, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      title={label}
                      className={`brand-btn c-${label.toLowerCase()}`}
                      {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                    >
                      <Icon width={18} height={18} />
                    </a>
                  ))}
                </span>
              </div>
            </div>

            <div className="hero-visual anim" style={{ "--d": 3 }}>
              <figure className="photo-card">
                {profile.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={profile.photo} alt={`Portrait of ${profile.name}`} className="avatar" />
                ) : (
                  <div className="avatar avatar-initials" aria-hidden>
                    {initials}
                  </div>
                )}
                {profile.company && (
                  <figcaption className="photo-caption">
                    <span className="caption-dot" aria-hidden />
                    <span>
                      <strong>{profile.role}</strong>
                      <small>{profile.company}</small>
                    </span>
                  </figcaption>
                )}
              </figure>
            </div>
          </div>

          {stats?.length > 0 && (
            <div className="container">
              <dl className="stats">
                {stats.map((s, i) => (
                  <div key={s.label} className="stat reveal" style={{ "--d": i }}>
                    <dt>{s.label}</dt>
                    <dd>{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </section>

        {/* ───────────── ABOUT ───────────── */}
        <section id="about" className="section">
          <div className="container">
            <SectionHeading eyebrow="About" title="A little about me" />
            <div className="about-grid">
              <div className="about-text reveal">
                {about.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              <dl className="facts card reveal" style={{ "--d": 1 }}>
                {about.facts.map((f) => (
                  <div key={f.label} className="fact">
                    <dt>{f.label}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* ───────────── SKILLS ───────────── */}
        <section id="skills" className="section section-alt">
          <div className="container">
            <SectionHeading
              eyebrow="Skills"
              title="Technical toolkit"
              subtitle="Technologies I use to design, build and ship software."
            />
            <div className="skills-grid">
              {skills.map((group, i) => (
                <div key={group.category} className="card skill-card spot reveal" style={{ "--d": i }}>
                  <h3>{group.category}</h3>
                  <ul className="skill-list">
                    {group.items.map((s) => (
                      <li key={s} className="skill-item">
                        <SkillLogo name={s} />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── EXPERIENCE & EDUCATION ───────────── */}
        {hasBackground && (
          <section id="experience" className="section">
            <div className="container">
              <SectionHeading eyebrow="Background" title="Experience & education" />
              <div className={`timeline-grid${experience.length && education.length ? "" : " single"}`}>
                {experience.length > 0 && <Timeline title="Experience" items={experience} />}
                {education.length > 0 && <Timeline title="Education" items={education} />}
              </div>
            </div>
          </section>
        )}

        {/* ───────────── PROJECTS ───────────── */}
        <section id="projects" className="section section-alt">
          <div className="container">
            <SectionHeading
              eyebrow="Projects"
              title="Selected work"
              subtitle="A few projects that show how I approach problems end to end."
            />
            <div className="projects-grid">
              {projects.map((p, i) => (
                <article
                  key={p.title}
                  className={`card project spot reveal${p.featured ? " featured" : ""}`}
                  style={{ "--d": i }}
                >
                  {p.image && (
                    <div className="project-media-col">
                      <a
                        className="project-media"
                        href={p.live || p.code || undefined}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${p.title}`}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={p.image} alt={`Screenshot of ${p.title}`} loading="lazy" />
                      </a>
                      {p.featured && p.live && (
                        <div className="project-cta">
                          <a className="btn btn-primary btn-sm" href={p.live} target="_blank" rel="noopener noreferrer">
                            Visit live site <ExternalIcon width={15} height={15} />
                          </a>
                          <span className="project-url">{p.live.replace(/^https?:\/\//, "")}</span>
                        </div>
                      )}
                    </div>
                  )}
                  <div className="project-body">
                    <div className="project-top">
                      {p.type ? (
                        <span className="project-type">{p.type}</span>
                      ) : (
                        <span className="project-index">{String(i + 1).padStart(2, "0")}</span>
                      )}
                      <div className="project-links">
                        {p.code && (
                          <a
                            href={p.code}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${p.title} source code on GitHub`}
                            title="Source code"
                            className="icon-link"
                          >
                            <GitHubIcon width={18} height={18} />
                          </a>
                        )}
                        {p.live && !p.featured && (
                          <a
                            href={p.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${p.title} live demo`}
                            title="Live demo"
                            className="icon-link"
                          >
                            <ExternalIcon width={18} height={18} />
                          </a>
                        )}
                      </div>
                    </div>
                    <h3>{p.title}</h3>
                    <p className="project-summary">{p.summary}</p>
                    {p.role && (
                      <p className="project-role">
                        <strong>My role:</strong> {p.role}
                      </p>
                    )}
                    {p.highlights?.length > 0 && (
                      <ul className="bullets">
                        {p.highlights.map((h) => (
                          <li key={h}>{h}</li>
                        ))}
                      </ul>
                    )}
                    <ul className="tags tech-tags">
                      {p.tech.map((t) => (
                        <li key={t} className="tech-tag">
                          <SkillLogo name={t} size={16} />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
            {profile.github && (
              <div className="center reveal">
                <a className="text-link" href={profile.github} target="_blank" rel="noopener noreferrer">
                  More on GitHub <ArrowRightIcon width={16} height={16} />
                </a>
              </div>
            )}
          </div>
        </section>

        {/* ───────────── CERTIFICATIONS ───────────── */}
        {certifications.length > 0 && (
          <section id="certifications" className="section">
            <div className="container">
              <SectionHeading eyebrow="Credentials" title="Certifications & achievements" />
              <ul className="certs">
                {certifications.map((c, i) => {
                  const body = (
                    <>
                      <span className="cert-icon">
                        <AwardIcon width={20} height={20} />
                      </span>
                      <span className="cert-text">
                        <strong>{c.name}</strong>
                        <span>
                          {c.issuer}
                          {c.year && ` · ${c.year}`}
                        </span>
                      </span>
                      {c.link && <ExternalIcon width={16} height={16} className="cert-ext" />}
                    </>
                  );
                  return (
                    <li key={c.name} className="card cert spot reveal" style={{ "--d": i }}>
                      {c.link ? (
                        <a href={c.link} target="_blank" rel="noopener noreferrer" className="cert-inner">
                          {body}
                        </a>
                      ) : (
                        <div className="cert-inner">{body}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        )}

        {/* ───────────── CONTACT ───────────── */}
        <section id="contact" className="section">
          <div className="container">
            <div className="contact card reveal">
              <p className="eyebrow">Contact</p>
              <h2>Let&apos;s work together</h2>
              <p className="contact-text">
                I&apos;m always open to new opportunities and interesting conversations. If you have a role, a
                project or a question, feel free to reach out and I&apos;ll get back to you promptly.
              </p>
              <div className="hero-actions center-actions">
                <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                  <MailIcon width={16} height={16} /> {profile.email}
                </a>
                <CopyButton text={profile.email} />
                {profile.cv && (
                  <a className="btn btn-outline" href={profile.cv} download>
                    <DownloadIcon width={16} height={16} /> Download CV
                  </a>
                )}
              </div>
              <div className="contact-links">
                {profile.phone && (
                  <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="c-phone">
                    <PhoneIcon width={16} height={16} /> {profile.phone}
                  </a>
                )}
                {profile.linkedin && (
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="c-linkedin">
                    <LinkedInIcon width={16} height={16} /> LinkedIn
                  </a>
                )}
                {profile.github && (
                  <a href={profile.github} target="_blank" rel="noopener noreferrer" className="c-github">
                    <GitHubIcon width={16} height={16} /> GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>{profile.location}</span>
        </div>
      </footer>
    </>
  );
}
