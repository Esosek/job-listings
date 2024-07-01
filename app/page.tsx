import JobItem from '@/components/JobItem';
import styles from './page.module.css';
import jobData from '@/data.json';
import { FilterContextProvider } from '@/context/FilterContext';

export default function Home() {
  return (
    <FilterContextProvider>
      <header
        className={`${styles.header} bg-primary h-[156px] w-auto`}
      ></header>
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
