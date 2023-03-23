const generatorTypeSelector = document.getElementById("generator-type");
const generatorParamsContainer = document.querySelector(".generator-params");
const generatorResultContainer = document.querySelector(".generator-result");

// Muestra o esconde la sección de parámetros según el tipo de generador seleccionado
generatorTypeSelector.addEventListener("change", (event) => {
  const selectedGenerator = event.target.value;
  const generatorParamsSections = generatorParamsContainer.querySelectorAll(".generator-params-section");
  generatorParamsSections.forEach((section) => {
    section.style.display = "none";
  });
  const selectedGeneratorParams = document.getElementById(`${selectedGenerator}-params`);
  selectedGeneratorParams.style.display = "block";
});

// Agrega un listener para el botón de generar
const generateButton = document.getElementById("generate-button");
generateButton.addEventListener("click", (event) => {
  const selectedGenerator = generatorTypeSelector.value;
  let result;
  switch (selectedGenerator) {
    case "email":
      const emailCount = parseInt(document.getElementById("email-count").value);
      const emailDomain = document.getElementById("email-domain").value;
      result = generateEmails(emailCount, emailDomain);
      break;
    case "name":
      const nameCount = parseInt(document.getElementById("name-count").value);
      result = generarNombre(nameCount);
      break;
    case "string":
      const cant= parseInt(document.getElementById("string-count").value);
      result = generateCadena(cant);
      break;
    case "number":
      const cantidad = parseInt(document.getElementById("number-count").value);
      const max  = parseInt(document.getElementById("number-max").value);
      const min  = parseInt(document.getElementById("number-min").value);
      result = generateNumberList(cantidad, max, min);
      break;
    case "dni":
      const dniCant = parseInt(document.getElementById("dni-count").value);
      result = generateDniList(dniCant);
      break;
    case "username":
      const usernameCant = parseInt(document.getElementById("username-count").value);
      result = generateUserNameList(usernameCant);
      break;
    case "age":
      const ageCant = parseInt(document.getElementById("age-count").value);
      const ageMax  = parseInt(document.getElementById("age-max").value);
      const ageMin  = parseInt(document.getElementById("age-min").value);
      result = generateEdadList(ageCant, ageMax, ageMin);
      break;
    case "password":
      const passwordCant = parseInt(document.getElementById("password-count").value);
      result = generatePasswordList(passwordCant);
      break;
    case "credit-card":
      const cardCant = parseInt(document.getElementById("credit-card-count").value);
      result = generateCardsList(cardCant);
      break;
    case "phone":
      const phoneCount = parseInt(document.getElementById("phone-count").value);
      const phonePref = document.getElementById("phone-pref").value;
      result = generateTelefonicosList(phoneCount, phonePref);
      break;
    case "date":
      const dateCant = parseInt(document.getElementById("date-count").value);
      const day = parseInt(document.getElementById("day").value);
      const month = parseInt(document.getElementById("month").value);
      const year = parseInt(document.getElementById("year").value);
      const dayM = parseInt(document.getElementById("day-m").value);
      const monthM = parseInt(document.getElementById("month-m").value);
      const yearM = parseInt(document.getElementById("year-m").value);
      result = generateDateList(dateCant, day, month, year, dayM,monthM,yearM);
      break;
    case "time":
      const timeCant = parseInt(document.getElementById("time-count").value);
      const hour = parseInt(document.getElementById("hora").value);
      const minut = parseInt(document.getElementById("minuto").value);
      const sec = parseInt(document.getElementById("segundo").value);
      const hourM = parseInt(document.getElementById("horaM").value);
      const minutM = parseInt(document.getElementById("minutoM").value);
      const secM = parseInt(document.getElementById("segundoM").value);
      result = generateTimeList(timeCant, hour, minut, sec, hourM,minutM,secM);
      break;
      case "coordinate":
        const coordinateCount = parseInt(document.getElementById("coordinate-count").value);
        result = generaCoordinateList(coordinateCount);
        break;
  }
  const separador = document.getElementById("separador").value;
  generatorResultContainer.innerHTML = `<p>${result.join(separador)}</p>`;
});
function generateEmails(count, domain) {
  const emails = [];
  for (let i = 0; i < count; i++) {
    const username = generateString(8);
    const email = `${username}@${domain}`;
    emails.push(email);
  }
  return emails;
}


function generateString(length) {
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let list = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    list += characters.charAt(randomIndex);
  }
  return list;
}
function generateS(length) {
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789!#$%&/()=?¡¿'0987654321ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'";
  let list = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    list += characters.charAt(randomIndex);
  }
  return list;
}
function generateNames(length) {
  const characters = "abcdefghijklmnopqrstuvwxyz";
  let username = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    username += characters.charAt(randomIndex);
  }
  return username;
}
 function generateCadena(cant){
   const cadena = [];
   for (let i = 0; i < cant; i++) {
     const char = generateString(1);
     const character = `${char}`;
     cadena.push(character);
   }
 return cadena;
 }

 function generateRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
 function generateNumberList(cant, max, min){
   const lista = [];
   for (let i = 0; i < cant; i++) {
     const number = generateRandomInteger(min, max);
     const numero = `${number}`;
     lista.push(numero);
   }
 return lista;
 }
 function generateDniList(cant){
   const arreglo = [];
   for (let i = 0; i < cant; i++) {
    const numero = parseInt(generateRandomInteger(9999999, 99999999));
     arreglo.push(numero);
   }
 return arreglo;
 }
 function generateUserNameList(usernameCant) {
   const usernames = [];
   for (let i = 0; i < usernameCant; i++) {
     const username = generateNames(8);
     const nmb = generateRandomInteger(100,999)
     const user = `${username}${nmb}`;
     usernames.push(user);
   }
   return usernames;
 }
 function generateEdadList(cantidad, max, min){
   const ages = [];
   for (let i = 0; i < cantidad; i++) {
     const age = generateRandomInteger(min,max)
     ages.push(age);
   }
   return ages;
 }
 function generatePasswordList(cantidad){
   const passwords = [];
   for (let i = 0; i < cantidad; i++) {
     const cn = generateRandomInteger(8,10);
     const char = generateS(cn);
     const password = `${char}`;
     passwords.push(password);
   }
 return passwords;
 }
 function generateCardsList(cantidad){
   const cards = [];
   for (let i = 0; i < cantidad; i++) {
     const card1 = generateRandomInteger(999,9999);
     const card2 = generateRandomInteger(999,9999);
     const card3 = generateRandomInteger(99,999);
     const card = `${card1}${card2}${card3}`;
     cards.push(card);
   }
   return cards;
 }
 function generateTelefonicosList(cant, prefijo){
   const listaN = [];
   for (let i = 0; i < cant; i++) {
     const numb = parseInt(generateRandomInteger(99, 999));
     const numb2 = parseInt(generateRandomInteger(99, 999));
     const numb3 = parseInt(generateRandomInteger(99, 999));
     const nume = `${prefijo}${numb}${numb2}${numb3}`;
     listaN.push(nume);
   }
   return listaN;
 }
 function generateDateList(cant, day, month, year, dayM,monthM,yearM){
   const listaD = [];
   let anio =year;
   let dia =day;
   let mes= month;
   if (day<=0|| day>31 || month <=0||month >12 ||dayM<=0|| dayM>31 || monthM <=0||monthM >12 ) {
     const mssg = "Fecha inalcanzable!";
     listaD.push(mssg);
     return listaD;
   }
     if (day>28 && month == 2 && year%4!=0 || day>29 && month ==2 && year%4==0 || dayM>28 && monthM == 2 && yearM%4!=0 || dayM>29 && monthM ==2 && yearM%4==0) {
       const mssg = "Fecha inalcanzable!";
       listaD.push(mssg);
       return listaD;
     }
    for (let i = 0; i < cant; i++) {
       anio = parseInt(generateRandomInteger(year, yearM));
       mes = parseInt(generateRandomInteger(1, 12));
       dia = parseInt(generateRandomInteger(1, 31));

       if (year == anio ) {
           if (monthM == month) {
             dia = parseInt(generateRandomInteger(day, dayM));
           }
          mes = parseInt(generateRandomInteger(month, monthM));
          if (mes == monthM) {
            dia = parseInt(generateRandomInteger(1, dayM));
          }
          if (mes == month) {
            if (anio %4==0) {
              if (mes==2) {
                 dia = parseInt(generateRandomInteger(day, 29));
              }
            }else {
              if (mes!=2) {
                if (mes %2!==0) {
                  dia = parseInt(generateRandomInteger(day, 31));
                }else {
                  dia = parseInt(generateRandomInteger(day, 30));
                }
              }else {
                 dia = parseInt(generateRandomInteger(day, 29));
              }
            }
          }
       }else {
         if (anio %4==0) {
           if (mes==2) {
              dia = parseInt(generateRandomInteger(1, 29));
           }
         }else {
           if (mes!=2) {
             if (mes %2!==0) {
               dia = parseInt(generateRandomInteger(1, 31));
             }else {
               dia = parseInt(generateRandomInteger(1, 30));
             }
           }else {
              dia = parseInt(generateRandomInteger(1, 29));
           }
         }
       }


         const date = `${dia}/${mes}/${anio}`;
         listaD.push(date);
   }

   return listaD;
 }
 function generateTimeList(timeCant, hour, minut, sec, hourM,minutM,secM){
   const listaT = [];
   let hora;
   let minuto;
   let segundo;
   if (hour <0 || hour >24 || minut<0 ||minut >60|| sec <0 ||sec >60|| hourM >24 ||hourM<0|| minutM >60||minutM<0 || secM >60 ||secM<0) {
     const mssg = "Hora inalcanzable!";
     listaT.push(mssg);
     return listaT;
   }else {
     for (let i = 0; i < timeCant; i++) {
        hora = parseInt(generateRandomInteger(hour, hourM));
       if (hora == hourM) {
        minuto = parseInt(generateRandomInteger(minut, 59));  
       }
       if (hora == hour) {
           minuto = parseInt(generateRandomInteger(0, minutM));     
       }
       if(hour == hourM){
        minuto = parseInt(generateRandomInteger(minut, minutM));
      } 
      segundo=parseInt(generateRandomInteger(0, 59));
       if (minuto == minutM) {
        segundo = parseInt(generateRandomInteger(0, secM));
       }
       if (minuto == minut) {
        segundo = parseInt(generateRandomInteger(sec, 59));
       }
       if(minut == minutM){
        segundo = parseInt(generateRandomInteger(sec, secM));
        }
       
       
       const time = `${hora}:${minuto}:${segundo}`;
       listaT.push(time);
     }
   }

   return listaT;
 }
 //U20247648
 function generaCoordinateList(coordinateCount){
   const cordinate = [];
   for (let i = 0; i < coordinateCount; i++) {
     const x = generateRandomInteger(0,999);
     const y = generateRandomInteger(0,999);
     const z = generateRandomInteger(0,999);
     const pos = `(${x}:${y}:${z})`;
     cordinate.push(pos);
   }
   return cordinate;
 }
 function generateNamesList(nameCount){
   const nombres = [];
   let nombre="";
   let apellido1 ="";
   let apellido2 = "";
   for (let i = 0; i < nameCount; i++) {
      nombre = generarNombre(2);
      apellido1 = generarNombre(2);
      apellido2  = generarNombre(2);
     const pos = `${nombre} ${apellido1} ${apellido2} `;
     nombres.push(pos);
     nombre ="";
     apellido1 ="";
     apellido2 = "";
   }
   return nombres;
 }
 function generarNombre( cant){
   let consonante = "bcdfghjklmnpqrstvwxyz";
   let vocal = "aeiou";
   let silaba = "";
   let nombre = "";
   for (let j = 0; j < cant; j++) {
     const randomIndex = Math.floor(Math.random() * consonante.length);
     const randomIndex2 = Math.floor(Math.random() * vocal.length);
     const cons = consonante.charAt(randomIndex);
     const voc = vocal.charAt(randomIndex2);
     silaba = `${cons}${voc}`;
     nombre += silaba;
   }
   return nombre;
 }
