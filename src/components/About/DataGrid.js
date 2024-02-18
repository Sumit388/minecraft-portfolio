import Styles from "../../styles/About/DataGrid.module.scss";
import { INFO_LIST } from "../../data/About/aboutData";

const DataGrid = () => {
  return (
    <section className={Styles.dataGrid}>
      {INFO_LIST.map((item) => (
        <div
          className={Styles.dataListItem}
          key={item.id}
          style={{
            gridColumn: `span ${item.colspan}`,
            gridRow: `span ${item.rowspan}`,
          }}
        >
          {item.title && <h3>{item.title}</h3>}

          <p>
            {item.description.map((line) => (
              <>
                {line}
                <br />
              </>
            ))}
          </p>
        </div>
      ))}
    </section>
  );
};

export default DataGrid;
