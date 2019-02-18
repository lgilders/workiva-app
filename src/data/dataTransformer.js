import dayjs from 'dayjs'

// transform raw JSON data into format expected by chartJS
const summarize = rawData => {
  if (!rawData || !Array.isArray(rawData)) {
    throw Error('rawData for Charts was missing or is not an array.')
  }

  const data = { // setup defaults for chart graph
    labels: [],
    datasets: [{
        label: 'Total Revenue By Year',
        backgroundColor: [
            'rgba(0, 148, 255, 0.3)'
        ],
        borderColor: [
            'rgba(102, 204, 0, 1)'
        ],
        borderWidth: 2,
      data: []
    }]
  }

  const grouping = {}
  rawData.forEach( item => {
    // grab the year from the timestamp and use it as a key in the grouping 
    const year = dayjs(item.timestamp).year()
    if (!grouping[year]) {
      grouping[year] = 0 // if it's the first time a year has been seen, set its revenue as 0
    }
    // grab the revenue from the card
    const revenue = Number(item.revenue)
    if (!isNaN(revenue))
      grouping[year] += revenue // add the revenue to the existing revenue for that year
    else
      console.warn(`Revenue value that is NaN found on "${item.name}".`)
  })
  

  Object.keys(grouping).sort().forEach( year => { // reorder the years from least to greatest
    data.labels.push(year) // create labels array for chart
    data.datasets[0].data.push(grouping[year]) // create data array for chart
  })

  return data
}

export {
  summarize
}
