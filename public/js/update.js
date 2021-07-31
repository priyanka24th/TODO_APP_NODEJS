console.log('Client side javascript file is loaded!')

const taskForm = document.querySelector('form')
const formData = document.querySelectorAll('input')
const taskStatus = document.querySelectorAll('select')
const data = {}
const id = taskForm.id
console.log(taskForm)
console.log(id)

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
            method: 'PATCH',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        });
        
        return response;
    }
    postData('/updateTask/'+id, data)
        .then(data => {
            console.log(data);
        }).then(taskForm.reset())
    location.href = "http://localhost:3000/View/";

})

