//promises fundaments
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

    return new Promise((resolve, reject) => {
        const employee = employees.find(e => e.id === id)?.name;

        (employee)
            ? resolve(employee)
            : reject(`Not found employee with id : ${id}`);
    });
}

const getSalary = (id, callback) => {
    return new Promise((resolve, reject) => {
        const salary = salaries.find(s => s.id === id)?.salary;

        (salary)
            ? resolve(salary)
            : reject(`Not found salary with id : ${id}`);
    });
}

const id = 3;
// getEmployee(id)
//     .then(employee => console.log(employee))
//     .catch(err => console.log(err));
//
// getSalary(id)
//     .then( salary => console.log(salary) )
//     .catch( err => console.log(err));

// getEmployee(id)
//     .then(employee => {
//
//         getSalary(id)
//             .then(salary => console.log('The employee:', employee, ' with salary: ', salary))
//             .catch(err => console.log(err));
//
//     })
//     .catch(err => console.log(err));

let name;

getEmployee(id)
    .then(employee => {
        name = employee;
        return getSalary(id);
    }).then(salary => console.log('The employee:', name, ' has ', salary))
    .catch(err => console.log(err));