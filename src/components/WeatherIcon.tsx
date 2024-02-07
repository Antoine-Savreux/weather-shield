import {
  Sun,
  CloudSun,
  CloudDrizzle,
  Cloud,
  Cloudy,
  CloudFog,
  CloudRain,
  CloudSnow,
  Snowflake,
  CloudLightning,
} from "lucide-react";

export default function WeatherIcon({ code }: { code: number }) {
  switch (code) {
    case 1000:
      return <Sun />;
      break;
    case 1003:
      return <CloudSun />;
      break;
    case 1006:
      return <Cloud />;
      break;
    case 1009:
      return <Cloudy />;
      break;
    case 1030:
      return <CloudFog />;
      break;
    case 1063:
      return <CloudRain />;
      break;
    case 1066:
      return <CloudSnow />;
      break;
    case 1069:
      return <CloudSnow />;
      break;
    case 1072:
      return <Snowflake />;
      break;
    case 1087:
      return <CloudLightning />;
      break;
    case 1114:
      return <CloudSnow />;
      break;
    case 1117:
      return <CloudSnow />;
      break;
    case 1135:
      return <CloudFog />;
      break;
    case 1147:
      return <CloudFog />;
      break;
    case 1150:
      return <CloudDrizzle />;
      break;
    case 1153:
      return <CloudDrizzle />;
      break;
    case 1168:
      return <CloudDrizzle />;
      break;
    case 1171:
      return <CloudDrizzle />;
      break;
    case 1180:
      return <CloudRain />;
      break;
    case 1183:
      return <CloudRain />;
      break;
    case 1186:
      return <CloudRain />;
      break;
    case 1189:
      return <CloudRain />;
      break;
    case 1192:
      return <CloudRain />;
      break;
    case 1195:
      return <CloudRain />;
      break;
    case 1198:
      return <CloudRain />;
      break;
    case 1201:
      return <CloudRain />;
      break;
    case 1204:
      return <Cloudy />;
      break;
    case 1207:
      return <Cloudy />;
      break;
    case 1210:
      return <CloudSnow />;
      break;
    case 1213:
      return <CloudSnow />;
      break;
    case 1216:
      return <CloudSnow />;
      break;
    case 1219:
      return <CloudSnow />;
      break;
    case 1222:
      return <CloudSnow />;
      break;
    case 1225:
      return <CloudSnow />;
      break;
    case 1237:
      return <Snowflake />;
      break;
    case 1240:
      return <CloudRain />;
      break;
    case 1243:
      return <CloudRain />;
      break;
    case 1246:
      return <CloudRain />;
      break;
    case 1249:
      return <CloudSnow />;
      break;
    case 1252:
      return <CloudSnow />;
      break;
    case 1255:
      return <CloudSnow />;
      break;
    case 1258:
      return <CloudSnow />;
      break;
    case 1261:
      return <Snowflake />;
      break;
    case 1264:
      return <Snowflake />;
      break;
    case 1273:
      return <CloudRain />;
      break;
    case 1276:
      return <CloudRain />;
      break;
    case 1279:
      return <CloudSnow />;
      break;
    case 1282:
      return <CloudSnow />;
      break;
  }
}
