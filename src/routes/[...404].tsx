import { Title } from "solid-start";
import { HttpStatusCode } from "solid-start/server";

export default function NotFound() {
  return (
    <main>
      <Title>未找到该页面</Title>
      <HttpStatusCode code={404} />
      <h1>404 <small>页面不存在<small></h1>
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        对不起，未发现您要找的内容
      </p>
    </main>
  );
}
