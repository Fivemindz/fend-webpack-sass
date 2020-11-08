function handleSubmit(event) {
    event.preventDefault()

    const url = "http://api.openweathermap.org/data/2.5/weather?zip="
    const key = "&appid=64716188118a12cc44b50c1524afbe76"

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch(url + formText + key)
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        console.log(data)
        document.getElementById('results').innerHTML = data.main['temp']
    })
}

export { handleSubmit }
