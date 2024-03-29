# React

## 이미지 저장소 `public` vs `assets`

### `public` 폴더

이미지를 `public` 폴더에 저장하면 `index.html` 또는 `index.css` 파일 내에서 **직접 참조**할 수 있습니다.

이렇게 하는 이유는 `public`에 저장된 이미지 (또는 일반적으로: 파일)이 프로젝트 개발 서버 및 빌드 프로세스에 의해 **공개적으로 제공**되기 때문입니다. `index.html` 과 마찬가지로, 이 파일들은 브라우저 내에서 직접 방문할 수 있으며, 따라서 다른 파일에 의해 요청될 수도 있습니다.

예를 들어, `localhost:5173/some-image.jpg`를 불러오면 해당 이미지를 볼 수 있습니다 (물론 `public` 폴더에 이미지가 있을 경우).

### `src/assets` 폴더

이미지를 `src/assets` 폴더 (또는 실제로는 `src` 폴더의 어디든)에 저장할 수도 있습니다.

그렇다면 `public`와 비교해 어떤 차이가 있을까요?

`src` 또는 `src/assets`와 같은 하위 폴더에 저장된 모든 파일(어떤 형식이든)은 공개적으로 제공되지 않습니다. 웹사이트 방문자가 접근할 수 없습니다. `localhost:5173/src/assetssome-image.jpg`를 불러오려고 하면 오류가 발생합니다.

대신, `src`( 및 하위 폴더)에 저장된 파일은 코드 파일에서 사용할 수 있습니다. 코드 파일에 가져온 이미지는 빌드 프로세스에 의해 인식되어 최적화되며, 웹사이트에 제공하기 직전에 `public` 폴더에 "삽입"됩니다. 가져온 이미지는 참조한 위치에서 자동으로 링크가 생성되어 사용됩니다.

### 어떤 폴더를 사용해야 할까요?

**빌드 프로세스에 의해 처리되지 않는** 이미지는 `public` 폴더를 사용해야 하고 **대체적으로 사용 가능** 가능합니다. 예를 들면 `index.html` 파일이나 파비콘과 같은 이미지가 좋은 후보입니다.

반면, **컴포넌트 내**에서 사용되는 이미지는 일반적으로 `src` 폴더(예: `src/assets`)에 저장되어야 합니다.

## 모달을 ESC(Escape) 키로 닫기

`<dialog>` 요소를 사용하면 웹사이트 방문자가 키보드의 `ESC`(Escape) 키를 눌러 열린 대화창을 닫을 수 있습니다.

`ESC` 키로 대화창을 닫을 때 `onReset` 함수를 트리거되도록 하려면 `<dialog>` 요소에 내장된 `onClose` 속성을 추가하고 그 값을 `onReset` 속성에 바인딩해야 합니다.

# NextJS

The React Framework for Production

- You still write React code, you still build React components and use React features (props, state, context, ...) <br> NextJS just enhances your React apps and adds more features

- Lots of built-in features (e.g. routing) that help you solve common problems & clear guidance on how to use those features

- There are certain problems which you will need to solve for almost all production-ready React apps: NextJS solves those for you

## Key Features & Benefits

### Server-side Rendering

- Automatic page pre-rendering: Great for SEO and initial load

- Blending client-side and server-side: Fetch data on the server and render finished pages

### File-based Routing

- Define pages and routes with files and folders instead of code

- Less code, less work, highly understandable

### Fullstack Capabilities

- Easily add backend (server-side) code to your Next / React apps

- Storing data, getting data, authentication etc. can be added to your React projects
