import Head from 'next/head'
import Link from 'next/link';
import { useState } from 'react';
import CreateForm from '../components/CreateForm';
import { v4 as uuidv4 } from 'uuid';
import ReportTable from '../components/ReportTable';

export default function Home() {
  // useState its for dynamic data / State variable to hold the JSON string of the last created Cookie Stand
  const [jsonstr, setJsonstr] = useState([])

  function submitHandler(event) {
    // Prevent default form submission behavior.
    event.preventDefault();

    // Extract form data from the submitted form using 'FormData'
    const form = new FormData(event.target);

    const data = {
      id : uuidv4 ,
      Location: form.get('locationInput'),
      MinCustomers: form.get('minCustomersInput'),
      MaxCustomers: form.get('maxCustomersInput'),
      AvgCookies: form.get('avgCookiesInput'),
    };
    setJsonstr(prevJsonstr => [...prevJsonstr, data]);
  }

  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>


      <div>
        <header className='flex items-center justify-between p-4 bg-gray-500 text-gray-50'>
          <h1 className='text-4xl text-black'>Cookie Stand Admin</h1>
          <Link href='./overview'>Overview</Link>
        </header>


        <main>
          <CreateForm handler={submitHandler} />
          <ReportTable jsonstr={jsonstr} />
        </main>


        <footer className="p-4 mt-8 bg-gray-500 text-gray-50">
          {jsonstr.length} Locaions World Wide
        </footer>
      </div>

    </>
  )
}