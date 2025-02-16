function calculo(val1, val2) {
  valor_compra = parseInt(val1);
  valor_entrada = val2;

  var taxas = [
    3.082,    // 1 parcela
    3.724,    // 2 parcelas
    4.493,    // 3 parcelas
    5.263,    // 4 parcelas
    6.270,    // 5 parcelas
    6.952,    // 6 parcelas
    7.181,    // 7 parcelas
    7.759,    // 8 parcelas
    8.696,    // 9 parcelas
    10.2895,   // 10 parcelas
    11.2535,   // 11 parcelas
    12.17625,   // 12 parcelas
    12.233,   // 13 parcelas
    13.1095,   // 14 parcelas
    14.025,   // 15 parcelas
    14.7975,   // 16 parcelas
    15.67375,   // 17 parcelas
    17.556,   // 18 parcelas
    22.354,   // 19 parcelas
    23.198,   // 20 parcelas
    25.28875    // 21 parcelas
  ]; 
  let taxa_debito = 1.451;
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
