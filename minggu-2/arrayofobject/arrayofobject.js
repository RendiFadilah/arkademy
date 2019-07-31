const siswa = [
    {
        "nama":"Rendi Fadilah",
        "kelas":"X-RPL 1"
    },
    {
        "nama":"Rizal N.H",
        "kelas":"X-RPL 1"
    },
    {
        "nama":"Achmad Zulfikar",
        "kelas":"X-RPL 1"
    },
    {
        "nama":"Ananda Zidane",
        "kelas":"X-RPL 1"
    },
    {
        "nama":"Hilmi",
        "kelas":"X-RPL 1"
    },
    {
        "nama":"Yusril",
        "kelas":"X-RPL 1"
    },
    {
        "nama":"Nanda Riansyah",
        "kelas":"X-RPL 1"
    },
    {
        "nama":"Rino Satya P",
        "kelas":"X-RPL 1"
    },
    {
        "nama":"Wisman Ndraha",
        "kelas":"X-RPL 1"
    },
    {
        "nama":"Jaki Andhika",
        "kelas":"X-RPL 1"
    },
    {
        "nama":"Hilmi",
        "kelas":"X-RPL 1"
    },
    {
        "nama":"Akmal Widad",
        "kelas":"X-RPL 1"
    },
    {
        "nama":"M Rifky",
        "kelas":"X-RPL 1"
    },
    {
        "nama":"Azis",
        "kelas":"X-RPL 1"
    },
];

let x;

for(x in siswa) {
    let namaSiswa = siswa[x].nama
    let kelasSiswa =siswa[x].kelas
    let divider = "<div><span class='nama-siswa'>"+namaSiswa+"</span><span class='kelas-siswa'>"+kelasSiswa+"</div>";
    document.getElementById('siswa-rpl1').innerHTML += divider
}