import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../styles/Extra.css';

const ExtraContent = () => {
  const value = 0.5;
  return (
    <div className="extra-content">
      <div className="progress">
        <div className="progressbar">
          <CircularProgressbar value={value} maxValue={1} />
        </div>
        <p className="completion">
          {`${value * 100}%`}
          {' '}
          <br />
          <span className="completed">Completed</span>
        </p>
      </div>
      <div className="text-content">
        <p>CURRENT CHAPTER</p>
        <h4>
          Chapter
          {` ${value}`}
        </h4>
        <button type="button" className="update">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

export default ExtraContent;
