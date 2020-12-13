import {templete} from './templete.js'

export function DataBase(name){
  this.dbName = name;
  this.ucDbName = this.dbName = this.dbName[0].toUpperCase()+this.dbName.substring(1);
  this.db = openDatabase(this.dbName, '1.0',this.ucDbName, 2000);
};

DataBase.prototype.create = function(name){
  let str = '';
  const areas = {
    id : 'INT',
    number : 'INT',
    kurs : 'INT',
    fakult : 'TEXT',
    countStud : 'INT',
    email : 'TEXT'
  };
for (let key in areas){
  str += `, ${key} ${areas[key]}`;
};

console.log(str)

this.db.transaction(function(tx){
  tx.executeSql('create table if not exists' + name + '(id integer primary key autoincrement' + str + ')')
});

};

DataBase.prototype.add = function(name, obj){
let keys = [],
values =[],
objmass = [obj.id, obj.number, obj.kurs, obj.fakult, obj,countStud, obj.email]


const Data = {
  id : 'INT',
  number : 'INT',
  kurs : 'INT',
  fakult : 'TEXT',
  countStud : 'INT',
  email : 'TEXT'
}

for (let key in Data){
  keys.push(key)
}

for(let key in Data){
  values.push(Data[key])
}

console.log(JSON.stringify(objmass))

this.db.transsction(function(tx){
tx.executeSql(`insert into ${name} (${keys.join(',')}) values (${JSON.stringify(objmass)})`)
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
