// Not in use

const got = require('got');

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