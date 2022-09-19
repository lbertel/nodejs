// setInterval( function (){
//     console.log('Hello Word');
// }, 1000);

const getUserById = (id, callback) => {
    const user = {
        id,
        name: 'Luis'
    };

    setTimeout(() => {
        callback(user)
    }, 1500);
};

getUserById(10, (user) => {
    console.log(user);
});