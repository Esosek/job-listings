'use client';
import { useContext } from 'react';
import JobItem from '@/components/JobItem';
import FilterContext from '@/context/FilterContext';
import { type Job } from '@/types/Job';

type JobListProps = {
  jobs: Job[];
};

export default function JobList({ jobs }: JobListProps) {
  const { filters } = useContext(FilterContext)!;
  const filteredJobs =
    filters.length === 0
      ? [...jobs]
      : jobs.filter((job) => {
          const jobKeywords = [
            job.role,
            job.level,
            ...job.languages,
            ...job.tools,
          ];
          return filters.every((filter) => jobKeywords.includes(filter));
        });
  return (
    <ul>
      {filteredJobs.map((job, index) => (
        <JobItem key={job.id} job={job} order={index} />
      ))}
    </ul>
  );
}
