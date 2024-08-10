
const apiKey = import.meta.env.VITE_APP_GIPHY_API;

async function fetchCardData() {
  try {
      const response = await fetch(`https://api.giphy.com/v1/gifs?api_key=${apiKey}&ids=RlktKWfBX1RAwSTPxz,QWvra259h4LCvdJnxP,XHdW0gCDj6KiFmKFCZ,fvSnAaFUjIqh6XXIFp,ehC4SqtNcEeLAiu66w,WCzGme5RtmUM7Fhl9f,UQDSBzfyiBKvgFcSTw,hEwnTrYovTP5GHAeZp,1ryvI707BC2n7pHhrL,hp3dmEypS0FaoyzWLR,H4cBu6XqKJtGujEXll,kyQfR7MlQQ9Gb8URKG,J4hEA5xCSDWyFmSN69,dxyawae0djPD2CTNyS&rating=g`);
      
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Error fetching data:', error);
      return null;
  }
}


function loadNeededInfo(arrayOfItems) {
    return arrayOfItems.map((item) => ({ 
        alt_text: item.alt_text,
        title: item.title,
        img: item.images.original.url,
        fixedImg: item.images.fixed_height.url
    }))
}

export {fetchCardData, loadNeededInfo}