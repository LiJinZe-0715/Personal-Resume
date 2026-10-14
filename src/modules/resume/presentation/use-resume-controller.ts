'use client';
import { useEffect, useState } from 'react';
import type { LanguageName, ViewName } from '../domain/model';
import { saveBrowserValue } from '../infrastructure/browser/storage';
import type { StyleName } from './view-types';

declare global {
  interface Document {
    modelContext?: {
      registerTool: (
        tool: {
          name: string;
          title?: string;
          description: string;
          inputSchema: object;
          annotations?: {
            readOnlyHint?: boolean;
            untrustedContentHint?: boolean;
          };
          execute: (input: unknown) => unknown;
        },
        options?: { signal?: AbortSignal },
      ) => void | Promise<void>;
    };
  }
}

export function useResumeController() {
  const [view, setView] = useState<ViewName>('resume');
  const [style, setStyle] = useState<StyleName>('modern');
  const [language, setLanguage] = useState<LanguageName>('ja');
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const storedView = window.localStorage.getItem('li-yang-resume-view');
        const storedStyle = window.localStorage.getItem('li-yang-resume-style');
        const storedLanguage = window.localStorage.getItem(
          'li-yang-resume-language',
        );
        if (storedView === 'resume' || storedView === 'career')
          setView(storedView);
        if (storedStyle === 'modern' || storedStyle === 'classic')
          setStyle(storedStyle);
        if (storedLanguage === 'ja' || storedLanguage === 'zh')
          setLanguage(storedLanguage);
      } catch {
        // Display preferences are optional when browser storage is unavailable.
      }
      setHydrated(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (hydrated) saveBrowserValue('li-yang-resume-view', view);
  }, [view, hydrated]);
  useEffect(() => {
    if (hydrated) saveBrowserValue('li-yang-resume-style', style);
  }, [style, hydrated]);
  useEffect(() => {
    document.documentElement.lang = language === 'ja' ? 'ja' : 'zh-CN';
    if (hydrated) saveBrowserValue('li-yang-resume-language', language);
  }, [language, hydrated]);
  useEffect(() => {
    const context = document.modelContext;
    if (!context?.registerTool) return;
    const lifecycle = new AbortController();
    const register = (tool: Parameters<typeof context.registerTool>[0]) =>
      void Promise.resolve(
        context.registerTool(tool, { signal: lifecycle.signal }),
      ).catch(() => undefined);
    register({
      name: 'resume_switch_document',
      title: 'Switch resume document',
      description: 'Switch between the resume and career history.',
      inputSchema: {
        type: 'object',
        properties: {
          document: { type: 'string', enum: ['resume', 'career'] },
        },
        required: ['document'],
        additionalProperties: false,
      },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute(input) {
        const next = (input as { document?: unknown }).document;
        if (next !== 'resume' && next !== 'career')
          throw new Error('invalid document');
        setView(next);
        return { document: next };
      },
    });
    register({
      name: 'resume_switch_style',
      title: 'Switch resume style',
      description: 'Switch between the modern and traditional table layouts.',
      inputSchema: {
        type: 'object',
        properties: { style: { type: 'string', enum: ['modern', 'classic'] } },
        required: ['style'],
        additionalProperties: false,
      },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute(input) {
        const next = (input as { style?: unknown }).style;
        if (next !== 'modern' && next !== 'classic')
          throw new Error('invalid style');
        setStyle(next);
        return { style: next };
      },
    });
    register({
      name: 'resume_switch_language',
      title: 'Switch resume language',
      description: 'Switch between Japanese and Simplified Chinese.',
      inputSchema: {
        type: 'object',
        properties: { language: { type: 'string', enum: ['ja', 'zh'] } },
        required: ['language'],
        additionalProperties: false,
      },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute(input) {
        const next = (input as { language?: unknown }).language;
        if (next !== 'ja' && next !== 'zh') throw new Error('invalid language');
        setLanguage(next);
        return { language: next };
      },
    });

    return () => lifecycle.abort();
  }, []);
  return { view, setView, style, setStyle, language, setLanguage };
}
