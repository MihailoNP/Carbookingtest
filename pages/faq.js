import React from 'react';
import { useRouter } from 'next/router';
import { faqpage } from 'lib/content';

const faq = () => {
  const router = useRouter();

  return (
    <section className='2xl:px-0 px-4 py-32 bg-slate-100'>
      <div className='container mx-auto bg-white p-8 rounded-lg'>
        <h2 className='text-4xl font-medium mb-8'>
          {faqpage[router.locale].h2}
        </h2>
        <ol className='list-decimal p-8'>
          {faqpage[router.locale].questions.map((data) => (
            <li className='mb-4'>
              <h3 className='mb-2 text-primary font-medium'>{data.question}</h3>
              <p>{data.answer}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default faq;
