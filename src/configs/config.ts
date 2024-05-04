import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { GoogleDriveConfig } from 'nestjs-googledrive-upload';

export const typeOrmOptions = {
  type: 'postgres',
  url: process.env.POSTGRES_URL,
  host: process.env.POSTGRES_HOST || 'localhost',
  port: process.env.POSTGRES_PORT || 5432,
  password: process.env.POSTGRES_PASSWORD || 'admin',
  username: process.env.POSTGRES_USERNAME || 'postgres',
  entities: [`${__dirname}/../entities/*.entity{.ts,.js}`],
  migrations: [`${__dirname}/../migrations/*{.ts,.js}`],
  migrationsRun: true,
  database: process.env.POSTGRES_DATABASE || 'go-a-fit',
  synchronize: false,
  logging: true,
} as TypeOrmModuleOptions;

export const googleApiOptions = {
  type: 'service_account',
  project_id: 'go-a-fit',
  private_key_id: 'a5c055fa48630690cef141ef062fbeb2f0dbfab8',
  private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCyu0oTJeuRuo0t\nnYqzbYoPpLnYLB0tECrD0W/HL32fzzs/cudmMWbW+pMkDo8DjruR1XoyQ77Uq3pc\ngXy1GwkEHrhE1SNJDvKZez/qigW1MN3Hp0W+oxeB9YFE5D2R+Eh6iIdQI85w9HNa\nccnVkmbm8eRScYubeta4mwTfjdQXveAIBf40OhPjva+KMsi6qLVH9rzCcMsOT2+h\ny0s9wUhEKDY8gULGuRKsPtAfvsh0wHqogI810hJ4dKk064uUPdrSFIZaLmBm9DF8\nbQTu4jI6BBTgIVVfoMXnRnEVbkaCxy+7xfR7kzCrZ62JAXuECyzixZpGMUeAvVnZ\nnP2uBa89AgMBAAECgf884m8rs/CUhkph6anFlokxYPizebKp3DGfRPHJanDqCMIk\nP59HPXqoI8YOPrQsVFs1oS0s7ponUNxjaJuJoSLkVNvMId2jRZNbLgH8gpamBw/s\nIP7D+0rKZnLQdJCpXfsmyfFrlAjTOsphTFbkl9Clh0h8X3cT3SHPZa7psxvJO+lG\naZtyRTfJ5vwpX8KHHqBgm9rjXW1IW6wPkJT9uqu/l/r488pYh8he1YQAVdgi584k\nhMMTkDonK1TtF8xaY5uJ5IcIm5EnzWv9AV/lYGFg76fftS5XXlr9GW8WFJjqUTyc\nTe3HSD09Q3RGAbvmqyG51xvH4Yz/AGAp4CnnzQECgYEA/FgUtsXizaiU6oNFo2tF\nDqWKmxIrbHpxbP9nGgntWoKkWd+ROMsUHgfzURbDH5QbjMI1x+WiYYvB7louoJxD\n7MUET1w4ozx0hPYAXQ8Q7R6p/t18jsSC59ur22Jks7tC9C0+1MibVxYAcjK18t6F\n6eX5Wf6Lr9+VmO4A+AUt+j0CgYEAtVIv5mgC62Q37EfRLI9BZbnS+BNkQNoSGiWm\nAuiPtH6q9z0d8T7+7hjkOiKE+NQLBuDKli2z9/VeVgLcghOg44xm7wPahTnv5iw5\nOZlMZrmCCLqkMgHyExgrs6nE6LLByf7L01zMelib0WcEMwK81fg0QbpPbOvrzgXx\nEpxC2QECgYEA1g858xnGncMGIDGfX1Ndz2DqRUWShIERuu6lXVdSe1cbaAnYvR64\nQAlqhD0U5LLU9ADDcoD/0FOn/TOPHjuw+ybd0xxeB0r/ZNLx1/8x0pQSjNsCEHHu\nwhR8oqvC1RxjXZMMG6DY9XT6h+Uwp4fQfWvSrF7bzCOUWZh8RejO6dkCgYEApTi8\n2RDSCDiMFMvkONxY1R8ctFzHL6kGcbj4qxHLUMdTdnLEg/3JQqB/5tFppWtimOPg\n9jOzGDEHwwxcblMAehiH+yfhySBgD7cgdfHQgpJrgRTBZagMM4YE3HPIL9ojZ7K7\nfF/FG37+jTN3yhumgrrmszXYBgJ8HoGfiDvHVgECgYEAipJFxBC10zzyDb48Mn2X\nDn+rqku4rh2mdumrxu9Paktzz3pf0/qSOreLx9347wjctOGVHCoyWa87TtF71JX1\nSxW6lJGWF56mo3NmdA0qzpCsPXdX4VPVMqxIm+23JIn/pDXrHDwq9nvH7HSe0AZm\nqUbKHXaIAbIIxLnspOOyVVU=\n-----END PRIVATE KEY-----\n',
  client_email: 'go-a-fit@go-a-fit.iam.gserviceaccount.com',
  client_id: '116337275725584316879',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url: 'https://www.googleapis.com/robot/v1/metadata/x509/go-a-fit%40go-a-fit.iam.gserviceaccount.com',
  universe_domain: 'googleapis.com',
} as GoogleDriveConfig;

export const GOOGLE_API_FOLDER_ID = '1X9EOZrvMOW6Fd0wF24gNSMvwt-p1uo0R';

export default {
  db: typeOrmOptions,
  google: googleApiOptions,
};