import { useEffect, useState } from "react";
import "./Base.css";
// import dataLinks from "./data.json";

// const API_URL = 'http://localhost:4000/api/preview?url=';
// const API_URL = 'http://api-preview.vercel.app/api/preview?url=';
// const previewUrl = [
//   "https://www.stocksy.com/",
//   "https://www.westend61.de/",
//   "https://www.gettyimages.com/",
//   "https://www.plainpicture.com/",
//   "https://peopleimages.com/"
// ]

// type DataType = {
//   name: string;
//   stock: string[];
// }
// type BaseProps = {
//   data: DataType[];
// }

type DataType1 = {
  name: string;
  link: string;
}
type BaseProps1 = {
  data: DataType1[];
}

//эта функция позволяет получить данные
const getData = async (url: string) => {
  const res = await fetch(`${API_URL}` + url); //записываем в переменную ответ от сервера
  const data = await res.json(); //превращаем ответ в json
  return data; //возвращаем данные
}

export const Base = ({ data }: BaseProps1): JSX.Element => {

  const dataArray = data.map(item => item.name);
  console.log('dataArray', dataArray);
  const uniqueNames = Array.from(new Set(dataArray));
  console.log('uniqueNames', uniqueNames);

  const [dataPreviews, setDataPreviews] = useState<any>([]); //сюда сохраняем полученные превьюшки

  useEffect(() => {
    // getPreviews(previewUrl);
    mixData(); //вызываем эту функцию при монтировании компонента
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
        uniqueNames.map(({ title }) => (
          <>
            <h2 key="title">{title}</h2>
            <ul>
              {
                data.map(({ name, link }) => (
                  <>
                    if(name === title) {
                      <li key={name}>
                        <a href={link} target="_blank" rel="noreferrer">{link}</a>
                      </li>
                    }
                  </>
                ))
              }
            </ul>
          </>
        ))
      }

    </div>
  );
}

{/* {
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
      } */}