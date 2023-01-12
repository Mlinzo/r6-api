const R6 = require('../api/index.js')

let platform = 'pc';
let name = 'NotEdy.';

async function main() {
    const general = await R6.general(platform, name);
    const stats = {...general};
    console.log(general)
}
main();