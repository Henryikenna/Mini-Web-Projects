"use strict";

function updateTime() {
    const clock = document.querySelector('.clock');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    clock.innerText = `${hours} : ${minutes} : ${getSeconds}`
}

async function updateStatus(){
    const healthUrls = [
        "https://httpstat.us/200",
        "https://httpstat.us/200",
        "https://httpstat.us/500",
    ];

    const servers = document.querySelectorAll('.server');

    for(const server of Array.from(servers)){
        const url = healthUrls[
            Math.floor(Math.random() * healthUrls.length)
        ];
        const {status} = await fetch(url);
        if (status === 200){
            server.classList.remove('has-failed');
            server.querySelector('.signal').innerText = 'ONLINE';
        } else{
            server.classList.add('has-failed');
            server.querySelector('.signal').innerText = 'OFFLINE';
        }
    }

    setTimeout(async () => {
        await updateStatus();
    }, 5000,);
}

setInterval(
    updateTime, 900,
);

updateStatus();