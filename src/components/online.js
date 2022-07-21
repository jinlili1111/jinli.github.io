import useSWR from 'swr'
import styles from './layout.module.css'

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ server = "sg" }) {

  var host;
  var seraddress;
  if(server == "近离2.8服"){
        host = "zjjcyw.club:88"
        seraddress = "电脑：zjjcyw.club:88 手机：https://zjjcyw.club:88"
  } else if(server == "3.0beta"){
        host = "zjjcyw.club:66"
        seraddress = "电脑：zjjcyw.club:66 手机暂不支持"
  } else if(server == "备用")
  }

  const { data, error } = useSWR(
    `https://${host}/status/server`,
    fetcher
  );

  console.log("tes", data);

  var online = "?";
  if(data){
    if(data.status){
      if(data.status.playerCount){
        online = data.status.playerCount;
      }
    }
  }
  
  return (

      <div class="stat">
        <div class="stat-title">{server}</div>
        <div class="stat-value">{online}</div>
        <div class="stat-desc">在线人数</div>
        <div class="stat-desc">{seraddress}</div>
      </div>

  );
}
