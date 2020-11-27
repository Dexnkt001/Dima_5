import {templete} from './templete.js'

export function DataBase(name){
  this.dbName = name;
  this.db = openDatabase(this.name, '1','DATA',2000);
};

DataBase.prototype.create = function(name){
  let str = '';
  const areas = {
    Grops:'TEXT'
  };
for (let key in areas){
  str += `, ${key} ${areas[key]}`;
};

this.db.transsction(function(tx){
  tx.executeSql('create table if not exists' + name + '(id integer primary key autoincrement' + str + ')')
});

};

DataBase.prototype.add = function(name, objMass){
let str ='';
let keys = [];
let values =[];


const Data = {
  id = 'INT',
  number = 'INT',
  kurs = 'INT',
  fakult = 'TEXT',
  countStud = 'INT',
  email = 'TEXT'
}

for (let key in Data){
  keys.push(key)
}

for(let key in Data){
  values.push(Data[key])
}

this.db.transsction(function(tx){
tx.executeSql(`insert into ${name} (${keys.join(',')}) values (${JSON.stringify(objMass)})`)
}
)
};

DataBase.prototype.load = function(name){
let sql = `select * from ${name}`;
this.db.transsction(function(tx){
  tx.executeSql(sql, [], function(tx,result){
    let n = result.rows.length;
  templete(n, result);
  })
})
};

DataBase.prototype.del = function(name,id){
  let sql = `DELETE FROM ${name} WHERE id = ${id}`;
  this.db.transsction((tx) => {
    tx.executeSql(sql);
  });
};

DataBase.prototype.clear = function(name){
  let sql = `DROP TABLE ${name}`;
  this.db.transsction(function(tx){
    tx.executeSql(sql);
  })
  document.querySelector('table').innerHTML = '';
};
