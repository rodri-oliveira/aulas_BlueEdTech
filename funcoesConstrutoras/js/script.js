const Product = function (name, price, qtd) {
    this.name = name,
        this.price = price,
        this.qtd = qtd
}
const Endereco = function (estado, cidade, cep){
    this.estado = estado,
    this.cidade = cidade,
    this.cep = cep
}
Endereco.prototype = Product

Endereco.prototype.exibirEndreco = function(){
    return `Estado: ${this.estado}, Cidade: ${this.cidade}, Cep: ${this.cep}`
}

Product.prototype.total = function () {
    return this.price * this.qtd
}
Product.prototype.add = function (amount) {
    this.qtd += amount
}
Product.prototype.remove = function (amount) {
    if (this.qtd >= amount) {
        this.qtd -= amount
    }
}
Product.prototype.label = function () {
    return `Dados: ${this.name},Preço: ${this.price}, Quantidade: ${this.qtd}`
}

const p2 = new Product('lapis', 20, 2)
const p3 = new Product('caderno', 40, 4)
const p4 = new Product('mouse', 100, 3)

const end1 = new Endereco('São Paulo', 'Mogi', 0800-000)


console.log(p4.total())
console.log(p3.total())