console.log('Client side javascript file is loaded!')
const taskForm = document.querySelector('form')
finalData = []
showData = document.querySelector('#showData')

async function getData(url = '') {
    const response = await fetch(url, {
        method: 'GET',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',

    });
    return response.json();
}


taskForm.addEventListener('click', (e) => {
    e.preventDefault()
    getData('/getTask')
        .then(data => {
            var el = document.querySelector('button');
            el.remove();
            finalData = data
            tableBody = CreateTableFromJSON(finalData)
            console.log(finalData)
            showData.innerHTML = tableBody

        });

})
function delby_id(clicked_id) {
    buttonid = clicked_id
    deleteData = document.getElementById(buttonid)
    fetch('/deleteTaskById/' + buttonid, {
        method: 'DELETE',
    }).then(res => console.log(res))
        .then(getData('/getTask')
            .then(data => {
                finalData = data
                tableBody = CreateTableFromJSON(finalData)
                showData.innerHTML = tableBody

            }))

}
function updateBy_id(clicked_id) {
    console.log("updateDate", clicked_id)
    buttonid = clicked_id
    updateData = document.getElementById(buttonid)
    console.log("updateDate", updateData)
    location.href = "http://localhost:3000/Update/" + clicked_id;
   
}

function CreateTableFromJSON(finalData) {

    var tableBody = '<table width="100%" cellpadding="3" align="center" border="1"><tr><th>TASK NAME</th><th>START DATE</th><th>END DATE</th><th>STATUS</th><th>UPDATE</th><th>DELETE</th></tr>';
    finalData.forEach(function (d) {
        id = d._id
        tableBody += '<tr><td>' + d.task + '</td><td>'
            + d.startDate + '</td><td>'
            + d.endDate + '</td><td>'
            + d.completed
            + '</td><td><button type="submit" value="update" id =' + id + ' onClick="updateBy_id(this.id)">Update</button></td><td><button  type="submit" value="delete" id =' + id + ' onClick="delby_id(this.id)">delete</button></td></tr>';

    });
    tableBody += '<table>';
    return tableBody

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.

    // var divContainer = document.getElementById("showData");
    // divContainer.innerHTML = tableBody;
}



