const express = require('express')
const request = require('request-promise')

const PORT = process.env.PORT || 3000
const app = express()

const generateScraperUrl = (apiKey) => `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`

app.use(express.json())

// Welcome route
app.get('/', async (req, res) => {
    res.send('Welcome to Amazon Scraper API!')
})

// GET product details
app.get('/products/:productId', async (req, res) => {
  const { productId } = req.params
  const { api_key } = req.query

  try {
      const response = await request(`${generateScraperUrl(api_key)}&url=https://www.amazon.com/dp/${productId}`)
      console.log('Response:', response);
      res.json(JSON.parse(response))
  } catch (error) {
      res.json(error)
  }
});

// GET product reviews
app.get('/products/:productId/reviews', async (req, res) => {
  const { productId } = req.params
  const { api_key } = req.query

  try {
      const response = await request(`${generateScraperUrl(api_key)}&url=https://www.amazon.com/product-reviews/${productId}`)
      console.log('Response:', response);
      res.json(JSON.parse(response))
  } catch (error) {
      res.json(error)
  }
});

// GET product offers
app.get('/products/:productId/offers', async (req, res) => {
  const { productId } = req.params
  const { api_key } = req.query

  try {
      const response = await request(`${generateScraperUrl(api_key)}&url=https://www.amazon.com/gp/offer-listing/${productId}`)
      console.log('Response:', response);
      res.json(JSON.parse(response))
  } catch (error) {
      res.json(error)
  }
});

// GET search results
app.get('/search/:searchQuery', async (req, res) => {
  const { api_key } = req.query
  const { searchQuery } = req.params

  try {
      const response = await request(`${generateScraperUrl(api_key)}&url=https://www.amazon.com/s?k=${searchQuery}`)
      console.log('Response:', response);
      res.json(JSON.parse(response))
  } catch (error) {
      res.json(error)
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})


