//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getMoon)

function getMoon(){
  const choice = document.querySelector('input').value
  const dateStr = `${choice}`;
  const date = new Date(dateStr);
  console.log(date)

  const unixTimestamp = Math.floor(date.getTime() / 1000);
  console.log(unixTimestamp)

  const url = `https://api.codetabs.com/v1/proxy?quest=https://api.farmsense.net/v1/moonphases/?d=${unixTimestamp+86400}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data[0].Phase)
        document.querySelector('h2').innerText = data[0].Phase
        if (data[0].Phase === "Full Moon"){
          document.getElementById('moonPhase').innerText = "It's time for FULL MOON magic!"
          document.querySelector('img').src = 'https://media.giphy.com/media/t9xC86uywfQ1G/giphy.gif'
        } else if (data[0].Phase === "New Moon"){
          document.getElementById('moonPhase').innerText = "It's time for that NEW MOON magic!"
          document.querySelector('img').src = 'https://media.giphy.com/media/TbOdCAtifvGH0X8eAG/giphy.gif'
        }else{
          document.getElementById('moonPhase').innerText = "No magic today. (j/k. You can do magic whenever you please!)"
          document.querySelector('img').src = '/Users/schipmoney/Desktop/100Devs/Class_Materials/class28-materials/Moon Pt 2/img/nomagic.jpg'
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

