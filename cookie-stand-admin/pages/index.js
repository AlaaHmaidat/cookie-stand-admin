import Head from 'next/head'
import { useState } from 'react';

export default function Home() {
  // useState its for dynamic data / State variable to hold the JSON string of the last created Cookie Stand
  const [jsonstr, setJsonstr] = useState('Report Table Coming Soon...')

  function submitHandler(event) {
    // Prevent default form submission behavior.
    event.preventDefault();

    // Extract form data from the submitted form using 'FormData'
    const form = new FormData(event.target);
    const data = {
      Location: form.get('locationInput'),
      MinCustomers: form.get('minCustomersInput'),
      MaxCustomers: form.get('maxCustomersInput'),
      AvgCookies: form.get('avgCookiesInput'),
    };
    setJsonstr(data);
  }

  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>


      <div>
        <header className='flex items-center justify-between p-4 bg-gray-500 text-gray-50'>
          <h1 className='text-4xl text-black'>Cookie Stand Admin</h1>
        </header>



        <main>
          <Form handler={submitHandler} />
          <Placeholder jsonstr={jsonstr} />
        </main>



        <footer className="p-4 mt-8 bg-gray-500 text-gray-50">
          &copy; 2023
        </footer>
      </div>

    </>
  )
}

function Form(props) {
  return (
    <form className="flex flex-col text-center p-4 m-48" onSubmit={props.handler}>
      <div className='m-10'>
        <div>
          <p className='flex flex-col text-center'>
            Create Cookie Stand
          </p>
        </div>

        <div className='flex flex-row text-center '>
          <label className='pr-2' >Location </label>
          <input className="flex-auto pl-1 m-2" name="locationInput" ></input>
        </div>

        <div className='flex flex-row text-center justify-between'>
          <div>
            <label className='text-center'>Minimum Customers </label>
            <p>per Hour</p>
            <input name="minCustomersInput"></input>
          </div>

          <div>
            <label className='text-center'>Maximum Customers</label>
            <p>per Hour</p>
            <input name="maxCustomersInput"></input>
          </div>

          <div>
            <label className='text-center'>Average Cookies per </label>
            <p>Sales</p>
            <input name="avgCookiesInput" ></input>
          </div>

          <button className="px-4 py-1 bg-gray-500 text-gray-50 " >Create</button>
        </div>
      </div>
    </form>
  )
}

function Placeholder(props) {
  return (
    <div className="text-center">
      <pre>{JSON.stringify(props.jsonstr, null, 2)}</pre>
    </div>
  )
}