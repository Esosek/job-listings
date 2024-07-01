import JobItem from '@/components/JobItem';

import jobData from '@/data.json';
import { FilterContextProvider } from '@/context/FilterContext';
import Header from '@/components/Header';

export default function Home() {
  return (
    <FilterContextProvider>
      <Header />
      <main className="max-w-5xl px-6 mx-auto">
        <ul>
          {jobData.map((job) => (
            <JobItem key={job.id} job={job} />
          ))}
        </ul>
      </main>
    </FilterContextProvider>
  );
}
