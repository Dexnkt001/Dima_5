import {DataBase} from './DataBase.js'


let arrGroup = [],
count = 0,
group;
const arrInputs = document.querySelectorAll('input'),
form = document.querySelector('form');
var data_base;


class Group{
  constructor(id, args){
    this.id = id;
    this.number = args[0];
    this.kurs = args[1];
    this.fakult = args[2];
    this.countStud = args[3];
    this.email = args[4];
  }

}

const Add = (id, ...args) =>{
  return new Group(id, ...args);
}

const Delete = (id) =>{
  arrGroup.splice(id,1);
}

function App(baseName, tableName){
  this.db = new DataBase(baseName);
  this.tbl = tableName;
}
window.onload = function(){
  data_base = new App('DataGroups', 'Groups');
  data_base.db.create(data_base.tbl);
  console.log('lololo', data_base);
  console.log(data_base.db.db)
}

const UseAdd = () => {
group = Add(count, Array.prototype.map.call(arrInputs, (element) => element.value))
console.log(group)
console.log(data_base)
data_base.db.add(data_base.tbl, group)
  if(count === 0){
  const list = document.createElement('ul');
document.querySelector('.menu').insertAdjacentElement("afterEnd", list);
const li = document.createElement('li');
li.innerHTML = count+1
document.querySelector('ul').append(li)
  }
  else {
    const li = document.createElement('li');
    li.innerHTML = count+1
document.querySelector('ul').append(li)
  }
  count++;
}

let load = function (){console.log('wkegjwe');
data_base.db.load(data_base.tbl);}

  const effect = (e) => {
    Array.prototype.forEach.call(arrInputs, (element)=>{element.classList.remove('active_input');})
    if(Array.prototype.includes.call(arrInputs, e.target)){
    e.target.classList.add('active_input');
  console.log(e.target)
    }
  }

document.getElementById('button_1').addEventListener('click', UseAdd);
document.querySelector('.menu').addEventListener('click', () => {
  document.querySelector('span').classList.toggle('activeS')
})
document.getElementById('button_2').addEventListener('click',()=>{form.reset()});
document.getElementById('button_3').addEventListener('click', Delete);
document.querySelector('.inputs').addEventListener('click', effect);
document.getElementById('button_3').addEventListener('click', Delete);
document.getElementById('button_4').addEventListener('click', load);

















// set AddInformation(args){
// [ this.number, this.kurs, this.fakult, this.countStud, this.email, this.id] = args;
// }

// get GetInformation(){
//   return [this.number, this.kurs, this.fakult, this.countStud, this.email, this.id]
// }
