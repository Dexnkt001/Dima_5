export const templete = (n, result) =>{
  let table = document.createElement('table');
  console.log(result);
  for (let i = 0; i < n; i++){
let item = result.rows.item(i),
row = document.createElement('tr');
table.append(row);
for (let key in item){
  let col = document.createElement('td');
  col.innerHTML = result[key];
  row.append(col);
}
  }
}
