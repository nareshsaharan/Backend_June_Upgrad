

async function showData() {

    const res = await fetch("http://localhost:4000/");
    const jsonRes = await res.json();

    console.log(jsonRes);
    showDataHelper(jsonRes);
}

async function postData() {

    let data = {
        x : 10,
        y : 20
    }
    const res = await fetch("http://localhost:4000/", {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json'
        }
    });

    resJson = await res.json();
    console.log(resJson);
}


function showDataHelper(dataArr) {
    let content = '<ol>';

    for(let i = 0; i < dataArr.length; i++) {
        content += `<li> Name: ${dataArr[i].name} 
                           Lang: ${dataArr[i].lang}
                    </li>`
        
    }
    content += '</ol>';
    document.getElementById('mainData').innerHTML = content;
}