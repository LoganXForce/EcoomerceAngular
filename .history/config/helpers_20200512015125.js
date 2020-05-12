const Mysqli = require ('mysqli');

let conn = new Mysqli({

        host: 'localhost',
        post: 3306,
        user: 'root',
        pass: '',
        db: 'mega_shop'
});