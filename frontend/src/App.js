import Nav from "./Components/BasicComponents/Nav"
import NavigarionList from "./NavigarionList";
import { SnackbarProvider } from 'notistack';

export default function App() {
  return (
    <div>
      <div className='row m-3'>
        <div className="col-2">
          <Nav />
        </div>
        <div className="col-10">
          <SnackbarProvider >
            <NavigarionList />
          </SnackbarProvider>
        </div>
      </div>
    </div>
  );
}