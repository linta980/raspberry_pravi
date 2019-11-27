

let rec = "kita"
let nova_rec = []

//Palindrom
function obrni(item) {

    let obrnuti = []
    for (let i = item.length - 1; i >= 0; i--) {
        obrnuti.push(item[i].toLowerCase())
    }
    for (let y = 0; y < obrnuti.length; i++) {
        if (obrnuti[y] == item[y].toLowerCase()) {
            // console.log(obrnuti[y].toLowerCase())
            return true;
        }

        else {
            return false;
        }

    }

}


console.log(obrni("ana voli milovana") ? true : false);