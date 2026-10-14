'use client';
import { BriefcaseBusiness, ChevronRight } from 'lucide-react';
import type { ResumeData } from '../../domain/model';
import { useUi } from '../context';
import { SectionHeading, TextValue } from './primitives';
export function ModernCareer({ data }: { data: ResumeData }) {
  const t = useUi();
  return (
    <div className="document-content">
      <section className="career-hero">
        <div>
          <p className="eyebrow">{t.summary}</p>
          <h1>
            {t.careerTitle1}
            <br />
            {t.careerTitle2}
          </h1>
        </div>
        <div className="career-years">
          <strong>{data.developmentYears}</strong>
          <span>{t.yearsExperience}</span>
        </div>
        <TextValue value={data.careerSummary} className="career-summary" />
      </section>
      <section className="project-section">
        <SectionHeading title={t.projects} icon={BriefcaseBusiness} />
        <div className="project-list">
          {data.projects.map((project, projectIndex) => (
            <article className="project-card" key={projectIndex}>
              <div className="project-rail">
                <span>{t.project}</span>
                <strong>0{projectIndex + 1}</strong>
              </div>
              <div className="project-main">
                <div className="project-topline">
                  <p>
                    <TextValue value={project.period} />
                  </p>
                  <span>
                    <TextValue value={project.role} />
                  </span>
                </div>
                <h2>
                  <TextValue value={project.title} />
                </h2>
                <p className="project-company">
                  <TextValue value={project.company} />
                </p>
                <TextValue
                  value={project.overview}
                  className="project-overview"
                />
                <div className="project-detail-grid">
                  <div>
                    <h3>{t.responsibilities}</h3>
                    <ul>
                      {project.responsibilities.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <ChevronRight />
                          <TextValue value={item} />
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="project-facts">
                    <div>
                      <span>{t.technologies}</span>
                      <TextValue value={project.technologies} />
                    </div>
                    <div>
                      <span>{t.contribution}</span>
                      <TextValue value={project.outcome} />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
