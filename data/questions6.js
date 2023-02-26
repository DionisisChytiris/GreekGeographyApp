const questions6 =  [
    {
        id: 1,
        question: "Ποια είναι η πρωτεύουσα του Ν.Αιτωλοακαρνανίας;",
        options:[
            {
                id:"0",
                answer:"Πάτρα",
            },
            {
                id:"1",
                answer:"'Aμφισσα",
            },
            {
                id:"2",
                answer:"Μεσολόγγι",
            },
            {
                id:"3",
                answer:"Καρπενήσι",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../assets/capitals/Mesologi.jpg'),
        imgMap: require('../assets/maps/N.Aitoloakarnanias.png'),
        nomos: 'Αιτωλοακαρνανίας',
        capital: 'Μεσολόγγι'
    },
    {
        id: 2,
        question: "Ποια είναι η πρωτεύουσα του Ν.Ροδόπης;",
        options:[
            {
                id:"0",
                answer:"Κομοτηνή",
            },
            {
                id:"1",
                answer:"Καβάλα",
            },
            {
                id:"2",
                answer:"Ξάνθη",
            },
            {
                id:"3",
                answer:"Αλεξανδρούπολη",
            },
        ],
        correctAnswerIndex: 0,
        img: require('../assets/capitals/Komotini.jpg'),
        imgMap: require('../assets/maps/N.Rodopis.jpg'),
        nomos: 'Ροδόπης',
        capital: 'Κομοτηνή'
    },
    {
        id: 3,
        question: "Ποια είναι η πρωτεύουσα του Ν.Ιωαννίνων;",
        options:[
            {
                id:"0",
                answer:"Κόνιτσα",
            },
            {
                id:"1",
                answer:"Μέτσοβο",
            },
            {
                id:"2",
                answer:"Ηγουμενίτσα",
            },
            {
                id:"3",
                answer:"Ιωάννινα",
            },
        ],
        correctAnswerIndex: 3,
        img: require('../assets/capitals/ioannina.jpg'),
        imgMap: require('../assets/maps/N.Ioanninwn.png'),
        nomos: 'Ιωαννίνων',
        capital: 'Ιωάννινα'
    },
    {
        id: 4,
        question: "Ποια είναι η πρωτεύουσα του Ν.Λάρισας;",
        options:[
            {
                id:"0",
                answer:"Καρδίτσα",
            },
            {
                id:"1",
                answer:"Λάρισα",
            },
            {
                id:"2",
                answer:"Λαμία",
            },
            {
                id:"3",
                answer:"Λιβαδειά",
            },
        ],
        correctAnswerIndex: 1,
        img: require('../assets/capitals/larissa.jpg'),
        imgMap: require('../assets/maps/N.Larissas.png'),
        nomos: 'Λάρισας',
        capital: 'Λάρισα'
    },
    // {
    //     id: 5,
    //     question: "Ποια είναι η πρωτεύουσα του Ν.Αχαΐας;",
    //     options:[
    //         {
    //             id:"0",
    //             answer:"Πάτρα",
    //         },
    //         {
    //             id:"1",
    //             answer:"Πύργος",
    //         },
    //         {
    //             id:"2",
    //             answer:"Τρίπολη",
    //         },
    //         {
    //             id:"3",
    //             answer:"Λιβαδειά",
    //         },
    //     ], 
    //     correctAnswerIndex: 0,
    //     img: require('../assets/capitals/patra.jpg'),
    //     imgMap: require('../assets/maps/N.Axaias.png'),
    //     nomos: 'Αχαΐας',
    //     capital: 'Πάτρα'
    // },
    // {
    //     id: 6,
    //     question: "Ποια είναι η πρωτεύουσα του Ν.Θεσσαλονίκης;",
    //     options:[
    //         {
    //             id:"0",
    //             answer:"Καλαμαριά",
    //         },
    //         {
    //             id:"1",
    //             answer:"Σέρρες",
    //         },
    //         {
    //             id:"2",
    //             answer:"Αλεξανδρούπολη",
    //         },
    //         {
    //             id:"3",
    //             answer:"Θεσσαλονίκη",
    //         },
    //     ],
    //     correctAnswerIndex: 3,
    //     img: require('../assets/capitals/thessaloniki.jpg'),
    //     imgMap: require('../assets/maps/N.Thessalonikis.png'),
    //     nomos: 'Θεσσαλονίκης',
    //     capital: 'Θεσσαλονίκη'
    // },
    // {
    //     id: 7,
    //     question: "Ποια είναι η πρωτεύουσα του Ν.Κέρκυρας;",
    //     options:[
    //         {
    //             id:"0",
    //             answer:"Κέρκυρα",
    //         },
    //         {
    //             id:"1",
    //             answer:"Παξοί",
    //         },
    //         {
    //             id:"2",
    //             answer:"Λευκάδα",
    //         },
    //         {
    //             id:"3",
    //             answer:"Ηγουμενίτσα",
    //         },
    //     ],
    //     correctAnswerIndex: 0,
    //     img: require('../assets/capitals/kerkyra1.jpg'),
    //     imgMap: require('../assets/maps/N.Kerkyras.png'),
    //     nomos: 'Κέρκυρα',
    //     capital: 'Κέρκυρα'
    // },
    // {
    //     id: 8,
    //     question: "Ποια είναι η πρωτεύουσα του Ν.Χίου;",
    //     options:[
    //         {
    //             id:"0",
    //             answer:"Λέσβος",
    //         },
    //         {
    //             id:"1",
    //             answer:"Σάμος",
    //         },
    //         {
    //             id:"2",
    //             answer:"Χίος",
    //         },
    //         {
    //             id:"3",
    //             answer:"Μυτιλήνη",
    //         },
    //     ],
    //     correctAnswerIndex: 2,
    //     img: require('../assets/capitals/xiosad1.jpg'),
    //     imgMap: require('../assets/maps/N.Xiou.png'),
    //     nomos: 'Χίου',
    //     capital: 'Χίος'
    // },
    // {
    //     id: 9,
    //     question: "Ποια είναι η πρωτεύουσα του Ν.Χανίων;",
    //     options:[
    //         {
    //             id:"0",
    //             answer:"Χανιά",
    //         },
    //         {
    //             id:"1",
    //             answer:"Ηράκλειο",
    //         },
    //         {
    //             id:"2",
    //             answer:"Άγιος Νικόλαος",
    //         },
    //         {
    //             id:"3",
    //             answer:"Ρέθυμνο",
    //         },
    //     ],
    //     correctAnswerIndex: 0,
    //     img: require('../assets/capitals/chania.jpg'),
    //     imgMap: require('../assets/maps/N.Xaniwn.png'),
    //     nomos: 'Χανίων',
    //     capital: 'Χανιά'
    // },
    // {
    //     id: 10,
    //     question: "Ποια είναι η πρωτεύουσα του Ν.Λευκάδας;",
    //     options:[
    //         {
    //             id:"0",
    //             answer:"Πρέβεζα",
    //         },
    //         {
    //             id:"1",
    //             answer:"Νυδρί",
    //         },
    //         {
    //             id:"2",
    //             answer:"Λευκάδα",
    //         },
    //         {
    //             id:"3",
    //             answer:"Λευκίμμη",
    //         },
    //     ],
    //     correctAnswerIndex: 2,
    //     img: require('../assets/capitals/lefkada.jpg'),
    //     imgMap: require('../assets/maps/N.Lefkadas.png'),
    //     nomos: 'Λευκάδας',
    //     capital: 'Λευκάδα'
    // },
]
export default questions6