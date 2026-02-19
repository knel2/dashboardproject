mapboxgl.accessToken = 'pk.eyJ1Ijoia25lbDIiLCJhIjoiY21rdTlkYmx5MThyZjNmcHVrMDYzdXJ4dyJ9.HrXpvWOlXxo7fGCGnGQG6A'

    let map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/dark-v10',
      zoom: 5,
      minZoom: 5,
      center: [138, 38]
    })