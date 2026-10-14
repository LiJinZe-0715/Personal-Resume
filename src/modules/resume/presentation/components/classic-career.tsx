'use client';
import type { ResumeData } from '../../domain/model';
import { useUi } from '../context';
import { TextValue } from './primitives';
export function ClassicCareer({ data }: { data: ResumeData }) {
  const t = useUi();
  return (
    <section
      className="classic-sheet career-classic"
      aria-label={`${t.classic}${t.career}`}
    >
      <div className="classic-title-row">
        <h1>{t.career}</h1>
        <p>
          <TextValue value={data.updatedAt} />
        </p>
      </div>
      <table className="form-table career-summary-table">
        <tbody>
          <tr>
            <th>{t.summary}</th>
            <td>
              <TextValue value={data.careerSummary} />
            </td>
          </tr>
          <tr>
            <th>{t.heldSkills}</th>
            <td>{data.skills.join('、')}</td>
          </tr>
        </tbody>
      </table>
      <div className="classic-section-label">
        <h2>{t.projectHistory}</h2>
      </div>
      {data.projects.map((project, projectIndex) => (
        <div key={projectIndex}>
          <table className="form-table classic-project-table">
            <tbody>
              <tr>
                <th>{t.period}</th>
                <td>
                  <TextValue value={project.period} />
                </td>
                <th>{t.role}</th>
                <td>
                  <TextValue value={project.role} />
                </td>
              </tr>
              <tr>
                <th>{t.company}</th>
                <td colSpan={3}>
                  <TextValue value={project.company} />
                </td>
              </tr>
              <tr>
                <th>{t.projectName}</th>
                <td colSpan={3} className="project-name-cell">
                  <TextValue value={project.title} />
                </td>
              </tr>
              <tr>
                <th>{t.overview}</th>
                <td colSpan={3}>
                  <TextValue value={project.overview} />
                </td>
              </tr>
              <tr>
                <th>{t.responsibilities}</th>
                <td colSpan={3} className="classic-responsibilities-cell">
                  <TextValue
                    value={project.responsibilities.join('\n')}
                    className="classic-responsibilities-field"
                  />
                </td>
              </tr>
              <tr>
                <th>{t.technologies}</th>
                <td colSpan={3}>
                  <TextValue value={project.technologies} />
                </td>
              </tr>
              <tr>
                <th>{t.contribution}</th>
                <td colSpan={3}>
                  <TextValue value={project.outcome} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </section>
  );
}
