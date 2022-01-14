// file system
const fs = require('fs')
const { stdin } = require('process')

// menuliskan string ke file synchorous
// fs.writeFileSync('test.txt', 'Hallo ini text string ke file menggunakan metode synchorous')

// menuliskan string ke file asynchorous
// fs.writeFile('test.txt', 'Hallo ini text string ke file menggunakan metode asynchrounous', (e) => {
//   console.log(e)
// })

// membaca file synchronous
// console.log(fs.readFileSync('test.txt', 'utf-8'))

// membaca file asynchronous
// const asy = fs.readFile('data/test.txt', 'utf-8', (err, data) => {
//   if(err) throw err
//   console.log(data)
// })


// ---------------- Readline ----------------------
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Masukkan nama Anda: ', (nama) => {
  rl.question('Masukkan nomer hp Anda: ', (noHP) => {
      rl.question('Masukkan Umur Anda: ', (umur) => {
        const contact = {nama, noHP, umur}

      const file = fs.readFileSync('contact.json', 'utf8')

      const contacts = JSON.parse(file)

      contacts.push(contact)

      fs.writeFileSync('contact.json', JSON.stringify(contacts))

      console.log('Terimakasih Data Anda berhasil ditambahkan')

      rl.close()
      })
  })
})