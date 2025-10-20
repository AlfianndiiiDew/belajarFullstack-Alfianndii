const fs = require('node:fs');
const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Contact {
    constructor(nama, noHp, email) {
        this.nama = nama;
        this.noHp = noHp;
        this.email = email;
    }

    pertanyaan(question) {
        return new Promise((resolve) => {
            rl.question(question, (answer) => {
                resolve(answer);
            });
        });
    }

    addContact(nama, noHp, email) {
        const contact = { nama, noHp, email };
        const filePath = 'contacts.json';

        let contacts = [];
        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf-8');
            contacts = JSON.parse(data);
        }

        contacts.push(contact);
        fs.writeFileSync(filePath, JSON.stringify(contacts, null, 2));
        console.log('Contact berhasil disimpan!');
    }

    deleteContact(nama) {
        const filePath = 'contacts.json';

        if (!fs.existsSync(filePath)) {
            console.log('Tidak ada kontak untuk dihapus.');
            return;
        }

        const data = fs.readFileSync(filePath, 'utf-8');
        let contacts = JSON.parse(data);

        contacts = contacts.filter(contact => contact.nama !== nama);
        fs.writeFileSync(filePath, JSON.stringify(contacts, null, 2));
        console.log('Contact berhasil dihapus!');
    }

    updateContact(nama, newNoHp, newEmail) {
        const filePath = 'contacts.json';

        if (!fs.existsSync(filePath)) {
            console.log('Tidak ada kontak untuk diupdate.');
            return;
        }

        const data = fs.readFileSync(filePath, 'utf-8');
        let contacts = JSON.parse(data);

        const contact = contacts.find(contact => contact.nama === nama);
        if (contact) {
            contact.noHp = newNoHp;
            contact.email = newEmail;
            fs.writeFileSync(filePath, JSON.stringify(contacts, null, 2));
            console.log('Contact berhasil diupdate!');
        } else {
            console.log('Contact tidak ditemukan.');
        }
    }

}

module.exports = Contact;
