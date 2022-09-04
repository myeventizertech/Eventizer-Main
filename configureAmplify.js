import Amplify from "-amplify";
import config from "./aws-exports";
Amplify.configure({ ...config, ssr: true });

