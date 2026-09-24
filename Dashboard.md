# My Dashboard - Project Brief

## What is this?
A single-page analytics dashboard showing monthly business metrics. 
Think Shopify admin or a simple Google Analytics view. 

## Data 
Generate a fake dataset as a JSON file (src/data/metrics.json).
12 months of data (Jan-Dec 2025), each month containing: 
-revenue (dollar amount, trending upward with some variation)
-vistors (number, seasonal patter - higher in summer)
-conversions (perscentage, fluctuates between 2-5%)
-orders (number, correlates loosley with visitors)

## Layout (Vuetify)
-v-app-bar at the top with the dashboard title and month picker 
-the month picker should default to showing all months 
-When a specific month is selected, all cards and charts filter to that month. When "all" is seleced, show the full year. 
-Below the app bar:  a row of 4 symmary cards (v-card) showing the key metrics - revenue, visitors, conversions, orders 
-Below the cards: a row of 2 charts 
-Left: Bar chart showing monthly revenue 
-Right: Line chart showing visitors over time
-Below that: one full-width area chart showing conversions trend 
-Use v-container, v-row, v-col for response grid layout

## Interactions
-Month picker in the app bar filters EVERYTHING - summary cards show that month's numbers, charts highlight or filter to that month
-When "all" is slected, summary cards show yearly totals/averages and charts show all 12 months  
-Cards should show a small up/down arrow or color indicating change from previous month 

## Style 
-Dark theme by deauflt (Vuetify dark theme)
-Clean, minimal, lots of whitespace
-Charts should use a cohesive color paletter - not rainbow 
-Mobile responsive, cards stak on small screens

## Tech 
-Vue 3 + TypeSCript + Vuetify 3
-Chart.js via vue-chartsjs for all charts 
-Fake data from a local JSON file (no API calls)
-Single page - no routing needed for this app
