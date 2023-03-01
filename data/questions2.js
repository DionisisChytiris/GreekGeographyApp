const questions2 =  [
    {
        id: 1,
        question: "Ποια είναι η πρωτεύουσα του Ν.Ζακύνθου;",
        options:[
            {
                id:"0",
                answer:"Αργοστόλι",
            },
            {
                id:"1",
                answer:"Ζάκυνθος",
            },
            {
                id:"2",
                answer:"Λευκάδα",
            },
            {
                id:"3",
                answer:"Αστακός",
            },
        ],
        correctAnswerIndex: 1,
        img: require('../assets/capitals/zakynthos.jpg'),
        imgMap: require('../assets/maps/N.Zakythou.png'),
        nomos: "Ζακύνθου",
        capital: 'Ζάκυνθος'
    },
    {
        id: 2,
        question: "Ποια είναι η πρωτεύουσα του Ν.Καβάλας;",
        options:[
            {
                id:"0",
                answer:"Καστοριά",
            },
            {
                id:"1",
                answer:"Σέρρες",
            },
            {
                id:"2",
                answer:"Ξάνθη",
            },
            {
                id:"3",
                answer:"Καβάλα",
            },
        ],
        correctAnswerIndex: 3,
        img: require('../assets/capitals/kavala1.jpg'),
        imgMap: require('../assets/maps/N.Kavalas.png'),
        nomos: 'Καβάλας',
        capital: 'Καβάλα'
    },
    {
        id: 3,
        question: "Ποια είναι η πρωτεύουσα του Ν.Καστοριάς;",
        options:[
            {
                id:"0",
                answer:"Καστοριά",
            },
            {
                id:"1",
                answer:"Καβάλα",
            },
            {
                id:"2",
                answer:"Κοζάνη",
            },
            {
                id:"3",
                answer:"Κόνιτσα",
            },
        ],
        correctAnswerIndex: 0,
        img: require('../assets/capitals/kastoria1.jpg'),
        imgMap: require('../assets/maps/N.Kastorias.png'),
        nomos: 'Καστοριάς',
        capital: 'Καστοριά'
    },
   {
        id: 4,
        question: "Ποια είναι η πρωτεύουσα του Ν.Σερρών;",
        options:[
            {
                id:"0",
                answer:"Κομοτηνή",
            },
            {
                id:"1",
                answer:"Σέρρες",
            },
            {
                id:"2",
                answer:"Κιλκίς",
            },
            {
                id:"3",
                answer:"Φλώρινα",
            },
        ],
        correctAnswerIndex: 1,
        img: require('../assets/capitals/serres.jpg'),
        imgMap: require('../assets/maps/N.Serrwn.png'),
        nomos: 'Σερρών',
        capital: 'Σέρρες'
    },
    {
        id: 5,
        question: "Ποια είναι η πρωτεύουσα του Ν.Καρδίτσα;",
        options:[
            {
                id:"0",
                answer:"Γρεβενά",
            },
            {
                id:"1",
                answer:"Κοζάνη",
            },
            {
                id:"2",
                answer:"Καρδίτσα",
            },
            {
                id:"3",
                answer:"Τρίκαλα",
            },
        ], 
        correctAnswerIndex: 2,
        img: require('../assets/capitals/patra.jpg'),
        imgMap: require('../assets/maps/N.Karditsas.png'),
        nomos: 'Καρδίτσας',
        capital: 'Καρδίτσα'
    },
    {
        id: 6,
        question: "Ποια είναι η πρωτεύουσα του Ν.Τρικάλων;",
        options:[
            {
                id:"0",
                answer:"Καρδίτσα",
            },
            {
                id:"1",
                answer:"Τρίπολη",
            },
            {
                id:"2",
                answer:"Καλαμπάκα",
            },
            {
                id:"3",
                answer:"Τρίκαλα",
            },
        ],
        correctAnswerIndex: 3,
        img: require('../assets/capitals/trikala.jpg'),
        imgMap: require('../assets/maps/N.Trikalwn.png'),
        nomos: 'Τρικάλων',
        capital: 'Τρίκαλα'
    },
    {
        id: 7,
        question: "Ποια είναι η πρωτεύουσα του Ν.Κορίνθου;",
        options:[
            {
                id:"0",
                answer:"Κόρινθος",
            },
            {
                id:"1",
                answer:"Λουτράκι",
            },
            {
                id:"2",
                answer:"Κιάτο",
            },
            {
                id:"3",
                answer:"Άργος",
            },
        ],
        correctAnswerIndex: 0,
        img: require('../assets/capitals/korinthos.jpg'),
        imgMap: require('../assets/maps/N.Korithias.png'),
        nomos: 'Κορίνθου',
        capital: 'Κόρινθος'
    },
    {
        id: 8,
        question: "Ποια είναι η πρωτεύουσα του Ν.Φλώρινας;",
        options:[
            {
                id:"0",
                answer:"Κοζάνη",
            },
            {
                id:"1",
                answer:"Γρεβενά",
            },
            {
                id:"2",
                answer:"Φλώρινα",
            },
            {
                id:"3",
                answer:"Έδεσσα",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../assets/capitals/florina.jpg'),
        imgMap: require('../assets/maps/N.Florinas.png'),
        nomos: 'Φλώρινας',
        capital: 'Φλώρινα'
    },
    {
        id: 9,
        question: "Ποια είναι η πρωτεύουσα του Ν.Ξάνθης;",
        options:[
            {
                id:"0",
                answer:"Ξάνθη",
            },
            {
                id:"1",
                answer:"Κομοτηνή",
            },
            {
                id:"2",
                answer:"Σέρρες",
            },
            {
                id:"3",
                answer:"Καβάλα",
            },
        ],
        correctAnswerIndex: 0,
        img: require('../assets/capitals/ksanthi.jpg'),
        imgMap: require('../assets/maps/N.Xanthis.png'),
        nomos: 'Ξάνθης',
        capital: 'Ξάνθη'
    },
    {
        id: 10,
        question: "Ποια είναι η πρωτεύουσα του Ν.Σάμου;",
        options:[
            {
                id:"0",
                answer:"Καρλόβασι",
            },
            {
                id:"1",
                answer:"Πάτμος",
            },
            {
                id:"2",
                answer:"Σάμος",
            },
            {
                id:"3",
                answer:"Πυθαγόρειο",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../assets/capitals/samos.jpg'),
        imgMap: require('../assets/maps/N.Samou.png'),
        nomos: 'Σάμου',
        capital: 'Σάμος'
    }
]
export default questions2