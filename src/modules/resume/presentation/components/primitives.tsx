'use client';

import { BriefcaseBusiness } from 'lucide-react';
import { publicAsset } from '@/src/config/site';
import type { ResumeData } from '../../domain/model';
import { useUi } from '../context';

export function TextValue({
  value,
  className = '',
}: {
  value: string;
  className?: string;
}) {
  return <span className={`text-value ${className}`}>{value}</span>;
}

export function SectionHeading({
  title,
  icon: Icon,
}: {
  title: string;
  icon: typeof BriefcaseBusiness;
}) {
  return (
    <div className="section-heading">
      <div className="section-icon" aria-hidden="true">
        <Icon size={18} strokeWidth={1.8} />
      </div>
      <div>
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export function ProfilePhoto({ data }: { data: ResumeData }) {
  const t = useUi();
  return (
    <div className="photo-frame">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={publicAsset(data.photo)} alt={`${data.name} ${t.portrait}`} />
    </div>
  );
}
