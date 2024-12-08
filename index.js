import { writeFileSync } from 'node:fs';
import Parser from "rss-parser";

/**
 * README.MD
 */

let text = `
<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=87C7FF&height=150&section=header&text=%20&fontColor=ffffff&fontAlign=81&fontAlignY=38&fontSize=60" />
<h1>Hello, I'm Sol 🌲</h1>

![KakaoTalk_20220719_145246768](https://user-images.githubusercontent.com/101856058/179705838-fec005aa-af82-4638-9846-9e88121ee48d.gif)
![KakaoTalk_20220719_145246768_02](https://user-images.githubusercontent.com/101856058/179705856-23e5d29c-6dfd-46d8-9335-a097dccdc2d9.gif)


<h3>🛠 Tech Stack 🛠</h3>
<p>🌞 Used as a main tech</p>
<div>
<img src="https://img.shields.io/badge/Java-007396?style=flat-square&logo=Java&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/Spring-6DB33F?style=flat-square&logo=spring&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=flat-square&logo=springboot&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=Javascript&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=CSS3&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/>
</div>
<div>
<img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/Oracle-F80000?style=flat-square&logo=Oracle&logoColor=white"/></div><br/>
<br>

<p>🌙 Used at least once in a personal project </p>
<img src="https://img.shields.io/badge/Bootstrap-7952B3?style=flat-square&logo=Bootstrap&logoColor=white"/>
<img src="https://img.shields.io/badge/Apache Tomcat-F8DC75?style=flat-square&logo=Apache Tomcat&logoColor=white"/>
<img src="https://img.shields.io/badge/jQuery-0769AD?style=flat-square&logo=jQuery&logoColor=white"/><br/>
<br><br>

<h3>✨ DevOps ✨</h3>
<img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/>
<img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/>
<img src="https://img.shields.io/badge/GitLab-181717?style=flat-square&logo=GitHub&logoColor=white"/>
<br/>

<h3>✨ Cowork Tools / IDE ✨</h3>
<img src="https://img.shields.io/badge/IntelliJ-000000?style=flat-square&logo=IntelliJ IDEA&logoColor=white"/>
<img src="https://img.shields.io/badge/Eclipse-2C2255?style=flat-square&logo=Eclipse IDE&logoColor=white"/>
<br/>
<br><br>

<h3>☁ My SNS / Contact Me ☁</h3>
<a href="mailto:sorihs1210@gmail.com"><img src="https://img.shields.io/badge/Gmail-EA4335?style=flat-square&logo=Gmail&logoColor=white&link=sorihs1210@gmail.com"/></a>&nbsp;
<a href="https://rlathfs.tistory.com"><img src="https://img.shields.io/badge/Tistory-FF7F00?style=flat-square&logo=Tistory&logoColor=white&link=https://rlathfs.tistory.com"/></a>
<a href="https://haerang1210.notion.site/bd474e2b388a41f19320e58ff6d56fa5"><img src="https://img.shields.io/badge/Resume-000000?style=flat-square&logo=Notion&logoColor=white&link=https://haerang1210.notion.site/Kim-Sol-65fe13dbcbe143f6bd36986b625d9aa0"/><br/>
<br><br>

<h3>📕 Latest Blog Posts</h3>
<ul>
`;

// rss-parser 생성
const parser = new Parser({
    headers: {
        Accept: 'application/rss+xml, application/xml, text/xml; q=0.1',
    }});

(async () => {

    // 피드 목록
    const feed = await parser.parseURL('https://rlathfs.tistory.com/rss');

    // 최신 5개의 글의 제목과 링크를 가져온 후 text에 추가
    for (let i = 0; i < 5; i++) {
        const {title, link} = feed.items[i];
        console.log(`${i + 1}번째 게시물`);
        console.log(`추가될 제목: ${title}`);
        console.log(`추가될 링크: ${link}`);
        text += `<li><a href="${link}" target="_blank">${title}</a></li>`;
    }

    text += `
        </ul>
        </div>
    `;

    // README.md 파일 작성
    try {
        writeFileSync('README.md', text, 'utf8');
        console.log('업데이트 완료');
    } catch (e) {
        console.error('파일 작성 중 오류 발생:', e);
    }

    console.log('업데이트 완료')
})();