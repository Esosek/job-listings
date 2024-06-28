type Job = {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
};

type JobItemProps = {
  job: Job;
};

export default function JobItem({ job }: JobItemProps) {
  return <li>{job.position}</li>;
}
