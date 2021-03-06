class Artist {
    constructor(name, age, genre, label) {
        // you will need to decide what the datatype have  to be
        // datatypes: string, integer, arrays, objects, booleans
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.label = label;
        this.albums = [];
        this.songs = [];
        this.image = '';
        this.instagram = null
    }

    addAlbum(album) {
        this.albums.push(album);
        console.log(`This another${album} for ${this.name}`)
    }

    addSong(song) {
        this.albums.push(song);
        console.log(`This another${song} for ${this.name}`)
    }

    addImage(imageLink) {
        this.image= imageLink
    }

    addIG(username) {
        this.instagram = username;
    }

}

// this is an instance of the Artist class
// const drake = new Artist('Drake', '33', 'hip hop', 'cash money records');
// const hozier = new Artist('Hozier', '99', 'rock', 'cash money records');
// const carlCox = new Artist('Carl Cox', '50', 'house', 'cash money records');
const poloG = new Artist('Polo G',  true)

poloG.addAlbum('The GOAT');
poloG.addAlbum('Die a Legend');

poloG.addSong('Martin & Gina');
poloG.addSong('21');

poloG.addImage('data:image/jpeg;base64,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')

poloG.addIG('https://www.instagram.com/polo.capalot/')