const users = [];

function getInfoUser( username, age, email, password) {

    if(username!='' &&  age!='' && email!='' && password!=''){
        document.getElementById('x').innerHTML = 'user saved';
        const user = {username, age, email, password};
        users.push(user);
        console.log(user, users)
    }
    else{
        document.getElementById('x').innerHTML = 'Please try again';
        console.log('Please try again')
    }
}



