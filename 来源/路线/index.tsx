import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Chei 豆二连</Title>
      <h1>欢迎访问 chei 豆二连</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        <small>点击此处为 chei 豆二连助力吧！
        <br/>
        <br/>
        ·建立时间：公元 2022 年 9 月 1 日（永生不灭）
                <br/>
                <br/>
                ·建立者：shie
                <br/>
                <br/>
                ·国号：chei
                <br/>
                <br/>
                ·帝都：生京
        <br/>
        <a href="http://www.python.org" style="float: right">了解更多 &raquo;</a>    
       </p>
    </main>
  );
}
