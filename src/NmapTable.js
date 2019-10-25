
import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";

const NmapTable = (props) => {
    const columns = [{
        Header: 'IP Address',
        accessor: 'ipAddress'
    }, {
        Header: 'Port',
        accessor: 'port'
    },
    {
        Header: 'Status',
        accessor: 'status'
    },
    {
        Header: 'Hostname',
        accessor: 'hostname'
    },
    {
        Header: 'Start Timestamp',
        accessor: 'startTs'
    },

    {
        Header: 'End Timestamp',
        accessor: 'endTs'
    }
    ]

    return (
        <div>
            <ReactTable
                data={props.data}
                columns={columns}
                defaultPageSize = {25}
                pageSizeOptions = {[3, 6]}
            />
        </div>
    )
}

export default NmapTable