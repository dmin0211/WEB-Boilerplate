const express = require('express')
const {request} = require("express");
const router = express.Router()

router.get('/check', (req, res, next) => {
    const session = req.session
    if(session.key) {
        const {username, password} = session
        console.log(username, password)
        res.redirect('/')
    } else {
        res.redirect('/login')
    }

})

router.post('/login', (req, res, next) => {
    const session = req.session
    const {username, password} = req.body
    console.log(username, password)
    if (session.key) {
        res.redirect('/')
    } else {
        session.username = username
        session.password = password
        session.key = session.id
    }
})

router.delete('/logout', (res, req, next) => {
    const session = req.session
    session.destroy(error => {
        if(error) {
            res.json({error})
        } else {
            res.redirect('/')
        }
    })
})

module.exports = router