const mysql = require('mysql');
const { search } = require('../routes/user');

const pool = mysql.createPool({
    connectionLimit: 100,
    host           :process.env.DB_HOST,
    user          :process.env.DB_USER,
    password           :process.env.DB_PASS,
    database           :process.env.DB_NAME,
});


exports.view = (req, res) => {
      pool.getConnection((err,connection) => {
     // if(err) throw err;
    console.log('connected as ID'+ connection.threadId);
       connection.query('SELECT * FROM users', (err, rows) => {
         connection.release();
            if(!err) {
              res.render('home', { rows });
            } else {
                console.log(err);
            }
            // console.log('data from users table: \n', rows);
         });
    });
}

exports.find = (req, res) =>  {

    pool.getConnection((err,connection) => {
        // if(err) throw err;
       //console.log('connected as ID'+ connection.threadId);

      let searchTerm = req.body.search;
        console.log(searchTerm);
          connection.query('SELECT * FROM users WHERE first_name LIKE ?', ['%'+ searchTerm + '%'], (err, rows) => {
             connection.release();
               if(!err) {
                 res.render('home', { rows });
               } else {
                   console.log(err);
               }
               // console.log('data from users table: \n', rows);
            });
    });

}


exports.create = (req, res) =>  {
 //res.render('add-user');
  const { first_name, last_name, email, phone, status} = req.body;

  pool.getConnection((err,connection) => {
    // if(err) throw err;
   //console.log('connected as ID'+ connection.threadId);
      connection.query('INSERT INTO users SET first_name = ?, last_name= ?, email= ?, phone= ?, status= ?, createdAt= CURDATE()',[first_name, last_name, email, phone, status], (err, rows) => {
         connection.release();
           if(!err) {
             res.render('add-user', { rows });
           } else {
               console.log(err);
           }
           // console.log('data from users table: \n', rows);
        });
});


}



exports.delete = (req, res) =>  {

  pool.getConnection((err,connection) => {
      // if(err) throw err;
     //console.log('connected as ID'+ connection.threadId);
        connection.query('DELETE FROM users WHERE id= ?', [req.params.id], (err, rows) => {
           connection.release();
             if(!err) {
               res.redirect('/');
             } else {
                 console.log(err);
             }
             console.log('data from users table: \n', rows);
          });
  });

}


exports.form = (req, res) =>  {
  res.render('add-user');
 
}



exports.dashboard = (req, res) =>  {
  res.render('dashboard');
 
 }

 exports.inspection = (req, res) =>  {
  res.render('inspection');
 
 }