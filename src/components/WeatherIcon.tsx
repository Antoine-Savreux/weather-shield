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
      return <Sun strokeWidth={1.5} size={300} />;
      break;
    case 1003:
      return <CloudSun strokeWidth={1} size={200} />;
      break;
    case 1006:
      return <Cloud strokeWidth={1} size={200} />;
      break;
    case 1009:
      return <Cloudy strokeWidth={1} size={200} />;
      break;
    case 1030:
      return <CloudFog strokeWidth={1} size={200} />;
      break;
    case 1063:
      return <CloudRain strokeWidth={1} size={200} />;
      break;
    case 1066:
      return <CloudSnow strokeWidth={1} size={200} />;
      break;
    case 1069:
      return <CloudSnow strokeWidth={1} size={200} />;
      break;
    case 1072:
      return <Snowflake strokeWidth={1} size={200} />;
      break;
    case 1087:
      return <CloudLightning strokeWidth={1} size={200} />;
      break;
    case 1114:
      return <CloudSnow strokeWidth={1} size={200} />;
      break;
    case 1117:
      return <CloudSnow strokeWidth={1} size={200} />;
      break;
    case 1135:
      return <CloudFog strokeWidth={1} size={200} />;
      break;
    case 1147:
      return <CloudFog strokeWidth={1} size={200} />;
      break;
    case 1150:
      return <CloudDrizzle strokeWidth={1} size={200} />;
      break;
    case 1153:
      return <CloudDrizzle strokeWidth={1} size={200} />;
      break;
    case 1168:
      return <CloudDrizzle strokeWidth={1} size={200} />;
      break;
    case 1171:
      return <CloudDrizzle strokeWidth={1} size={200} />;
      break;
    case 1180:
      return <CloudRain strokeWidth={1} size={200} />;
      break;
    case 1183:
      return <CloudRain strokeWidth={1} size={200} />;
      break;
    case 1186:
      return <CloudRain strokeWidth={1} size={200} />;
      break;
    case 1189:
      return <CloudRain strokeWidth={1} size={200} />;
      break;
    case 1192:
      return <CloudRain strokeWidth={1} size={200} />;
      break;
    case 1195:
      return <CloudRain strokeWidth={1} size={200} />;
      break;
    case 1198:
      return <CloudRain strokeWidth={1} size={200} />;
      break;
    case 1201:
      return <CloudRain strokeWidth={1} size={200} />;
      break;
    case 1204:
      return <Cloudy strokeWidth={1} size={200} />;
      break;
    case 1207:
      return <Cloudy strokeWidth={1} size={200} />;
      break;
    case 1210:
      return <CloudSnow strokeWidth={1} size={200} />;
      break;
    case 1213:
      return <CloudSnow strokeWidth={1} size={200} />;
      break;
    case 1216:
      return <CloudSnow strokeWidth={1} size={200} />;
      break;
    case 1219:
      return <CloudSnow strokeWidth={1} size={200} />;
      break;
    case 1222:
      return <CloudSnow strokeWidth={1} size={200} />;
      break;
    case 1225:
      return <CloudSnow strokeWidth={1} size={200} />;
      break;
    case 1237:
      return <Snowflake strokeWidth={1} size={200} />;
      break;
    case 1240:
      return <CloudRain strokeWidth={1} size={200} />;
      break;
    case 1243:
      return <CloudRain strokeWidth={1} size={200} />;
      break;
    case 1246:
      return <CloudRain strokeWidth={1} size={200} />;
      break;
    case 1249:
      return <CloudSnow strokeWidth={1} size={200} />;
      break;
    case 1252:
      return <CloudSnow strokeWidth={1} size={200} />;
      break;
    case 1255:
      return <CloudSnow strokeWidth={1} size={200} />;
      break;
    case 1258:
      return <CloudSnow strokeWidth={1} size={200} />;
      break;
    case 1261:
      return <Snowflake strokeWidth={1} size={200} />;
      break;
    case 1264:
      return <Snowflake strokeWidth={1} size={200} />;
      break;
    case 1273:
      return <CloudRain strokeWidth={1} size={200} />;
      break;
    case 1276:
      return <CloudRain strokeWidth={1} size={200} />;
      break;
    case 1279:
      return <CloudSnow strokeWidth={1} size={200} />;
      break;
    case 1282:
      return <CloudSnow strokeWidth={1} size={200} />;
      break;
  }
}
