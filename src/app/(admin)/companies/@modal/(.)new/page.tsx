'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import CompanyFormModal from '../../../../componenets/company-form-modal';

export interface PageProps {}

export default function Page({}: PageProps) {
  const router = useRouter();
  return <CompanyFormModal show={true} onClose={() => router.back()} />;
}
