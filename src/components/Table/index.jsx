import React from 'react'

export const Table = ({ data }) => {

    const keys = Object.keys(data[0])
    const categoryStyle = (key) => key === 'category' && 'line-clamp-1 w-28'

    return (
        <table className='w-11/12 mx-auto'>
            <thead className='bg-gray-400 text-sm'>
                <tr>
                    <th className='w-10 '>#</th>
                    {
                        keys.map(key => key != 'id' &&
                            (<th key={key}>{key.toUpperCase()}</th>)
                        )
                    }
                </tr>
            </thead>
            <tbody>
                {
                    data.map((value, i) =>
                        <tr key={i} className={`text-center cursor-pointer hover:bg-sky-950 hover:bg-opacity-35 text-sky-50 ${i % 2 !== 0 && 'bg-gray-500 bg-opacity-35'}`}>
                            {
                                keys.map((key, i) =>
                                (<td key={i} className={`my-2 ${categoryStyle(key)}`}>
                                    {value[key]}
                                </td>)
                                )
                            }
                        </tr>
                    )
                }
            </tbody>
            <tfoot>

            </tfoot>
        </table>
    )
}
