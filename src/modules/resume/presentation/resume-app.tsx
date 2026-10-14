'use client';

import {
  Download,
  FileSpreadsheet,
  Languages,
  LayoutTemplate,
} from 'lucide-react';
import { publicAsset } from '@/src/config/site';
import { resumeRecords } from '../content/defaults';
import { wordDownloads } from '../content/downloads';
import { ClassicCareer } from './components/classic-career';
import { ClassicResume } from './components/classic-resume';
import { ModernCareer } from './components/modern-career';
import { ModernProfile } from './components/modern-profile';
import { ModernResume } from './components/modern-resume';
import { TextValue } from './components/primitives';
import { LanguageContext } from './context';
import { ui } from './messages';
import { useResumeController } from './use-resume-controller';

export default function ResumeApp() {
  const { view, setView, style, setStyle, language, setLanguage } =
    useResumeController();
  const data = resumeRecords[language];
  const t = ui[language];
  const word = wordDownloads[view];
  return (
    <LanguageContext.Provider value={language}>
      <main className="site-shell">
        <header className="topbar">
          <a className="wordmark" href="#top">
            <span className="wordmark-monogram">LY</span>
            <span>
              <strong>LI YANG</strong>
              <small>{t.profile}</small>
            </span>
          </a>
          <div className="switch-cluster">
            <nav className="document-switch" aria-label={t.documentSwitch}>
              <button
                type="button"
                className={view === 'resume' ? 'active' : ''}
                aria-pressed={view === 'resume'}
                onClick={() => setView('resume')}
              >
                {t.resume}
              </button>
              <button
                type="button"
                className={view === 'career' ? 'active' : ''}
                aria-pressed={view === 'career'}
                onClick={() => setView('career')}
              >
                {t.career}
              </button>
            </nav>
            <nav className="style-switch" aria-label={t.styleSwitch}>
              <button
                type="button"
                className={style === 'modern' ? 'active' : ''}
                aria-pressed={style === 'modern'}
                onClick={() => setStyle('modern')}
              >
                <LayoutTemplate />
                {t.modern}
              </button>
              <button
                type="button"
                className={style === 'classic' ? 'active' : ''}
                aria-pressed={style === 'classic'}
                onClick={() => setStyle('classic')}
              >
                <FileSpreadsheet />
                {t.classic}
              </button>
            </nav>
            <nav className="language-switch" aria-label={t.languageSwitch}>
              <button
                type="button"
                className={language === 'ja' ? 'active' : ''}
                aria-pressed={language === 'ja'}
                onClick={() => setLanguage('ja')}
              >
                <Languages />
                日本語
              </button>
              <button
                type="button"
                className={language === 'zh' ? 'active' : ''}
                aria-pressed={language === 'zh'}
                onClick={() => setLanguage('zh')}
              >
                <Languages />
                中文
              </button>
            </nav>
          </div>
          <a
            className="word-download"
            href={publicAsset(word.path)}
            download={word.filename}
            title={t.wordHint}
          >
            <Download size={16} aria-hidden="true" />
            <span>{t.wordDownload}</span>
          </a>
        </header>
        {style === 'modern' ? (
          <div id="top" className="page-wrap modern-page-wrap">
            <ModernProfile data={data} />
            <article
              className="document-panel"
              key={`${view}-${style}-${language}`}
            >
              <div className="document-meta">
                <div>
                  <strong>{view === 'resume' ? t.resume : t.career}</strong>
                </div>
                <p>
                  {t.updated}：<TextValue value={data.updatedAt} />
                </p>
              </div>
              {view === 'resume' ? (
                <ModernResume data={data} />
              ) : (
                <ModernCareer data={data} />
              )}
              <footer className="document-footer">
                <span>LI YANG · {t.profile}</span>
              </footer>
            </article>
          </div>
        ) : (
          <div
            id="top"
            className="classic-page-wrap"
            key={`${view}-${style}-${language}`}
          >
            {view === 'resume' ? (
              <ClassicResume data={data} />
            ) : (
              <ClassicCareer data={data} />
            )}
          </div>
        )}
      </main>
    </LanguageContext.Provider>
  );
}
