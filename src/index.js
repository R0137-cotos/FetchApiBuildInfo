import {fetchBuildInfo} from './api/FetchBuildInfo';
import {output} from './view/CuiView';

const domainUrl = `https://${process.argv[2]}.cotos.ricoh.co.jp`;
Promise.all(fetchBuildInfo(domainUrl)).then(output);
