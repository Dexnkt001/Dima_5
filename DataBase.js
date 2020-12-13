import {templete} from './templete.js'

export class DataBase{
  constructor(name){
  this.dbName = name;
  this.ucDbName = this.dbName = this.dbName[0].toUpperCase()+this.dbName.substring(1);
  this.db = openDatabase(this.dbName, '1.0',this.ucDbName, 2000);
  }

create = function(name){
//   let str = '';
//   const areas = {
//     id : 'INT',
//     number : 'INT',
//     kurs : 'INT',
//     fakult : 'TEXT',
//     countStud : 'INT',
//     email : 'TEXT'
//   };
// for (let key in areas){
//   str += `, ${key} ${areas[key]}`;
// };

this.db.transaction(function(tx){
  tx.executeSql(`CREATE TABLE ${name} (id REAL UNIQUE, number TEXT, kurs TEXT, fakult TEXT, countStud TEXT UNIQUE, email TEXT)`, [])
});

};

add = function(name, obj){
let keys = [],
values =[],
objmass = [obj.id, obj.number, obj.kurs, obj.fakult, obj.countStud, obj.email]

console.log(JSON.stringify(objmass))

this.db.transaction(function(tx){
  console.log('add_info')
tx.executeSql(`insert into Groups (id, number, kurs, fakult, countStud, email) values (${JSON.stringify(objmass)})`,[])
}
)
};

load = function(name){
var sql = `select * from ${name}`;
this.db.transaction(function(tx){
  tx.executeSql(sql, [], function(tx,result){
    let n = result.rows.length;
    console.log(n);
    templete(n, result);
  });
});
};

del = function(name,id){
  let sql = `DELETE FROM ${name} WHERE id = ${id}`;
  this.db.transaction((tx) => {
    tx.executeSql(sql);
  });
};

clear = function(name){
  let sql = `DROP TABLE ${name}`;
  this.db.transaction(function(tx){
    tx.executeSql(sql);
  })
  document.querySelector('table').innerHTML = '';
};
}
