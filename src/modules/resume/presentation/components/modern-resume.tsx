'use client';
import {
  BriefcaseBusiness,
  CircleUserRound,
  Code2,
  GraduationCap,
  Sparkles,
} from 'lucide-react';
import type { ResumeData } from '../../domain/model';
import { useUi } from '../context';
import { SectionHeading, TextValue } from './primitives';
export function ModernResume({ data }: { data: ResumeData }) {
  const t = useUi();
  return (
    <div className="document-content">
      <section className="intro-card">
        <p className="eyebrow">{t.aboutMe}</p>
        <TextValue value={data.introduction} className="intro-copy" />
        <div className="intro-points">
          <span>
            <Code2 /> {data.primaryTechnologies}
          </span>
          <span>
            <Sparkles /> {t.introPoint1}
          </span>
          <span>
            <CircleUserRound /> {t.introPoint2}
          </span>
        </div>
      </section>
      <section className="content-section">
        <SectionHeading title={t.experience} icon={BriefcaseBusiness} />
        <div className="timeline">
          {data.experience.map((item, index) => (
            <div className="timeline-item" key={index}>
              <span className="timeline-dot" />
              <div className="timeline-period">
                {
                  <span>
                    {item.year}.{item.month}
                  </span>
                }
              </div>
              <div className="timeline-body">
                <h3>
                  <TextValue value={item.title} />
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="content-section">
        <SectionHeading title={t.education} icon={GraduationCap} />
        <div className="timeline">
          {data.education.map((item, index) => (
            <div className="timeline-item" key={index}>
              <span className="timeline-dot" />
              <div className="timeline-period">
                {
                  <span>
                    {item.year}.{item.month}
                  </span>
                }
              </div>
              <div className="timeline-body">
                <h3>
                  <TextValue value={item.title} />
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="content-section">
        <SectionHeading title={t.skills} icon={Code2} />
        <div className="skill-cloud">
          {data.skills.map((skill, index) => (
            <div className="inline-item" key={index}>
              <TextValue value={skill} />
            </div>
          ))}
        </div>
      </section>
      <section className="statement-grid">
        {[
          [t.reason, data.japanReason, 'japanReason'],
          [t.selfPr, data.selfPr, 'selfPr'],
          [t.motivation, data.motivation, 'motivation'],
        ].map(([title, value, key], index) => (
          <div className="statement-card" key={key}>
            <span className="statement-index">0{index + 1}</span>
            <h2>{title}</h2>
            <TextValue value={value} />
          </div>
        ))}
      </section>
      <section className="conditions-card">
        {[
          [t.availability, data.availability, 'availability'],
          [t.preferredLocation, data.preferredLocation, 'preferredLocation'],
          [t.family, data.family, 'family'],
          [t.health, data.health, 'health'],
        ].map(([label, value, key]) => (
          <div key={key}>
            <span>{label}</span>
            <TextValue value={value} />
          </div>
        ))}
      </section>
    </div>
  );
}
