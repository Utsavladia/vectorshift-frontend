import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import './App.css';

function App() {
  return (
    <div className="appFlexRoot">
      <div className="pipelineLeft">
        <PipelineUI />
      </div>
      <div className="pipelineRight">
        <div className="toolbarTop">
          <PipelineToolbar />
        </div>
        <div className="buttonBottom">
          <SubmitButton />
        </div>
      </div>
    </div>
  );
}

export default App;
