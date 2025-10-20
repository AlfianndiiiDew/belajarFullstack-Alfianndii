const validator = require('validator');
const Contact = require('./contact.js');
// Impor minimist untuk parsing argumen
const args = require('minimist')(process.argv.slice(2));

/**
 * =================================
 * FUNGSI HELPER & HANDLER
 * (Diambil dari kode refactor Anda)
 * =================================
 */

async function getValidatedEmail(contact, promptMessage = "Masukkan email: ") {
    let email = '';
    let isValid = false;
    while (!isValid) {
        email = await contact.pertanyaan(promptMessage);
        isValid = validator.isEmail(email);
        if (!isValid) {
            console.log("Email tidak valid! Coba lagi.");
        }
    }
    return email;
}

async function handleAdd(contact) {
    const nama = await contact.pertanyaan("Masukkan nama: ");
    const noHp = await contact.pertanyaan("Masukkan no HP: ");
    const email = await getValidatedEmail(contact, "Masukkan email: ");
    contact.addContact(nama, noHp, email);
    console.log("Kontak baru berhasil ditambahkan.");
}

async function handleDelete(contact) {
    const nama = await contact.pertanyaan("Masukkan nama yang akan dihapus: ");
    contact.deleteContact(nama);
    console.log(`Kontak "${nama}" telah dihapus.`);
}

async function handleUpdate(contact) {
    const nama = await contact.pertanyaan("Masukkan nama kontak yang akan diupdate: ");
    const newNoHp = await contact.pertanyaan("Masukkan no HP baru: ");
    const newEmail = await getValidatedEmail(contact, "Masukkan email baru: ");
    contact.updateContact(nama, newNoHp, newEmail);
    console.log(`Kontak "${nama}" telah diupdate.`);
}

/**
 * =================================
 * FUNGSI UTAMA (MAIN)
 * =================================
 */

async function main() {
    const contact = new Contact();

    try {
        // args akan berisi { add: true } jika Anda menjalankan `npm test --add`
        // args akan berisi { delete: true } jika Anda menjalankan `npm test --delete`

        if (args.add) {
            // Jika ada argumen --add, langsung jalankan handleAdd
            await handleAdd(contact);

        } else if (args.delete) {
            // Skalabilitas: Anda bisa tambahkan ini
            await handleDelete(contact);

        } else if (args.update) {
            // Skalabilitas: Anda bisa tambahkan ini
            await handleUpdate(contact);

        } else {
            // Mode interaktif (default jika tanpa argumen)
            const pilihan = await contact.pertanyaan("Mau pilih apa (add, delete, update)? ");
            switch (pilihan.toLowerCase()) {
                case 'add':
                    await handleAdd(contact);
                    break;
                case 'delete':
                    await handleDelete(contact);
                    break;
                case 'update':
                    await handleUpdate(contact);
                    break;
                default:
                    console.log("Pilihan tidak dikenali.");
            }
        }

    } catch (error) {
        console.error("Terjadi kesalahan:", error.message);
    } finally {
        // Pastikan untuk menutup readline
        if (contact.close) {
            contact.close();
        } else {
            process.exit();
        }
    }
}

// Menjalankan fungsi utama
main();