// Not in use

const got = require('got');
const url = "https://api.openweathermap.org/data/2.5/onecall?lat=-33.865143&lon=151.209900&exclude=hourly, daily&appid=da3ff6f05d2bf9a449c21b78ebe95b5f";

(async () => {
    try {
        const response = await got(url);
        const obj_res = JSON.parse(response.body);
        exports.data = obj_res;
        // console.log(json_res);
        //=> '<!doctype html> ...'
    } catch (error) {
        console.log(error.response.body);
        //=> 'Internal server error ...'
    }
})();