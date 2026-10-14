import assert from 'node:assert/strict';
import { test } from 'node:test';
import { saveBrowserValue } from '../src/modules/resume/infrastructure/browser/storage.ts';

void test('persists a browser preference when storage is available', () => {
  const values = new Map();
  globalThis.window = {
    localStorage: { setItem: (key, value) => values.set(key, value) },
  };
  try {
    saveBrowserValue('language', 'zh');
    assert.equal(values.get('language'), 'zh');
  } finally {
    delete globalThis.window;
  }
});

void test('a full browser cache does not interrupt display interaction', () => {
  globalThis.window = {
    localStorage: {
      setItem() {
        throw new DOMException('Full', 'QuotaExceededError');
      },
    },
  };
  try {
    let reachedInteraction = false;
    assert.doesNotThrow(() => {
      saveBrowserValue('language', 'zh');
      reachedInteraction = true;
    });
    assert.equal(reachedInteraction, true);
  } finally {
    delete globalThis.window;
  }
});

void test('denied access to localStorage is tolerated', () => {
  globalThis.window = {
    get localStorage() {
      throw new DOMException('Denied', 'SecurityError');
    },
  };
  try {
    assert.doesNotThrow(() => saveBrowserValue('language', 'ja'));
  } finally {
    delete globalThis.window;
  }
});
