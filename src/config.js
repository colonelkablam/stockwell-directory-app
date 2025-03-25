// // get the APIs and SHEET ID from the enviroment (locally .env otherwise from secret variables in netlify)
export const GOOGLEMAP_API_KEY = process.env.REACT_APP_ALTON_GOOGLEMAP_API_KEY;

//// below are all handled by serverless Netlify functions
// export const GOOGLESHEET_API_KEY = process.env.REACT_APP_ALTON_GSHEET_API_KEY;
// export const SHEET_ID = process.env.REACT_APP_ALTON_GOOGLESHEET_DATABASE_ID;
// export const SHEET_NAME = 'Directory';

export const GOOGLE_FORM_INPUT_EMBEDDED_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSci_1SdJrDYAdm4JhVigla1oy5yW9uBqIkNmQmSr8EZEN93jg/viewform?embedded=true";
export const GOOGLE_FORM_SUGGESTION_EMBEDDED_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSeln_gM-riOO_CVUQjRtukd479y6E_iMDysj5oxzTPuWjaEbA/viewform?embedded=true";
