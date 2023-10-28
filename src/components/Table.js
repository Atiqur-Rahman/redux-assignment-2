import React from 'react';
import { useSelector } from 'react-redux';
import TableHead from './TableHead';
import TableRow from './TableRow';

const Table = () => {
    const data = useSelector((state) => state.data);
    return (
        <>
            {data.length && (
                <div class="table-container">
                    <table class="booking-table">
                        <TableHead />
                        <tbody class="divide-y divide-gray-300/20" id="lws-previewBooked">
                            {data.map((data, i) => (
                                <TableRow key={i} data={data}></TableRow>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );
};

export default Table;
