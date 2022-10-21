const axios = require ("axios");
const cheerio = require("cheerio");
const express = require("express");
require("dotenv").config();

const app = express()
const PORT = process.env.PORT


app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))

const url ="https://torontolife.com/food/torontos-best-cafeto-patios-for-summer-2022/"

axios(url)
  .then(res => {
    const html = res.data
    const $ = cheerio.load(html)
    const patioArr = []
    $('.article-link', html).each(function() {
      const bar = $(this).text()
      const link = $(this).attr('href')
      patioArr.push({
        bar,
        link
      })
    })
    console.log(patioArr)
  })
  .catch(err => console.log(err))

