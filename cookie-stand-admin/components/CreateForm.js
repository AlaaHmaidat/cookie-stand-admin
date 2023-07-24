export default function CreateForm(props) {
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