import brandDNA from '../config/brand-dna';
import CtaSection from '../components/CtaSection';
import FooterSection from '../components/FooterSection';

/**
 * AboutPage -- Hero + founder story + team + values + CTA.
 * Draws from brandDNA.team, brandDNA.copy.founder, brandDNA.team_members.
 */

const COMPANY_VALUES = [
  {
    title: 'Outcomes first',
    body: 'We measure success by meetings booked and pipeline generated. Time logged is not a deliverable.',
  },
  {
    title: 'Radical transparency',
    body: 'You see what we see. Every metric, every reply, every dead end. There are no vanity reports here.',
  },
  {
    title: 'Buyers first',
    body: 'Our outreach earns attention by being relevant. We never spam on a client\'s behalf. The agency\'s reputation depends on it.',
  },
];

export default function AboutPage() {
  const founder = brandDNA.team.founder;
  const teamMembers = Array.isArray(brandDNA.team_members) ? brandDNA.team_members : [];
  const companyName = brandDNA.company.name || 'Sales Agency';

  return (
    <main>
      {/* Hero */}
      <section
        id="about-hero"
        aria-label="About hero"
        className="bg-[#0F1923] py-20 lg:py-28"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-medium tracking-[0.14em] uppercase text-sky-400 mb-4">
            About Us
          </p>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            The team behind your pipeline
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            {brandDNA.company.description ||
              'We are a team of former SDRs, revenue leaders, and sales engineers who built the playbook ourselves before we started selling it.'}
          </p>
        </div>
      </section>

      {/* Founder section */}
      <section
        id="founder"
        aria-labelledby="founder-heading"
        className="bg-[#F8FAFC] py-16 lg:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Founder photo placeholder */}
            <div className="order-2 lg:order-1 aspect-square max-w-sm mx-auto lg:mx-0 rounded-xl bg-[#0F1923] flex items-center justify-center overflow-hidden">
              {brandDNA.team_group_photo ? (
                <img
                  src={`/team/${brandDNA.team_group_photo}`}
                  alt={`${founder.displayName || founder.name}, ${founder.title}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-[#1A2535] flex items-center justify-center mx-auto mb-4">
                    <svg aria-hidden="true" className="w-10 h-10 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p className="text-slate-600 text-sm">Photo at Stage 4</p>
                </div>
              )}
            </div>

            {/* Founder copy */}
            <div className="order-1 lg:order-2">
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-sky-600 mb-3">
                {brandDNA.copy.founder.label || 'Founder'}
              </p>
              <h2
                id="founder-heading"
                className="text-3xl font-bold text-slate-900 mb-6"
              >
                {brandDNA.copy.founder.heading || `Meet ${founder.displayName || founder.name}`}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                {brandDNA.copy.founder.para1 ||
                  `${founder.displayName || founder.name} brings ${founder.yearsExp} ${founder.expLabel} to every engagement.`}
              </p>
              {brandDNA.copy.founder.para2 && (
                <p className="text-slate-600 leading-relaxed mb-6">
                  {brandDNA.copy.founder.para2}
                </p>
              )}
              {brandDNA.copy.founder.vision && (
                <div className="bg-sky-50 border-l-4 border-sky-500 p-4 rounded-r-md">
                  <p className="text-xs font-medium text-sky-700 uppercase tracking-wide mb-1">
                    {brandDNA.copy.founder.visionLabel || 'Vision'}
                  </p>
                  <p className="text-slate-700 text-sm italic">{brandDNA.copy.founder.vision}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Team members */}
      {teamMembers.length > 0 && (
        <section
          id="team"
          aria-labelledby="team-heading"
          className="bg-[#0F1923] py-16 lg:py-24"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2
                id="team-heading"
                className="text-3xl font-bold text-white"
              >
                The team
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.slice(0, 4).map((member, i) => (
                <div
                  key={i}
                  className="bg-[#1A2535] border border-[#1E3A5F] rounded-lg p-6 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-[#243447] overflow-hidden mx-auto mb-4">
                    {member.filename ? (
                      <img
                        src={`/team/${member.filename}`}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-500">
                        <svg aria-hidden="true" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <p className="font-semibold text-white text-sm">{member.name}</p>
                  <p className="text-xs text-slate-400 mt-1">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Values */}
      <section
        id="values"
        aria-labelledby="values-heading"
        className="bg-[#F8FAFC] py-16 lg:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              id="values-heading"
              className="text-3xl font-bold text-slate-900"
            >
              How we operate
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {COMPANY_VALUES.map((value, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
      <FooterSection />
    </main>
  );
}
