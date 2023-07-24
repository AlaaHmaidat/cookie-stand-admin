import { hours } from '../../data.js'
import { salesObject } from '../../sales.js'

export default function ReportTable(props) {
    return (
        <div className="text-center">
            <table className="w-1/2 mx-auto my-8 text-2xl text-center">

                <thead>
                    <tr>
                        <th className="border border-black">Location</th>
                        {hours.map(hour => (
                            <th className="border border-black" key={hour}>{hour}</th>
                        ))}
                        <th className="border border-black">Totals</th>
                    </tr>

                </thead>

                <tbody>
                    {props.jsonstr.map(data => (
                        <tr key={data.id}>
                            <td className="border border-black">{data.Location}</td>
                            {salesObject[data.Location].map(saleshour => (
                                <td className="border border-black" key={saleshour}>{saleshour}</td>
                            ))}
                            <td className="border border-black">
                                {salesObject[data.Location].reduce(
                                    (acc, saleshour) => acc + saleshour,
                                    0
                                )}
                            </td>

                        </tr>
                    ))}

                    <tr>
                        <th className="border border-black">
                            Totals
                        </th>
                        <th className="border border-black">
                            
                        </th>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}