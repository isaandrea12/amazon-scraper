# Amazon Scraper

This API allows you to scrape Amazon data such as products details, product reviews, product offers and search results.

```
npm run dev
```

## Endpoints

### Product Details

GET `/products/:productId`

Returns product details.

### Product Reviews

GET `/products/:productId/reviews`

Returns a product's reviews.

### Product Offers

GET `/products/:productId/offers`

Returns product offers.

### Product Search Results

GET `/search/:searchQuery`

Returns product's search results.
