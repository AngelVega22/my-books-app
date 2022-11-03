const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt')
const db = require('../database/connection')
const router = express.Router()




module.exports = router;