import { logUICoverage } from './helpers/uiCoverageHelper';


const globalSetup = async () => {
  logUICoverage('ui-coverage.yaml');
};

export default globalSetup;
