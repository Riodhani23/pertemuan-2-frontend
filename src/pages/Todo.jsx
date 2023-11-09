import React from 'react';

const Todo = () => {
    main()
    return (
        <div>
            <h2>Check in your console</h2>
        </div>
    );
}

// Jangan mengubah apapun pada function main
const main = () => {
    console.log("# Get All Users");
    all()

    console.log("# Add New User: Sabiq");
    const newUser = {
        name: "Sabiq",
        age: 20,
        major: "Informatics"
    };
    store(newUser)

    console.log("# Edit User: Isfa")
    const editedUser = {
        name: "Isfhani Ghiyath",
        age: 23,
        major: "English",
    }
    update(1, editedUser)

    console.log("# Delete User: Nurul");
    destroy(2)
}


// TODO 1 - Buatlah array of object users (5 users)
// Objek memiliki property: name, age, major
// Gunakan const untuk membuat variabel
const user = [
    {
        nama : "Rio Aditya",
        age : 18,
        major : "Rekayasa Prangkat Lunak"
    },
    {
        nama : "Fasrul Ilman",
        age : 19,
        major : "Pengembangan Perangkat Lunak"
    },
    {
        nama : "Rusnanto",
        age : 18,
        major : "Teknik Informatika"
    },
    {
        nama : "Aldi Budi",
        age : 19,
        major : "Teknik Otomotif"
    },
    {
        nama : "Hilman Padilah",
        age : 18,
        major : "DKV"
    }

]

// TODO 2 - Membuat function yang menampilkan semua data users
// Gunakan for/for-of
const all = () => {
    for(const User of user) {
        console.log(`Name: ${User.nama}, Age: ${User.age}, Major: ${User.major}`);
    }
}

// TODO 3 - Membuat function untuk menambahkan data users
// Gunakan metode push
const store = (newUser) => {
    user.push(newUser);
    console.log(user);
}

// TODO 4 - Membuat function untuk mengupdate data users
// Ganti data users berdasarkan index pada array
const update = (index, updatedUser) => {
    if (index >= 0 && index < user.length) {
        user[index] = updatedUser;
    } else {
        console.log("Index tidak valid.");
    }
}

// TODO 5 - Membuat function untuk menghapus data users berdasarkan index
// Gunakan metode splice
const destroy = (index) => {
    if (index >= 0 && index < user.length) {
        // Menghapus elemen pada index yang diberikan
        user.splice(index, 1);
        console.log(`User pada index ${index} telah dihapus.`);
    } else {
        console.log("Index tidak valid. Tidak ada penghapusan dilakukan.");
    }
};


export default Todo;
