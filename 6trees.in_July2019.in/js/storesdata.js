$(document).ready(function() {
    $('#tblstores').DataTable( {
        data: storesDataSet,
        pageLength: 6,
        lengthChange: false,
        columns: [
            { title: "Location" },
            { title: "Address" },
            { title: "Contact person" },
            { title: "Contact #" },

        ],

        columnDefs: [
            {
                targets: [ 2 ],
                visible: false,
                searchable: false
            },
            {
                targets: [ 3 ],
                searchable: false
            },
            {
                targets: [ 4 ],
                visible: false,
                searchable: false

            },
          
        ]

    } );
} );

