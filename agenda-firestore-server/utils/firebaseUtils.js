import * as admin from 'firebase-admin';

const serviceAccount = {
    "type": "service_account",
    "project_id": "agenda-server-f867a",
    "private_key_id": "3364b644e673d2182edd8df2897810defc6be644",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC9TcovnwYbGvj9\nNXeaiBUzR7PpT9IONQI8eML0XDwx1sC/ERrupGVP8ZmK1GKxliuT1pKM24P6jHzO\nb7AcRaJO05K8F/forEB0JB9Df8bytPHf/mHZx5bwPv1L2A3E0z3FZ0X3U0L7fzwp\n7XOIDj5tw8VDRouYVVTKzR/DbQ/7pcKorK3gUciL/j21UkQ24WzsxpoByCQODYZP\nv0eO4V+aBt7RsVW/ge4CVm2zQ1AjsmPWsjbVun0/0rmlyNECJuTp0FYIyUGotBu9\nhFzXQHsgSTEmHaqyQk73jCKoyDiVz7dVr1+a26JxklLThS5ERWUMDw+PYr/3YV0i\nDNCumd9BAgMBAAECggEAAVGqG3feEwAyqFmt2DWXrnBV1mdSxKGS3H/xdjStDnsD\nMP9oUkF2gd4dbj/ztvQtbULm17DjWHGL26FTTNlYYCmxLvHxYKu4ba3gQtgd8lz2\n9x/d3eOqZYwAmEJwBm4hO1LBMJvIYM/nsE/OljPNPF7hIklyBF8w8eUT2wTF3fG9\n7maWwEsTdxdxj3DDA/h7+XSK3LFAg//3DxuYyPcHm5WKeDGGjmRS8rOa9lJtqUwa\nnCXRhFSeJeh+o3FRUCGGpY5mpeCpRLX7589zKFNSNNgcVaI2WO4ObUNtEylhin0E\nBaEylPHBtJ5HU7l6WmXjZsAVtafA4scUTmq6sAnUBwKBgQDcK3jiPs0Aj8LumNhW\nHfHq9l0wcqGG8V6yJvsp5VyRRjOJEgXQEFUyii5l0kQ88LVjvLONp8ba/L1HIqME\ns1pC7zzQpmv/YPFnr/JPYD49g/nMBB94C5DciA087m2T+OpZaBBcm+TUUt7lSa/q\nOa1PUZ1mo8LkjlqOPTNyLaG8fwKBgQDcHGgel0dTgKl/X0bVv5YGYUuGphFjPXSX\nMSybM6js03FGNX0oNfIRt4qBG65irjXMyNt7glKVnK1FbATLO46RSWKr6kHlgUWv\nURks5Rmv0/qFTgBLtFKdV4t9Z1noj00xJe0sOJUthEofZAb/Hs8nvKwyrSl8yC7f\nB2gJD+WEPwKBgQCTLNgs3PAq3O7gkfmjb3cEqtVWinohe33itx4UPocncXcHvK14\nDUL2etpTJECLQBjw5/Zazfmm72YThDrW7JF8xvGvRGBTIVmeB0aB+wMAGhXEZEko\n9QpL8QJwZa2ISc9WHrM5RNitegwX168pco7Aw/zk3LluER7FkHGwdIJ2PwKBgQDN\nyj1KhJOqLXvLW2/lvkbs1iB/1lohV77e8JnMzWLdcN7SDoZihvU4vUpgZVoIZupj\n+VLDSdgeiyqw4kolHRyxF1SKeO19PvzA6ejIwbXfXyg1Y/UA0qn+82+2Il+7/+bi\n0ZvKIWjP8oQ+jw2/jrWNaGfyxVUplhvEZ69L8bHbjwKBgGe9CF6rjGG6BnYPJs+t\nUf5rfYmlsB+jAN63uOGzeB9SveWUvEOgRIRlN6lZYKc/wJE1/cMcz/Thub4tGSPX\nX9sfzeGY5iaNkUYHkzXuJA0uXAv9Q0gv/7nz8O+p4WjpkI9YIE45GvWSMDy6BqJ2\nU/Oo1eEKz++g/jcjOrfxQN+N\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-2cnc1@agenda-server-f867a.iam.gserviceaccount.com",
    "client_id": "110496954314132725644",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-2cnc1%40agenda-server-f867a.iam.gserviceaccount.com"
};


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://agenda-server-f867a.firebaseio.com"
});

export default admin.firestore();