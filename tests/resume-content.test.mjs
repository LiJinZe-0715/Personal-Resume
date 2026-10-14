import assert from 'node:assert/strict';
import { test } from 'node:test';
import { resumeRecords } from '../src/modules/resume/content/defaults.ts';

void test('fixed bilingual content keeps matching dates, contact details and project periods', () => {
  const { ja, zh } = resumeRecords;
  for (const field of [
    'photo',
    'updatedAt',
    'romanName',
    'phone',
    'email',
    'developmentYears',
    'primaryTechnologies',
  ]) {
    assert.equal(ja[field], zh[field], field);
  }
  for (const field of ['education', 'experience', 'licenses']) {
    assert.equal(ja[field].length, zh[field].length, field);
    assert.deepEqual(
      ja[field].map(({ year, month }) => [year, month]),
      zh[field].map(({ year, month }) => [year, month]),
    );
  }
  assert.deepEqual(
    ja.projects.map((project) => project.period),
    zh.projects.map((project) => project.period),
  );
  assert.equal(ja.developmentYears, '5+');
  assert.ok(ja.languages.includes('日本語：N3コース修了、N2コース受講中'));
  assert.ok(zh.languages.includes('日语：N3课程结业，正在学习N2课程'));
  for (const record of [ja, zh]) {
    assert.equal(record.photo, '/profile.jpg');
    assert.equal(record.projects.length, 3);
    for (const project of record.projects) {
      assert.ok(
        project.title &&
          project.overview &&
          project.technologies &&
          project.outcome,
      );
      assert.ok(
        project.responsibilities.every(
          (item) => typeof item === 'string' && item.trim(),
        ),
      );
    }
  }
});
