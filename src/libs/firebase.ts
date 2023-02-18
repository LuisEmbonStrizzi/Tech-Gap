import admin from "firebase-admin";
import firebaseAccountCredentials from "../libs/tech-gap-firebase-adminsdk-c7bzn-46e6c9479b.json";

// const serviceAccount = firebaseAccountCredentials as admin.ServiceAccount;

const serviceAccount = {
  project_id: "tech-gap",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCLQi7b8+yXH0Xz\n0gRBow0szcAsFywlo+yitZZqCunI/G9EAQSydj1EMfV60vazGJnMWNXnsbkwN/dl\nvLTPLhElrqtLTWcGftTkfkrJWu2fIxM0yD6nNQUIAlo44wvyMUQ+SCyEqjfWQrIQ\nsgYqmr82hfCMCbNZ5AbI78TDqEinIybtr/AbiEA9hFLX43WfIqeuKY0tnN/s1kEK\nslhwhDIfMSrT3KCsmLe7jZy5tEM7EQ6o8qRK23+hie7aU2G6ATyYOz0//s+pAv+g\n7qds/VJnpmWwB76SG4fU8xbG4p6spyNoceNUgY4uTzqJFbdDuM2fw8dAKu4sGADF\ng4GSjgx3AgMBAAECggEAFA+IfOKnx4ys64w//7fo1cudQ4diXS5pkCDfgPl/JxcH\nl5Yb9/IPg6uSD3ZPgoo93DxEiC1yc3nvIiaWggKYBsPMOjtKvEVODs0LTJ6pfL4K\nmL/AmB62UaqLwQZ4Dz9onh47MjCWfZTls4D/DBPMYs2AUvQHdEtkbNLEF2QTyeZl\n20jXh6JrkzFce7vSgJI8FN3+GaFmQtx99gAM6Wo6rPkcPYWbQga4xsrcBlT4Hc/W\nk40YD0Hdt7wKCxKf3u4mOlB4r6dmvPffNI3DI/DjOxfE5w7NfwUpXGE0tlWIWNAs\n/NT3EJLdmSyciYI6xaa3AKLItSVua4595w8jExjPZQKBgQDCkRjTzWbphTsfcTOz\nUwtzcScMuQC0OmvZ9Aa4Z+K/lO4x/ERegzAfsxCcy4/YXlr2Rc0wfmR2pxYEkvx+\n70FER+MlAkwlS9t6PjQz8O5uzcKvq+QZ6pSInPcjia/pE3oH4O3vCJs0urOMo+qg\ndP/qLU1VQWIsfQpIpoMti4LXQwKBgQC3On/ws/GuR5oAn5TrybkMOuSHuU33QY4y\nSfXip55Sc5klbmbDgdb4rfrGPWBIUB1iU8fDP7KPeOJm3aK9mb7ppRqnXcBgLD9K\n8pgvORSMFFZiwFohvxia+3tDUkBxgAQnYisqOHo3/TMHBL4S+5q/xUywxXFwwXRQ\njcCD+xRgvQKBgC4B83X6BxDHIWDg+tG3nGiS5CH9CS6U9fXW31PxtMuKovyM43nZ\n2aJVTGNXO091mFrNzKRf7s+j2PAB9dTqLGvB9/NDZNAY7PAuD1gM68SlwRibM9fx\nAWiAfWwY3dDmex+rz3eLeG/yigyCojOJFw6/4Z58VIOimbDuNuypJapTAoGAMlU0\nnhegVWK/8FnmG9t/JNfsvUfvHfP5LuFYVVn8SOQOdtTcD+rT9d49HEXx9Atl9wPS\nxVTzJSxs7RsHQJRCeIZtSvqbBRBClsELgzVn6o8Pp/L1D34iMTjSBI1MvKERAwyZ\nlPCMymKYqN3ppOdO/E0jow+p+PJ7lEFMWDUZxPUCgYAWhF3ImX7HZd8OVEwLIPpm\nmHa8Dr09wypyESHvhRimqJx9wbFRDjG793xD5LBl4ySq/7lt1/EcZOP1oiOfjFoq\ncsIK3j+7bc3K2KUl9Nluubf4slSbmHmqzdX+twfuCJdMPQzzA0uBZWXPoK+YO3HK\nEUPWpDImWxtpqdPmC2XiPQ==\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-c7bzn@tech-gap.iam.gserviceaccount.com",
} as admin.ServiceAccount;

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://tech-gap-default-rtdb.firebaseio.com/",
  });
}

export default admin.database();
