const express = require('express');
const fs = require('fs')
const app = express();
const port = process.env.PORT || 8080;


const professionalData = {
    professionalName: 'Jared Malan',
    base64Image: base64Encode('professional-photo.JPG'),
    nameLink: {
        firstName: 'Jared ',
        url: '',
    },
    primaryDescription: 'Full Stack Developer',
    workDescription1: 'Experience in web development...',
    workDescription2: 'Skilled in JavaScript, HTML, CSS...',
    linkTitleText: 'Links:',
    linkedInLink: {
        text: 'LinkedIn',
        link: 'https://linkedin.com/in/jaredmalan7',
    },
    githubLink: {
        text: 'GitHub',
        link: 'https://github.com/JaredMalan7',
    },
}

function base64Encode(file) {
    const bitmap = fs.readFileSync(file)
    return Buffer.from(bitmap).toString('base64')
}


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    next()
})

// app.get('/', (req, res) => {
//     res.send('Welcome to the API')
// })

app.get('/professional', (req, res) => {
    res.json(professionalData)
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
