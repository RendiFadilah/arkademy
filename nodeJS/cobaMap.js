const data = [
    'Data1',
    'Data2',
    'Data3',
    'Data4',
    'Data5'
];

const data2 = [
    {id: 1, name: "Data1"},
    {id: 2, name: "Data2"},
    {id: 3, name: "Data3"}
]

data2.map((response) =>{
    console.log(response.name[1]);
})