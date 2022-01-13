// file system
const fs = require('fs')

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
const rl = require('readline')

rl.question('Masukkan nama Anda: ', (nama) => {
  rl.question('Masukkan nomer hp Anda: ', (noHP)=> {
    rl.question('Masukkan umur Anda: ', (umur) => {
      const contact = {
        nama,
        noHP,
        umur
      }

      const file = fs.readFileSync('contact.json', 'utf-8')

      const contacts = JSON.parse(file)

      contacts.push(contact)

      console.log(fs.writeFileSync('contacts.json', JSON.stringify(contacts)))
    })
  })
})