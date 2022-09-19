const employees = [
    {
        id: 1,
        name: 'Fernando'
    },
    {
        id: 2,
        name: 'Linda'
    },
    {
        id: 3,
        name: 'Karen'
    }
];

const salaries = [
    {
        id: 1,
        salary: 1000
    },
    {
        id: 2,
        salary: 1500
    }
];

const getEmployee = (id, callback) => {

    const employee = employees.find( (e) => e.id === id);
    if(employee){
        callback(null, employee);
    }else{
        callback(`Employee with id ${id} not exist`);
    }
};

getEmployee(1, (err, employee) => {
    if(err){
        console.log('ERROR!!!');
        return console.log(err);
    }

    console.log('Employee exist!!');
    console.log(employee);
});