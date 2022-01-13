const nama = "Dela ramadani"
const umur = 15
function sayHello(nama, umur){
	return `Hallo saya ${nama} saya berumur ${umur}`
}

class Orang {
	constructor(){
		console.log('Orang berhasil dibuat!!')
	}
}

const data = {
	nama : "Zinedine Ziddan Fahdlevy",
	kelas : 'XII SIJA 1',
	sayHello() {
		return `Hay nama saya ${this.nama} saya dari kelas ${this.kelas}`
	}
}

module.exports = {
	nama, 
	umur,
	sayHello,
	data,
	Orang
}