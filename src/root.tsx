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
        <style>
        body {
            background-image: url(images/clouds-sky.bmp);;
            font-size: 0.8em;
            margin: 0px;
        }

        nav, section, article {
            margin: 0px;
            padding: 8px;
        }

        header, footer {
            background-color: #328db5;
            color: white;
            margin: 0px;
            padding: 5px;
            padding-left:16px;
           

        }


        nav ul {
            margin: 0;
            padding: 0;
        }

            nav ul li {
                display: inline;
                margin: 5px;
            }
            
        p {
            color: grey;
        }

        .bar{
            margin: 0px;
            padding: 0px;
            width: 100%;
            hieght: 32px;
            background-color: rgba(250,250,250,0.4);
            border-radius: 20px;
        }
    </style>
      </Head>
      <Body>
        
    <header>
        <h1>欢迎访问chei豆二连</h1>
    </header>

    <nav>
        <ul class="bar">
            <li><a href='#' style="color: #328db5">主页</a></li>
            <li><a href='#' style="color: lightblue">成员</a></li>
            <li><a href='#' style="color: lightblue; float: right; padding-right: 16px">消息</a></li>
        </ul>
    </nav>

    <section>

        <h1 style="color: steelblue">chei豆二连</h1>

        <article>
            <h2 style="color: lightblue">公告栏</h2>
            <p style="color: grey">
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
            </p>
          </article>

          </section>

          <!-- <footer>
          <p>&copy; 2020 App Name . All rights reserved.</p> 
        </footer> -->
      </Body>
    </Html>
  );
}
