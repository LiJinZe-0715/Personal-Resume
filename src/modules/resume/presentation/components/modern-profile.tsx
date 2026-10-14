'use client';
import { Mail, MapPin, Phone } from 'lucide-react';
import type { ResumeData } from '../../domain/model';
import { useUi } from '../context';
import { ProfilePhoto, TextValue } from './primitives';
export function ModernProfile({ data }: { data: ResumeData }) {
  const t = useUi();
  return (
    <aside className="profile-panel">
      <ProfilePhoto data={data} />
      <div className="identity-block">
        <TextValue value={data.kana} className="identity-kana" />
        <TextValue value={data.name} className="identity-name" />
        <TextValue value={data.romanName} className="identity-roman" />
        <TextValue value={data.headline} className="identity-role" />
      </div>
      <div className="contact-list">
        <div>
          <Mail />
          <TextValue value={data.email} />
        </div>
        <div>
          <Phone />
          <TextValue value={data.phone} />
        </div>
        <div>
          <MapPin />
          <TextValue value={data.address} />
        </div>
      </div>
      <div className="side-divider" />
      <section className="side-section">
        <h2>{t.personal}</h2>
        <dl>
          {[
            [t.birthDate, data.birthDate, 'birthDate'],
            [t.nationality, data.nationality, 'nationality'],
            [t.gender, data.gender, 'gender'],
            [
              t.residenceStatus.replace('：', ''),
              data.residenceStatus,
              'residenceStatus',
            ],
            [t.residenceExpiry, data.residenceExpiry, 'residenceExpiry'],
            [t.station, data.stations, 'stations'],
          ].map(([label, value, key]) => (
            <div key={key}>
              <dt>{label}</dt>
              <dd>
                <TextValue value={value} />
              </dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="side-section">
        <div className="side-section-title">
          <div>
            <h2>{t.languages}</h2>
          </div>
        </div>
        <div className="side-stack">
          {data.languages.map((language, index) => (
            <div className="block-item" key={index}>
              <TextValue value={language} />
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
}
