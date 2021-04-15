const table = document.getElementById('table1')
let colIndex = -1
const tbody= document.getElementById('tbody1')
const tfoot = document.getElementById('tfoot1')

let companies = [
    {
        id: 1,
        name: 'Эко-сити',
        callSchedule: '100%',
        removal: '59%',
        dynamics: '-54%',
        oneDay: 1552,
        twoThreeDays: 2326,
        fourFiveDays: 1600,
        moreThanSixDays: 592,
    },
  {
        id: 2,
        name: 'Экология',
        callSchedule: '90%',
        removal: '69%',
        dynamics: '59%',
        oneDay: 152,
        twoThreeDays: 226,
        fourFiveDays: 100,
        moreThanSixDays: 92,
    },
    { id: 3,
        name: 'Спецавтохозяйство по уборке города Уфа',
        callSchedule: '82%',
        removal: '50%',
        dynamics: '-59%',
        oneDay: 122,
        twoThreeDays: 2385,
        fourFiveDays: 1610,
        moreThanSixDays: 593,
    },
    { id: 4,
        name: 'Дортюлимелиоводострой',
        callSchedule: '65%',
        removal: '59%',
        dynamics: '89%',
        oneDay: 1556,
        twoThreeDays: 2350,
        fourFiveDays: 1605,
        moreThanSixDays: 2592,
    },
    {  id: '',
        name: 'Всего',
        callSchedule: '91%',
        removal: '79%',
        dynamics: '0%',
        oneDay: 5147,
        twoThreeDays: 5350,
        fourFiveDays: 2605,
        moreThanSixDays: 1592,
    },
    
];
for (let company of companies) {

    let tr = document.createElement('tr');
    let td0 = document.createElement('td');
    td0.innerHTML = company.id;
    tr.appendChild(td0);
    
    let td1 = document.createElement('td');
    td1.innerHTML = company.name;
    tr.appendChild(td1);

    let td2 = document.createElement('td');
    td2.innerHTML = company.callSchedule;
    tr.appendChild(td2);

    let td3 = document.createElement('td');
    td3.innerHTML = company.removal;
    tr.appendChild(td3);

    let td4 = document.createElement('td');
    td4.innerHTML = company.dynamics;
    tr.appendChild(td4);

    let td5 = document.createElement('td');
    td5.innerHTML = company.oneDay;
    tr.appendChild(td5);

    let td6 = document.createElement('td');
    td6.innerHTML = company.twoThreeDays;
    tr.appendChild(td6);

    let td7 = document.createElement('td');
    td7.innerHTML = company.fourFiveDays;
    tr.appendChild(td7);

    let td8 = document.createElement('td');
    td8.innerHTML = company.moreThanSixDays;
    tr.appendChild(td8);
    if (company.id !== ''){
    tbody.appendChild(tr)}
    else {
        tfoot.appendChild(tr)
    };
}
//таблица сортируется по клику на название столбца
const sortTable = function(index, type, isSorted){
    const tbody= table.querySelector('tbody')

    const compare = function(rowA, rowB){
        const rowDataA = rowA.cells[index].innerHTML
        const rowDataB = rowB.cells[index].innerHTML

        switch (type) {
            case 'int':
                return rowDataA - rowDataB
                break;
            case 'percent':
                return rowDataA.substring(0, rowDataA.length-1) - rowDataB.substring(0, rowDataB.length-1)
                break;

            case 'text':
                if(rowDataA < rowDataB) return -1
                else if(rowDataA > rowDataB) return 1
                return 0
                break;
        }
    }
    let rows = [].slice.call(tbody.rows)
    rows.sort(compare)
    if(isSorted) rows.reverse()

    table.removeChild(tbody)

    for (let i = 0; i < rows.length; i++){
        tbody.appendChild(rows[i])
    }
    table.appendChild(tbody)
}
table.addEventListener('click', (e)=>{
    const el = e.target
    if(el.nodeName === 'TH') {
    
    const index = el.cellIndex //номер ячейки в строке
        const type = el.getAttribute('data-type')
        sortTable(index, type, colIndex ===index)
        colIndex = (colIndex ===index) ? -1 : index
    }

})


const dates = [
    '12.06.2020',
    '13.06.2020',
    '14.06.2020',
    '15.06.2020',
    '16.06.2020',
    '17.06.2020',
    '18.06.2020'
];
// const DATA_COUNT = 7;
// const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

function randomIntArray() {
    let array = []
    for (let i = 0; i < 7; i++) {
        let rand = Math.random() * (101)
        array.push(Math.floor(rand))
    }
    return array;
}

datas = []

for (let i = 0; i< companies.length - 1; i++){
    let color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
    let data = {
        label : companies[i].name,
        data: randomIntArray(),
        backgroundColor: color,
        borderColor: color,
    }
    datas.push(data)

}



const data = {
     labels: dates,
      datasets: datas,

};
const config = {

    type: 'line',
    data: data,
    options: {
        responsive: true,
        plugins: {
            labels: {
                fontColor: '#fff'
            }
        }
    }

}


grapgh =  document.getElementById('myChart')

let myChart = new Chart(grapgh, config);