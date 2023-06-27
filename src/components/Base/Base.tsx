import "./Base.css";
import { LinkPreview } from '@dhaiwat10/react-link-preview';

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
                    <div className="preview">
                    <LinkPreview url={item} width='100px' />
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