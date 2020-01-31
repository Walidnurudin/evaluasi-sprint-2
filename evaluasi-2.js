function fpb(a, b){
    return (b == 0) ? a : (fpb(b, a % b));
}

function kpk(c, d){
    return (c / fpb(c, d)) * d;
}

document.write(`120  -  240<br> Nilai fPB adalah ${fpb(120, 240)}.<br>Nilai KPK adalah ${kpk(120, 240)}.`);