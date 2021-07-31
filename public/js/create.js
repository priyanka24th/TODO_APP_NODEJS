console.log('Client side javascript file is loaded!')

const taskForm = document.querySelector('form')
const formData = document.querySelectorAll('input')
const taskStatus = document.querySelectorAll('select')
const data = {}
console.log(taskForm)


taskForm.addEventListener('submit', (e) => {
    e.preventDefault()
    for (i = 0; i < formData.length; i++) {
        if (i == 0) {
            data[taskStatus[i]['name']] = taskStatus[i]['value']
        }

        data[formData[i]['name']] = formData[i]['value']
    }
    async function postData(url = '', data = {}) {
        const response = await fetch(url, {
            method: 'POST',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        });
        return response.json();
    }
    postData('/addTask', data)
        .then(data => {
            console.log(data);
        }).then(taskForm.reset())

})

// taskForm.addEventListener('submit', (e) => {
//     e.preventDefault()
  
//     async function getData(url = '') {
//         const response = await fetch(url, {
//             method: 'GET',
//             cache: 'no-cache',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             redirect: 'follow',
//             referrerPolicy: 'no-referrer',
           
//         });
//         return response.json();
//     }
//     getData('/getTask')
//         .then(data => {
//             console.log(data);
//         });


// })
