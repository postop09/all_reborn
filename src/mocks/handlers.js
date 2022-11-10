import { rest } from "msw";

const contextJson = () => {
  let list = [];
  for (let i = 1; i < 10; i++) {
    const item = {
      id: i,
      img: `icon_home${i}.png`,
      title: `제목${i}`,
      way: `수거방법${i}`,
      recycle: [`${i}`, "캔", "유리", "플라스틱", "가죽"],
      contents: `${i}카드 수거방법 3개의 수거방법 중 등록된 수거 방법 1개만 노출 노출 순서 : 매장수거 -> 택배수거 -> 방문수거 재활용품 기업 대표 사용 재활용품 최대 3개 노출`,
    };
    list = [...list, item];
  }
  return list;
};

const cardSimpleJson = () => {
  let list = [];
  for (let i = 1; i < 11; i++) {
    const item = {
      id: i + 999,
      img: `icon_home${i}.png`,
      name: `이름${i}`,
    };
    list = [...list, item];
  }
  return list;
};

export const handlers = [
  rest.get("/list", (req, res, context) => {
    return res(
      context.status(200),
      context.json({
        data: contextJson(),
        status: 200,
      }),
    );
  }),
  rest.get("/simplelist", (req, res, context) => {
    return res(
      context.status(200),
      context.json({
        data: cardSimpleJson(),
        status: 200,
      }),
    );
  }),
];
