const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

//4.1
const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

//4.2
aldeanos[-1]("Cervasio");

//4.3
aldeanos[0] = "Bambina";

//4.4
aldeanos.reverse();

//4.5
const indexNarciso = aldeanos.indexOf("Narciso");
if (indexNarciso !== -1) {
  aldeanos[indexNarciso] = "Canela";
}

//4.6
console.log(aldeanos[aldeanos.length - 1]);
