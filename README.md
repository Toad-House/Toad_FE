## 실행
```$ yarn install``` <-- yarn 설치 후 yarn install로 dependencies 다운로드<br/> 
```$ yarn start``` <-- 빌드 명령어

## 폴더 구조

> /src
>   - /assets
>  - /components
>   - /context
>   - /hooks
>   - /pages
>   - /utils
> 

### assets

공통으로 사용하는 정적 파일들을 저장하는 곳. 이미지/SVG파일/글로벌한 css 같은 자산들을 포함

### components

재사용가능한 컴포넌트들을 저장. 

### context

공통으로 사용하는 컨텍스트, 상태. 전역 상태나 테마와 같은 공통된 데이터 처리

### hooks

공통으로 사용하는 훅들. 재사용 가능한 커스텀 훅들을 저장하는 공간. 

### pages

각각의 페이지를 별도의 디렉토리로 나눠서 구성. 해당 페이지에 필요한 컴포넌트 및 관련 파일들을 포함.

### utils

유틸 함수들. 각 유틸함수는 순수 함수로 구성한다. 

(파일 하나당 유틸 함수 하나만 export 하고 디렉토리 내부에 index.js를 둬서 재 export하게 해서 사용)
