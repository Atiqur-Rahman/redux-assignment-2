import React from 'react';

const TableHead = () => {
    return (
        <thead class="bg-gray-100/50">
            <tr class="text-black text-left">
                <th>Destination From</th>
                <th>Destination To</th>
                <th class="text-center">Journey Date</th>
                <th class="text-center">Guests</th>
                <th class="text-center">Class</th>
                <th class="text-center">Delete</th>
            </tr>
        </thead>
    );
};

export default TableHead;
