import React from 'react';

export const Table = ({ data, formatDate }) => {
    const keys = Object.keys(data[0]);
    const categoryStyle = (key) => key === 'category' && 'line-clamp-1 w-28';

    return (
        <div className='container max-h-72  relative overflow-y-auto px-4 mt-4'>
            <table className='w-full mx-auto text-sm'>
                <thead>
                    <tr className='bg-gray-800 text-white text-sm sticky top-0 left-0 w-4/5'>
                        <th className='w-8 py-2'>#</th>
                        {keys.map((key) => (
                            key !== 'id' && key !== 'comment' && (
                                <th key={key}>{key.toUpperCase()}</th>
                            )
                        ))}
                    </tr>
                </thead>
                <tbody className='max-h-72'>
                    {data.map((value, i) => (
                        <tr
                            key={i}
                            className={`text-center cursor-pointer hover:bg-sky-950 hover:bg-opacity-35 text-sky-50 ${i % 2 !== 0 && 'bg-gray-500 bg-opacity-35'
                                }`}
                        >
                            <td className='py-2'>{i + 1}</td>
                            {keys.map((key, i) => (
                                key !== 'id' && key !== 'comment' && (
                                    <td
                                        key={i}
                                        className={`py-2 ${categoryStyle(key)}`}
                                    >
                                        {key === 'fecha'
                                            ? formatDate(value[key], 'es')
                                            : value[key]}
                                    </td>
                                )
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
