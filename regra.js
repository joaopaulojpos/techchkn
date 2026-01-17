function calculo(val1, val2) {
  valor_compra = parseInt(val1);
  valor_entrada = val2;

  var taxas = [
    4.482,  // 1x
    4.888,  // 2x
    5.519,  // 3x
    6.906,  // 4x
    7.759,  // 5x
    8.108,  // 6x
    8.601,  // 7x
    9.625,  // 8x
    10.363, // 9x
    11.086, // 10x
    11.957, // 11x
    12.931, // 12x
    13.611, // 13x
    14.521, // 14x
    15.380, // 15x
    16.252, // 16x
    17.220, // 17x
    18.245  // 18x
  ]; 
  let taxa_debito = 2.041;
  var valor_parcelas = [];
  var valor_total = [];

  var valor = valor_compra - valor_entrada;

  //parte da taxa de débito
  let percentual_debito = (taxa_debito * valor) / 100;
  let debito_total = valor + percentual_debito;
  
  var i = 0;
  while (taxas[i]) {
    let percentual = (taxas[i] * valor) / 100;
    let total = valor + percentual;

    // Adicionar R$ 50,00 nas parcelas específicas
    if ([10, 11, 12, 18, 21].includes(i + 1)) {
      total += 50;
    }

    valor_total.push(total); // Populando os valores totais
    valor_parcelas.push(total / (i + 1)); // Populando os valores das parcelas
    i++;
  }

  var table = "";
  for (var i in valor_parcelas) {
    table += "<tr>" + "<td>" + (parseInt(i) + 1) + " x" + "</td>" + "<td>" + valor_parcelas[i].toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) + "</td>" + "<td>" + 
    valor_total[i].toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) + "</td></tr>";
  }

  debito_linha = "<tr>" + "<td>" + "Débito " + "</td>" + "<td>" + debito_total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) + "</td>" + "<td>" + 
  debito_total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) + "</td></tr>";

  document.getElementById("exibir").innerHTML = debito_linha + table;
}

var text = document.getElementById("val_compra");
var entrada = document.getElementById("val_entrada");

text.addEventListener("keyup", function () {
  var val_compra = this.value;
  var val_entrada = document.getElementById("val_entrada").innerHTML;
  calculo(val_compra, val_entrada);
})

entrada.addEventListener("keyup", function () {
  var val_compra = text.value;
  val_entrada = this.value;
  calculo(val_compra, val_entrada);
})

function keyPressed(evt){
  evt = evt || window.event;
  var key = evt.keyCode || evt.which;
  return String.fromCharCode(key); 
}

document.onkeypress = function(evt) {
  var str = keyPressed(evt);
  
  if(str == ',' | str == '.')
      alert("Por favor apague e digite apenas números");
};
