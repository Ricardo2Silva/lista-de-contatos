let numero = '1234-5678'


let transform = numero => {
  numero = numero.replace(/\D/g, '');
    return;
}


 console.log(transform(numero))
