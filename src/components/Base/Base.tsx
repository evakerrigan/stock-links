import { useEffect, useState } from "react";
import "./Base.css";
// import { LinkPreview } from '@dhaiwat10/react-link-preview';

const API_URL = 'http://localhost:4000/api/preview?url=';
const previewUrl = [
  "https://www.stocksy.com/",
  "https://www.westend61.de/",
  "https://www.gettyimages.com/",
  "https://www.plainpicture.com/",
  "https://peopleimages.com/"
]

type DataType = {
  name: string;
  stock: string[];
}
type BaseProps = {
  data: DataType[];
}

const getData = async (url: string) => {
  const res = await fetch(`${API_URL}` + url);
  const data = await res.json();
  return data;
}

export const Base = ({ data }: BaseProps): JSX.Element => {

  const [dataPreviews, setDataPreviews] = useState<any>([]);

  useEffect(() => {
    // getPreviews(previewUrl);
    mixData();
  }, []);

  const getPreviews = async (urlArr: string[]) => {
    const data = urlArr.map(getData);
    const response = await Promise.all(data);
    const previews = response.map((item) => item.image);
    return previews;
    console.log('response', response);
  }

  const mixData = async () => {
    const previews = await getPreviews(previewUrl);
    const newData = data.map((item) => {
      if (item.name == 'stock') {
        return {
          ...item,
          previews: previews
        }
      }
      return item;
    })
    setDataPreviews(newData);
    console.log('newData', newData);

  }

  return (
    <div className="Base">
      <h1>Stock Links</h1>
      {
        dataPreviews && dataPreviews.map(({ name, stock, previews }) => (
          <div key={name}>
            <h2>{name}</h2>
            <ul>
              {
                stock.map((item, index) => (
                  <li key={item}>
                    <div className="preview">
                      {previews &&
                        <img src={
                          previews[index] ? previews[index] : "https://via.placeholder.com/150"
                          } alt="" className="preview-image" />}
                    </div>
                    <a href={item} target="_blank" rel="noreferrer">{item}</a>
                  </li>
                ))
              }
            </ul>
          </div>
        ))
      }

    </div>
  );
}