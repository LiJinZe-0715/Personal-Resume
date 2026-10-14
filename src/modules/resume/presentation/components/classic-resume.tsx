'use client';
import type { ResumeData } from '../../domain/model';
import { Fragment } from 'react';
import { useUi } from '../context';
import { ProfilePhoto, TextValue } from './primitives';
export function ClassicResume({ data }: { data: ResumeData }) {
  const t = useUi();
  const address = data.address.match(/^(〒\d{3}-\d{4})\s+(.+)$/);
  return (
    <section
      className="classic-sheet resume-classic"
      aria-label={`${t.classic}${t.resume}`}
    >
      <div className="classic-title-row">
        <h1>{t.resume}</h1>
        <p>
          <TextValue value={data.updatedAt} />
        </p>
      </div>

      <div className="classic-profile-grid">
        <table className="form-table personal-table classic-profile-table">
          <colgroup>
            <col className="profile-label-column" />
            <col className="profile-phone-column" />
            <col className="profile-email-column" />
            <col className="profile-gender-label-column" />
            <col className="profile-nationality-column" />
            <col className="profile-photo-column" />
          </colgroup>
          <tbody>
            <tr>
              <th>{t.kana}</th>
              <td colSpan={3}>
                <TextValue value={data.kana} />
              </td>
              <th className="profile-right-edge nationality-label">
                {t.nationality}
              </th>
              <td className="classic-photo-cell" rowSpan={5}>
                <ProfilePhoto data={data} />
              </td>
            </tr>
            <tr>
              <th>{t.name}</th>
              <td className="classic-name" colSpan={3}>
                <div className="classic-name-fields">
                  <TextValue value={data.name} />
                  <TextValue value={`（${data.romanName}）`} />
                </div>
              </td>
              <td className="profile-right-edge">
                <TextValue value={data.nationality} />
              </td>
            </tr>
            <tr>
              <th>{t.birthDate}</th>
              <td colSpan={2}>
                <TextValue value={data.birthDate} />
              </td>
              <th>{t.gender}</th>
              <td className="profile-right-edge">
                <TextValue value={data.gender} />
              </td>
            </tr>
            <tr>
              <th>{t.phone}</th>
              <td>
                <TextValue value={data.phone} />
              </td>
              <th className="profile-email-label">E-MAIL</th>
              <td className="profile-right-edge" colSpan={2}>
                <TextValue value={data.email} />
              </td>
            </tr>
            <tr>
              <th>{t.station}</th>
              <td className="profile-right-edge" colSpan={4}>
                <TextValue value={data.stations} />
              </td>
            </tr>
            <tr>
              <th>{t.addressKanaLabel}</th>
              <td className="profile-right-edge" colSpan={4}>
                <TextValue value={data.addressKana} />
              </td>
              <th className="residence-cell residence-label" scope="col">
                {t.residence}
              </th>
            </tr>
            <tr>
              <th>{t.address}</th>
              <td className="profile-right-edge profile-address" colSpan={4}>
                {address ? (
                  <>
                    <TextValue value={address[1]} className="postal-code" />
                    <TextValue value={address[2]} className="street-address" />
                  </>
                ) : (
                  <TextValue value={data.address} />
                )}
              </td>
              <td className="residence-cell">
                <div className="residence-status-line">
                  <span>{t.residenceStatus}</span>
                  <TextValue value={data.residenceStatus} />
                </div>
                <TextValue value={data.residenceExpiry} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="classic-table-wrap">
        <table className="form-table history-table resume-history-table">
          <thead>
            <tr>
              <th className="year-cell">{t.year}</th>
              <th className="month-cell">{t.month}</th>
              <th>
                {t.education}・{t.experience}
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                title: t.education,
                entries: data.education,
                closing: t.historyPresent,
              },
              {
                title: t.experience,
                entries: data.experience,
                closing: t.historyEnd,
              },
            ].map((group) => (
              <Fragment key={group.title}>
                <tr className="category-row">
                  <td aria-label={t.year} />
                  <td aria-label={t.month} />
                  <th>{group.title}</th>
                </tr>
                {group.entries.map((entry, index) => (
                  <tr key={index}>
                    <td>
                      <TextValue value={entry.year} />
                    </td>
                    <td>
                      <TextValue value={entry.month} />
                    </td>
                    <td className="entry-cell">
                      <TextValue value={entry.title} />
                    </td>
                  </tr>
                ))}
                <tr className="history-closing-row">
                  <td aria-label={t.year} />
                  <td aria-label={t.month} />
                  <td>
                    <TextValue value={group.closing} />
                  </td>
                </tr>
                <tr aria-hidden="true">
                  <td aria-hidden="true" />
                  <td aria-hidden="true" />
                  <td aria-hidden="true" />
                </tr>
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <div className="classic-table-wrap">
        <table className="form-table history-table resume-license-table">
          <thead>
            <tr>
              <th className="year-cell">{t.year}</th>
              <th className="month-cell">{t.month}</th>
              <th>{t.licenses}</th>
            </tr>
          </thead>
          <tbody>
            {data.licenses.map((item, index) => (
              <tr key={index}>
                <td>
                  <TextValue value={item.year} />
                </td>
                <td>
                  <TextValue value={item.month} />
                </td>
                <td>
                  <div className="classic-cell-with-action">
                    <TextValue value={item.name} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="classic-statement resume-skills">
        <h2>{t.resumeSkills}</h2>
        <p>
          <TextValue value={data.skills.join('、')} />
        </p>
        <h2>{t.languageSkills}：</h2>
        <div className="classic-language-list">
          {data.languages.map((language, index) => (
            <TextValue value={language} key={index} />
          ))}
        </div>
      </section>

      {[
        [`【${t.reason}】`, data.japanReason, 'japanReason'],
        [`【${t.selfPr}】`, data.selfPr, 'selfPr'],
        [`【${t.motivation}】`, data.motivation, 'motivation'],
      ].map(([title, value, key]) => (
        <section className="classic-statement" key={key}>
          <h2>{title}</h2>
          <TextValue value={value} />
        </section>
      ))}

      <table className="form-table condition-table">
        <tbody>
          <tr>
            <td>
              <strong>{t.availability}：</strong>
              <TextValue value={data.availability} />
            </td>
            <td>
              <strong>{t.preferredLocation}：</strong>
              <TextValue value={data.preferredLocation} />
            </td>
          </tr>
          <tr>
            <td>
              <TextValue value={data.family} />
            </td>
            <td>
              <strong>{t.health}：</strong>
              <TextValue value={data.health} />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
