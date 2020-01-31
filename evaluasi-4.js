var jualMobil = {
    nama: 'tompel',
    merek: 'avanza',
    tahun: '2017',

    iklan:function(){
        document.write(`BU, saya ${this.nama}, jual mobil ${this.merek}, tahun ${this.tahun}, bekas`)
    }
}

jualMobil.iklan()