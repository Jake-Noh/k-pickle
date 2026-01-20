# 🥬 절임무 무역업 홈페이지

한국 전통 절임식품을 전세계로 수출하는 무역 회사의 전문 웹사이트입니다.

## 📋 프로젝트 구조

```
pickled_radish_trade/
├── index.html          # 메인 HTML 파일
├── css/
│   └── style.css      # 스타일시트
├── js/
│   └── script.js      # JavaScript 파일
└── images/            # 이미지 폴더 (필요시 추가)
```

## ✨ 주요 기능

### 1. 반응형 디자인
- 데스크톱, 태블릿, 모바일 모든 기기에 최적화
- 모바일용 햄버거 메뉴
- 유연한 그리드 레이아웃

### 2. 페이지 구성
- **홈**: 히어로 섹션, 회사 통계
- **회사소개**: 회사 연혁, 인증 정보
- **제품**: 절임무, 김치, 절임채소, OEM/ODM
- **무역서비스**: 수출/수입/품질관리/물류
- **연락처**: 연락 정보 및 문의 폼

### 3. 인터랙티브 기능
- 스무스 스크롤 네비게이션
- 스크롤 시 활성 메뉴 표시
- 언어 전환 버튼 (한/영)
- 페이드인 애니메이션
- 통계 숫자 카운트 애니메이션
- 호버 효과

### 4. 문의 폼
- 회사명, 담당자명, 이메일, 연락처
- 문의 유형 선택
- 폼 유효성 검사

## 🚀 사용 방법

### 방법 1: 직접 열기
1. `index.html` 파일을 더블클릭하여 웹브라우저로 열기

### 방법 2: 로컬 서버 실행 (권장)
```bash
# Python 3 사용
cd pickled_radish_trade
python -m http.server 8000

# 또는 Python 2 사용
python -m SimpleHTTPServer 8000
```
그 후 브라우저에서 `http://localhost:8000` 접속

### 방법 3: VS Code Live Server
1. VS Code에서 프로젝트 폴더 열기
2. Live Server 확장 프로그램 설치
3. index.html 우클릭 → "Open with Live Server"

## 🎨 커스터마이징

### 색상 변경
`css/style.css` 파일 상단의 CSS 변수 수정:

```css
:root {
    --primary-color: #2d7a3e;      /* 메인 녹색 */
    --secondary-color: #f39c12;    /* 강조 오렌지 */
    --dark-color: #2c3e50;         /* 다크 네이비 */
    --light-color: #ecf0f1;        /* 밝은 회색 */
}
```

### 내용 수정
`index.html` 파일에서 원하는 텍스트 수정

### 이미지 추가
1. `images/` 폴더에 이미지 업로드
2. HTML에서 `.image-placeholder` 부분을 `<img>` 태그로 교체

예시:
```html
<div class="about-image">
    <img src="images/factory.jpg" alt="공장 전경">
</div>
```

## 📱 반응형 브레이크포인트

- **데스크톱**: 769px 이상
- **태블릿**: 481px - 768px
- **모바일**: 480px 이하

## 🔧 추가 개발 제안

### 백엔드 연동
- PHP/Node.js로 문의 폼 이메일 전송
- 데이터베이스 연동 (제품 관리)

### 추가 기능
- 제품 갤러리 (이미지 슬라이더)
- 다국어 지원 확대 (중국어, 일본어 등)
- 블로그/뉴스 섹션
- 고객 후기 섹션
- 지도 API 연동 (회사 위치)

### SEO 최적화
```html
<!-- index.html <head>에 추가 -->
<meta name="description" content="한국 전통 절임식품 수출입 전문 무역회사">
<meta name="keywords" content="절임무, 김치, 수출, 무역, Korean Pickled Foods">
<meta property="og:title" content="K-Pickles Trade - 한국절임식품 무역">
<meta property="og:description" content="프리미엄 한국 절임식품을 전세계로">
```

## 📄 라이선스

이 프로젝트는 자유롭게 사용 및 수정 가능합니다.

## 📧 문의

프로젝트 관련 문의사항이 있으시면 연락 주세요.

---

**제작일**: 2026년 1월 19일  
**버전**: 1.0.0  
**기술 스택**: HTML5, CSS3, JavaScript (Vanilla)
