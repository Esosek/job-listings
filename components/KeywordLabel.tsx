'use client';

type KeywordLabelProps = {
  keyword: string;
};

export default function KeywordLabel({ keyword }: KeywordLabelProps) {
  function handleKeywordSelect(keyword: string) {
    console.log('Added', keyword, 'as filter');
  }
  return (
    <li>
      <button
        onClick={() => handleKeywordSelect(keyword)}
        className="font-bold bg-cyan-200 px-2 pt-1 rounded-sm"
      >
        {keyword}
      </button>
    </li>
  );
}
