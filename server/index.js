import { createConnection } from "mysql2";
import { log } from "node:console";

const db = createConnection({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "",
  database: "chatapp",
});

db.connect((err) => {
  if (err) {
    log(err);
  } else {
    log("db conncted");
    const sql = "SELECT * FROM users WHERE unique_id = 12142";
    db.query(sql,(err,reusalt)=>{
        if (err) {
            log(err);
        }else{
            if (reusalt.length > 0 ) {
                log(reusalt);
            }else{
                log('not data');
            }
        }
    })
  }
});
