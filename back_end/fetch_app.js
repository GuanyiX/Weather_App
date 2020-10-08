const fetch = require("node-fetch");
const url = "https://api.openweathermap.org/data/2.5/onecall?lat=-33.865143&lon=151.209900&exclude=hourly, daily&appid=da3ff6f05d2bf9a449c21b78ebe95b5f";

setInterval(() => {
    fetch(url)
        .then(
            (res) => res.json()
        ).then(
            (data) => {
                exports.data = data;
            }
        ).catch(
            (err) => console.log(err)
        )
}, 1000)








