let h = document.querySelector('.hour'),
    m = document.querySelector('.min'),
    s = document.querySelector('.sec');

    setInterval(clock, 1000);

    function clock() {
        let d = new Date();
        let hh = d.getHours() * 30;
        let mm = d.getMinutes() * 6;
        let ss = d.getSeconds() * 6;
        console.log(hh, mm, ss);
        h.style.transform = `rotate(${hh}deg)`;
        m.style.transform = `rotate(${mm}deg)`;
        s.style.transform = `rotate(${ss}deg)`;
    }
