import { FC } from 'react';
import SignupComponent from './components/auth/SignupComponent';

const App: FC = () => {
  return (
    <div className="h-full flex items-center">
      <SignupComponent />
    </div>
  );
};

export default App;
