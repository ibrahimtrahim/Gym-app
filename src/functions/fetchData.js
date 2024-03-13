export const exerciseOptions = {
        method: 'GET',
        params: {limit: '10'},
        headers: {
          'X-RapidAPI-Key': 'fd6eeac25dmshf991852d1047bf0p1701cbjsn0712625dcd3e',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};



export const fetchData = async(url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}
