import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <header
        className={`${styles.header} bg-primary h-[156px] w-auto`}
      ></header>
      ;
      <main>
        <h1 className="text-base text-3xl font-bold">This is a title.</h1>
      </main>
    </>
  );
}
