const loginName = prompt('Please enter your login');

if (loginName === 'User') {
    var password = prompt('Please enter your password');
    
    if (password === 'SuperUser') {
        alert(new Date().getHours() < 20 ? 'Good day!' : 'Good evening!');
    } else if (password === '' || password === null) {
        alert('Canceled');
    } else {
        alert('Wrong password');
    }
    
} else if (loginName === null || loginName === '') {
    alert('Canceled');
} else if (loginName.length < 4) {
    alert('I don’t know any users having name length less than 4 symbols');
} else {
    alert('I don’t know you');
}