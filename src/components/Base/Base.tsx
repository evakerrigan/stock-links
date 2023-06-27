import "./Base.css";

type DataType = {
  name: string;
  stock: string[];
}

type BaseProps = {
  data: DataType[];
}

export const Base = ({ data }: BaseProps): JSX.Element => {
  return (
    <div className="Base">
      <h1>Stock Links</h1>
      {
        data.map(({ name, stock }) => (
          <div key={name}>
            <h2>{name}</h2>
            <ul>
              {
                stock.map((item) => (
                  <li key={item}>
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