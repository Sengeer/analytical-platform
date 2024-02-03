import { useCSVReader } from 'react-papaparse';
import './CSVReader.scss'

const styles = {
  csvReader: {
    display: 'flex',
    flexDirection: 'row-reverse',
    width: '100%',
  },
  browseFile: {
    backgroundColor: 'var(--main-accent)',
    color: 'var(--white)',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
    transition: 'all linear 0.2s',
    overflow: 'hidden',
    width: '20%',
  },
  remove: {
    backgroundColor: 'var(--main-accent)',
    color: 'var(--white)',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
    transition: 'all linear 0.2s',
    width: '20%',
    marginRight: '28px',
  },
};

export default function CSVReader({data, onChange}) {
  const { CSVReader } = useCSVReader();

  return (
    <CSVReader
      onUploadAccepted={data}
    >
      {({
        getRootProps,
        getRemoveFileProps,
      }) => (
        <>
          <div
            className="csv-reader"
            style={styles.csvReader}>
            <button
              className="csv-reader__btn"
              type="button" {...getRootProps()}
              style={styles.browseFile}>
              Обзор
            </button>
            <button {...getRemoveFileProps()}
              className="csv-reader__btn"
              style={styles.remove}
              onClick={onChange}>
              Очистить
            </button>
          </div>
        </>
      )}
    </CSVReader>
  );
}