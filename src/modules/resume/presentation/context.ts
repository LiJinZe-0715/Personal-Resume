'use client';
import { createContext, useContext } from 'react';
import type { LanguageName } from '../domain/model';
import { ui } from './messages';
export const LanguageContext = createContext<LanguageName>('ja');

export function useUi() {
  return ui[useContext(LanguageContext)];
}
