# 'Express.js + TypeScript + Swagger' API 어플리케이션 BoilerPlate

## 구동 방법
+ Prerequsite
  + 필수 전역 모듈 설치
    $ npm install -g typescript ts-node tslint
+ 셋팅
  + $ npm run install
+ 아래 (정리할 것) 참고해서 하기

---

## 참고 정보

+ 아래 샘플코드를 참고하여 만듦
  + https://github.com/vrudikov/typescript-rest-boilerplate


---

(정리할 것)
# TODO
- JWT tokens for security. Use new [security decorator](https://github.com/thiagobustamante/typescript-rest/wiki/@Security-Decorator)
- MongoDB connection example. I have implementation, need to push here

# Initial setup
```
npm install
```

## Swagger Docs Generation

```
npm run swagger
```

# Project run
```
npm start
```

## Start project in cluster
```
npm start:cluster
```

## Test

```
npm run test
```

### Test with coverage reports:

```
npm run test:coverage
```

The coverage report will be saved under ```./reports/coverage``` folder.

