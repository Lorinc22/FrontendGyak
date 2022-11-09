document.addEventListener('DOMContentLoaded', () =>{

    document.getElementById('osszes').addEventListener('click', async ()=>{
      let response = await fetch('/users.json');
      let data = await response.json();
      data.users.map( user => user.lastName.toUpperCase()+ ','+ user.)
        users.sort((a,b) => a.localeCompare(b));
        let userLista = document.getElementById('userlista');
        for (let u of users){
            let li = document.createElement('li');
            li.textContent=u;
            userLista.appendChild(li);

        }
    });
    document.getElementById('elerhetosegek').addEventListener('click',async ()=>{
        let response = await fetch('/users.json');
        let data = await response.json();
        data.users.sort((a,b)=>{
            if (a.username < b.username){
                return -1;
            }else if(a.username > b.username) {
                return 1;
            }else{
                return 0;
            }
        });
        let tablazat = document.getElementById('elerhetosegektablazat');
        tablazat.textContent = '';
        for (let u of data.users){
                let tr = document.createElement('tr');

                let td = document.createElement('td');
                td.textContent = u.username;
                tr.appendChild(td);

                td = document.createElement(td);
                td.textContent = u.email;
                tr.appendChild(td);

                td = document.createElement(td);
                td.textContent = u.phone;
                tr.appendChild(td);

                tablazat.appendChild(tr);
        }
    });
    document.getElementById('sulyos').addEventListener('click', async ()=>{
        let response = await fetch('/users.json');
        let data = await response.json();

        let magassag = parseFloat(document.getElementById('magassag').value);
        let magasak = data.users.filter(user => user.height >= magassag);
        let osszsuly =0;
        for ( let u of magasak){
            osszsuly += u.weight;
        }
        document.getElementById('osszsuly').textContent = 'Összsuly:' + osszsuly + 'kg';
    });
    document.getElementById('barnaszemuek').addEventListener('click', async ()=>{
        let response = await fetch('/users.json');
        let data = await response.json();

        let barna = data.users.filter(user =>user.eyeColor =='Brown');
        let barnaDb = barna.length;
        document.getElementById('barnaszemdb').textContent = barnaDb + ' barna szem user';
    });
});