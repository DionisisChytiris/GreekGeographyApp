const questions1 =  [
    {
        id: 1,
        question: "Ποιo είναι το μεγαλύτερο νησί της Ελλάδας;",
        options:[
            {
                id:"0",
                answer:"Κέρκυρα",
            },
            {
                id:"1",
                answer:"Kρήτη",
            },
            {
                id:"2",
                answer:"Εύβοια",
            },
            {
                id:"3",
                answer:"Ρόδος",
            },
        ],
        correctAnswerIndex: 1,
        img: require('../../assets/generalQuestions/greece.jpg'),
        result: 'H έκταση της Κρήτης είναι 8.303 χλμ². \nH έκταση της Εύβοιας είναι 3.670 χλμ². \nH έκταση της Ρόδου είναι 1.401 χλμ². \nH έκταση της Κέρκυρας είναι 585,3 χλμ². '
        // imgMap: require('../../assets/maps/N.Kerkyras.png'),
        // nomos: 'Κέρκυρα',
        // capital: 'Κέρκυρα'
    },
    {
        id: 2,
        question: "Ποιο είναι το μεγαλύτερο από τα παρακάτω νησιά;",
        options:[
            {
                id:"0",
                answer:"Σάμος",
            },
            {
                id:"1",
                answer:"Κεφαλοννιά",
            },
            {
                id:"2",
                answer:"Χίος",
            },
            {
                id:"3",
                answer:"Λήμνος",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/generalQuestions/greece.jpg'),
        result: 'H έκταση της Χίου είναι 842,3 χλμ². \nH έκταση της Κεφαλλονιάς είναι 786,6 χλμ². \nH έκταση της Σάμου είναι 477,4 χλμ². \nH έκταση της Λήμνου είναι 476 χλμ². '
        // imgMap: require('../../assets/maps/N.Kilkis.png'),
        // nomos: 'Κιλκίς',
        // capital: 'Κιλκίς'
    },
    {
        id: 3,
        question: "Που βρίσκεται το «Μονοπάτι του Ασκληπειού»;",
        options:[
            {
                id:"0",
                answer:"Λάρισα",
            },
            {
                id:"1",
                answer:"Γρεβενά",
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
        correctAnswerIndex: 3,
        img: require('../../assets/generalQuestions/greece.jpg'),
        imgMap: require('../../assets/maps/N.Ioanninwn.png'),
        nomos: 'Ιωαννίνων',
        capital: 'Ιωάννινα'
    },
    {
        id: 4,
        question: "Σε ποιο νομό βρίσκεται η Σαντορίνη;",
        options:[
            {
                id:"0",
                answer:"Ν.Δωδεκανήσου",
            },
            {
                id:"1",
                answer:"Ν.Κυκλάδων",
            },
            {
                id:"2",
                answer:"Ν.Θήρας",
            },
            {
                id:"3",
                answer:"Ν.Σύρου",
            },
        ],
        correctAnswerIndex: 1,
        img: require('../../assets/generalQuestions/santorini.jpg'),
        imgMap: require('../../assets/maps/N.Larissas.png'),
        nomos: 'Λάρισας',
        capital: 'Λάρισα'
    },
    {
        id: 5,
        question: "Ποια βρίσκεται το «Πέτρινο Δάσος»;",
        options:[
            {
                id:"0",
                answer:"Πάτρα",
            },
            {
                id:"1",
                answer:"Πρέβεζα",
            },
            {
                id:"2",
                answer:"Πάργα",
            },
            {
                id:"3",
                answer:"Πράγα",
            },
        ],
        correctAnswerIndex: 1,
        img: require('../../assets/capitals/preveza.jpg'),
        imgMap: require('../../assets/maps/N.Prevezas.png'),
        nomos: 'Πρέβεζας',
        capital: 'Πρέβεζα'
    },
    {
        id: 6,
        question: "Σε ποιο γεωγραφικό διαμέρισμα ανήκει το νησί της Ιθάκης;",
        options:[
            {
                id:"0",
                answer:"Καλαμαριά",
            },
            {
                id:"1",
                answer:"Σέρρες",
            },
            {
                id:"2",
                answer:"Αλεξανδρούπολη",
            },
            {
                id:"3",
                answer:"Θεσσαλονίκη",
            },
        ],
        correctAnswerIndex: 3,
        img: require('../../assets/capitals/thessaloniki.jpg'),
        imgMap: require('../../assets/maps/N.Thessalonikis.png'),
        nomos: 'Θεσσαλονίκης',
        capital: 'Θεσσαλονίκη'
    },
    
    {
        id: 7,
        question: "Ποια από τις παρακάτω πόλεις έχει μεγαλύτερο πληθυσμό;",
        options:[
            {
                id:"0",
                answer:"Άμφισσα",
            },
            {
                id:"1",
                answer:"Άρτα",
            },
            {
                id:"2",
                answer:"Αμφιλοχία",
            },
            {
                id:"3",
                answer:"Άρτεμη",
            },
        ],
        correctAnswerIndex: 1,
        img: require('../../assets/capitals/arta.jpg'),
        imgMap: require('../../assets/maps/N.Thessalonikis.png'),
        nomos: 'Άρτας',
        capital: 'Άρτα'
    },
    {
        id: 8,
        question: "Ποιο από τα παρακάτω νησιά ΔΕΝ ανήκει στις Κυκλάδες;",
        options:[
            {
                id:"0",
                answer:"Λέσβος",
            },
            {
                id:"1",
                answer:"Σάμος",
            },
            {
                id:"2",
                answer:"Χίος",
            },
            {
                id:"3",
                answer:"Μυτιλήνη",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/capitals/xiosad1.jpg'),
        imgMap: require('../../assets/maps/N.Xiou.png'),
        nomos: 'Χίου',
        capital: 'Χίος'
    },
    {
        id: 9,
        question: "Πως ονομάζεται η μεγαλύτερη τεχνητή λίμνη της Ελλάδας;",
        options:[
            {
                id:"0",
                answer:"Χανιά",
            },
            {
                id:"1",
                answer:"Ηράκλειο",
            },
            {
                id:"2",
                answer:"Άγιος Νικόλαος",
            },
            {
                id:"3",
                answer:"Ρέθυμνο",
            },
        ],
        correctAnswerIndex: 0,
        img: require('../../assets/capitals/chania.jpg'),
        imgMap: require('../../assets/maps/N.Xaniwn.png'),
        nomos: 'Χανίων',
        capital: 'Χανιά'
    },
    {
        id: 10,
        question: "Ποια είναι η μεγαλύτερη πόλη της Πελοποννήσου;",
        options:[
            {
                id:"0",
                answer:"Πρέβεζα",
            },
            {
                id:"1",
                answer:"Νυδρί",
            },
            {
                id:"2",
                answer:"Λευκάδα",
            },
            {
                id:"3",
                answer:"Λευκίμμη",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/capitals/lefkada.jpg'),
        imgMap: require('../../assets/maps/N.Lefkadas.png'),
        nomos: 'Λευκάδας',
        capital: 'Λευκάδα'
    },
    {
        id: 11,
        question: "Ποια από τις παρακάτω πόλεις βρίσκεται στην Μακεδονία;",
        options:[
            {
                id:"0",
                answer:"Πρέβεζα",
            },
            {
                id:"1",
                answer:"Νυδρί",
            },
            {
                id:"2",
                answer:"Λευκάδα",
            },
            {
                id:"3",
                answer:"Λευκίμμη",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/capitals/lefkada.jpg'),
        imgMap: require('../../assets/maps/N.Lefkadas.png'),
        nomos: 'Λευκάδας',
        capital: 'Λευκάδα'
    },
    {
        id: 12,
        question: "Η Καβάλα βρίσκεται στην Μακεδονία ή τον 'Εβρο;",
        options:[
            {
                id:"0",
                answer:"Πρέβεζα",
            },
            {
                id:"1",
                answer:"Νυδρί",
            },
            {
                id:"2",
                answer:"Λευκάδα",
            },
            {
                id:"3",
                answer:"Λευκίμμη",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/capitals/lefkada.jpg'),
        imgMap: require('../../assets/maps/N.Lefkadas.png'),
        nomos: 'Λευκάδας',
        capital: 'Λευκάδα'
    },
    {
        id: 13,
        question: "Σε ποια ελληνική πόλη βρίσκεται το Λαογραφικό Μουσείο Βλάχων;",
        options:[
            {
                id:"0",
                answer:"Πρέβεζα",
            },
            {
                id:"1",
                answer:"Νυδρί",
            },
            {
                id:"2",
                answer:"Λευκάδα",
            },
            {
                id:"3",
                answer:"Λευκίμμη",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/capitals/lefkada.jpg'),
        imgMap: require('../../assets/maps/N.Lefkadas.png'),
        nomos: 'Λευκάδας',
        capital: 'Λευκάδα'
    },
    {
        id: 14,
        question: "Με ποια από τις παρακάτω χώρες ΔΕΝ συνορεύει η Ελλάδα;",
        options:[
            {
                id:"0",
                answer:"Πρέβεζα",
            },
            {
                id:"1",
                answer:"Νυδρί",
            },
            {
                id:"2",
                answer:"Λευκάδα",
            },
            {
                id:"3",
                answer:"Λευκίμμη",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/capitals/lefkada.jpg'),
        imgMap: require('../../assets/maps/N.Lefkadas.png'),
        nomos: 'Λευκάδας',
        capital: 'Λευκάδα'
    },
    {
        id: 15,
        question: 'Με πόσες χώρες συνορεύει η Ελλάδα;',
        options:[
            {
                id:"0",
                answer:"Πρέβεζα",
            },
            {
                id:"1",
                answer:"Νυδρί",
            },
            {
                id:"2",
                answer:"Λευκάδα",
            },
            {
                id:"3",
                answer:"Λευκίμμη",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/capitals/lefkada.jpg'),
        imgMap: require('../../assets/maps/N.Lefkadas.png'),
        nomos: 'Λευκάδας',
        capital: 'Λευκάδα'
    },
    {
        id: 16,
        question: "Πως ονομάζεται η ψηλότερη κορυφή του Ολύμπου;",
        options:[
            {
                id:"0",
                answer:"Πρέβεζα",
            },
            {
                id:"1",
                answer:"Νυδρί",
            },
            {
                id:"2",
                answer:"Λευκάδα",
            },
            {
                id:"3",
                answer:"Λευκίμμη",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/capitals/lefkada.jpg'),
        imgMap: require('../../assets/maps/N.Lefkadas.png'),
        nomos: 'Λευκάδας',
        capital: 'Λευκάδα'
    },
    {
        id: 17,
        question: "Σε ποιο νησιωτικό σύμπλεγμα ανήκει η Ιθάκη;",
        options:[
            {
                id:"0",
                answer:"Πρέβεζα",
            },
            {
                id:"1",
                answer:"Νυδρί",
            },
            {
                id:"2",
                answer:"Λευκάδα",
            },
            {
                id:"3",
                answer:"Λευκίμμη",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/capitals/lefkada.jpg'),
        imgMap: require('../../assets/maps/N.Lefkadas.png'),
        nomos: 'Λευκάδας',
        capital: 'Λευκάδα'
    },
    {
        id: 18,
        question: "Ποιος είναι ο μεγαλύτερος ποταμός της Ελλάδας;",
        options:[
            {
                id:"0",
                answer:"Πρέβεζα",
            },
            {
                id:"1",
                answer:"Νυδρί",
            },
            {
                id:"2",
                answer:"Λευκάδα",
            },
            {
                id:"3",
                answer:"Λευκίμμη",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/capitals/lefkada.jpg'),
        imgMap: require('../../assets/maps/N.Lefkadas.png'),
        nomos: 'Λευκάδας',
        capital: 'Λευκάδα'
    },
    {
        id: 19,
        question: "Που βρίσκεται η λίμνη Βεγορίτιδα;",
        options:[
            {
                id:"0",
                answer:"Πρέβεζα",
            },
            {
                id:"1",
                answer:"Νυδρί",
            },
            {
                id:"2",
                answer:"Λευκάδα",
            },
            {
                id:"3",
                answer:"Λευκίμμη",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/capitals/lefkada.jpg'),
        imgMap: require('../../assets/maps/N.Lefkadas.png'),
        nomos: 'Λευκάδας',
        capital: 'Λευκάδα'
    },
    {
        id: 20,
        question: "Πόσα τριεθνή σημεία έχει η Ελλάδα;",
        options:[
            {
                id:"0",
                answer:"Πρέβεζα",
            },
            {
                id:"1",
                answer:"Νυδρί",
            },
            {
                id:"2",
                answer:"Λευκάδα",
            },
            {
                id:"3",
                answer:"Λευκίμμη",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/capitals/lefkada.jpg'),
        imgMap: require('../../assets/maps/N.Lefkadas.png'),
        nomos: 'Λευκάδας',
        capital: 'Λευκάδα'
    },
    {
        id: 21,
        question: "Σε ποιο νομό βρίσκονται τα Μετέωρα;",
        options:[
            {
                id:"0",
                answer:"Πρέβεζα",
            },
            {
                id:"1",
                answer:"Νυδρί",
            },
            {
                id:"2",
                answer:"Λευκάδα",
            },
            {
                id:"3",
                answer:"Λευκίμμη",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/capitals/lefkada.jpg'),
        imgMap: require('../../assets/maps/N.Lefkadas.png'),
        nomos: 'Λευκάδας',
        capital: 'Λευκάδα'
    },
    {
        id: 22,
        question: "Σε ποιο νομό βρίσκονται οι Δελφοί;",
        options:[
            {
                id:"0",
                answer:"Πρέβεζα",
            },
            {
                id:"1",
                answer:"Νυδρί",
            },
            {
                id:"2",
                answer:"Λευκάδα",
            },
            {
                id:"3",
                answer:"Λευκίμμη",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/capitals/lefkada.jpg'),
        imgMap: require('../../assets/maps/N.Lefkadas.png'),
        nomos: 'Λευκάδας',
        capital: 'Λευκάδα'
    },
    {
        id: 23,
        question: "Ποιο ελληνικό νησί έχει την μικρότερη έκταση;",
        options:[
            {
                id:"0",
                answer:"Πρέβεζα",
            },
            {
                id:"1",
                answer:"Νυδρί",
            },
            {
                id:"2",
                answer:"Λευκάδα",
            },
            {
                id:"3",
                answer:"Λευκίμμη",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/capitals/lefkada.jpg'),
        imgMap: require('../../assets/maps/N.Lefkadas.png'),
        nomos: 'Λευκάδας',
        capital: 'Λευκάδα'
    },
    {
        id: 24,
        question: "Σε ποιο νομό βρίσκεται η παραλία της Βοϊδοκοιλιάς;",
        options:[
            {
                id:"0",
                answer:"Πρέβεζα",
            },
            {
                id:"1",
                answer:"Νυδρί",
            },
            {
                id:"2",
                answer:"Λευκάδα",
            },
            {
                id:"3",
                answer:"Λευκίμμη",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/capitals/lefkada.jpg'),
        imgMap: require('../../assets/maps/N.Lefkadas.png'),
        nomos: 'Λευκάδας',
        capital: 'Λευκάδα'
    },
    {
        id: 25,
        question: "Πως αλλιώς ονομάζεταιν το Καστελόριζο;",
        options:[
            {
                id:"0",
                answer:"Τέλενδος",
            },
            {
                id:"1",
                answer:"Νυδρί",
            },
            {
                id:"2",
            },
            {
                id:"3",
                answer:"Γυαλί",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/capitals/lefkada.jpg'),
        imgMap: require('../../assets/maps/N.Lefkadas.png'),
        nomos: 'Λευκάδας',
        capital: 'Λευκάδα'
    },
]
export default questions1

