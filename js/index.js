var a = parseFloat(prompt("Digite a primeira nota:"));
var b = parseFloat(prompt("Digite a segunda nota:"));
var c = parseFloat(prompt("Digite a terceira nota:"));
var result = "";

var media = (a + b +c) / 3;

if(media >= 6) {
result = (a + b +c) / 3
document.body.append("Você foi aprovado, sua média é: " + result);
}else if(media <= 6) {
result = (a + b +c) / 3
document.body.append("Você foi reprovado, sua média é: " + result);
}
