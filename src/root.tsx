// @refresh reload
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>这里是 chei 豆二连</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        · 建立时间：公元2022年9月一日
        <br/>
        <br/>
        · 建立者：chei
        <br/>
        <br/>
        · 国号：chei
        <br/>
        <br/>
        · 帝都：生京
        <br/>
        <br/>
        <a href="http://www.baidu.com">了解更多 &raquo;</a>
        <Scripts />
      </Body>
    </Html>
  );
}
