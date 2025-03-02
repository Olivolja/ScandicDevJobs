// src/lib/types/Job.ts
export interface Job {
  id: number;
  title: string;
  city: string;
  category: string;
  description: string;
  companyLogo: string;
  salaryRange: string;
  tags: string[];
  filterJob: string[];
  address: string;
  lat: number;
  lng: number;
}