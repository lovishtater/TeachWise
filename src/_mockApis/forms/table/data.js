export const basicData = [
    {
        id: 1,
        name: 'Frozen yoghurt',
        calories: '159',
        fat: '6.0',
        carbs: '24',
        protein: '4.0'
    },
    {
        id: 2,
        name: 'Ice cream sandwich',
        calories: '237',
        fat: '9.0',
        carbs: '37',
        protein: '4.3'
    },
    {
        id: 3,
        name: 'Eclair',
        calories: '262',
        fat: '305',
        carbs: '3.7',
        protein: '6.0'
    },
    {
        id: 4,
        name: 'Cupcake',
        calories: '67',
        fat: '356',
        carbs: '3.7',
        protein: '4.3'
    },
    {
        id: 5,
        name: 'Gingerbread',
        calories: '356',
        fat: '16.0',
        carbs: '49',
        protein: '3.9'
    }
];

export const columnDataGrid = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: true
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
        editable: true
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) => `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''}`
    }
];

export const rowDataGrid = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 }
];

export const headCells = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Dessert (100g serving)'
    },
    {
        id: 'calories',
        numeric: true,
        disablePadding: false,
        label: 'Calories'
    },
    {
        id: 'fat',
        numeric: true,
        disablePadding: false,
        label: 'Fat (g)'
    },
    {
        id: 'carbs',
        numeric: true,
        disablePadding: false,
        label: 'Carbs (g)'
    },
    {
        id: 'protein',
        numeric: true,
        disablePadding: false,
        label: 'Protein (g)'
    }
];

export const rowEnhanced = [
    {
        id: 1,
        name: 'Frozen yoghurt',
        calories: '159',
        fat: '6.0',
        carbs: '24',
        protein: '4.0'
    },
    {
        id: 2,
        name: 'Ice cream sandwich',
        calories: '237',
        fat: '9.0',
        carbs: '37',
        protein: '4.3'
    },
    {
        id: 3,
        name: 'Eclair',
        calories: '262',
        fat: '305',
        carbs: '3.7',
        protein: '6.0'
    },
    {
        id: 4,
        name: 'Cupcake',
        calories: '67',
        fat: '356',
        carbs: '3.7',
        protein: '4.3'
    },
    {
        id: 5,
        name: 'Gingerbread',
        calories: '356',
        fat: '16.0',
        carbs: '49',
        protein: '3.9'
    },
    {
        id: 6,
        name: 'Frozen yoghurt',
        calories: '159',
        fat: '6.0',
        carbs: '24',
        protein: '4.0'
    },
    {
        id: 7,
        name: 'Jelly Bean',
        calories: '237',
        fat: '9.0',
        carbs: '37',
        protein: '4.3'
    },
    {
        id: 8,
        name: 'Eclair',
        calories: '262',
        fat: '305',
        carbs: '3.7',
        protein: '6.0'
    },
    {
        id: 9,
        name: 'Honeycomb',
        calories: '67',
        fat: '356',
        carbs: '3.7',
        protein: '4.3'
    },
    {
        id: 10,
        name: 'KitKat',
        calories: '356',
        fat: '16.0',
        carbs: '49',
        protein: '3.9'
    },
    {
        id: 11,
        name: 'Lollipop',
        calories: '159',
        fat: '6.0',
        carbs: '24',
        protein: '4.0'
    },
    {
        id: 12,
        name: 'Ice cream sandwich',
        calories: '237',
        fat: '9.0',
        carbs: '37',
        protein: '4.3'
    },
    {
        id: 13,
        name: 'Marshmallow',
        calories: '262',
        fat: '305',
        carbs: '3.7',
        protein: '6.0'
    },
    {
        id: 14,
        name: 'Nougat',
        calories: '360',
        fat: '19',
        carbs: '37',
        protein: '4.3'
    },
    {
        id: 15,
        name: 'Oreo',
        calories: '437',
        fat: '18.0',
        carbs: '63',
        protein: '4'
    }
];

export const columnsFixed = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    {
        id: 'population',
        label: 'Population',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US')
    },
    {
        id: 'size',
        label: 'Size\u00a0(km\u00b2)',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US')
    }
];

export const dataFixed = [
    {
        id: 1,
        name: 'India',
        code: 'IN',
        population: '1324171354',
        size: '3287263'
    },
    {
        id: 2,
        name: 'China',
        code: 'CN',
        population: '1403500365',
        size: '3287263'
    },
    {
        id: 3,
        name: 'Italy',
        code: 'IT',
        population: '60483973',
        size: '301340'
    },
    {
        id: 4,
        name: 'United States',
        code: 'US',
        population: '327167434',
        size: '9833520'
    },
    {
        id: 5,
        name: 'Canada',
        code: 'CA',
        population: '37602103',
        size: '9984670'
    },
    {
        id: 5,
        name: 'Australia',
        code: 'AU',
        population: '25475400',
        size: '7692024'
    },
    {
        id: 6,
        name: 'Germany',
        code: 'DE',
        population: '83019200',
        size: '357578'
    },
    {
        id: 7,
        name: 'Ireland',
        code: 'IE',
        population: '4857000',
        size: '70273'
    },
    {
        id: 8,
        name: 'Mexico',
        code: 'MX',
        population: '126577691',
        size: '1972550'
    },
    {
        id: 9,
        name: 'Japan',
        code: 'JP',
        population: '126317000',
        size: '377973'
    },
    {
        id: 10,
        name: 'France',
        code: 'FR',
        population: '67022000',
        size: '640679'
    },
    { id: 11, name: 'United Kingdom', code: 'GB', population: '67545757', size: '242495' },
    { id: 12, name: 'Russia', code: 'RU', population: '146793744', size: '17098246' },
    { id: 13, name: 'Nigeria', code: 'NG', population: '200962417', size: '923768' },
    { id: 114, name: 'Brazil', code: 'BR', population: '210147125', size: '8515767' }
];

export const dataCollapse = [
    {
        id: 1,
        name: 'Frozen yoghurt',
        calories: '159',
        fat: '6.0',
        carbs: '24',
        protein: '4.0',
        price: '3.99',
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1
            }
        ]
    },
    {
        id: 2,
        name: 'Ice cream sandwich',
        calories: '237',
        fat: '9.0',
        carbs: '37',
        protein: '4.3',
        price: '5.99',
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1
            }
        ]
    },
    {
        id: 3,
        name: 'Eclair',
        calories: '262',
        fat: '305',
        carbs: '3.7',
        protein: '6.0',
        price: '3.59',
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1
            }
        ]
    },
    {
        id: 4,
        name: 'Cupcake',
        calories: '67',
        fat: '356',
        carbs: '3.7',
        protein: '4.3',
        price: '2.99',

        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1
            }
        ]
    },
    {
        id: 5,
        name: 'Gingerbread',
        calories: '356',
        fat: '16.0',
        carbs: '49',
        protein: '3.9',
        price: '8',
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1
            }
        ]
    }
];
